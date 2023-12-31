
import Heading from "../mircrocomponents/Heading"; 
import Desc from "../mircrocomponents/Desc";
import MovingSvg from "../mircrocomponents/Satelite";
import React from "react";

export default function HeadingContainer(){
   
 return(
   
    <>
    <div className="head bg-neutral-900 relative -z-10 md:py-10 md:h-[500px] xl:w-[45%] m-auto" id="head">
    <Heading/> 
    <Desc/>
    <MovingSvg/>
   
    </div>
   
    </>
 )
}