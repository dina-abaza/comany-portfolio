import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
   
 export default function ButtonsHome(){
    return(
<div className="flex justify-center items-center gap-6 mt-10">
          <PrimaryButton
           href="/contact" />
          <SecondaryButton 
          href="/our-work" />
        </div>
    )
   }
   