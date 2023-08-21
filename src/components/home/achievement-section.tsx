import { cn, fontAhrefs400 } from '@/lib/utils';

const AchievmentSection = () => {
  return (
    <div
      style={{ backgroundImage: `url('/bg-achievment-section.png')` }}
      className={cn('w-full font-[400] bg-cover', fontAhrefs400.className)}
    >
      <div className="w-full max-w-[1440px] mx-auto px-[50px] py-[60px] flex flex-col gap-y-[70px]">
        <h2 className="text-white font-[400] text-[36px]">
          Championship Achievement
        </h2>
        <section className="w-full h-[140px] bg-white px-[92px] flex justify-between items-center rounded-[16px] relative">
          <img
            alt="Trophy"
            src="/trophies/trophy-left-one.png"
            className="h-[202px] absolute left-0 bottom-0"
          />
          <div className="font-[400] ml-[200px]">
            <h3 className="text-[64px] text-hijau-400">ASEAN</h3>
            <span>
              <h4 className="text-[32px]">level achievements</h4>
              <h5 className="text-[16px] text-hitam-700">(2017 - 2023)</h5>
            </span>
          </div>
          <div className="flex gap-x-[98px]">
            <span>
              <h3 className="text-[48px]">459</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Gold Medals
              </h4>
            </span>
            <span>
              <h3 className="text-[48px]">367</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Silver Medals
              </h4>
            </span>
            <span>
              <h3 className="text-[48px]">251</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Bronze Medals
              </h4>
            </span>
          </div>
        </section>
        <section className="w-full h-[140px] bg-white px-[92px] flex justify-between items-center rounded-[16px] relative">
          <div className="flex gap-x-[98px]">
            <span>
              <h3 className="text-[48px]">46</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Gold Medals
              </h4>
            </span>
            <span>
              <h3 className="text-[48px]">57</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Silver Medals
              </h4>
            </span>
            <span>
              <h3 className="text-[48px]">69</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Bronze Medals
              </h4>
            </span>
          </div>
          <div className="font-[400] mr-[200px]">
            <h3 className="text-[64px] text-hijau-400">ASIAN</h3>
            <span>
              <h4 className="text-[32px]">level achievements</h4>
              <h5 className="text-[16px] text-hitam-700">(2017 - 2023)</h5>
            </span>
          </div>
          <img
            alt="Trophy"
            src="/trophies/trophy-right-one.png"
            className="h-[177px] absolute right-0 bottom-0"
          />
        </section>
        <section className="w-full h-[140px] bg-white px-[92px] flex justify-between items-center rounded-[16px] relative">
          <img
            alt="Trophy"
            src="/trophies/trophy-left-two.png"
            className="h-[182px] absolute left-0 bottom-0"
          />
          <div className="font-[400] ml-[200px]">
            <h3 className="text-[64px] text-hijau-400">WORLD</h3>
            <span>
              <h4 className="text-[32px]">level achievements</h4>
              <h5 className="text-[16px] text-hitam-700">(2017 - 2023)</h5>
            </span>
          </div>
          <div className="flex gap-x-[98px]">
            <span>
              <h3 className="text-[48px]">2</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Gold Medals
              </h4>
            </span>
            <span>
              <h3 className="text-[48px]">3</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
                Silver Medals
              </h4>
            </span>
            <span>
              <h3 className="text-[48px]">5</h3>
              <h4 className="text-[16px] font-[700] font-helveticaNeue text-hitam-700">
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
