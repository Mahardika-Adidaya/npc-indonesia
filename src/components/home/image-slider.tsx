import CardImageSlider from '@/components/news/card-image-slider';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const ImageSliderHome = () => {
  return (
    <div className="w-full flex flex-col gap-y-[16px] mx-auto">
      <section
        className="w-full h-[233px] md:h-[422px] xl:h-[598px] bg-cover rounded-[20px] relative overflow-hidden"
        style={{ backgroundImage: "url('/dummy/banner-one.png')" }}
      >
        <div
          className="w-1/3 absolute left-0 h-full rounded-[20px]"
          style={{
            background:
              'linear-gradient(90deg, #000 52.72%, rgba(0, 0, 0, 0.76) 73.60%, rgba(0, 0, 0, 0.44) 88.01%, rgba(0, 0, 0, 0.00) 100%)'
          }}
        />
        <div
          className="absolute z-10 bottom-0 w-full h-1/3"
          style={{
            background:
              ' linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'
          }}
        />
        <div className="absolute bottom-[24px] z-40 p-[8px] md:p-[28px] xl:p-[52px] lg:py-[30px] text-white">
          <div className="w-full xl:w-[443px] flex flex-col md:gap-3 xl:gap-y-[20px]">
            <h1 className="text-[14px] md:text-[24px] xl:text-[36px] font-[700]">
              President Jokowi Honors Paralympic Athletes at State Palace for
              Remarkable Achievements
            </h1>
            <div className="text-[8px] xl:text-[16px] flex gap-x-[8px] items-center">
              <h4 className="font-[400] text-white">9 August 2023</h4>
              <span className="w-[6px] h-[6px] rounded-full bg-white" />
              <h4 className="font-[500] text-white">General News</h4>
            </div>
            <div className="hidden xl:block">
              <h3>Related Content</h3>
              <h4>Para Championships open with spectacular celebration</h4>
              <h4>Para Championships open with spectacular celebration</h4>
              <h4>Para Championships open with spectacular celebration</h4>
            </div>
          </div>
          <div className="w-full flex mt-[20px] md:mt-[35px] xl:mt-[80px] space-x-3 xl:space-x-[45px]">
            <div className="w-fit flex flex-col gap-y-[8px]">
              <Progress
                className="h-[2px] w-[58px] xl:w-[212px] xl:h-[10px]"
                value={33}
              />
              <h5
                className={cn(
                  'text-[14px] font-[400] text-hitam-300 hidden xl:block',
                  {
                    active: 'text-white'
                  }
                )}
              >
                Day one to crown 26 new world champions
              </h5>
            </div>
            <div className="w-fit flex flex-col gap-y-[8px]">
              <Progress
                className="h-[2px] w-[58px] xl:w-[212px] xl:h-[10px]"
                value={33}
              />
              <h5
                className={cn(
                  'text-[14px] font-[400] text-hitam-300 hidden xl:block',
                  {
                    active: 'text-white'
                  }
                )}
              >
                Day one to crown 26 new world champions
              </h5>
            </div>
            <div className="w-fit flex flex-col gap-y-[8px]">
              <Progress
                className="h-[2px] w-[58px] xl:w-[212px] xl:h-[10px]"
                value={33}
              />
              <h5
                className={cn(
                  'text-[14px] font-[400] text-hitam-300 hidden xl:block',
                  {
                    active: 'text-white'
                  }
                )}
              >
                Day one to crown 26 new world champions
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-between">
        <CardImageSlider />
        <CardImageSlider />
        <CardImageSlider />
        <CardImageSlider />
      </section>
    </div>
  );
};

export default ImageSliderHome;
