import { useRef } from "react";

/**
 * useRef - Övning
 *
 * Implementera handleClick1 och handleClick2
 * så att när du klickar på någon av deras tillhörande knappar
 * att den fokuserar på dess inputfält
 */

function UseRefExercise() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const handleClick1 = () => {
    // complete this
  };

  const handleClick2 = () => {
    // complete this
  };

  return (
    <div className="App">
      <input /> <button onClick={handleClick1}>Focus me</button>
      <br />
      <br />
      <input /> <button onClick={handleClick2}>Focus me</button>
    </div>
  );
}

export default UseRefExercise