'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function ResultPage() {

  const psyState = usePsyStore( (state) => state );

  const playAgain = function(){
    // todo: 重新整理頁面
    window.location.reload();
  }

  return (
    <>
      <MobileFrame>
        <div className='flex flex-col items-center justify-between h-full pt-[20px] pb-[40px] relative'>
          <Image className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10' src={circle1Img} alt='circle1Img' />
          
          <div className='relative z-10 w-full flex justify-center flex-1 mb-[20px]'>
            {
              psyState.score < 6 &&
              <Image src={result1} alt='result1' className='w-full max-w-[280px] object-contain' />
            }

            {
              (psyState.score >= 6 && psyState.score < 8) &&
              <Image src={result2} alt='result2' className='w-full max-w-[280px] object-contain' />
            }

            {
              psyState.score >= 8 &&
              <Image src={result3} alt='result3' className='w-full max-w-[280px] object-contain' />
            }
          </div>

          <div className='flex flex-col items-center gap-[20px] relative z-10 w-full pb-[20px]'>
            <div className='text-[#8B4513] text-sm'>
              🥐 想要再來一次嗎？ 🥐
            </div>
            <div 
              className={`bg-[#FFD700] w-full rounded-full text-[#8B4513] 
                py-[16px] text-base flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#B8860B] cursor-pointer hover:translate-y-0.5 
                transition hover:bg-[#FFE44D] active:translate-y-1`}
              onClick={playAgain}
            > 
              再玩一次
            </div>
          </div>

          <Image className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 -z-10' src={circle1Img} alt='circle1Img' />
        </div>
      </MobileFrame>
    </>
  );
}
