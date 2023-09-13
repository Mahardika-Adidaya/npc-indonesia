'use client';

import React, { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const ImageSliderHome: React.FC = () => {
  const data = [
    {
      title: 'Slide title for 1',
      imageUrl: '/dummy/banner-one.png'
    },
    {
      title: 'Slide title for 2',
      imageUrl: '/dummy/news.png'
    },
    {
      title: 'Slide title for 3',
      imageUrl: '/dummy/banner-one.png'
    }
  ];

  const totalSlides = data.length;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(0);

  const handleProgressBarClick = (index: number) => {
    setCurrentSlide(index);
    setProgressValue(0);
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgressValue(prevValue => {
        if (prevValue >= 100) {
          setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
          return 0;
        }
        return prevValue + 1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  return (
    <div className="w-full flex flex-col gap-y-[16px] mx-auto">
      <section
        className="w-full h-[233px] md:h-[422px] xl:h-[598px] bg-cover rounded-[20px] relative overflow-hidden"
        style={{ backgroundImage: `url('${data[currentSlide].imageUrl}')` }}
      >
        <div
          className="w-1/3 absolute left-0 h-full rounded-[20px]"
          style={{
            background:
              'linear-gradient(90deg, #000 52.72%, rgba(0, 0, 0, 0.76) 73.60%, rgba(0, 0, 0, 0.44) 88.01%, rgba(0, 0, 0, 0.00) 100%)'
          }}
        />
        <div
          className="absolute z-10 bottom-0 w-full h-1/3"
          style={{
            background:
              'linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'
          }}
        />
        <div className="absolute bottom-[24px] z-40 p-[8px] md:p-[28px] xl:p-[52px] lg:py-[30px] text-white">
          <div className="w-full xl:w-[443px] flex flex-col md:gap-3 xl:gap-y-[20px]">
            <h1 className="text-[14px] md:text-[24px] xl:text-[36px] font-[700]">
              {data[currentSlide].title}
            </h1>
            <div className="text-[8px] xl:text-[16px] flex gap-x-[8px] items-center">
              <h4 className="font-[400] text-white">9 August 2023</h4>
              <span className="w-[6px] h-[6px] rounded-full bg-white" />
              <h4 className="font-[500] text-white">General News</h4>
            </div>
            <div className="hidden xl:block">
              <h3>Related Content</h3>
              <h4>Para Championships open with spectacular celebration</h4>
              <h4>Para Championships open with spectacular celebration</h4>
              <h4>Para Championships open with spectacular celebration</h4>
            </div>
          </div>
          <div className="w-full flex mt-[20px] md:mt-[35px] xl:mt-[80px] space-x-3 xl:space-x-[45px]">
            {data.map((slide, index) => (
              <div
                key={index}
                className="w-fit flex flex-col gap-y-[8px]"
                onClick={() => handleProgressBarClick(index)}
              >
                <Progress
                  className="h-[2px] w-[58px] xl:w-[212px] xl:h-[10px]"
                  value={index === currentSlide ? progressValue : 0}
                  style={{ color: 'white' }}
                />
                <h5
                  className={cn(
                    'text-[14px] font-[400] text-hitam-300 hidden xl:block',
                    {
                      active: index === currentSlide
                    }
                  )}
                >
                  {slide.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSliderHome;
