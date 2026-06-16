import { InfoSectionView } from '@/components/InfoSectionView';
import { bossesData } from '@/data/bosses';

export function BossesTab() {
  return <InfoSectionView sections={bossesData} />;
}
