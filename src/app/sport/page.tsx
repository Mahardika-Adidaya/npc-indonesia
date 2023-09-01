'use client';

import SportCardOne from '@/components/sport/card-one';
import HeadingText from '@/components/ui/heading-text';
import { useGetSportsCategory } from '@/hooks/fetch/useGetSportsCategory';

const SportPage = () => {
  const { data: dataSportsCategory, isLoading: isLoadingSportsCategory } =
    useGetSportsCategory();

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="py-[30px] xl:py-[86px] px-2 xl:px-[51px] w-full">
          <HeadingText>Paralympic Sport</HeadingText>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-[40px] w-fit mx-auto gap-x-10 md:gap-x-24 xl:gap-x-16">
            {!isLoadingSportsCategory &&
              dataSportsCategory.map((data: any) => {
                return (
                  <SportCardOne
                    key={data.id}
                    image={data?.image}
                    name={data?.name}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportPage;
