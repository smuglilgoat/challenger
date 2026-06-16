import { InfoSectionView } from '@/components/InfoSectionView';
import { eventsData } from '@/data/events';

export function EventsTab() {
  return <InfoSectionView sections={eventsData} />;
}
