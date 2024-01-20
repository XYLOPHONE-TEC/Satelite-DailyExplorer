import { useState } from "react"
import {GoTriangleDown} from "react-icons/go"
import Listing from "./Lists"
export default function Search(){

    const [list,setList]=useState(false)
    const setter=()=>{
        if(list){
            setList(false)
        }else{
            setList(true)
        }
    }
    const style={
        fill:'white',
        fontSize:'20px'
    }
    const listArray=["hello world this is a list","hello world this is a list","hello world this is a list","hello world this is a list","hello world this is a list","hello world this is a list"]
    return(
        <>
        <div className="bg-slate-400 p-2 py-4 border-none w-[80%] h-[114px] relative m-auto mt-5 mb-5 md:w-[50%]">
            <p className=" text-[15px] text-center pb-2 text-stone-900  font-mono md:text-left pl-4 md:text-[20px]"> Search a snippet in {"Git"}</p>
            <div className=" flex flex-row w-[100%] m-auto ">
                <input type="text" className="w-[90%] py-2 pl-4 focus:border-slate-600 border-solid border-2 text-slate-500 font-mono" />
                <span onClick={setter} className="p-2 w-[10%]  block justify-center mt-1 absolute right-0 bg-slate-600 focus:bg-white md:w-[32px]" title="Select from dropdowm">{<GoTriangleDown style={style}/>}</span>
            </div>
           <Listing dropCheck={list} list={listArray} />
        </div>
        </>
    )
} 