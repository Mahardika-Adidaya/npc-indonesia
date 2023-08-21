'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

interface PlayerProps {
  url: string[];
}
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Player: FC<PlayerProps> = ({ url }) => {
  const style = {
    borderRadius: '20px'
  };
  return (
    <>
      <ReactPlayer
        url={url}
        playing={true}
        width={1340}
        height={657}
        style={style}
      />
    </>
  );
};

export default Player;
