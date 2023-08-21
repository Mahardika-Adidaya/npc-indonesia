'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { sportCategory } from '@/constants';
import { cn, convertToSlug } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="w-full h-fit drop-shadow-md sticky top-0 z-50">
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
                <Image
                  src="/socmeds/logo-facebook.png"
                  alt="Facebook"
                  height={20}
                  width={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/socmeds/logo-instagram.png"
                  alt="Instagram"
                  height={24}
                  width={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/socmeds/logo-youtube.png"
                  alt="YouTube"
                  height={24}
                  width={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/socmeds/logo-twitter.png"
                  alt="Twitter"
                  height={24}
                  width={21}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/socmeds/logo-tiktok.png"
                  alt="TikTok"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
            <div className="w-[1px] bg-hitam-400" />
            <Select>
              <SelectTrigger className="w-[116px] h-[32px] rounded-[16px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="id">Indonesian</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-full max-w-[1440px] px-[50px] py-[8px] flex items-center justify-between mx-auto">
          <Link href="/">
            <Image
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
              <Select onValueChange={value => router.push(value)}>
                <SelectTrigger className="w-[90px] border-none text-[16px] -mr-[10px]">
                  <SelectValue placeholder="Sport" />
                </SelectTrigger>
                <SelectContent>
                  {sportCategory.map(category => {
                    return (
                      <SelectItem
                        value={convertToSlug(category)}
                        key={category}
                      >
                        {category}
                      </SelectItem>
                    );
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
          <div className="w-[calc(361px+72px)] flex rounded-[8px] overflow-hidden">
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
  );
};

export default Navbar;
