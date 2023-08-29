import AchievmentSection from '@/components/home/achievement-section';
import ImageSliderHome from '@/components/home/image-slider';
import PartnersSection from '@/components/home/partners-section';
import Player from '@/components/player';
import HeadingText from '@/components/ui/heading-text';

const Home = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex justify-center mb-[46px] mt-[18px]">
        <Player url={['https://youtu.be/EuiRfzRu17c']} />
      </div>
      <div className="w-[1440px] flex flex-col mt-[46px] mb-[75px] mx-auto px-[8px] lg:px-[50px] md:px-[30px]">
        <HeadingText>Popular News</HeadingText>
        <ImageSliderHome />
      </div>
      <AchievmentSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
