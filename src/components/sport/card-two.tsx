import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface SportCardTwoProps {
  link: string;
}

const SportCardTwo: FC<SportCardTwoProps> = ({ link }) => {
  return (
    <Link href={link}>
      <div className="w-[169px] xl:w-[417px] border border-hitam-100 shadow-md overflow-hidden rounded-[9px] font-poppins">
        <Image
          src="/dummy/news.png"
          alt="news"
          width={417}
          height={324}
          className="w-[169px] h-[132px] xl:w-[417px] xl:h-[324px] object-cover"
        />
        <div className="p-2 xl:p-[25px]">
          <h1 className="text-[11px] xl:text-[24px] font-[700] leading-4 line-clamp-3 xl:leading-[31px] text-hitam-700 w-full">
            President Jokowi Honors Paralympic Athletes at State Palace for
            Remarkable Achievements
          </h1>
          <span className="flex items-center gap-x-[20px] mt-[16px]">
            <h2 className="text-[8px] xl:text-[16px] font-[400]">
              9 August 2023
            </h2>
            <h2 className="text-[8px] xl:text-[16px] font-[500]">
              General News
            </h2>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SportCardTwo;
