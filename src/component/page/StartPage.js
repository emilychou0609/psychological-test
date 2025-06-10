'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import startBtn from '@/../public/0.start/startBtn.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col gap-[60px]'>
          <Image className=' absolute top-0 -translate-y-1/2 ' src={circle1Img} alt='circle1Img' />
          <div className='relative'>
            <h1 className='text-[32px] font-bold text-center animate-float'>
              <span className='bg-gradient-to-r from-[#B95F0F] to-[#FFB800] text-transparent bg-clip-text'>
                命運抽牌：
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#FFB800] to-[#B95F0F] text-transparent bg-clip-text'>
                揭開你的玩家本性
              </span>
            </h1>
            <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#B95F0F] to-transparent'></div>
          </div>
          <div className='text-[#B95F0F] font-[500] text-center text-[14px]
           leading-loose tracking-wide '>
            有些人天生就是策略大師，有些人則是運氣王者。<br/>
            你精心組建牌組、研究戰術、等待時機，
            結果還是輸得一塌糊塗...<br/>
            沒關係，這世界不缺完美牌手，
            缺的是——像你一樣獨特的卡牌玩家。<br/>
            現在，就來看看你是什麼類型的卡牌玩家吧！
          </div>
          <Image onClick={nextStep} className='w-[160px]' src={startBtn} alt='startBtn' />
          <Image className=' absolute bottom-0 translate-y-1/2 pointer-events-none ' src={circle1Img} alt='circle1Img' />
        </div>
      </MobileFrame>
    </>
  );
}
