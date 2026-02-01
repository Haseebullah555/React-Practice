import useLocalStorage from "./useLocalStorage";

function NameSaver() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
    </>
  );
}

export default NameSaver;
