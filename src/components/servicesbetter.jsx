export default function ServicesBetter() {
  return (
    <section className="w-full flex justify-center bg-transparent py-5 md:py-10 px-4">
      <div className="w-full flex flex-col items-center">

        {/* الصندوق الأبيض اللي فيه السؤال */}
        <div className="w-full h-[50px] md:h-[70px] bg-white flex items-center justify-center">
          <h4 className="text-[18px] md:text-[24px] font-semibold text-black text-center">
            WHY IS OUR SERVICES BETTER?
          </h4>
        </div>

        {/* السيكشن الكبير بخلفية سوداء */}
        <div className="w-full bg-black flex flex-col justify-between px-4 md:px-10 py-8 rounded-[8px] mt-8 md:mt-12">

          <div className="w-full max-w-[1268px] flex flex-col justify-between">

            {[
              { id: 1, title: "A COMPLETE TEAM", desc: "UI/UX, frontend, backend, and Flutter all in one place — we provide you with a complete journey from start to launch." },
              { id: 2, title: "QUALITY AND ATTENTION TO DETAIL", desc: "We focus on the user experience and clean code that makes your project scalable." },
              { id: 3, title: "PUNCTUALITY", desc: "We respect your time and ensure project delivery within the agreed timeframe without compromising on quality." },
              { id: 4, title: "CUSTOMIZED SOLUTIONS", desc: "There is no one-size-fits-all solution — we design and develop each project tailored to your needs." },
            ].map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-row items-start gap-4 md:gap-6 ${index !== 0 ? "mt-6 md:mt-10" : "mt-0"}`}
              >
                {/* الدائرة مع الرقم */}
                <div className="relative flex items-center justify-center w-[50px] md:w-[70px] h-[50px] md:h-[70px] flex-shrink-0">
                  <div className="absolute inset-[6px] md:inset-3 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[16px] md:text-[18px] font-medium text-black">{item.id}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-white" />
                </div>

                {/* النص */}
                <div className="flex-1">
                  <h5 className="text-[14px] md:text-[18px] font-semibold text-white mb-1 md:mb-2">
                    {item.title}
                  </h5>
                  <p className="text-[12px] md:text-[14px] text-[#E5E5E5] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
