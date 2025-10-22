import Header from "@/components/HeaderHome";
import ImagesHome from "@/components/ImagesHome";
import ButtonsHome from "@/components/ButtonsHome";
import DescriptionHome from "@/components/DescriptionHome";
export default function Home() {
  return (
  <div className="flex flex-col gap-10">
    <Header title="a comprehensive design and programming team to build your next project"
     description="from ui/ux to frontend,backend and flutter development  we provide you  with every thing you need to turn your idea into a live and successful product."/>

     <ImagesHome/>
     <ButtonsHome/>
     <DescriptionHome/>
  </div>
  );
}
