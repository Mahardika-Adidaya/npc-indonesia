import AchievmentSection from '@/components/home/achievement-section';
import ImageSliderHome from '@/components/home/image-slider';
import PartnersSection from '@/components/home/partners-section';
import Player from '@/components/player';
import HeadingText from '@/components/ui/heading-text';

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center mb-[46px] mt-[18px]">
        <Player url={['https://youtu.be/EuiRfzRu17c']} />
      </div>
      <div className="w-[1440px] flex flex-col mt-[46px] mb-[75px] mx-auto px-[50px]">
        <HeadingText>Popular News</HeadingText>
        <ImageSliderHome />
      </div>
      <AchievmentSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;
