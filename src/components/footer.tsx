import Image from 'next/image';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
const Footer = () => {
  return (
    <footer>
      <section className="bg-hitam-50 w-full">
        <div className="py-[62px] px-[116px] w-full max-w-[1440px] mx-auto flex items-center justify-between">
          <Image
            src="/logo-npci.png"
            alt="Logo NPCI"
            width={276}
            height={179}
          />
          <div className="gap-y-[12px] w-full max-w-[432px]">
            <span className="flex flex-col text-[20px]">
              <h2 className="font-[700] text-[20px]">
                OFFICIAL WEBSITE OF THE PARALYMPIC MOVEMENT
              </h2>
              <h3 className="font-[500] text-hitam-600 text-[20px]">
                National Paralympic Committee of Indonesia
              </h3>
            </span>
            <h4 className="font-[400] text-[18px] text-hitam-400 mt-2">
              Komite Paralimpiade Nasional Indonesia adalah organisasi pembina
              atlet penyandang disabilitas di Indonesia
            </h4>
          </div>
          <div className="flex flex-col gap-y-[40px] text-[16px] font-[500]">
            <div className="flex gap-x-[16px] items-center">
              <FaLocationDot size={24} />
              Jl. Ir Sutami 86 Surakarta, Indonesia
            </div>
            <div className="flex gap-x-[16px] items-center">
              <FaPhoneVolume size={24} />
              (+62) 271 636486
            </div>
            <div className="flex gap-x-[16px] items-center">
              <HiMail size={24} />
              npcindonesia@gmail.com
            </div>
          </div>
        </div>
      </section>
      <section className="bg-hitam-900 w-full">
        <div className="text-white text-center py-[28px] w-full max-w-[1440px] mx-auto text-[16px]">
          © Copyright 2023. National Paralympic
        </div>
      </section>
    </footer>
  );
};

export default Footer;
