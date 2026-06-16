import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronRight, AlertTriangle, Lightbulb } from 'lucide-react';
import { NotesDialog } from './NotesDialog';
import type { Step } from '@/data/types';

interface StepItemProps {
  step: Step;
  isCompleted: (id: string) => boolean;
  getNotes: (id: string) => string;
  toggleStep: (id: string) => void;
  setNotes: (id: string, notes: string) => void;
  depth?: number;
}

export function StepItem({ step, isCompleted, getNotes, toggleStep, setNotes, depth = 0 }: StepItemProps) {
  const [expanded, setExpanded] = useState(false);
  const completed = isCompleted(step.id);
  const notes = getNotes(step.id);
  const hasDetails = step.details || step.tips?.length || step.warnings?.length || step.subSteps?.length;

  return (
    <div className={`${depth > 0 ? 'ml-6 border-l border-border/50 pl-3' : ''}`}>
      <div className="flex items-start gap-2 py-1.5 group">
        <Checkbox
          checked={completed}
          onCheckedChange={() => toggleStep(step.id)}
          className="mt-0.5 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-1">
            {hasDetails && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-0.5 p-0.5 rounded hover:bg-accent shrink-0"
              >
                {expanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
              </button>
            )}
            <span className={`text-sm leading-relaxed ${completed ? 'line-through text-muted-foreground' : ''}`}>
              {step.text}
            </span>
            <NotesDialog stepId={step.id} stepText={step.text} notes={notes} onSave={setNotes} />
          </div>
          {notes && (
            <p className="text-xs text-muted-foreground mt-0.5 italic pl-5">
              {notes}
            </p>
          )}
          {expanded && hasDetails && (
            <div className="mt-1.5 pl-5 space-y-1.5">
              {step.details && (
                <p className="text-xs text-muted-foreground">{step.details}</p>
              )}
              {step.tips?.map((tip, i) => (
                <div key={i} className="flex items-start gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                  <Lightbulb className="h-3 w-3 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
              {step.warnings?.map((warn, i) => (
                <div key={i} className="flex items-start gap-1.5 text-xs text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
                  <span>{warn}</span>
                </div>
              ))}
              {step.subSteps?.map((sub) => (
                <StepItem
                  key={sub.id}
                  step={sub}
                  isCompleted={isCompleted}
                  getNotes={getNotes}
                  toggleStep={toggleStep}
                  setNotes={setNotes}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
