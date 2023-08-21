import { FC } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface HeadingTextProps {
  text: string;
}

const HeadingText: FC<HeadingTextProps> = ({ text }) => {
  return (
    <h2
      className={cn(
        'text-merah-500 underline decoration-biru-600 text-[48px] font-[400] decoration-8 mb-[92px]',
        fontAhrefs400.className
      )}
    >
      {text}
    </h2>
  );
};

export default HeadingText;
