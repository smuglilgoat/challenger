import { InfoSectionView } from '@/components/InfoSectionView';
import { itemBurningData } from '@/data/itemBurning';

export function ItemBurningTab() {
  return <InfoSectionView sections={itemBurningData} />;
}
