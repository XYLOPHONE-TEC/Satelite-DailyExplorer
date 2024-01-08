// import { useState } from "react"
import {GoTriangleDown} from "react-icons/go"

export default function Search(){

    // const [list,setList]=useState(false)
    return(
        <>
        <div className="">
            <p className=""> Search a snippet in {"Git"}</p>
            <div className="div flex flex-row">
                <input type="text" className="" />
                <span className=" ">{<GoTriangleDown/>}</span>
            </div>
        </div>
        </>
    )
} 