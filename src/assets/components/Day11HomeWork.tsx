import { useEffect, useRef, useState } from "react";

function VisitTracker() {
    const [visits, setVisits] = useState(0);
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const storedVisits = localStorage.getItem("visits");

        if (storedVisits) {
            const newCount = Number(storedVisits) + 1;
            setVisits(newCount);
            localStorage.setItem("visits", newCount.toString());
        } else {
            setVisits(1);
            localStorage.setItem("visits", "1");
        }
    }, []);

    return (
        <div>
            <h1>Page Visits</h1>
            <h2>You visited this page {visits} times</h2>
        </div>
    );
}

export default VisitTracker;
