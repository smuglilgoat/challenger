import { Badge } from '@/components/ui/badge';
import { useWeek } from '@/hooks/useWeek';

export function WeekIndicator() {
  const { phase, label } = useWeek();

  const variant = phase === 'pre-season' ? 'secondary' : phase === 'post-season' ? 'outline' : 'default';

  return (
    <Badge variant={variant} className="text-xs">
      {label}
    </Badge>
  );
}
