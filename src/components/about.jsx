import PrimaryButton from './buttons/PrimaryButton';
import Header from './Header';
const Com_AboutPage = () => {
    return (
        <div className="bg-black text-white  w-full  mt-10">
            {/* هنا سيتم تضمين المكونات المختلفة لصفحة من نحن */}

            <Header title={"WE ARE A COMPREHENSIVE DESIGN AND DEVELOPMENT TEAM DEDICATED TO CREATING SUCCESSFUL DIGITAL EXPERIENCES."}
                description={"FROM DESIGN TO PROGRAMMING AND DELIVERY, WE WORK TOGETHER AS ONE TEAM TO TRANSFORM YOUR IDEA INTO A REAL DIGITAL PRODUCT."}
            />


            {/* Team Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* الصف الأول */}
                    <div className="flex flex-col items-center">
                        <img src="/team_photos/Ellipse 8-1.png" alt="Rachda Helmy" className="sm:w-[198px] sm:h-[198px] w-32 h-32 rounded-full object-cover border-2 border-[#10A700]" />
                        <p className="mt-4 text-lg font-semibold">RAGHDA HELMY</p>
                        <p className="text-sm text-gray-400">BACKEND DEVELOPER</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="/team_photos/WhatsApp Image 2025-10-23 at 18.01.30_f7cf8215.jpg" alt="Dina Abaza" className="sm:w-[198px] sm:h-[198px] w-32 h-32 rounded-full object-cover border-2 border-[#10A700]" />
                        <p className="mt-4 text-lg font-semibold">DINA ABAZA</p>
                        <p className="text-sm text-gray-400">FRONTEND DEVELOPER</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="/team_photos/Ellipse 8-4.png" alt="Youssef Tame" className="sm:w-[198px] sm:h-[198px] w-32 h-32 rounded-full object-cover border-2 border-[#10A700]" />
                        <p className="mt-4 text-lg font-semibold">YOUSSEF TAME</p>
                        <p className="text-sm text-gray-400">SOFTWARE DEVELOPER</p>
                    </div>

                    {/* الصف الثاني */}
                    <div className="flex flex-col items-center col-span-1 md:col-span-3 md:justify-self-center md:flex-row gap-16 lg:col-span-2  lg:justify-self-auto">
                        {/* رمضان */}
                        <div className="flex flex-col items-center">
                            <img src="/team_photos/Ellipse 8-3.png" alt="Ramadan Mahdy" className=" sm:w-[198px] sm:h-[198px] w-32 h-32 rounded-full object-cover border-2 border-[#10A700]" />
                            <p className="mt-4 text-lg font-semibold">RAMADAN MAHDY</p>
                            <p className="text-sm text-gray-400">BACKEND DEVELOPER</p>
                        </div>

                        {/* أحمد */}
                        <div className="flex flex-col hidden sm:block items-center">
                            <img src="/team_photos/Ellipse 8-2.png" alt="Ahmed Saber" className="sm:w-[198px] sm:h-[198px] w-32 h-32 rounded-full object-cover border-2 border-[#10A700]" />
                            <p className="mt-4 text-lg font-semibold">AHMED SABER</p>
                            <p className="text-sm text-gray-400">UI/UX DESIGNER</p>
                        </div>
                    </div> 
                    {/* أحمد */}
                    <div className="flex flex-col block sm:hidden col-span-2 items-center justify-center">
                        <img src="/team_photos/Ellipse 8-2.png" alt="Ahmed Saber" className="sm:w-[198px] sm:h-[198px] w-32 h-32 rounded-full object-cover border-2 border-[#10A700]" />
                        <p className="mt-4 text-lg font-semibold">AHMED SABER</p>
                        <p className="text-sm text-gray-400">UI/UX DESIGNER</p>
                    </div>
                </div>
            </section>
 

            {/* Who We Are Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-black text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8">WHO WE ARE</h3>
                    <p className="text-lg leading-relaxed">
                        WE ARE A TEAM PASSIONATE ABOUT DESIGN AND DEVELOPMENT. ALTHOUGH WE ARE A STARTUP TEAM, OUR STRENGTH LIES IN
                        COLLABORATION AND TEAM SPIRIT. WE HAVE DIVERSE EXPERTISE IN UI/UX, FRONT-END DEVELOPMENT, BACK-END
                        PROGRAMMING, AND MOBILE APP DEVELOPMENT. OUR GOAL IS TO PROVIDE MODERN DIGITAL SOLUTIONS THAT SERVE YOUR
                        PROJECT AND MEET YOUR CUSTOMERS' EXPECTATIONS.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8">MISSION & VISION</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        HELPING YOU TURN YOUR IDEAS INTO DIGITAL PRODUCTS WITH REAL VALUE
                    </p>
                    <p className="text-lg leading-relaxed">
                        TO BECOME A TRUSTED TEAM FOR COMPANIES AND INDIVIDUALS SEEKING QUALITY, SPEED, AND INNOVATION.
                    </p>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-black border-t-[1px] border-b-[1px] border-[#fff] text-white text-center">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8">OUR VALUES</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                        <div className="flex flex-col items-center">
                            <div className="w-[222px] h-[222px] py-[96px] px-[66px] rounded-full border-2 border-white flex items-center justify-center mb-[32px]">
                                <span className="text-xl font-bold">QUALITY</span>
                            </div>
                            <p className="text-sm text-gray-400">WE STRIVE TO PROVIDE THE BEST POSSIBLE EXPERIENCE</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[222px] h-[222px] py-[96px] px-[66px] rounded-full border-2 border-white flex items-center justify-center mb-[32px]">
                                <span className="text-xl font-bold">COMMITMENT</span>
                            </div>
                            <p className="text-sm text-gray-400">WE RESPECT DEADLINES AND KEEP OUR PROMISES</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[222px] h-[222px] py-[96px] px-[66px] rounded-full border-2 border-white flex items-center justify-center mb-[32px]">
                                <span className="text-xl font-bold">COOPERATION</span>
                            </div>
                            <p className="text-sm text-gray-400">WE WORK AS ONE TEAM WITH OUR CLIENTS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[222px] h-[222px] py-[96px] px-[66px] rounded-full border-2 border-white flex items-center justify-center mb-[32px]">
                                <span className="text-xl font-bold">INNOVATION</span>
                            </div>
                            <p className="text-sm text-gray-400">WE KEEP UP WITH THE LATEST TRENDS AND TECHNOLOGIES</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="p-[100px] bg-[#000] border-b-[1px] border-[#fff] text-white text-center flex justify-center">
                <div className="w-[100%] lg:w-[80%]">
                    <h3 className="text-2xl font-bold mb-8">WHY CHOOSE US</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-[44px]">
                        <div className="bg-white text-black p-[20px] rounded-lg shadow-lg flex items-center justify-center">
                            <p className="font-semibold">A COMPLETE TEAM (UI/UX + FRONTEND + BACKEND + FLUTTER)</p>
                        </div>
                        <div className="bg-white text-black p-[20px] rounded-lg shadow-lg flex items-center justify-center">
                            <p className="font-semibold">REASONABLE PRICE TO START WITH PROFESSIONAL QUALITY</p>
                        </div>
                        <div className="bg-white text-black p-[20px] rounded-lg shadow-lg flex items-center justify-center">
                            <p className="font-semibold">CUSTOMIZED SOLUTIONS TO SUIT EVERY CLIENT</p>
                        </div>
                        <div className="bg-white text-black p-[20px] rounded-lg shadow-lg flex items-center md:col-span-3 md:justify-self-center w-full md:w-[30%] lg:w-[31%]
 justify-center">
                            <p className="font-semibold">FOCUS ON THE USER EXPERIENCE, NOT JUST THE CODE</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8">READY TO START WITH OUR TEAM? LET'S BUILD YOUR NEXT PROJECT TOGETHER.</h3>
                    <div className="flex justify-center gap-4">
                        <PrimaryButton href="/contact" />
                        {/* <button className="bg-[#10A700] text-black font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition">START YOUR PROJECT NOW</button> */}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Com_AboutPage;