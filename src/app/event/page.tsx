'use client';

import dynamic from 'next/dynamic';

import CardEvent from '@/components/event/card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeadingText from '@/components/ui/heading-text';
import { Input } from '@/components/ui/input';
import { useGetEvents } from '@/hooks/fetch/useGetEvents';
import RenderIf from '@/lib/render-if';
import { cn, fontAhrefs400 } from '@/lib/utils';

const EventCountdown = dynamic(() => import('@/components/event/countdown'), {
  ssr: false
});

const EventPage = () => {
  const { data: dataEvents, isLoading: isLoadingEvents } = useGetEvents();

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-3 xl:py-[20px] flex-col xl:flex-row items-center flex gap-x-[60px] justify-center border-b border-b-hitam-200">
        <div className="flex gap-x-[8px] items-center">
          <h3 className="font-[500] text-[10px] xl:text-[19px]">
            Asian Para Games Hangzhou 2023
          </h3>
          <h3 className="font-[500] xl:text-[19px] text-[10px]">-</h3>
          <h3 className="text-[10px] xl:text-[14px] font-[400]">
            22 - 28 October, 2023
          </h3>
        </div>
        <EventCountdown />
      </div>
      <div className="py-[10px] xl:py-[60px] px-[8px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col gap-y-[60px]">
        <section>
          <HeadingText>Recent Event</HeadingText>
          <div className="w-full grid-row-1 xl:grid grid-cols-3 space-y-[20px]">
            <RenderIf isTrue={!isLoadingEvents}>
              {dataEvents?.recent.map((data: any) => {
                return (
                  <CardEvent
                    key={data?.id}
                    variant="hijau"
                    image={data?.image}
                    title={data?.name}
                    subtitle={data?.place}
                    closing={data?.closing}
                    opening={data?.opening}
                  />
                );
              })}
            </RenderIf>
          </div>
        </section>
        <section>
          <HeadingText>Next Event</HeadingText>
          <div className="w-full grid-row-1 xl:grid grid-cols-3 space-y-[20px]">
            <RenderIf isTrue={!isLoadingEvents}>
              {dataEvents?.next.map((data: any) => {
                return (
                  <CardEvent
                    key={data?.id}
                    variant="biru"
                    image={data?.image}
                    title={data?.name}
                    subtitle={data?.place}
                    closing={data?.closing}
                    opening={data?.opening}
                  />
                );
              })}
            </RenderIf>
          </div>
        </section>
        <section>
          <HeadingText>All Paralympic Event</HeadingText>
          <div className="w-full h-[52px] flex flex-col xl:flex-row gap-y-3 justify-between">
            <div className="flex items-center gap-x-2">
              <h3 className="text-[12px] xl:text-[16px] font-[500]">Filter</h3>
              <Input placeholder="Year..." className="w-[90px] xl:w-[117px]" />
              <div className="w-[15px] xl:w-[24px] rounded-full h-[2px] bg-hitam-100" />
              <Input placeholder="Year..." className="w-[90px] xl:w-[117px]" />
              <Button className="bg-biru-900 px-[26px] xl:px-[38px]">
                Apply
              </Button>
            </div>
            <Input placeholder="Search event name..." className="w-[453px] " />
          </div>
          <div className="w-[1284px] mx-auto flex mt-[24px] xl:mt-[52px]">
            <span>
              <h2
                className={cn(
                  'text-[64px] font-[400]',
                  fontAhrefs400.className
                )}
              >
                2014
              </h2>
              <h2
                className={cn(
                  'text-[40px] font-[400]',
                  fontAhrefs400.className
                )}
              >
                Event
              </h2>
            </span>
            <div className="w-full flex flex-col gap-y-[14px]">
              <Card className="w-full flex items-center px-[46px] py-[21px] gap-x-[36px]">
                <img
                  src="/dummy/events/event-logo-one.png"
                  className="h-[111px]"
                />
                <section className="flex flex-col gap-y-2">
                  <span className="px-[16px] py-[8px] bg-hijau-400 rounded-full w-fit text-[16px] font-[700] text-white">
                    7 October
                  </span>
                  <h3 className="text-[20px] font-[400]">
                    Incheon, South Korea
                  </h3>
                  <h4 className="font-[500] text-[28px]">
                    Asian Paralympic Games 2014
                  </h4>
                </section>
              </Card>
              <Card className="w-full flex items-center px-[46px] py-[21px] gap-x-[36px]">
                <img
                  src="/dummy/events/event-logo-one.png"
                  className="h-[111px]"
                />
                <section className="flex flex-col gap-y-2">
                  <span className="px-[16px] py-[8px] bg-hijau-400 rounded-full w-fit text-[16px] font-[700] text-white">
                    7 October
                  </span>
                  <h3 className="text-[20px] font-[400]">
                    Incheon, South Korea
                  </h3>
                  <h4 className="font-[500] text-[28px]">
                    Asian Paralympic Games 2014
                  </h4>
                </section>
              </Card>
              <Card className="w-full flex items-center px-[46px] py-[21px] gap-x-[36px]">
                <img
                  src="/dummy/events/event-logo-one.png"
                  className="h-[111px]"
                />
                <section className="flex flex-col gap-y-2">
                  <span className="px-[16px] py-[8px] bg-hijau-400 rounded-full w-fit text-[16px] font-[700] text-white">
                    7 October
                  </span>
                  <h3 className="text-[20px] font-[400]">
                    Incheon, South Korea
                  </h3>
                  <h4 className="font-[500] text-[28px]">
                    Asian Paralympic Games 2014
                  </h4>
                </section>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventPage;
