import { useContext } from "react";
import { CounterContext } from "../CounterContext";

function CounterButtons() {
    const context = useContext(CounterContext);
    if (!context) return null;
    return (
        <>
            <div className="row gap-3">
                <button className="btn btn-sm btn-success" onClick={() => context.setCount((prev: number) => prev + 1)}>+</button>
                <button className="btn btn-sm btn-danger" onClick={() => context.setCount((prev: number) => prev - 1)}>-</button>
                <button className="btn btn-sm btn-info" onClick={() => context.setCount((0))}>Reset</button>
            </div>
        </>
    )
}
export default CounterButtons;