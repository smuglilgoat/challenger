import { InfoSectionView } from '@/components/InfoSectionView';
import { burningData } from '@/data/burning';

export function BurningTab() {
  return <InfoSectionView sections={burningData} />;
}
