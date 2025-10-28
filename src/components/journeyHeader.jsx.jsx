"use client";

export default function JourneyHeader() {
  return (
  <div className="w-full flex flex-col items-center justify-center mx-auto text-center">
  <div className="flex items-center justify-center w-full h-auto md:h-[40px]">
    {/* الخط اليمين */}
    <div className="flex-1 md:w-[470px] h-[6px] md:h-[14px] bg-white rounded-3xl" />

    {/* العنوان */}
    <h4 className="whitespace-nowrap  text-[18px] md:text-[24px] font-bold text-white mx-2 md:mx-8 break-words text-center">
      our journey with each project
    </h4>

    {/* الخط الشمال */}
    <div className="flex-1 md:w-[470px] h-[6px] md:h-[14px] bg-white rounded-3xl" />
  </div>

  {/* النص التوضيحي */}
  <div className="mt-5 md:mt-[40px]">
    <h5 className="w-full max-w-[1268px] text-[12px] md:text-[20px] text-white tracking-[1px] text-center uppercase">
      WE WORK WITH CLEAR STEPS THAT ENSURE YOU HIGH QUALITY, ON-TIME DELIVERY, AND A UNIQUE EXPERIENCE FROM START TO FINISH.
    </h5>
  </div>
</div>

  );
}
