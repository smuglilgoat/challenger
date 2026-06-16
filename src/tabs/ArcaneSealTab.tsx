import { InfoSectionView } from '@/components/InfoSectionView';
import { arcaneSealData } from '@/data/arcaneSeal';

export function ArcaneSealTab() {
  return <InfoSectionView sections={arcaneSealData} />;
}
