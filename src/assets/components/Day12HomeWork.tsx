import { useEffect, useState } from "react";

function Day12HomeWork() {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);
    return (
        <>
            <h1>{timer}</h1>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
        </>
    )
}
export default Day12HomeWork;