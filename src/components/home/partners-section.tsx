'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import HeadingText from '@/components/ui/heading-text';

const PartnersSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  };

  return (
    <div className="w-full bg-white">
      <div className="py-[70px] px-[84px] w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <HeadingText text="Our Partners" />
        <Slider
          className="w-full items-center h-[151px] gap-x-[46px] overflow-hidden"
          {...settings}
        >
          <Image
            src="/companies/logo-konect.png"
            alt="Konect"
            height={86}
            width={272}
          />
          <Image
            src="/companies/logo-bayan-resources.png"
            alt="Bayan Resources"
            height={94}
            width={393}
          />
          <Image
            src="/companies/logo-bayan-peduli.png"
            alt="Bayan Peduli"
            height={86}
            width={69}
          />
          <Image
            src="/companies/logo-konect.png"
            alt="Konect"
            height={86}
            width={272}
          />
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSection;
