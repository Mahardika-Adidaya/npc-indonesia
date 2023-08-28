import { FC } from 'react'; // Import React and FC from react

import AthleteProfile from '@/components/athletes/profile';
import { cn, convertToSlug, fontAhrefs400 } from '@/lib/utils';

interface AthletesSectionProps {
  category: string;
  datas: any[];
}

const AthletesSection: FC<AthletesSectionProps> = ({ category, datas }) => {
  return (
    <section>
      <span
        className={cn(
          'px-[12px] xl:px-[24px] text-[14px] xl:text-[32px] font-[400] py-2 xl:py-[12px] rounded-[8px] bg-hijau-50 text-hijau-800',
          fontAhrefs400.className
        )}
      >
        {category}
      </span>
      <div className="w-full grid grid-cols-3 xl:grid-cols-5 border-b border-hitam-100 gap-y-[36px] py-[36px]">
        {datas
          ? datas.map((data: any) => (
              <AthleteProfile
                key={data.id}
                name={data.name}
                src={data.avatar}
                url={`athletes/${convertToSlug(data.name)}`}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default AthletesSection;
