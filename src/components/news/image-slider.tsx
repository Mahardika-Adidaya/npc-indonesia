import CardImageSlider from '@/components/news/card-image-slider';

const ImageSlider = () => {
  return (
    <div className="max-w-[1440px] flex mx-auto bg-hitam-100 rounded-[8px]">
      <div
        className="w-[1076px] h-[497px] rounded-[8px] p-[15px] relative flex flex-col justify-end"
        style={{ backgroundImage: "url('/dummy/banner-one.png')" }}
      >
        <div className="rounded-[8px] px-[42px] py-[28px] backdrop-blur-2xl bg-hitam-300/20 text-white">
          <h1 className="text-[28px] font-[700]">
            President Jokowi Honors Paralympic Athletes at State Palace for
            Remarkable Achievements
          </h1>
          <div className="text-[16px] flex gap-x-[8px] items-center">
            <h4 className="font-[400]">9 August 2023</h4>
            <span className="w-[6px] h-[6px] rounded-full bg-white" />
            <h4 className="font-[500]">General News</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <CardImageSlider />
        <CardImageSlider />
        <CardImageSlider />
        <CardImageSlider />
      </div>
    </div>
  );
};

export default ImageSlider;
