import React, { useEffect, useState } from "react";

function Interval() {
  // State som håller reda på Count
  const [counter, setCounter] = useState(0);

  // useEffect som sätter igång en räknare
  // Rensa upp intervallen med useEffects cleanup funktion
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(id);
    };
  }, []);

  // Skriva ut count
  return <div>{counter}</div>;
}

export default Interval;
