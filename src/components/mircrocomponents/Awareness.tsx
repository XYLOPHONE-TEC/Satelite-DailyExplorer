import React from "react"


export default function Awareness({awareness}:{awareness:string}){
    return(
        <>
        <h4 className="text-xl text-blue-100 p-10 pt-3 md:px-20 md:text-2xl mdx:w-[85%] mdx:m-auto">{awareness}</h4>
        </>
    )
}