'use client';

import dynamic from 'next/dynamic';

import HeadingText from '@/components/ui/heading-text';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false
});

const PartnersSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return (
    <div className="w-full bg-white">
      <div className="py-[70px] px-[84px] w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <HeadingText>Our Partners</HeadingText>
        <Slider
          className="w-full items-center h-fit gap-x-[46px] flex overflow-hidden bg-red-500"
          {...settings}
        >
          <img
            src="/companies/logo-konect.png"
            alt="Konect"
            className="h-[151px]"
          />
          <img
            src="/companies/logo-bayan-resources.png"
            alt="Bayan Resources"
            className="h-[151px]"
          />
          <img
            src="/companies/logo-bayan-peduli.png"
            alt="Bayan Peduli"
            className="h-[151px]"
          />
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSection;
