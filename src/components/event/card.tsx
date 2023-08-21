import Link from 'next/link';
import { FC } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface CardEventProps {
  variant: 'biru' | 'hijau';
  image: string;
  title: string;
  subtitle: string;
  opening: string;
  closing: string;
}

const CardEvent: FC<CardEventProps> = ({
  variant,
  image,
  title,
  subtitle,
  opening,
  closing
}) => {
  return (
    <Link
      href="#"
      className="w-[419px] rounded-[16px] overflow-hidden flex flex-col justify-between shadow-md border border-hitam-100"
    >
      <div
        className={cn(
          'flex gap-x-[36px] px-[38px] py-[22px] items-center',
          fontAhrefs400.className
        )}
      >
        <img src={image} alt={title} className="h-[123px] w-auto" />
        <div className="gap-y-[16px] h-full flex flex-col justify-center">
          <h4 className="font-[400] text-[24px]">{title}</h4>
          <h5 className="font-[400] text-[20px] text-hitam-700">{subtitle}</h5>
        </div>
      </div>
      <div
        className={cn(
          'text-white w-full px-[44px] flex gap-x-[10px] py-[12px]',
          {
            'bg-gradient-to-r from-biru-800 to-biru-500': variant === 'biru',
            'bg-gradient-to-r from-hijau-800 to-hijau-500': variant === 'hijau'
          }
        )}
      >
        <span className="w-[80px]">
          <h3 className="italic">Opening</h3>
          <h3 className="italic">Closing</h3>
        </span>
        <span>
          <h4>{opening}</h4>
          <h4>{closing}</h4>
        </span>
      </div>
    </Link>
  );
};

export default CardEvent;
