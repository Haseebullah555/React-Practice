import { useContext } from "react";
import { CounterContext } from "../CounterContext";

function CounterDisplay(){
    const context = useContext(CounterContext);

    if (!context) return null;
    
    return <h1 className="text-white">Count: {context.count}</h1>
}
export default CounterDisplay;