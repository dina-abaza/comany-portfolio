import Header from "@/components/Header";
import ImagesHome from "@/components/ImagesHome";
import ButtonsHome from "@/components/ButtonsHome";
import DescriptionHome from "@/components/DescriptionHome";
import JourneyHeader from "@/components/journeyHeader.jsx";
import JourneySection from "@/components/journeySection";
import PrimaryButton from "@/components/buttons/PrimaryButton";
export default function Home() {
  return (
  <div className="flex flex-col gap-5 md:gap-10 mt-10 ">
    <Header title="a comprehensive design and programming team to build your next project"
     description="from ui/ux to frontend,backend and flutter development  we provide you  with every thing you need to turn your idea into a live and successful product."/>

     <ImagesHome/>
     <ButtonsHome/>
     <DescriptionHome/>
     <JourneyHeader/>
     <JourneySection/>
   <div className="flex justify-center items-center mb-12">
  <PrimaryButton href={"/contact"} text= "START YOUR PROJECT NOW" />

  </div>
  </div>
  );
}
