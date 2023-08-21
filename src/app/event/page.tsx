import CardEvent from '@/components/event/card';
import HeadingText from '@/components/ui/heading-text';

const EventPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-[20px] flex justify-center border-b border-b-hitam-200">
        <div className="flex gap-x-[8px] items-center">
          <h3 className="font-[500] text-[19px]">
            Asian Para Games Hangzhou 2023
          </h3>
          <h3 className="font-[500] text-[19px]">-</h3>
          <h3 className="text-[14px] font-[400]">22 - 28 October, 2023</h3>
        </div>
      </div>
      <div className="py-[60px] px-[50px] w-full max-w-[1440px] mx-auto flex flex-col gap-y-[60px]">
        <section>
          <HeadingText text="Recent Event" />
          <div className="w-full grid grid-cols-3 gap-y-[25px]">
            <CardEvent
              variant="hijau"
              image="/dummy/events/event-logo-one.png"
              title="2022 Winter Paralympics Games"
              subtitle="Beijing, China"
              closing="test"
              opening="test"
            />
            <CardEvent
              variant="hijau"
              image="/dummy/events/event-logo-one.png"
              title="2022 Winter Paralympics Games"
              subtitle="Beijing, China"
              closing="test"
              opening="test"
            />
            <CardEvent
              variant="hijau"
              image="/dummy/events/event-logo-one.png"
              title="2022 Winter Paralympics Games"
              subtitle="Beijing, China"
              closing="test"
              opening="test"
            />
          </div>
        </section>
        <section>
          <HeadingText text="Next Event" />
          <div className="w-full grid grid-cols-3 gap-y-[25px]">
            <CardEvent
              variant="biru"
              image="/dummy/events/event-logo-one.png"
              title="2022 Winter Paralympics Games"
              subtitle="Beijing, China"
              closing="test"
              opening="test"
            />
            <CardEvent
              variant="biru"
              image="/dummy/events/event-logo-one.png"
              title="2022 Winter Paralympics Games"
              subtitle="Beijing, China"
              closing="test"
              opening="test"
            />
            <CardEvent
              variant="biru"
              image="/dummy/events/event-logo-one.png"
              title="2022 Winter Paralympics Games"
              subtitle="Beijing, China"
              closing="test"
              opening="test"
            />
          </div>
        </section>
        <section>
          <HeadingText text="All Paralympic Event" />
        </section>
      </div>
    </div>
  );
};

export default EventPage;
