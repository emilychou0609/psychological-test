'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import circle1Img from '@/../public/1.question/blur-circle-1.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
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
      colorString = prefix + "-[#90B62A]";
    }else if(questionIndex == 1){
      colorString = prefix + "-[#DD3E3E]";
    }else if(questionIndex == 2){
      colorString = prefix + "-[#1098EC]";
    }

    return colorString;
  }


  return (
    <>
      <MobileFrame>
        

        <Image className=' absolute top-0 -translate-y-1/2 ' src={circle2Img} alt='circle2Img' />

        


        <div className='flex flex-col items-center gap-[26px]'>
          <Image src={q1Up} className='w-[88px]' alt='q1Up' />

          <div className={`${getMainColor('text')} border-2 ${getMainColor('border')} rounded-full w-[48px] h-[48px]
          flex justify-center items-center font-bold text-xl font-sans`}>
            Q{questionIndex+1}
          </div>
          
          <div 
            className={`text-center font-bold text-3xl ${
              questionIndex == 0 ? 'text-[#90B62A]' : 
              questionIndex == 1 ? 'text-[#DD3E3E]' : 
              'text-[#1098EC]'
            } mb-[15px] font-sans`}
          > {questionData.questions[questionIndex+1].title} </div>


          {            
            questionData.questions[questionIndex+1].options.map( (option, index) => {
              const getButtonStyle = () => {
                if(questionIndex == 0) {
                  return `bg-[#BEE351] shadow-[0px_4px_0px_1px_#90B62A]`;
                } else if(questionIndex == 1) {
                  return `bg-[#DD3E3E] shadow-[0px_4px_0px_1px_#8D4509]`;
                } else {
                  return `bg-[#89BCFF] shadow-[0px_4px_0px_1px_#1098EC]`;
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
          

          <Image src={q1Down} className='w-[88px]' alt='q1Down' />

        </div>

        <Image className=' absolute bottom-0 translate-y-1/2 ' src={circle2Img} alt='circle2Img' />
        
      </MobileFrame>
    </>
  );
}

