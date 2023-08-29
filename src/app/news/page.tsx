import ImageSlider from '@/components/news/image-slider';
import SportCardTwo from '@/components/sport/card-two';

const NewsPage = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-[29px] xl:py-[86px] gap-y-[40px] xl:gap-y-[60px] px-[8px] xl:px-[51px] w-full max-w-[1440px] mx-auto flex flex-col">
        <ImageSlider />
        <section>
          <h2 className="text-[20px] xl:text-[38px] font-[700]">
            Top Trending News
          </h2>
          <h3 className="text-[10px] xl:text-[16px] font-[400] mb-[30px]">
            The most popular news you should know to keep up with the latest
            news
          </h3>
          <div className="flex overflow-scroll gap-x-[30px] scrollbar-hide">
            <SportCardTwo link="news/jokowi" />
            <SportCardTwo link="news/jokowi" />
            <SportCardTwo link="news/jokowi" />
          </div>
        </section>
        <section>
          <h2 className="text-[20px] xl:text-[38px] font-[700]">
            Top Trending News
          </h2>
          <h3 className="text-[10px] xl:text-[16px] font-[400] mb-[30px]">
            The most popular news you should know to keep up with the latest
            news
          </h3>
          <div className="flex overflow-scroll gap-x-[30px] scrollbar-hide">
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
