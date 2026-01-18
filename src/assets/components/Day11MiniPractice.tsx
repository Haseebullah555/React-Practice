import { useState, useEffect } from "react";

function EvenOdd() {
    const [number, setNumber] = useState(0);
    useEffect(() =>{
        console.log("Number changed");
    },[number]);
    return (
        <>
        <h1>{number}</h1>
        <h2>{number % 2 === 0 ? "Even Number" : "Odd Number"}</h2>
        <button onClick={() => setNumber(number + 1)}>+</button>
        </>
    );
}
export default EvenOdd;