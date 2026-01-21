import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

function MainApp(){
    const [count, setCount] = useState(0);
    return(
        <>
            <CounterDisplay count ={count}/>
            <CounterButtons setCount={setCount}/>
        </>
    )
}
export default MainApp;