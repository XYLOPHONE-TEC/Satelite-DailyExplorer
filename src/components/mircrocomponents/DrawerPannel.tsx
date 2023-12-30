// import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
// import { useState } from "react";

import React from "react";

export default function DrawerPannel() {
  // const styleCollapse = {
  //   fill: "rgb(197, 60, 60)",
  //   fontSize: 25,
  // };
  // const styleExpand = {
  //   fill: "black",
  //   fontSize: 25,
  // };
  // const [sideBar, setSideBar] = useState(false);
 
  return(
    <> 
   <button onClick={()=>{alert("hello world")}} className="bg-white text-slate-500 p-2"> click me</button>
      {/* <div className="gird grid-cols-2">
        <div
          className="icon bg-white p-2 rounded-lg w-[50px]"
         
        >
          {sideBar ? (
            <GoSidebarCollapse style={styleCollapse} />
          ) : (
            <GoSidebarExpand style={styleExpand} />
          )}
        </div>
        <div className="lists"></div>
      </div> */}
    </>
  );
}
