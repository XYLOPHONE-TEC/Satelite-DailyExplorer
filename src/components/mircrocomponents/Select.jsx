export default function Select(){
    return(
        <>
        <div className="select bg-slate-300 p-2 py-4 border-none w-[80%]   m-auto mt-5 mb-5 md:w-[50%] flex justify-center">
            <select name="select" className="w-[90%] py-3 rounded-none pl-4 bg-white   focus:border-slate-600 border-solid border-2 text-slate-500 font-mono">
                <option value="" className="">Value 1</option>
                <option value="" className="">Value 2</option>
                <option value="" className="">Value 3</option>
                <option value="" className="">Value 4</option>
                <option value="" className="">Value 5</option>
            </select>
        </div>
        </>
    )
}