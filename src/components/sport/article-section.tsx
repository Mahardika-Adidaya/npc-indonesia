import { FC } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface ArticleSectionProps {
  headText: string;
  content: string;
}

const ArticleSection: FC<ArticleSectionProps> = ({ headText, content }) => {
  return (
    <section
      className={cn(
        'font-[400] gap-y-4 flex flex-col',
        fontAhrefs400.className
      )}
    >
      <h1 className="text-[40px]">{headText}</h1>
      <p className="text-[24px] font-helveticaNeue">{content}</p>
    </section>
  );
};

export default ArticleSection;
