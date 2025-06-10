'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import circle1Img from '@/../public/1.question/blur-circle-1.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import circle3Img from '@/../public/1.question/blur-circle-3.png';
import circle4Img from '@/../public/1.question/blur-circle-4.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=> state );
  const psyData = usePsyStore( (state)=> state );


  const clickAnswer = function(option){

    
    nextStep();

    psyData.updateScore(psyData.score + option.value );

    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){
    let colorString = "";

    if(questionIndex == 0){
      colorString = prefix + "-[#FFB800]"; // 黃色
    }else if(questionIndex == 1){
      colorString = prefix + "-[#FF69B4]"; // 粉色
    }else if(questionIndex == 2){
      colorString = prefix + "-[#7CB342]"; // 青草綠
    }else if(questionIndex == 3){
      colorString = prefix + "-[#2196F3]"; // 藍色
    }else if(questionIndex == 4){
      colorString = prefix + "-[#FFB800]"; // 黃色
    }

    return colorString;
  }


  return (
    <>
      <MobileFrame>
        {questionIndex === 0 && <Image className='absolute top-0 -translate-y-1/2' src={circle1Img} alt='circle1Img' />}
        {questionIndex === 1 && <Image className='absolute top-0 -translate-y-1/2' src={circle3Img} alt='circle3Img' />}
        {questionIndex === 2 && <Image className='absolute top-0 -translate-y-1/2' src={circle2Img} alt='circle2Img' />}
        {questionIndex === 3 && <Image className='absolute top-0 -translate-y-1/2' src={circle4Img} alt='circle4Img' />}
        {questionIndex === 4 && <Image className='absolute top-0 -translate-y-1/2' src={circle1Img} alt='circle1Img' />}

        <div className='flex flex-col items-center gap-[26px]'>
          <div className={`${getMainColor('text')} border-2 ${getMainColor('border')} rounded-full w-[48px] h-[48px]
          flex justify-center items-center font-bold text-xl font-sans`}>
            Q{questionIndex+1}
          </div>
          
          <div 
            className={`text-center font-bold text-3xl ${
              questionIndex == 0 ? 'text-[#FFB800]' : 
              questionIndex == 1 ? 'text-[#FF69B4]' : 
              questionIndex == 2 ? 'text-[#7CB342]' :
              questionIndex == 3 ? 'text-[#2196F3]' :
              'text-[#FFB800]'
            } mb-[15px] font-sans`}
          > {questionData.questions[questionIndex+1].title} </div>


          {            
            questionData.questions[questionIndex+1].options.map( (option, index) => {
              const getButtonStyle = () => {
                if(questionIndex == 0) {
                  return `bg-[#FFD700] shadow-[0px_4px_0px_1px_#FFB800]`; // 黃色
                } else if(questionIndex == 1) {
                  return `bg-[#FFB6C1] shadow-[0px_4px_0px_1px_#FF69B4]`; // 粉色
                } else if(questionIndex == 2) {
                  return `bg-[#AED581] shadow-[0px_4px_0px_1px_#7CB342]`; // 青草綠
                } else if(questionIndex == 3) {
                  return `bg-[#64B5F6] shadow-[0px_4px_0px_1px_#2196F3]`; // 藍色
                } else {
                  return `bg-[#FFD700] shadow-[0px_4px_0px_1px_#FFB800]`; // 黃色
                }
              };

              return (
                <div 
                  key={`option-${index}`}
                  className={`${getButtonStyle()} w-full rounded-full text-white 
                    py-[16px] text-base flex justify-center items-center font-medium 
                    cursor-pointer hover:translate-y-0.5 transition relative z-10 font-sans`}
                  onClick={() => clickAnswer(option)}
                > 
                  {option.title} 
                </div>
              );
            })
          }
          
        </div>

        {questionIndex === 0 && <Image className='absolute bottom-0 translate-y-1/2' src={circle1Img} alt='circle1Img' />}
        {questionIndex === 1 && <Image className='absolute bottom-0 translate-y-1/2' src={circle3Img} alt='circle3Img' />}
        {questionIndex === 2 && <Image className='absolute bottom-0 translate-y-1/2' src={circle2Img} alt='circle2Img' />}
        {questionIndex === 3 && <Image className='absolute bottom-0 translate-y-1/2' src={circle4Img} alt='circle4Img' />}
        {questionIndex === 4 && <Image className='absolute bottom-0 translate-y-1/2' src={circle1Img} alt='circle1Img' />}
        
      </MobileFrame>
    </>
  );
}

