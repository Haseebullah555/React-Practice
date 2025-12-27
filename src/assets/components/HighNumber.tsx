import { useState } from "react"

function HighNumber() {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-gray-500 text-white p-2 rounded-md w-50 h-50 flex items-center justify-center flex-col">
        <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600" onClick={() => setCount(count + 1)}>
                        <i className="font-bold">+</i>
        </button>
        <h1>{count}</h1>
        <h1>{count > 5 && "High value!"}</h1>
        </div>
    )
}
export default HighNumber;