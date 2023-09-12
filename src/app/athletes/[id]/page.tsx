'use client';

import moment from 'moment';
import { useParams } from 'next/navigation';
import { FaLocationDot } from 'react-icons/fa6';

import { useGetAthleteById } from '@/hooks/fetch/athletes/useGetAthleteById';
import { cn, fontAhrefs400 } from '@/lib/utils';

const DetailAthletePage = () => {
  const { id } = useParams();

  const { data: dataGetAthleteById, isLoading: isLoadingGetAthleteById } =
    useGetAthleteById(id);

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-[29px] md:py-[56px] md:px-[30px] xl:py-[86px] px-[8px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="flex w-full flex-col xl:flex-row max-lg:gap-y-[18px] xl:justify-between">
          <div className="flex gap-x-[24px]">
            <img
              src={
                process.env.NEXT_PUBLIC_API_IMAGE + dataGetAthleteById?.image
              }
              alt="Athlete"
              className="rounded-full h-[128px] w-[128px] md:h-[168px] md:w-[168px] xl:h-[294px] xl:w-[294px] bg-cover outline outline-hitam-50"
            />
            <div className="max-w-[361px]">
              <h1
                className={cn(
                  'text-[28px] md:text-[42px] leading-[60px] xl:text-[64px] font-[400]',
                  fontAhrefs400.className
                )}
              >
                {dataGetAthleteById?.atheletes_name}
              </h1>
              <span className="text-[10px] md:text-[16px] xl:text-[24px] font-[500] text-hitam-400 flex gap-x-[16px] items-center xl:mt-[14px]">
                <FaLocationDot />
                {dataGetAthleteById?.atheletes_regional}
              </span>
              <span className="bg-biru-900 w-fit flex px-[12px] xl:px-[20px] text-[10px] md:text-[12px] xl:text-[20px] py-1 xl:py-[12px] rounded-[12px] text-white mt-[12px] xl:mt-[32px]">
                {dataGetAthleteById?.paralympic_sport?.name_sport}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[12px]">
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-full xl:w-[502px]">
              Medals
              <div className="flex items-center gap-x-[36px] w-2/3">
                <div className="w-[40px] text-[12px] h-[40px] rounded-full bg-[#FFD700] flex items-center justify-center pt-[2px]">
                  {dataGetAthleteById?.gold_medal ?? '0'}
                </div>
                <div className="w-[40px] h-[40px] text-[12px] rounded-full bg-[#C0C0C0] flex items-center justify-center pt-[2px]">
                  {dataGetAthleteById?.silver_medal ?? '0'}
                </div>
                <div className="w-[40px] h-[40px] text-[12px] rounded-full bg-[#CD7F32] flex items-center justify-center pt-[2px]">
                  {dataGetAthleteById?.bronze_medal ?? '0'}
                </div>
              </div>
            </div>
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-full xl:w-[502px]">
              Date of Birth
              <div
                className={cn(
                  'w-2/3 font-[400] text-[20px]',
                  fontAhrefs400.className
                )}
              >
                {moment(dataGetAthleteById?.atheletes_birthdate).format(
                  'DD MMM YYYY'
                )}
              </div>
            </div>
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-full xl:w-[502px]">
              Debute
              <div
                className={cn(
                  'w-2/3 font-[400] text-[20px]',
                  fontAhrefs400.className
                )}
              >
                {dataGetAthleteById?.atheletes_debute}
              </div>
            </div>
            <div className="px-[20px] font-[400] text-[16px] py-[10px] items-center border-2 border-hitam-100 flex justify-between w-full xl:w-[502px]">
              Class
              <div
                className={cn(
                  'w-2/3 font-[400] text-[20px]',
                  fontAhrefs400.className
                )}
              >
                {dataGetAthleteById?.atheletes_class}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 xl:flex-row gap-x-[64px] mt-[32px] xl:mt-[91px]">
          <h2
            className={cn(
              fontAhrefs400.className,
              'text-[20px] md:text-[28px] xl:text-[36px]'
            )}
          >
            Biography
          </h2>
          <p
            className="xl:pr-[120px] text-justify text-[12px] md:text-[18px] xl:text-[24px]"
            dangerouslySetInnerHTML={{
              __html: dataGetAthleteById?.atheletes_biography
            }}
          ></p>
        </div>
        <div className="flex flex-col gap-y-5 xl:flex-row gap-x-[64px] mt-[32px] xl:mt-[91px]">
          <h2
            className={cn(
              fontAhrefs400.className,
              'text-[20px] md:text-[28px] xl:text-[36px]'
            )}
          >
            Result
          </h2>
          <p className="xl:pr-[120px] text-justify text-[12px] md:text-[18px] xl:text-[24px]">
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
