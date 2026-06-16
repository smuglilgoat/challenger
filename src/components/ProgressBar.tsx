import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  completed: number;
  total: number;
  label?: string;
}

export function ProgressBar({ completed, total, label }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{label ?? 'Progress'}</span>
        <span>{completed}/{total} ({pct}%)</span>
      </div>
      <Progress value={pct} className="h-2" />
    </div>
  );
}
