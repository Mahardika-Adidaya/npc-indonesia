'use client';

import dynamic from 'next/dynamic';

import CardEvent from '@/components/event/card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeadingText from '@/components/ui/heading-text';
import { Input } from '@/components/ui/input';
import { useGetEvents } from '@/hooks/fetch/useGetEvents';
import { cn, fontAhrefs400 } from '@/lib/utils';

const EventCountdown = dynamic(() => import('@/components/event/countdown'), {
  ssr: false
});

const EventPage = () => {
  const { data: dataEvents, isLoading: isLoadingDataEvents } = useGetEvents({
    recent: true,
    all: true,
    countdown: true,
    next: true
  });

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
      <div className="py-[29px] md:py-[56px] md:px-[30px] xl:py-[86px] px-[8px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
        <section>
          <HeadingText>Recent Event</HeadingText>
          <div className="max-md:mx-auto max-md:w-fit w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-[20px]">
            {!isLoadingDataEvents &&
              dataEvents?.paralympic_recent_event &&
              dataEvents?.paralympic_recent_event.length > 0 &&
              dataEvents?.paralympic_recent_event.map((data: any) => {
                return (
                  <CardEvent
                    key={data?.id}
                    variant="hijau"
                    image={process.env.NEXT_PUBLIC_API_IMAGE + data?.image}
                    title={data?.title}
                    subtitle={data?.location}
                    closing={data?.closing}
                    opening={data?.opening}
                  />
                );
              })}
          </div>
        </section>
        <section className="mt-[30px]">
          <HeadingText>Next Event</HeadingText>
          <div className="max-md:mx-auto max-md:w-fit w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-[20px]">
            {!isLoadingDataEvents &&
              dataEvents?.paralympic_next_event &&
              dataEvents?.paralympic_next_event.length > 0 &&
              dataEvents?.paralympic_next_event.map((data: any) => {
                return (
                  <CardEvent
                    key={data?.id}
                    variant="biru"
                    image={process.env.NEXT_PUBLIC_API_IMAGE + data?.image}
                    title={data?.title}
                    subtitle={data?.location}
                    closing={data?.closing}
                    opening={data?.opening}
                  />
                );
              })}
          </div>
        </section>
        <section className="mt-[30px] w-full">
          <HeadingText>All Paralympic Event</HeadingText>
          <div className="w-full h-[52px] flex flex-col xl:flex-row gap-y-3 justify-between">
            <div className="flex items-center max-md:justify-between md:gap-x-2 w-full">
              <h3 className="text-[12px] xl:text-[16px] font-[500]">Filter</h3>
              <Input placeholder="Year..." className="w-[90px] xl:w-[117px]" />
              <div className="w-[15px] xl:w-[24px] rounded-full h-[2px] bg-hitam-100" />
              <Input placeholder="Year..." className="w-[90px] xl:w-[117px]" />
              <Button className="bg-biru-900 px-[26px] xl:px-[38px]">
                Apply
              </Button>
            </div>
            <Input
              placeholder="Search event name..."
              className="w-full xl:w-[453px] "
            />
          </div>
          <div className="max-w-full w-full mx-auto flex xl:mt-[52px] space-x-[30px] md:space-x-[86px] mt-[52px]">
            <span>
              <h2
                className={cn(
                  'text-[28px] md:text-[64px] font-[400]',
                  fontAhrefs400.className
                )}
              >
                2014
              </h2>
              <h2
                className={cn(
                  'text-[18px] md:text-[40px] font-[400]',
                  fontAhrefs400.className
                )}
              >
                Event
              </h2>
            </span>
            <div className="w-full flex flex-col gap-y-[14px]">
              <Card className="w-full flex items-center px-[10px] md:px-[46px] py-[13px] md:py-[21px] gap-x-[16px] md:gap-x-[36px]">
                <img
                  src="/dummy/events/event-logo-one.png"
                  className="h-[60px] md:h-[111px]"
                  alt="Logo Event"
                />
                <section className="flex h-full flex-col space-y-2 md:space-y-3">
                  <span className="px-2 md:px-[16px] py-1 md:py-[8px] bg-hijau-400 rounded-full w-fit text-[8px] md:text-[16px] font-[700] text-white">
                    7 October
                  </span>
                  <h3 className="text-[10px] md:text-[20px] font-[400]">
                    Incheon, South Korea
                  </h3>
                  <h4 className="font-[500] text-[12px] md:text-[28px]">
                    Asian Paralympic Games 2014
                  </h4>
                </section>
              </Card>
              <Card className="w-full flex items-center px-[10px] md:px-[46px] py-[13px] md:py-[21px] gap-x-[16px] md:gap-x-[36px]">
                <img
                  src="/dummy/events/event-logo-one.png"
                  className="h-[60px] md:h-[111px]"
                  alt="Logo Event"
                />
                <section className="flex h-full flex-col space-y-2 md:space-y-3">
                  <span className="px-2 md:px-[16px] py-1 md:py-[8px] bg-hijau-400 rounded-full w-fit text-[8px] md:text-[16px] font-[700] text-white">
                    7 October
                  </span>
                  <h3 className="text-[10px] md:text-[20px] font-[400]">
                    Incheon, South Korea
                  </h3>
                  <h4 className="font-[500] text-[12px] md:text-[28px]">
                    Asian Paralympic Games 2014
                  </h4>
                </section>
              </Card>
              <Card className="w-full flex items-center px-[10px] md:px-[46px] py-[13px] md:py-[21px] gap-x-[16px] md:gap-x-[36px]">
                <img
                  src="/dummy/events/event-logo-one.png"
                  className="h-[60px] md:h-[111px]"
                  alt="Logo Event"
                />
                <section className="flex h-full flex-col space-y-2 md:space-y-3">
                  <span className="px-2 md:px-[16px] py-1 md:py-[8px] bg-hijau-400 rounded-full w-fit text-[8px] md:text-[16px] font-[700] text-white">
                    7 October
                  </span>
                  <h3 className="text-[10px] md:text-[20px] font-[400]">
                    Incheon, South Korea
                  </h3>
                  <h4 className="font-[500] text-[12px] md:text-[28px]">
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
