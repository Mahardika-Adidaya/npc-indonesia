import AchievmentSection from '@/components/home/achievement-section';
import PartnersSection from '@/components/home/partners-section';
import Player from '@/components/player';

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center mb-[46px] mt-[18px]">
        <Player url={['https://youtu.be/EuiRfzRu17c']} />
      </div>
      <AchievmentSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;
