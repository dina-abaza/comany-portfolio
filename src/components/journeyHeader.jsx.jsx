
"use client";

export default function JourneyHeader() {
  return (
    <div className="w-[1440px] flex flex-col items-center justify-center mx-auto text-center">
      {/* الجزء العلوي: الخطين والعنوان */}
      <div className="flex items-center justify-center w-full h-[40px]">
        {/* الخط اليمين */}
        <div className="w-[470px] h-[18px] bg-white rounded-3xl" />

        {/* العنوان */}
        <h4 className="text-[24px] font-bold text-white mx-[32px] whitespace-nowrap">
          our journey with each project
        </h4>

        {/* الخط الشمال */}
        <div className="w-[470px] h-[18px] bg-white rounded-3xl" />
      </div>

      {/* تصحيح المسافة: نستخدم wrapper واضح بالـ mt بدل my على اله٥ */}
      <div className="mt-[40px]"> {/* <-- هنا نضمن المارجن يعمل */}
        <h5 className="w-[1268px] h-[60px] text-[20px] text-white tracking-[1px] text-center uppercase">
          WE WORK WITH CLEAR STEPS THAT ENSURE YOU HIGH QUALITY, ON-TIME DELIVERY, AND A UNIQUE EXPERIENCE FROM START TO FINISH.
        </h5>
      </div>
    </div>
  );
}
