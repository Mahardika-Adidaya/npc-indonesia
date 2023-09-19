'use client';

import { useState } from 'react';

import { CardImageSlider } from '@/components/news/card-image-slider';

interface ImageSliderProps {}

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const [selectedImage, setSelectedImage] = useState<string>(
    '/dummy/banner-one.png'
  ); // Initial background image

  const handleCardClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-[1440px] space-y-2 w-full flex-col xl:flex-row flex mx-auto bg-hitam-100 rounded-[8px]">
      <div
        className="w-full xl:w-[1076px] h-[233px] xl:h-[497px] rounded-[8px] p-[15px] relative flex flex-col justify-end bg-center bg-cover"
        style={{ backgroundImage: `url('${selectedImage}')` }}
      >
        <div className="rounded-[8px] px-[10px] xl:px-[42px] py-2 xl:py-[28px] backdrop-blur-2xl bg-hitam-300/20 text-white">
          <h1 className="text-[14px] xl:text-[28px] font-[700]">
            President Jokowi Honors Paralympic Athletes at State Palace for
            Remarkable Achievements
          </h1>
          <div className="text-[8px] xl:text-[16px] flex gap-x-[8px] items-center">
            <h4 className="font-[400]">9 August 2023</h4>
            <span className="w-1 h-1 xl:w-[6px] xl:h-[6px] rounded-full bg-white self-center" />
            <h4 className="font-[500]">General News</h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-1 pb-2">
        <CardImageSlider onClick={handleCardClick} />
        <CardImageSlider onClick={handleCardClick} />
        <CardImageSlider onClick={handleCardClick} />
        <CardImageSlider onClick={handleCardClick} />
      </div>
    </div>
  );
};

export default ImageSlider;
