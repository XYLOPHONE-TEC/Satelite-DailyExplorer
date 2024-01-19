import {GoCopy,GoTelescope} from "react-icons/go"

export default function CodeHandler(){
    const style={
        fill:'white',
        fontSize:'20px'
    }
    return(
        <>
        <div className="p-0 w-[85%] max-h-[60%] m-auto md:w-[80%]">
            <div className="name flex flex-row justify-between p-1 bg-slate-600 md:p-2">
                <p className="font-mono text-[20px] text-slate-50 text-left px-3">Code</p>
                <div className="icon flex flex-row gap-5 p-2">
                    <span className="" title="High-light any substring to get AI explaination support"><GoTelescope style={style}/></span>
                    <span className="" title="Copy code"><GoCopy style={style}/></span> 
                </div>
            </div>
            <section className="">

            </section>
        </div>
        </>
    )
}