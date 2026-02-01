import useToggle from "./useToggle";

function Toggle() {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <button onClick={toggle}>
        {isOpen ? "Close" : "Open"}
      </button>

      {isOpen && <p>Hello! I am visible</p>}
    </>
  );
}

export default Toggle;
