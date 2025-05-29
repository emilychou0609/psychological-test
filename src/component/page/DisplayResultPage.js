'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex flex-col items-center gap-[40px] relative'>
          <Image className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10' src={circle1Img} alt='circle1Img' />
          
          <div className='text-center relative z-10'>
            <div className='text-[#B95F0F] text-4xl font-bold mb-4 animate-bounce'>
              準備好了嗎？
            </div>
            <div className='text-[#8B4513] text-lg leading-relaxed'>
              讓我們來看看<br/>
              你是什麼等級的<br/>
              <span className='text-[#B95F0F] font-bold text-2xl'>失控可頌</span>
            </div>
          </div>

          <div className='flex flex-col items-center gap-4 relative z-10'>
            <div className='text-[#8B4513] text-sm'>
              🥐 點擊下方按鈕揭曉答案 🥐
            </div>
            <div 
              className={`bg-[#FFD700] w-full rounded-full text-[#8B4513] 
                py-[16px] text-base flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#B8860B] cursor-pointer hover:translate-y-0.5 
                transition hover:bg-[#FFE44D] active:translate-y-1`}
              onClick={nextStep}
            > 
              查看我的可頌等級
            </div>
          </div>

          <Image className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 -z-10' src={circle1Img} alt='circle1Img' />
        </div>
      </MobileFrame>
    </>
  );
}
