'use client';

export default function MobileFrame({children}) {

  return (
    <>
      <div className="w-[33%] min-w-[380px] max-w-[420px] h-[85%] p-[52px] bg-[#FFF5E6] 
        rounded-2xl flex justify-center items-center
         relative overflow-y-auto
      ">
        {children}
      </div>
    </>
  );
  
}
