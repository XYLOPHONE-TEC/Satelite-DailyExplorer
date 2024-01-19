import { filesAvailable } from "../../../public/js/fileRegistration"
import { useEffect,useState } from "react"
export default function Tabs(){
    const [tabs, setTabs]=useState([])
    const [dropdowns,setDropDowns]=useState([])
    const [restOfFiles,setRestOfFiles]=useState(false)
  //  document.onclick=function(event){
  //   if(event.target.innerHtml.&&restOfFiles){
  //     setRestOfFiles(true)
  //   } else{
  //     setRestOfFiles(false)  
  //   }
  //  }
    useEffect(()=>{
         let fullArray = filesAvailable.length+1
         setTabs(filesAvailable.slice(0,3))
         setDropDowns(filesAvailable.slice(3,fullArray))
    },[]) 
    return(
        <>
        <div className="parent">
             <div className="tab flex flex-row justify-between p-0 bg-slate-900 w-[85%] h-[50px] m-auto  md:w-[60%] ">
                {tabs.map((file,index)=>( <li key={index} className="hover:scale-110 transition-all ease-in-out p-2 h-[40px] w-[100%] text-slate-700 bg-stone-200 list-none no-underline text-center border-l-[1px] border-r-[1px] border-solid border-stone-500 hover:bg-slate-950 hover:text-slate-100 hover:cursor-pointer text-[13px] md:text-[15px]">{file.length>8?file.substring(0,8)+"..":file}</li>))}
                {dropdowns.length>0?<button role="button" type="button"  className=" RestOfFiles transition-all ease-in-out w-[20%] p-3 bg-stone-500 text-white hover:bg-stone-900 border-none relative text-[13px] md:text-[15px]" onClick={()=>{restOfFiles?setRestOfFiles(false):setRestOfFiles(true)}}>More{restOfFiles?<div className="absolute top-[51px] right-0 bg-stone-400 w-[200px] md:w-[300px]"><ul><li className="border-b-[1px] text-stone-900 border-solid bg-slate-300 border-slate-400 p-2 transition-all duration-150 hover:bg-zinc-800 text-left pl-3 hover:text-white hover:-translate-y-1">{"Hello this file to query"}</li></ul></div>:""} 
                   
                </button>:""}
             </div>
            
        </div>
     
        </>
    )
}