
import React from "react"

export default function Listing(props){
    return(
        <>
         <div className={`${props.dropCheck ?"block":"hidden"} lists w-[87.5%] bg-white shadow-2xl shadow-stone-900 m-auto absolute top-[100px] min-h-content max-h-[50vhz] overflow-x-scroll`}>
                <ul>
                    {
                        props.list.map((list,index)=>(
                            <li key={index} onClick={props.onclick} className= " transition-all p-3 py-1 text-[15px]  font-mono  hover:bg-neutral-700 hover:text-slate-50">Hello world this is a list{list} </li>    
                        ))
                    }
                    
                </ul>
        </div>
        </>
    )
}