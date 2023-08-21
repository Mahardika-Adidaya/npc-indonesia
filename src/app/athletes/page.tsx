'use client';

import AthletesSection from '@/components/athletes/section';
import HeadingText from '@/components/ui/heading-text';
import { useGetAthletes } from '@/hooks/fetch/useGetAthletes';
import RenderIf from '@/lib/render-if';

const AthletesPage = () => {
  const { data: dataGetAthletes, isLoading: isLoadingGetAthletes } =
    useGetAthletes();

  return (
    <div className="w-full bg-white">
      <div className="py-[86px] px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
        <HeadingText text="Paralympic Athlets" />
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
