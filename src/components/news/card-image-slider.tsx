interface CardImageSliderProps {
  onClick: (image: string) => void;
}

export const CardImageSlider: React.FC<CardImageSliderProps> = ({
  onClick
}) => {
  return (
    <div
      className="my-1 p-[5px] bg-center xl:p-2 rounded-[8px] bg-cover mx-[18px] relative overflow-hidden w-[167px] xl:w-[228px] h-[83px] xl:h-[113px] cursor-pointer"
      style={{
        backgroundImage: `url('/dummy/banner-one.png')` // Use a relative path
      }}
      onClick={() => onClick('/dummy/news.png')} // Use an absolute path within the `public` directory
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-black/70 to-transparent z-0" />
      <div className="relative z-10 flex flex-col w-full h-full justify-end">
        <div className="flex justify-end flex-col w-full h-full p-2">
          <h1 className="text-[10px] xl:text-[14px] font-[700] line-clamp-1 text-white">
            President Jokowi Honors Paralympic Athletes at State Palace for
            Remarkable Achievements
          </h1>
          <div className="text-[6px] xl:text-[10px] flex gap-x-[8px] items-center">
            <h4 className="font-[400] text-white">9 August 2023</h4>
            <span className="w-1 h-1 rounded-full bg-white self-center" />
            <h4 className="font-[500] text-white">General News</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
