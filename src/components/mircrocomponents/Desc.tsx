import { useState, useEffect } from "react";
import Awareness from "./Awareness";
export default function Desc() {
  const [hello, setHello] = useState();
  let [textPosition,setTextPosition]= useState(0);
  const [aware,setAware] =useState()
  let[messagePosition,setMessagePosition]=useState(0)
  const messageArray = [
    "Where all our daily efforts gather to give a great development experience",
    "Making the development space a place of exploration and fun with the power of community"
  ];
  const awarenessText="Select a field of help to generate the snippet. The tool also AI powered for random explainations."

  const num = Math.floor(Math.random() * messageArray.length);
  const rounded = Math.round(num);
  const message = messageArray.find((item, index) => index == rounded);
  useEffect(() => {
    const TypeWriter = () => {
      const sent = message.substring(0, textPosition);
      setHello(sent);
      if (textPosition !== message.length) {
        setTextPosition(textPosition++)
        setTimeout(TypeWriter, 100);
      } else{
        const AwarenessMessage=()=>{
         const wordMessage=awarenessText.substring(0,messagePosition)
         setAware(wordMessage)
         if(messagePosition!==awarenessText.length){
          setMessagePosition(messagePosition++)
          setTimeout(AwarenessMessage,100)
         }
        }
        AwarenessMessage()
      }
    };

    TypeWriter();
  }, []); 

  return (
    <>
      <h3 className="text-white text-lg font-mono p-10 pt-5 pb-2 z-10 md:px-20 md:text-xl mdx:w-[85%] mdx:m-auto ">{hello}</h3>
      <Awareness awareness={aware}/>
    </>
  );
}
