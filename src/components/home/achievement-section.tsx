import { cn, fontAhrefs400 } from '@/lib/utils';

const AchievmentSection = () => {
  return (
    <div
      style={{ backgroundImage: `url('/bg-achievment-section.png')` }}
      className={cn('w-full font-[400] bg-cover', fontAhrefs400.className)}
    >
      <div className="w-full max-w-[1440px] mx-auto px-[8px] lg:px-[50px] md:px-[30px] py-[24px] md:py-[60px] flex flex-col gap-y-2 md:gap-y-4 xl:gap-y-[70px]">
        <h2 className="text-white font-[400] text-[16px] md:text-[36px]">
          Championship Achievement
        </h2>
        <section className="w-full h-[100px] xl:h-[140px] bg-white px-[10px] xl:px-[92px] flex max-md:flex-col md:flex-row justify-between items-center rounded-[16px] relative">
          <img
            alt="Trophy"
            src="/trophies/trophy-left-one.png"
            className="h-[77px] xl:h-[182px] absolute left-0 bottom-4 md:bottom-3 xl:bottom-0"
          />
          <div className="font-[400] ml-[200px] relative w-full h-full">
            <h3 className="text-[20px] xl:text-[64px] text-hijau-400 xl:absolute xl:-top-3">
              ASEAN
            </h3>
            <span className="xl:bottom-2 bottom-1 absolute">
              <h4 className="text-[14px] md:text-[24px] xl:text-[32px]">
                level achievements
              </h4>
              <h5 className="text-[8px] md:text-[16px] text-hitam-700">
                (2017 - 2023)
              </h5>
            </span>
          </div>
          <div className="flex gap-x-[24px] md:gap-x-[64px] xl:gap-x-[98px] ml-10 ">
            <div>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">459</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Gold Medals
              </h4>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">367</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Silver Medals
              </h4>
            </div>
            <span>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">251</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Bronze Medals
              </h4>
            </span>
          </div>
        </section>
        <section className="w-full h-[100px] xl:h-[140px] bg-white px-[10px] xl:px-[92px] flex max-md:flex-col-reverse md:flex-row justify-between items-center rounded-[16px] relative">
          <div className="flex gap-x-[24px] md:gap-x-[64px] xl:gap-x-[98px] max-md:ml-[40px]">
            <div>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">459</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Gold Medals
              </h4>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">57</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Silver Medals
              </h4>
            </div>
            <span>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">69</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Bronze Medals
              </h4>
            </span>
          </div>
          <div className="font-[400] ml-[200px] relative w-full h-full">
            <h3 className="text-[20px] xl:text-[64px] text-hijau-400 xl:absolute xl:-top-3">
              ASIAN
            </h3>
            <span className="xl:bottom-2 bottom-1 absolute">
              <h4 className="text-[14px] md:text-[24px] xl:text-[32px]">
                level achievements
              </h4>
              <h5 className="text-[8px] md:text-[16px] text-hitam-700">
                (2017 - 2023)
              </h5>
            </span>
          </div>
          <img
            alt="Trophy"
            src="/trophies/trophy-right-one.png"
            className="h-[77px] xl:h-[182px] absolute right-0 bottom-4 md:bottom-3 xl:bottom-0"
          />
        </section>
        <section className="w-full h-[100px] xl:h-[140px] bg-white px-[10px] xl:px-[92px] flex max-md:flex-col md:flex-row justify-between items-center rounded-[16px] relative">
          <img
            alt="Trophy"
            src="/trophies/trophy-left-two.png"
            className="h-[77px] xl:h-[182px] absolute left-0 bottom-4 md:bottom-3 xl:bottom-0"
          />
          <div className="font-[400] ml-[200px] relative w-full h-full">
            <h3 className="text-[20px] xl:text-[64px] text-hijau-400 xl:absolute xl:-top-3">
              WORLD
            </h3>
            <span className="xl:bottom-2 bottom-1 absolute">
              <h4 className="text-[14px] md:text-[24px] xl:text-[32px]">
                level achievements
              </h4>
              <h5 className="text-[8px] md:text-[12px] xl:text-[16px] text-hitam-700">
                (2017 - 2023)
              </h5>
            </span>
          </div>
          <div className="flex gap-x-[24px] md:gap-x-[64px] xl:gap-x-[98px] ml-10 ">
            <div>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">2</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Gold Medals
              </h4>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">3</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Silver Medals
              </h4>
            </div>
            <span>
              <h3 className="text-[20px] md:text-[32px] xl:text-[48px]">5</h3>
              <h4 className="text-[8px] md:text-[12px] xl:text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Bronze Medals
              </h4>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AchievmentSection;
