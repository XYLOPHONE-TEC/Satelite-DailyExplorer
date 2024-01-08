import HeadingContainer from "./components/maincomponents/HeadingContainer"
import Panel from "./components/maincomponents/Panel"
import Tabs from "./components/maincomponents/Tabs"
import Interaction from "./components/maincomponents/Interaction"
function App() {
 
  return (
    <>
    <div className=" relative xl:w-[30%] m-auto">
    <HeadingContainer/>
    <Panel/>
    <Tabs/>
    <Interaction/>
    </div>
  
    </>
  )
}

export default App
