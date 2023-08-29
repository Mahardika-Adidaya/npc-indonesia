import { FC, ReactNode } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface HeadingTextProps {
  children: ReactNode;
}

const HeadingText: FC<HeadingTextProps> = ({ children }) => {
  return (
    <h2
      className={cn(
        'text-merah-500 underline decoration-biru-600 text-[20px] xl:text-[64px] font-[400] decoration-2 xl:decoration-8 mb-5 xl:mb-[40px]',
        fontAhrefs400.className
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingText;
