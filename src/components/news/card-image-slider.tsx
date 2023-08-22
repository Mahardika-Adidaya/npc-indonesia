const CardImageSlider = () => {
  return (
    <div
      className="w-[227px] p-2 h-[113px] rounded-[8px] bg-cover mx-[18px] relative overflow-hidden"
      style={{ backgroundImage: "url('/dummy/banner-one.png')" }}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-black/70 to-transparent z-0" />
      <div className="relative z-10 flex flex-col w-full h-full justify-end">
        <div className="flex justify-end flex-col w-full h-full p-2">
          <h1 className="text-[14px] font-[700] line-clamp-1 text-white">
            President Jokowi Honors Paralympic Athletes at State Palace for
            Remarkable Achievements
          </h1>
          <div className="text-[10px] flex gap-x-[8px] items-center">
            <h4 className="font-[400] text-white">9 August 2023</h4>
            <span className="w-[6px] h-[6px] rounded-full bg-white" />
            <h4 className="font-[500] text-white">General News</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImageSlider;
