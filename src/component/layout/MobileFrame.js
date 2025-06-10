'use client';

export default function MobileFrame({children}) {

  return (
    <>
      <div className="w-full h-full p-[52px] bg-[#FFF5E6] 
        flex justify-center items-center
        relative overflow-y-auto
      ">
        {children}
      </div>
    </>
  );
  
}
