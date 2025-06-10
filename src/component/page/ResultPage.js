'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.jpg';
import result2 from '@/../public/4.result/result-2.jpg';
import result3 from '@/../public/4.result/result-3.jpg';
import result4 from '@/../public/4.result/result-4.jpg';
import result5 from '@/../public/4.result/result-5.jpg';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function() {
    window.location.reload();
  }

  const renderResult = () => {
    const results = [
      {
        condition: psyState.score < 6,
        image: result1,
        title: '策略型玩家',
        description: '你是一個冷靜的戰略家，善於分析局勢並做出最佳決策。雖然可能不是最耀眼的玩家，但你的穩健打法往往能帶來意想不到的勝利。',
        color: '#8B4513'
      },
      {
        condition: psyState.score >= 6 && psyState.score < 8,
        image: result2,
        title: '創意型玩家',
        description: '你喜歡嘗試新奇的組合和戰術，常常能開發出獨特的打法。雖然有時會失敗，但你的創意總能為遊戲帶來新的樂趣。',
        color: '#8B4513'
      },
      {
        condition: psyState.score >= 8 && psyState.score < 10,
        image: result3,
        title: '競技型玩家',
        description: '你追求勝利和進步，願意投入大量時間研究遊戲。你的實力在不斷提升，是賽場上的有力競爭者。',
        color: '#8B4513'
      },
      {
        condition: psyState.score >= 10 && psyState.score < 12,
        image: result4,
        title: '社交型玩家',
        description: '你享受與其他玩家互動的過程，樂於分享經驗和技巧。你的熱情和友善讓遊戲社群更加活躍。',
        color: '#8B4513'
      },
      {
        condition: psyState.score >= 12,
        image: result5,
        title: '全能型玩家',
        description: '你兼具策略、創意、競技和社交能力，是遊戲中的全能型選手。無論是比賽還是休閒，你都能找到屬於自己的樂趣。',
        color: '#8B4513'
      }
    ];

    const result = results.find(r => r.condition);

    return (
      <div className='text-center w-full max-w-[320px] mx-auto'>
        <div className='mb-6'>
          <Image 
            src={result.image} 
            alt={result.title} 
            className='w-full h-auto object-contain' 
            width={320}
            height={320}
            priority
          />
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold bg-gradient-to-r from-[#B95F0F] to-[#FFB800] text-transparent bg-clip-text'>
            {result.title}
          </h2>
          <p className='text-[#8B4513] text-sm leading-relaxed'>
            {result.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <MobileFrame>
        <div className='flex flex-col items-center justify-between h-full pt-[20px] pb-[40px] relative'>
          <Image 
            className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10' 
            src={circle1Img} 
            alt='circle1Img' 
          />
          
          <div className='relative z-10 w-full flex justify-center flex-1 mb-[20px] px-4'>
            {renderResult()}
          </div>

          <div className='flex flex-col items-center gap-[20px] relative z-10 w-full px-4 pb-[20px]'>
            <div className='text-[#8B4513] text-sm font-medium'>
              想要再來一次嗎？
            </div>
            <button 
              className='w-full bg-gradient-to-r from-[#FFD700] to-[#FFB800] rounded-full 
                text-[#8B4513] py-[16px] text-base font-medium 
                shadow-[0px_4px_0px_1px_#B8860B] cursor-pointer 
                hover:translate-y-0.5 transition-all duration-300 
                hover:shadow-[0px_6px_0px_1px_#B8860B] 
                active:translate-y-1 active:shadow-[0px_2px_0px_1px_#B8860B]'
              onClick={playAgain}
            > 
              再玩一次
            </button>
          </div>

          <Image 
            className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 -z-10' 
            src={circle1Img} 
            alt='circle1Img' 
          />
        </div>
      </MobileFrame>
    </>
  );
}
