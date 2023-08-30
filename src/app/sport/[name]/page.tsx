import Player from '@/components/player';
import ArticleSection from '@/components/sport/article-section';
import SportCardTwo from '@/components/sport/card-two';
import { cn, fontAhrefs400 } from '@/lib/utils';

const SportCategoryPage = () => {
  return (
    <div className="flex flex-col gap-y-[45px]">
      <section
        className="h-[144px] xl:h-[345px] w-full bg-cover"
        style={{ backgroundImage: 'url("/para-badminton.png")' }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-2 xl:px-[50px] pt-[31px] xl:pt-[116px]">
          <h1
            className={cn(
              'text-[20px] xl:text-[64px] font-[400] text-white',
              fontAhrefs400.className
            )}
          >
            Para Badminton
          </h1>
          <div className="flex flex-col xl:flex-row xl:gap-x-[80px] max-xl:gap-y-2">
            <div className="px-2 xl:px-[20px] py-[6px] xl:py-[24.5px] font-[400] flex items-center gap-x-[28px] xl:gap-x-[89px] bg-white w-[198px] xl:w-[502px]">
              <h3 className="text-[9px] md:text-[12px] xl:text-[16px]">
                Olympic Debut
              </h3>
              <h3
                className={cn(
                  'text-[9px] xl:text-[20px]',
                  fontAhrefs400.className
                )}
              >
                Barcelona 1992
              </h3>
            </div>
            <div className="px-2 xl:px-[20px] py-[6px] xl:py-[24.5px] font-[400] flex items-center gap-x-[28px] xl:gap-x-[89px] bg-white w-[198px] xl:w-[502px]">
              <h3 className="text-[9px] md:text-[12px] xl:text-[16px]">
                Most Medals
              </h3>
              <h3
                className={cn(
                  'text-[9px] xl:text-[20px]',
                  fontAhrefs400.className
                )}
              >
                Leani Ratri Oktila
              </h3>
            </div>
          </div>
          <div className="px-[20px] py-[24.5px]"></div>
        </div>
      </section>
      <section className="px-2 xl:px-[51px] w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="flex xl:gap-x-[93px] max-xl:gap-y-4 flex-col xl:flex-row">
          <h1
            className={cn(
              'text-[20px] xl:text-[64px] font-[400] max-w-[307px]',
              fontAhrefs400.className
            )}
          >
            History of Para Badminton
          </h1>
          <div className="w-full overflow-x-scroll scrollbar-hide flex flex-col gap-y-[32px]">
            <ArticleSection
              headText="What is Badminton?"
              content="Badminton is a racket-and-shuttle game played on a court by two players or doubles teams. The sport takes its name from Badminton House—home of the Duke of Beaufort in the English county of Gloucestershire.
              Para badminton has been contested internationally since the 1990s, with the first World Championships taking place in Amersfoort, Netherlands, in 1998. But it was not until 2011 that the sport was brought under the governance of the Badminton World Federation."
            />
            <ArticleSection
              headText="By whom, where and when was Badminton invented?"
              content="In 1873, the Duke is credited with bringing a version of the game—Poona—back from India and introducing it to his guests.The sport quickly grew in popularity, and in 1877, the first set of written rules were devised by the newly formed Bath Badminton Club. The Badminton Federation of England was created 16 years later, and in 1899, it organised the first All England Championships."
            />
            <ArticleSection
              headText="What are the rules of badminton?"
              content=" The exact rules of badminton have changed over time, but the aim is to land the shuttle in-bounds in the opponent's half of the court without the opponent returning it successfully. Matches are currently played to a best-of-three games, with the first to 21 points winning each game. Each player or doubles team must win each game by two clear points, except if a game reaches 29–all, a single sudden-death point is played."
            />
            <ArticleSection
              headText="Badminton and the Olympics"
              content="Badminton made its debut as a demonstration sport at the 1972 Olympic Games in Munich. It was not until the 1992 Games in Barcelona that it was officially included on the Olympic programme, with men’s and women’s singles and doubles events. The mixed doubles event made its debut in 1996 at the Atlanta Olympic Games. Since then, the number of events has remained unchanged."
            />
          </div>
        </div>
      </section>
      <section className="px-2 xl:px-[51px] w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="flex xl:gap-x-[93px] max-xl:gap-y-4 flex-col xl:flex-row">
          <h1
            className={cn(
              'text-[20px] xl:text-[64px] font-[400] max-w-[307px]',
              fontAhrefs400.className
            )}
          >
            Para Badminton News
          </h1>
          <div className="w-full overflow-x-scroll scrollbar-hide flex gap-x-[42px]">
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
            <SportCardTwo link="#" />
          </div>
        </div>
      </section>
      <section className="px-2 xl:px-[51px] w-full max-w-[1440px] mx-auto flex flex-col">
        <h1
          className={cn(
            'text-[20px] xl:text-[64px] font-[400] max-w-[307px]',
            fontAhrefs400.className
          )}
        >
          Video You Might Like
        </h1>
        <div className="flex justify-center mb-[46px] mt-[18px]">
          <Player
            url={[
              'https://youtu.be/EuiRfzRu17c',
              'https://youtu.be/77s99NET9Mw'
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default SportCategoryPage;
