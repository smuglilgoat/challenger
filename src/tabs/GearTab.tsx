import { InfoSectionView } from '@/components/InfoSectionView';
import { gearData } from '@/data/gear';

export function GearTab() {
  return <InfoSectionView sections={gearData} />;
}
