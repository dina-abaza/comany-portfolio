export default function ServicesBetter() {
  return (
    <section className="w-full flex justify-center bg-transparent py-[20px] px-[10px]">
      <div className="w-full  flex flex-col items-center">

        {/* الصندوق الأبيض اللي فيه السؤال */}
        <div className="w-full  h-[50px] md:h-[80px] bg-white flex items-center justify-center">
          <h4 className="text[18px] md:text-[24px] font-semibold text-black text-center">
            WHY IS OUR SERVICES BETTER?
          </h4>
        </div>

        <div className="mt-[20px]" />

        {/* السيكشن الكبير بخلفية سوداء */}
        <div className="w-full  bg-black flex flex-col justify-between mb-[100px] px-6 md:px-10 py-10 rounded-[8px]">

          {[
            { id: 1, title: "A COMPLETE TEAM", desc: "UI/UX, frontend, backend, and Flutter all in one place — we provide you with a complete journey from start to launch." },
            { id: 2, title: "QUALITY AND ATTENTION TO DETAIL", desc: "We focus on the user experience and clean code that makes your project scalable." },
            { id: 3, title: "PUNCTUALITY", desc: "We respect your time and ensure project delivery within the agreed timeframe without compromising on quality." },
            { id: 4, title: "CUSTOMIZED SOLUTIONS", desc: "There is no one-size-fits-all solution — we design and develop each project tailored to your needs." },
          ].map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start ${index !== 0 ? "mt-[72px]" : ""}`}
            >
              {/* الدائرة مع الفراغ والـ border */}
              <div className="relative flex items-center justify-center w-[50px] md:w-[82px] h-[50px] md:h-[82px] flex-shrink-0 mb-4 md:mb-0">
                {/* الخلفية البيضاء الداخلية */}
                <div className="absolute inset-[10px] bg-white rounded-full flex items-center justify-center">
                  <span className="text-[18px] font-medium text-black">
                    {item.id}
                  </span>
                </div>

                <div className="mt-[20px] flex flex-col justify-start" />

                {/* السيكشن الكبير بخلفية سوداء */}
                <div className="w-full  bg-black flex flex-col justify-between  px-6 md:px-10 py-10 rounded-[8px]">

                    <div className="w-full flex flex-col justify-start">
                        <div className="w-full  max-w-[1268px]  flex flex-col justify-between mb-[100px] px-6 md:px-10 py-10 rounded-[8px]">

                            {[
                                { id: 1, title: "A COMPLETE TEAM", desc: "UI/UX, frontend, backend, and Flutter all in one place — we provide you with a complete journey from start to launch." },
                                { id: 2, title: "QUALITY AND ATTENTION TO DETAIL", desc: "We focus on the user experience and clean code that makes your project scalable." },
                                { id: 3, title: "PUNCTUALITY", desc: "We respect your time and ensure project delivery within the agreed timeframe without compromising on quality." },
                                { id: 4, title: "CUSTOMIZED SOLUTIONS", desc: "There is no one-size-fits-all solution — we design and develop each project tailored to your needs." },
                            ].map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex flex-col md:flex-row items-start ${index !== 0 ? "mt-[72px]" : ""}`}
                                >
                                    {/* الدائرة مع الفراغ والـ border */}
                                    <div className="relative flex items-center justify-center w-[50px] md:w-[82px] h-[50px] md:h-[82px] flex-shrink-0 mb-4 md:mb-0">
                                        {/* الخلفية البيضاء الداخلية */}
                                        <div className="absolute inset-[10px] bg-white rounded-full flex items-center justify-center">
                                            <span className="text-[18px] font-medium text-black">
                                                {item.id}
                                            </span>
                                        </div>
                                        {/* البوردر الأبيض الخارجي */}
                                        <div className="absolute inset-0 rounded-full border-2 border-white" />
                                    </div>

                                    {/* النص */}
                                    <div className="md:ml-[20px] flex-1">
                                        <h5 className="text-[16px] md:text-[20px] font-semibold text-white mb-2">
                                            {item.title}
                                        </h5>
                                        <p className="text-[12px] md:text-[16px] text-[#E5E5E5]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );

}
