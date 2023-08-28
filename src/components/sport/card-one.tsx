import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { convertToSlug } from '@/lib/utils';

interface SportCardProps {
  image: string;
  name: string;
  className?: string;
}

const SportCardOne: FC<SportCardProps> = ({ name, image, className }) => {
  return (
    <Link
      href={`/sport/${convertToSlug(name)}`}
      className="flex flex-col h-fit w-fit space-y-[16px] justify-center"
    >
      <Image
        height={270}
        width={270}
        alt={name}
        src={image}
        className="rounded-[16px] h-[139px] xl:h-[270px] w-[139px] xl:w-[270px] object-cover"
      />
      <h3 className="text-center font-[500] max-w-[139px] xl:max-w-[270px] text-[16px] xl:text-[24px]">
        {name}
      </h3>
    </Link>
  );
};

export default SportCardOne;
