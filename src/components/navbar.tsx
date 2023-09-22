'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useGetSportsCategory } from '@/hooks/fetch/sport/useGetSportsCategory';
import RenderIf from '@/lib/render-if';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isDekstop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 1223px)' });
  const [mounted, setMounted] = useState(false);

  const [openNavbar, setOpenNavbar] = useState(false);

  const { data: sportCategory } = useGetSportsCategory();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <RenderIf isTrue={isMobile}>
        <nav className="w-full h-fit drop-shadow-md sticky top-0 z-40">
          <section className="w-full flex justify-between px-2 py-[14px] bg-hitam-50">
            <Link href="/">
              <img
                src="/logo-npci.png"
                alt="Logo NPCI"
                width={79}
                height={48}
              />
            </Link>
            <button
              onClick={() => setOpenNavbar(prev => !prev)}
              className="text-white rounded-[8px] bg-biru-500 px-5 py-3 flex items-center justify-center"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </section>
          <RenderIf isTrue={openNavbar}>
            <section className="px-[15px] py-[22px] bg-hitam-100">
              <div className="w-full flex rounded-[8px] bg-white overflow-hidden">
                <input
                  type="text"
                  className="w-full px-[16px] bg-hitam-50 focus:outline-none"
                  placeholder="What you're looking for?"
                />
                <button className="bg-biru-600 px-[24px] py-[16px] hover:bg-biru-500">
                  <FiSearch className="text-white" size={24} />
                </button>
              </div>
              <div className="flex flex-col mt-5 font-[600] text-[16px] gap-y-4">
                <Link href="/">Dashboard</Link>
                <Link href="/">Sport</Link>
                <Link href="/event">Event</Link>
                <Link href="/news">News</Link>
                <Link href="/athletes">Athletes</Link>
              </div>
              <div className="w-full h-[0.2px] bg-hitam-300 my-4" />
              <div className="flex flex-col space-y-3 text-[12px] font-[400] text-hitam-600">
                <Link href="#">About Paralympic</Link>
                <Link href="#">Office Info</Link>
                <Link href="#">Organization Structure</Link>
                <Link href="#">Help</Link>
              </div>
              <div className="mt-[26px] flex justify-between">
                <div className="flex gap-x-[14px] items-center">
                  <Link href="#">
                    <img
                      src="/socmeds/logo-facebook.png"
                      alt="Facebook"
                      height={20}
                      width={20}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-instagram.png"
                      alt="Instagram"
                      height={24}
                      width={24}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-youtube.png"
                      alt="YouTube"
                      height={24}
                      width={24}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-twitter.png"
                      alt="Twitter"
                      height={24}
                      width={21}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-tiktok.png"
                      alt="TikTok"
                      height={24}
                      width={24}
                    />
                  </Link>
                </div>
                {/* <div className="w-[1px] bg-hitam-400" />
                <Select>
                  <SelectTrigger className="w-[116px] h-[32px] rounded-[16px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="z-50">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="id">Indonesian</SelectItem>
                  </SelectContent>
                </Select> */}
              </div>
            </section>
          </RenderIf>
        </nav>
      </RenderIf>
      <RenderIf isTrue={isDekstop}>
        <nav className="w-full h-fit drop-shadow-md sticky top-0 z-40">
          <section className="bg-hitam-50">
            <div className="w-full max-w-[1440px] px-[50px] py-[14px] flex items-center justify-between mx-auto">
              <div className="flex gap-x-[38px] text-[14px] font-[400] text-hitam-800">
                <Link href="#" className="hover:text-hitam-600">
                  About Paralympic
                </Link>
                <Link href="#" className="hover:text-hitam-600">
                  Office Info
                </Link>
                <Link href="#" className="hover:text-hitam-600">
                  Organization Structure
                </Link>
                <Link href="#" className="hover:text-hitam-600">
                  Help
                </Link>
              </div>
              <div className="flex gap-x-[18px]">
                <div className="flex gap-x-[14px] items-center">
                  <Link href="#">
                    <img
                      src="/socmeds/logo-facebook.png"
                      alt="Facebook"
                      height={20}
                      width={20}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-instagram.png"
                      alt="Instagram"
                      height={24}
                      width={24}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-youtube.png"
                      alt="YouTube"
                      height={24}
                      width={24}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-twitter.png"
                      alt="Twitter"
                      height={24}
                      width={21}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="/socmeds/logo-tiktok.png"
                      alt="TikTok"
                      height={24}
                      width={24}
                    />
                  </Link>
                </div>
                {/* <div className="w-[1px] bg-hitam-400" />
                <Select>
                  <SelectTrigger className="w-[116px] h-[32px] rounded-[16px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="id">Indonesian</SelectItem>
                  </SelectContent>
                </Select> */}
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div className="w-full max-w-[1440px] px-[50px] py-[8px] flex items-center justify-between mx-auto">
              <Link href="/">
                <img
                  src="/logo-npci.png"
                  alt="Logo NPCI"
                  width={119}
                  height={72}
                />
              </Link>
              <ul className="flex gap-x-[40px] text-hitam-400 text-[16px] font-[500] items-center">
                <li>
                  <Link
                    href="/"
                    className={cn(
                      'hover:text-hitam-900 transition-all duration-200',
                      {
                        'text-hitam-900': pathname === '/'
                      }
                    )}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="hover:text-hitam-900 transition-all duration-200">
                  <Select
                    onValueChange={value => {
                      if (value === 'sport') {
                        router.push('/sport');
                      } else {
                        router.push(`/sport/${value}`);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[90px] text-[16px] -mr-[10px] border-none z-50">
                      <SelectValue
                        placeholder="Sport"
                        className="active:outline-red-500"
                      />
                    </SelectTrigger>
                    <SelectContent className="max-h-96">
                      <SelectItem value="sport">Sport</SelectItem>
                      {sportCategory &&
                        sportCategory.map((category: any) => {
                          if (category.name_sport !== 'General News') {
                            return (
                              <SelectItem value={category.id} key={category.id}>
                                {category.name_sport}
                              </SelectItem>
                            );
                          }
                        })}
                    </SelectContent>
                  </Select>
                </li>
                <li>
                  <Link
                    href="/event"
                    className={cn(
                      'hover:text-hitam-900 transition-all duration-200',
                      {
                        'text-hitam-900': pathname === '/event'
                      }
                    )}
                  >
                    Event
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={cn(
                      'hover:text-hitam-900 transition-all duration-200',
                      {
                        'text-hitam-900': pathname === '/news'
                      }
                    )}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/athletes"
                    className={cn(
                      'hover:text-hitam-900 transition-all duration-200',
                      {
                        'text-hitam-900': pathname === '/athletes'
                      }
                    )}
                  >
                    Athletes
                  </Link>
                </li>
              </ul>
              <div className="w-[calc(361px+72px)] flex rounded-[8px] overflow-hidden invisible">
                <input
                  type="text"
                  className="w-full px-[16px] bg-hitam-50 focus:outline-none"
                  placeholder="What you're looking for?"
                />
                <button className="bg-biru-600 px-[24px] py-[16px] hover:bg-biru-500">
                  <FiSearch className="text-white" size={24} />
                </button>
              </div>
            </div>
          </section>
        </nav>
      </RenderIf>
    </>
  );
};

export default Navbar;
