function CounterButtons({ setCount }: { setCount: Function }) {
    return (
        <>
            <div className="row gap-3">
            <button className="btn btn-sm btn-success" onClick={() => setCount((prev: number) => prev + 1)}>+</button>
            <button className="btn btn-sm btn-danger" onClick={() => setCount((prev: number) => prev - 1)}>-</button>
            <button className="btn btn-sm btn-info" onClick={() => setCount((0))}>Reset</button>
            </div>
        </>
    )
}
export default CounterButtons;