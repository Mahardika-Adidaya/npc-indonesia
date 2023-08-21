'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const targetTime = moment('2024-01-01');

const EventCountdown = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[130px] flex flex-col ">
      <div
        className={cn(
          'font-helveticaNeue font-[700] w-full text-[24px] flex justify-between'
        )}
      >
        <span>{timeBetween.days()}</span>
        <span>:</span>
        <span>{timeBetween.hours()}</span>
        <span>:</span>
        <span>{timeBetween.minutes()}</span>
        <span>:</span>
        <span>{timeBetween.seconds()}</span>
      </div>
      <p className="flex justify-between font-[400] text-[14px]">
        <span>Days</span>
        <span>Hrs</span>
        <span>Min</span>
        <span>Sec</span>
      </p>
    </div>
  );
};

export default EventCountdown;
