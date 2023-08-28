'use client';

import SportCardOne from '@/components/sport/card-one';
import HeadingText from '@/components/ui/heading-text';
import { useGetSportsCategory } from '@/hooks/fetch/useGetSportsCategory';

const SportPage = () => {
  const { data: dataSportsCategory, isLoading: isLoadingSportsCategory } =
    useGetSportsCategory();

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-[30px] xl:py-[86px] px-2 xl:px-[51px] w-full max-w-[1440px] mx-auto flex flex-col">
        <HeadingText>Paralympic Sport</HeadingText>
        <div className="w-full grid-cols-2 grid xl:grid-cols-4 gap-y-[40px] justify-center">
          {/* <RenderIf isTrue={!isLoadingSportsCategory}>
            {dataSportsCategory.map((data: any) => {
              return (
                <SportCardOne
                  key={data.id}
                  image={data.image}
                  name={data.name}
                />
              );
            })}
          </RenderIf> */}
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
  );
};

export default SportPage;
