'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

interface PlayerProps {
  url: string[];
}
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Player: FC<PlayerProps> = ({ url }) => {
  return (
    <div className="h-[168.8px] md:h-[336px] xl:h-[657px] w-full rounded-[4px] md:rounded-[12px] xl:rounded-[20px] overflow-hidden">
      <ReactPlayer url={url} playing={true} width="100%" height="100%" />
    </div>
  );
};

export default Player;
