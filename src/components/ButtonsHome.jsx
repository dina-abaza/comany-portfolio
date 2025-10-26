import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
   
 export default function ButtonsHome(){
    return(
<div className="flex justify-center items-center gap-5 md:gap-6  mx-4 md:mx-0">
          <PrimaryButton
           href="/contact" />
          <SecondaryButton 
          href="/our-work" />
        </div>
    )
   }
   