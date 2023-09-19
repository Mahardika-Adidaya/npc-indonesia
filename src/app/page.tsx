import AchievmentSection from '@/components/home/achievement-section';
import ImageSliderHome from '@/components/home/image-slider';
import PartnersSection from '@/components/home/partners-section';
import Player from '@/components/player';
import HeadingText from '@/components/ui/heading-text';

const Home = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex justify-center mb-[26px] md:mb-[46px] mt-[18px] px-2 md:px-[30px] xl:px-[50px] w-full max-w-[1440px] mx-auto">
        <Player url={['https://youtu.be/EuiRfzRu17c']} />
      </div>
      <div className="m-full max-w-[1440px] flex flex-col  md:mt-[34px] xl:mt-[46px] mb-[26px] md:mb-[75px] mx-auto px-[8px] lg:px-[50px] md:px-[30px]">
        <HeadingText>Popular News</HeadingText>
        <ImageSliderHome />
      </div>
      <AchievmentSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
