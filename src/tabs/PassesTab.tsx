import { InfoSectionView } from '@/components/InfoSectionView';
import { passesData } from '@/data/passes';

export function PassesTab() {
  return <InfoSectionView sections={passesData} />;
}
