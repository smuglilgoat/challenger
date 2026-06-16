import { InfoSectionView } from '@/components/InfoSectionView';
import { ranksData } from '@/data/ranks';

export function RanksTab() {
  return <InfoSectionView sections={ranksData} />;
}
