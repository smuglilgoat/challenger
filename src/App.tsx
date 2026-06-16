import { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WeekIndicator } from '@/components/WeekIndicator';
import { ProgressBar } from '@/components/ProgressBar';
import { ProgressionTab } from '@/tabs/ProgressionTab';
import { RanksTab } from '@/tabs/RanksTab';
import { BossesTab } from '@/tabs/BossesTab';
import { BurningTab } from '@/tabs/BurningTab';
import { ItemBurningTab } from '@/tabs/ItemBurningTab';
import { ArcaneSealTab } from '@/tabs/ArcaneSealTab';
import { PassesTab } from '@/tabs/PassesTab';
import { GearTab } from '@/tabs/GearTab';
import { EventsTab } from '@/tabs/EventsTab';
import { useProgress } from '@/hooks/useProgress';
import { useTheme } from '@/hooks/useTheme';
import { progressionData } from '@/data/progression';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TABS = [
  { id: 'progression', label: 'Progression' },
  { id: 'ranks', label: 'Ranks & Rewards' },
  { id: 'bosses', label: 'Bosses' },
  { id: 'burning', label: 'Burning Systems' },
  { id: 'item-burning', label: 'Item Burning' },
  { id: 'arcane-seal', label: 'Arcane Seal' },
  { id: 'passes', label: 'Passes' },
  { id: 'gear', label: 'Gear Guide' },
  { id: 'events', label: 'Events' },
] as const;

type TabId = (typeof TABS)[number]['id'];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('progression');
  const { toggleStep, setNotes, isCompleted, getNotes, resetProgress } = useProgress();
  const { theme, toggleTheme } = useTheme();

  const totalSteps = progressionData.reduce((acc, phase) => {
    let count = 0;
    for (const g of phase.groups) {
      count += g.steps.length;
      for (const s of g.steps) count += s.subSteps?.length ?? 0;
    }
    if (phase.bosses) {
      count += phase.bosses.solo.length + phase.bosses.party.length;
    }
    count += phase.gearing?.length ?? 0;
    return acc + count;
  }, 0);

  const allIds = progressionData.flatMap(phase => {
    const ids: string[] = [];
    for (const g of phase.groups) {
      for (const s of g.steps) {
        ids.push(s.id);
        if (s.subSteps) ids.push(...s.subSteps.map(x => x.id));
      }
    }
    if (phase.bosses) {
      for (const s of phase.bosses.solo) ids.push(s.id);
      for (const s of phase.bosses.party) ids.push(s.id);
    }
    if (phase.gearing) {
      for (const s of phase.gearing) ids.push(s.id);
    }
    return ids;
  });

  const completedTotal = allIds.filter(isCompleted).length;

  const renderTab = () => {
    const props = { isCompleted, getNotes, toggleStep, setNotes };
    switch (activeTab) {
      case 'progression': return <ProgressionTab {...props} />;
      case 'ranks': return <RanksTab />;
      case 'bosses': return <BossesTab />;
      case 'burning': return <BurningTab />;
      case 'item-burning': return <ItemBurningTab />;
      case 'arcane-seal': return <ArcaneSealTab />;
      case 'passes': return <PassesTab />;
      case 'gear': return <GearTab />;
      case 'events': return <EventsTab />;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-bold tracking-tight">CW3 Progression</h1>
                <WeekIndicator />
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:block w-40">
                  <ProgressBar completed={completedTotal} total={totalSteps} label="Overall" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => {
                    if (confirm('Reset all progress? This cannot be undone.')) {
                      resetProgress();
                    }
                  }}
                  title="Reset all progress"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
              </div>
            </div>
          </div>
          <ScrollArea className="w-full border-t">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="flex gap-0.5 py-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </header>

        <main className="container mx-auto max-w-5xl px-4 py-6">
          {renderTab()}
        </main>

        <footer className="border-t py-4 mt-8">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-xs text-muted-foreground text-center">
              MapleStory Challenger World Season 3 Progression Tracker. Data sourced from community guides (Jando, Kobe, Duky) and KMS ver. 1.2.410 patch notes.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

export default App;
