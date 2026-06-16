import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { StepItem } from '@/components/StepItem';
import { ProgressBar } from '@/components/ProgressBar';
import { progressionData } from '@/data/progression';
import { useWeek } from '@/hooks/useWeek';
import type { Phase } from '@/data/types';

interface ProgressionTabProps {
  isCompleted: (id: string) => boolean;
  getNotes: (id: string) => string;
  toggleStep: (id: string) => void;
  setNotes: (id: string, notes: string) => void;
}

function getAllStepIds(phase: Phase): string[] {
  const ids: string[] = [];
  for (const group of phase.groups) {
    for (const step of group.steps) {
      ids.push(step.id);
      if (step.subSteps) ids.push(...step.subSteps.map(s => s.id));
    }
  }
  if (phase.bosses) {
    for (const s of phase.bosses.solo) {
      ids.push(s.id);
      if (s.subSteps) ids.push(...s.subSteps.map(x => x.id));
    }
    for (const s of phase.bosses.party) {
      ids.push(s.id);
      if (s.subSteps) ids.push(...s.subSteps.map(x => x.id));
    }
  }
  if (phase.gearing) {
    for (const s of phase.gearing) {
      ids.push(s.id);
      if (s.subSteps) ids.push(...s.subSteps.map(x => x.id));
    }
  }
  return ids;
}

export function ProgressionTab({ isCompleted, getNotes, toggleStep, setNotes }: ProgressionTabProps) {
  const { phase: currentPhase, week: currentWeek } = useWeek();
  const [activePhase, setActivePhase] = useState(() => {
    if (currentPhase === 'day0') return 'day0';
    if (currentPhase === 'day1') return 'day1';
    if (currentPhase === 'week') return `week${currentWeek}`;
    return 'day0';
  });

  const activeData = progressionData.find(p => p.id === activePhase) ?? progressionData[0];
  const allIds = useMemo(() => getAllStepIds(activeData), [activeData]);
  const completedCount = allIds.filter(isCompleted).length;

  return (
    <div className="space-y-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-1.5 p-1">
          {progressionData.map((phase) => {
            const isActive = phase.id === activePhase;
            const isCurrent =
              (currentPhase === 'day0' && phase.id === 'day0') ||
              (currentPhase === 'day1' && phase.id === 'day1') ||
              (currentPhase === 'week' && phase.id === `week${currentWeek}`);

            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors shrink-0 ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {phase.title}
                {isCurrent && !isActive && (
                  <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">{activeData.title}</h2>
          {activeData.targetLevel && (
            <Badge variant="outline" className="text-xs">Target: Lv {activeData.targetLevel}</Badge>
          )}
        </div>
        {activeData.subtitle && (
          <p className="text-sm text-muted-foreground">{activeData.subtitle}</p>
        )}
        <ProgressBar completed={completedCount} total={allIds.length} label={`${activeData.title} Progress`} />
      </div>

      <Separator />

      {activeData.groups.map((group) => (
        <Card key={group.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{group.title}</CardTitle>
            {group.description && (
              <p className="text-xs text-muted-foreground">{group.description}</p>
            )}
          </CardHeader>
          <CardContent className="space-y-0.5">
            {group.steps.map((step) => (
              <StepItem
                key={step.id}
                step={step}
                isCompleted={isCompleted}
                getNotes={getNotes}
                toggleStep={toggleStep}
                setNotes={setNotes}
              />
            ))}
          </CardContent>
        </Card>
      ))}

      {activeData.bosses && (activeData.bosses.solo.length > 0 || activeData.bosses.party.length > 0) && (
        <div className="grid gap-4 md:grid-cols-2">
          {activeData.bosses.solo.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Badge variant="destructive" className="text-xs">Solo</Badge>
                  Bosses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0.5">
                {activeData.bosses.solo.map((step) => (
                  <StepItem
                    key={step.id}
                    step={step}
                    isCompleted={isCompleted}
                    getNotes={getNotes}
                    toggleStep={toggleStep}
                    setNotes={setNotes}
                  />
                ))}
              </CardContent>
            </Card>
          )}
          {activeData.bosses.party.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Party</Badge>
                  Bosses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0.5">
                {activeData.bosses.party.map((step) => (
                  <StepItem
                    key={step.id}
                    step={step}
                    isCompleted={isCompleted}
                    getNotes={getNotes}
                    toggleStep={toggleStep}
                    setNotes={setNotes}
                  />
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {activeData.gearing && activeData.gearing.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Gearing Upgrades</CardTitle>
          </CardHeader>
          <CardContent className="space-y-0.5">
            {activeData.gearing.map((step) => (
              <StepItem
                key={step.id}
                step={step}
                isCompleted={isCompleted}
                getNotes={getNotes}
                toggleStep={toggleStep}
                setNotes={setNotes}
              />
            ))}
          </CardContent>
        </Card>
      )}

      {activeData.milestones && activeData.milestones.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Milestones & Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5">
              {activeData.milestones.map((m, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
