import { filesAvailable } from "../../../public/js/fileRegistration"
import { useEffect,useState } from "react"
export default function Tabs(){
    const [tabs, setTabs]=useState([])
    const [dropdowns,setDropDowns]=useState([])
   
    useEffect(()=>{
         let fullArray = filesAvailable.length+1
         setTabs(filesAvailable.slice(0,3))
         setDropDowns(filesAvailable.slice(3,fullArray))
    },[]) 
    return(
        <>
        <div className="parent">
             <div className="tab flex flex-row justify-between p-0 bg-slate-900 w-[80%] h-[50px] m-auto md:w-[50%]">
             {tabs.map((file,index)=>( <li key={index} className="hover:scale-110 transition-all ease-in-out p-2 h-[40px] w-[30%] text-slate-700 bg-stone-200 list-none no-underline text-center border-r-[1px] border-solid border-stone-500 hover:bg-slate-950 hover:text-slate-100 hover:cursor-pointer text-[15px]  ">{file}</li>))}
             {dropdowns.length<1?<button role="button" type="button" className=" transition-all ease-in-out w-[10%] text-[15px] p-3 bg-stone-500 text-white hover:bg-stone-900 border-none">More</button>:""}
            </div>
           
        </div>
     
        </>
    )
}