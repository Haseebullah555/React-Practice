import { useEffect, useState } from "react";

function TitleChanger() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}
export default TitleChanger;