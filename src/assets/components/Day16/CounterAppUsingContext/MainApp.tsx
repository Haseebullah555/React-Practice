import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import { CounterContext } from "../CounterContext";

function MainApp1() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CounterContext.Provider value={{ count, setCount }}>
                <CounterDisplay />
                <CounterButtons />
            </CounterContext.Provider>
        </>
    )
}
export default MainApp1;