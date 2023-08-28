import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import SportCardTwo from '@/components/sport/card-two';

const DetailNewsPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-[29px] xl:py-[86px] gap-y-5 xl:gap-y-[60px] px-2 xl:px-[70px] w-full max-w-[1440px] mx-auto flex flex-col">
        <section className="flex flex-col gap-y-[12px] xl:gap-y-[28px]">
          <h1 className="font-poppins font-[700] text-[20px] xl:text-[40px]">
            President Jokowi Honors Paralympic Athletes at State Palace for
            Remarkable Achievements
          </h1>
          <span className="flex gap-5 items-center text-[12px] xl:text-[20px]">
            <h3 className="font-[400]">9 August 2023</h3>
            <div className="rounded-full w-[6px] h-[6px] bg-hitam-400 block xl:hidden" />
            <h3 className="font-[500]">General News</h3>
          </span>
          <Image
            src="/dummy/news.png"
            alt="news"
            width={1300}
            height={624}
            className="w-auto xl:w-[1300px] h-[165px] xl:h-[624px] object-cover"
          />
          <p className="font-poppins font-[400] text-justify text-[12px] xl:text-[24px]">
            In a heartwarming and inspiring ceremony, President Joko Widodo,
            affectionately known as Jokowi, extended his heartfelt
            congratulations and honored the nation&apos;s exceptional Paralympic
            athletes for their outstanding accomplishments on the global stage.
            The event, held at the prestigious State Palace, was a testament to
            the dedication, determination, and indomitable spirit that these
            athletes have displayed throughout their journeys. With their
            remarkable achievements, they have not only brought glory to
            Indonesia but have also shattered stereotypes and proven that
            physical limitations are no barriers to success. During the
            ceremony, President Jokowi expressed his deep admiration and
            gratitude towards the Paralympic athletes for their unwavering
            commitment to their sports and for the positive image they have
            projected onto the world. He highlighted how their achievements go
            beyond the realm of sports, serving as a source of inspiration for
            the entire nation. Jokowi emphasized that these athletes embody the
            values of perseverance, resilience, and inclusivity, which are
            essential for the growth and progress of Indonesian society. The
            State Palace event was a moment of celebration, unity, and
            reflection, as attendees, including government officials, sports
            enthusiasts, and fellow athletes, gathered to pay tribute to the
            Paralympic champions. The athletes&apos; stories of triumph over
            adversity and their relentless pursuit of excellence resonated
            deeply with the audience, instilling a sense of pride and motivation
            among all present. The President presented each athlete with awards
            and tokens of appreciation, not just as recognition of their medals
            but as a symbol of the nation&apos;s gratitude for their remarkable
            contributions. Beyond the immediate recognition, the ceremony also
            shed light on the broader societal implications of the Paralympic
            athletes&apos; achievements. It prompted discussions about the need
            for increased accessibility, inclusivity, and support for
            individuals with disabilities in Indonesia. As the nation witnesses
            the extraordinary feats of its Paralympians, there is a growing
            momentum to push for improved infrastructure, policies, and
            opportunities that can empower all citizens, regardless of their
            physical abilities. In conclusion, the ceremony at the State Palace
            underlined President Jokowi&apos;s commitment to celebrating
            diversity, promoting inclusivity, and recognizing the exceptional
            achievements of Indonesia&apos;s Paralympic athletes. The event
            served as a powerful reminder that the human spirit knows no bounds
            and that with determination and support, individuals can overcome
            challenges that come their way. As the nation looks forward to
            future Paralympic events, there is a renewed sense of optimism that
            these athletes will continue to inspire generations and contribute
            to a more inclusive and accepting society.
          </p>
        </section>
        <section>
          <div className="text-hitam-700 w-full justify-between flex items-center">
            <span>
              <h2 className="font-[700] text-[20px] xl:text-[38px]">
                Related News
              </h2>
              <h3 className="font-[400] text-[10px] xl:text-[16px]">
                The most popular news you should know to keep up with the latest
                news
              </h3>
            </span>
            <Link
              href="#"
              className="items-center gap-x-3 font-[500] text-[20px] hidden xl:flex"
            >
              Show More
              <BsArrowRight />
            </Link>
          </div>
          <div className="w-full flex scrollbar-hide overflow-x-scroll gap-x-[21px] mt-5">
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailNewsPage;
