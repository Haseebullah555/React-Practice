import { useState } from "react"

function ToggleText() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>
            {show && <p>Hello! I am visible now 👋</p>}
        </>
    )
}
export default ToggleText;