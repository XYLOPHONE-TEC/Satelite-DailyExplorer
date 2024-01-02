import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useState } from "react";
import style from "../../../public/css/Drawer.module.css"
import React from "react";
import NavbarDeveloperLists from "../../assets/jsonData/NavbarDeveloperLists.json"

export default function DrawerPannel() {
  const styleCollapse = {
    fill: "rgb(197, 60, 60)",
    fontSize: 25,
  };
  const styleExpand = {
    fill: "rgb(100, 100, 100)",
    fontSize: 25,
  };
 
  const [sideBar, setSideBar] = useState(false);
 

 const handleClick =()=>{
  if(sideBar){
    setSideBar(false)

  }else{
    setSideBar(true)
  }
 }


 
  return(
    <>
       <div className={`flex flex-row   fixed  backdrop-opacity-40 backdrop-invert bg-black/30 top-9 right-0 z-20 ${sideBar?"  w-[50%] sm:w-[300px]":" w-0" } xl:absolute`} >
        <button role="button" type="button"className={`icon bg-white p-1 w-[35px] h-[35px] hover:bg-slate-200 ${sideBar?"static bg-zinc-200 ":"fixed top top-9 right-0"}`} onClick={handleClick}>
          {sideBar ? (
            <GoSidebarCollapse style={styleCollapse} />
          ) : (
            <GoSidebarExpand style={styleExpand} />
          )}
        </button>
        <div className={`lists w-[100%] ${sideBar?" block":"hidden"} `}>
          <ul className="">
           {
            NavbarDeveloperLists.map((item,index)=>( <li key={index} className="border-b-[1px] text-stone-900 border-solid bg-slate-50 border-slate-400 p-2 transition-all duration-150 hover:bg-zinc-800 hover:text-white hover:-translate-y-2">{item.name}</li>))
           }
          
          </ul>
        </div>
      </div>
   
        
    </>
  );
}

