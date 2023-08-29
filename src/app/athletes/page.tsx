'use client';

import AthletesSection from '@/components/athletes/section';
import HeadingText from '@/components/ui/heading-text';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { sportCategory } from '@/constants';
import { useGetAthletes } from '@/hooks/fetch/useGetAthletes';
import RenderIf from '@/lib/render-if';
import { convertToSlug } from '@/lib/utils';

const AthletesPage = () => {
  const { data: dataGetAthletes, isLoading: isLoadingGetAthletes } =
    useGetAthletes();

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-[29px] md:py-[56px] md:px-[30px] xl:py-[86px] px-[8px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col space-y-[38px] xl:space-y-[60px]">
        <div className="w-full justify-between md:items-center flex flex-row max-md:flex-col">
          <HeadingText>Paralympic Athlets</HeadingText>
          <Select>
            <SelectTrigger className="w-fit md:w-[245px] xl:w-[345px] lg:px-5 lg:py-4 px-3 py-1 rounded-[8px] lg:text-[24px] max-md:text-[10px]">
              <SelectValue placeholder="Select Athlet Category" />
            </SelectTrigger>
            <SelectContent>
              {sportCategory.map(category => {
                return (
                  <SelectItem value={convertToSlug(category)} key={category}>
                    {category}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-[56px]">
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Archery"
              datas={dataGetAthletes?.paraArchery}
            />
          </RenderIf>
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Badminton"
              datas={dataGetAthletes?.paraBadminton}
            />
          </RenderIf>
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Cycling"
              datas={dataGetAthletes?.paraCycling}
            />
          </RenderIf>
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Powerlifting"
              datas={dataGetAthletes?.paraPowerlifting}
            />
          </RenderIf>
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Shooting"
              datas={dataGetAthletes?.paraShooting}
            />
          </RenderIf>
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Swimming"
              datas={dataGetAthletes?.paraSwimming}
            />
          </RenderIf>
          <RenderIf isTrue={!isLoadingGetAthletes}>
            <AthletesSection
              category="Para Tenis Meja"
              datas={dataGetAthletes?.paraTenisMeja}
            />
          </RenderIf>
        </div>
      </div>
    </div>
  );
};

export default AthletesPage;
