import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';

import { cn, fontAhrefs400 } from '@/lib/utils';

const DetailAthletePage = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-[86px] px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="flex justify-between w-full">
          <div className="flex gap-x-[24px]">
            <Image
              src="/athletes/para-badminton/qonitah-ikhtiar-syakuroh.jpg"
              height={294}
              width={294}
              alt="Athlete"
              className="rounded-full h-[294px] w-[294px] bg-cover outline outline-hitam-50"
            />
            <div className="max-w-[361px]">
              <h1
                className={cn(
                  'text-[64px] font-[400]',
                  fontAhrefs400.className
                )}
              >
                Leani Ratri Oktila
              </h1>
              <span className="text-[24px] font-[500] text-hitam-400 flex gap-x-[16px] items-center">
                <FaLocationDot />
                Bangkinang, Riau, Indonesia
              </span>
              <span className="bg-biru-900 w-fit flex px-[20px] text-[20px] py-[12px] rounded-[12px] text-white mt-[32px]">
                Para Badminton
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[12px]">
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-[502px]">
              Medals
              <div className="flex items-center gap-x-[36px] w-2/3">
                <div className="w-[40px] text-[12px] h-[40px] rounded-full bg-[#FFD700] flex items-center justify-center">
                  100
                </div>
                <div className="w-[40px] h-[40px] text-[12px] rounded-full bg-[#C0C0C0] flex items-center justify-center">
                  100
                </div>
                <div className="w-[40px] h-[40px] text-[12px] rounded-full bg-[#CD7F32] flex items-center justify-center">
                  100
                </div>
              </div>
            </div>
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-[502px]">
              Date of Birth
              <div
                className={cn(
                  'w-2/3 font-[400] text-[20px]',
                  fontAhrefs400.className
                )}
              >
                1991
              </div>
            </div>
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-[502px]">
              Debute
              <div
                className={cn(
                  'w-2/3 font-[400] text-[20px]',
                  fontAhrefs400.className
                )}
              >
                2014 : Asian Para Games Incheon Korea
              </div>
            </div>
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-[502px]">
              Class
              <div
                className={cn(
                  'w-2/3 font-[400] text-[20px]',
                  fontAhrefs400.className
                )}
              >
                WS SL4, XD SL3-SU5
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-[64px] mt-[91px]">
          <h2 className={cn(fontAhrefs400.className, 'text-[36px]')}>
            Biography
          </h2>
          <p className="pr-[120px] text-justify text-[24px]">
            Initially, Leani played badminton as a regular athlete from the age
            of 8, competing in national-level tournaments since 1999. However,
            in 2011, Leani had a motorcycle accident which resulted in a broken
            leg and left hand. Her left leg became seven centimeters shorter
            than her right leg. Consequently, Leani transitioned to the
            disability category. Just within two years after the accident, she
            joined the national para-badminton team. Leani earned her
            bachelor&apos;s degree in Sports Science from the University of
            Riau, Pekanbaru. Subsequently, she pursued her Master&apos;s in
            Indonesian Language Education at the Veteran Bangun Nusantara
            University, Sukoharjo. Since joining the national team in 2013,
            Leani has clinched victories in various international competitions.
            Within a year of joining the team, she secured three medals in the
            2014 Asian Para Games. She won a bronze in the women&apos;s singles,
            a silver partnering with Khalimatus Sadiyah in women&apos;s doubles,
            and a gold with Fredy Setiawan in mixed doubles. A year later, she
            swept the gold medals in all three events she participated in at the
            2015 ASEAN Para Games. In the 2017 ASEAN Para Games, she repeated
            this feat, this time with a different partner in the mixed doubles,
            Hary Susanto. In the same year, Leani participated in her first
            World Championships. In that championship, she achieved the title of
            World Champion in mixed doubles alongside Hary Susanto. Not only
            that, she also secured a silver in women&apos;s singles and a bronze
            in women&apos;s doubles. In 2018, Leani seized two gold medals in
            mixed doubles and women&apos;s doubles at the 2018 Asian Para Games
            held in Jakarta. However, in the women&apos;s singles category, she
            secured a silver after losing to Cheng Hefang in a three-set final.
            In the 2019 World Championships in Basel, she successfully defended
            her world champion title in mixed doubles. She also claimed the
            world champion title in women&apos;s singles. Additionally,
            alongside Sadiyah, she earned a silver medal after previously
            winning a bronze in the World Championships. For her achievements
            from 2018 to 2019, she was crowned the Best Female Para-Badminton
            Player by BWF in consecutive years. She also won the Indonesian
            Sport Awards 2018 in the Favorite Disabled Female Pair Athlete
            category alongside Khalimatus Sadiyah. In 2021, she secured
            Indonesia&apos;s first gold medals in para-badminton at the 2020
            Summer Paralympics in the women&apos;s doubles SL3-SU5 category with
            Khalimatus Sadiyah, as well as in the mixed doubles SL3-SU5 category
            with Hary Susanto. Leani also clinched a silver medal in the
            women&apos;s singles after a three-set loss to Cheng Hefang in the
            final match.
          </p>
        </div>
        <div className="flex gap-x-[123px] mt-[91px]">
          <h2 className={cn(fontAhrefs400.className, 'text-[36px] w-[227px]')}>
            Result
          </h2>
          <p className="pr-[120px] text-justify text-[24px]">
            Initially, Leani played badminton as a regular athlete from the age
            Silver Medal 4 Nations Para Badminton International 2023 WD - SL 3 -
            SU 5 Gold Medal 4 Nations Para Badminton International 2023 XD - SL
            3 - SU 5 Silver Medal Canada Para Badminton International 2023 WD -
            SL 3 - SU 5 Gold Medal Canada Para Badminton International 2023 XD -
            SL 3 - SU 5 Gold Medal Bahrain Para Badminton International 2023 WD
            - SL 3 - SU 5 Gold Medal Bahrain Para Badminton International 2023
            XD - SL 3 - SU 5 Silver Medal Bahrain Para Badminton International
            2023 WS - SL 4 Silver Medal Thailand Para Badminton International
            2023 WD - SL 3 - SU 5 Gold Medal Thailand Para Badminton
            International 2023 XD - SL 3 - SU 5 Silver Medal Thailand Para
            Badminton International 2023 WS - SL 4 Gold Medal Brazil Para
            Badminton International 2023 XD - SL 3 - SU 5 Gold Medal Brazil Para
            Badminton International 2023 WS - SL 4 Gold Medal Spanish Para
            Badminton International 2023 WD - SL 3 - SU 5 Gold Medal Spanish
            Para Badminton International 2023 XD - SL 3 - SU 5 Gold Medal
            Spanish Para Badminton International 2023 WS - SL 4 Gold Medal HULIC
            DAIHATSU BWF Para Badminton World Championships 2022 WD - SL 3 - SU
            5 Gold Medal Sheikh Hamdan bin Rashid Al Maktoum 3rd Dubai Para
            Badminton International 2021 WS SL4 Gold Medal Sheikh Hamdan bin
            Rashid Al Maktoum 3rd Dubai Para Badminton International 2021 WD SL3
            - SU5 Silver Medal Sheikh Hamdan bin Rashid Al Maktoum 3rd Dubai
            Para Badminton International 2021 XD SL3 - SU5 Silver Medal Brazil
            Para Badminton International 2020 WS - SL 4 Gold Medal Brazil Para
            Badminton International 2020 WD - SL 3 - SU 5 Gold Medal Brazil Para
            Badminton International 2020 XD - SL 3 - SU 5 Silver Medal TOTAL BWF
            Para-Badminton World Championships 2019 WD SL 3- SU 5 Gold Medal
            TOTAL BWF Para-Badminton World Championships 2019 WS SL 4 Gold Medal
            TOTAL BWF Para-Badminton World Championships 2019 XD SL 3- SU 5 Gold
            Medal FZ Forza Irish Para-Badminton International 2019 WS SL 4 Gold
            Medal FZ Forza Irish Para-Badminton International 2019 WD SL 3 - SU
            5 Gold Medal FZ Forza Irish Para-Badminton International 2019 XD SL
            3 - SU 5 Gold Medal YONEX Canada Para-Badminton International 2019
            WS SL4 Gold Medal YONEX Canada Para-Badminton International 2019 WD
            SL3-SU5 Gold Medal YONEX Canada Para-Badminton International 2019 XD
            SL3-SU5 Gold Medal 2nd Fazza- Dubai Para-Badminton International
            2019 WD SL 3 - SU 5 Silver Medal 2nd Fazza- Dubai Para-Badminton
            International 2019 WS SL 4 Gold Medal 2nd Fazza- Dubai
            Para-Badminton International 2019 XD SL 3 - SU 5 Gold Medal 5th
            Turkish Para-Badminton International - ENESCUP 2019 WS SL 4 Gold
            Medal 5th Turkish Para-Badminton International - ENESCUP 2019 XD SL
            3 - SU 5 Gold Medal Australia Para-Badminton International 2018 WD
            SL 3 - SU 5 Gold Medal Australia Para-Badminton International 2018
            XD SL 3 - SU 5 Gold Medal Australia Para-Badminton International
            2018 WS SL 4 + SU 5 Silver Medal Asian Para Games 2018 WS SL 4 Gold
            Medal Asian Para Games 2018 WD SL 3 - SU 5 Gold Medal Asian Para
            Games 2018 XD SL 3 - SU 5 Gold Medal Thailand Para-Badminton
            International 2018 WS SL 4 Gold Medal Thailand Para-Badminton
            International 2018 WD SL 3 - SU 5 Gold Medal Thailand Para-Badminton
            International 2018 XD SL 3 - SU 5 Gold Medal FZ Forza Irish
            Para-Badminton International 2018 WS SL4 Gold Medal FZ Forza Irish
            Para-Badminton International 2018 WD SL3 - SU5 Gold Medal FZ Forza
            Irish Para-Badminton International 2018 XD SL3 - SU5 Gold Medal 1st
            Fazza - Dubai Para-Badminton International 2018 WS SL4 + SU5 Gold
            Medal 1st Fazza - Dubai Para-Badminton International 2018 WD SL3 -
            SU5 Gold Medal 1st Fazza - Dubai Para-Badminton International 2018
            XD SL3 - SU5
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailAthletePage;
