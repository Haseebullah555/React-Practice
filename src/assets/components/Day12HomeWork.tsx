import { useEffect, useState } from "react";

function Day12HomeWork() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning]);
    return (
        <>
            <h1>{timer}</h1>
            {/* <button onClick={() => { setIsRunning(!isRunning) }}>{isRunning ? "Stop" : "Start"}</button>  */}
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => setTimer(0)}>Reset</button>
        </>
    )
}
export default Day12HomeWork;