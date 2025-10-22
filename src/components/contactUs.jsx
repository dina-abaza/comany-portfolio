import { LuPhone, LuMail, LuMapPin, LuPin, LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu";
export default function Com_ContactUs() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 font-sans w-full">
            <div className="mx-auto flex flex-col justify-center lg:items-center">

                {/* العنوان والوصف */}
                <div className="text-center flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-[#10A700] mb-4">
                        Start your project with us today
                    </h2>
                    <p className="mb-10 text-[#FFFFFF] max-w-[700px]">
                        Whether you have a new idea or an existing project that needs development, our team is ready to help you build a successful digital experience.
                    </p>
                </div>

                {/* الفورم + معلومات التواصل */}
                <div className="flex flex-col sm:flex-row gap-9 md:gap-10 justify-center items-start w-full">

                    {/* النموذج */}
                    <form className="space-y-6 w-full sm:w-[573px] font-bold text-black bg-[#fff] p-[32px] flex flex-col gap-[32px] rounded-[16px] h-auto sm:h-[798px]">
                        <input
                            type="text"
                            placeholder="FULL NAME"
                            className="w-full border border-gray-300 rounded-[16px] px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-[16px] px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="tel"
                            placeholder="PHONE"
                            className="w-full border border-gray-300 rounded-[16px] px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-[#000] font-bold">A brief description of the idea</p>
                        <textarea
                            rows="5"
                            placeholder="Add text"
                            className="w-full border border-gray-300 rounded-[16px] px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white font-medium px-6 py-3 rounded-[16px] hover:bg-blue-600 w-full transition"
                        >
                            SEND
                        </button>
                    </form>

                    {/* معلومات التواصل */}
                    <div className="w-full sm:w-[649px] h-auto sm:h-[798px] flex flex-col sm:gap-12 gap-5 text-[#FFFFFF] text-left">

                        {/* الإيميل */}
                        <div className="flex flex-col py-[47px] px-[32px] rounded-[16px] bg-[#fff] items-start gap-2 h-[155px]">
                            <div className="flex flex-col gap-2 h-[70px]">
                                <div className="flex items-center text-[#000] gap-2">
                                    <LuMail
                                        size={30}
                                        className="stroke-black fill-white w-[24px] h-[24px]"
                                    />
                                    <span className="font-bold">Email address</span>
                                </div>
                                <p className="text-[#424242] p-0">Aroura@team.gmail.com</p>
                            </div>
                        </div>

                        {/* الهاتف */}
                        <div className="flex flex-col py-[47px] px-[32px] h-[165px] rounded-[16px] bg-[#fff] items-start gap-2">
                            <div className="flex items-center text-[#000] text-[16px] gap-2">
                                <LuPhone
                                    size={24}
                                    className="stroke-black fill-white w-[24px] h-[24px]"
                                />
                                <span className="font-bold">Phone number</span>
                            </div>
                            <p className="text-[#424242] text-[16px]">012 3456789</p>
                        </div>

                        {/* الموقع */}
                        <div className="flex flex-col py-[47px] px-[32px] h-[165px] rounded-[16px] bg-[#fff] items-start gap-2">
                            <div className="flex items-center text-[#000] gap-2">
                                <LuPin className="w-[24px] h-[24px]" />
                                <span className="font-bold">Location</span>
                            </div>
                            <p className="text-[#424242]">Cairo, Egypt</p>
                            <p className="text-[#424242] text-[14px]">
                                We work with our clients from all around the world.
                            </p>
                        </div>

                        {/* السوشيال ميديا */}
                        <div className="flex flex-col py-[47px] px-[32px] h-[165px] rounded-[16px] bg-[#fff] items-start gap-[16px]">
                            <span className="font-bold text-[#000]">Our social media</span>
                            <div className="flex items-center text-[#000] gap-[16px]">
                                <LuLinkedin className="w-[24px] h-[24px]" />
                                <LuFacebook className="w-[24px] h-[24px]" />
                                <LuInstagram className="w-[24px] h-[24px]" />
                                <LuTwitter className="w-[24px] h-[24px]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* قسم الأسئلة FAQ */}
                <div className="w-full lg:w-[1264px] bg-[#fff] p-[32px] flex flex-col gap-5 text-[#000] rounded-[16px] justify-center text-left mt-10">
                    <p className="font-bold">FAQ</p>
                    <p>
                        Do I need to have a complete idea?
                        <span className="text-[#424242]"> No, we help you from the very first stage.</span>
                    </p>
                    <p>
                        Do you provide support after delivery?
                        <span className="text-[#424242]"> Yes, we offer maintenance packages.</span>
                    </p>
                    <p>
                        Is it possible for you to start with a small project?
                        <span className="text-[#424242]"> Of course, we work with startups and individuals.</span>
                    </p>
                </div>

            </div>
        </section>

    );
}
