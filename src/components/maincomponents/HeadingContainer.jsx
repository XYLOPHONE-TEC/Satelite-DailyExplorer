
import Heading from "../mircrocomponents/Heading"; 
import Desc from "../mircrocomponents/Desc";
import MovingSvg from "../mircrocomponents/Satelite";


export default function HeadingContainer(){
   
 return(
   
    <>
    <div className="head bg-neutral-900 relative -z-10 md:py-10 min-h-[350px] md:min-h-[440px]" id="head">
    <Heading/> 
    <Desc/>
    <MovingSvg/>
    </div>
   
    </>
 )
}