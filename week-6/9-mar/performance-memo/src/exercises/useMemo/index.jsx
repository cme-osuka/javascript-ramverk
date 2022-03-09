import { useState, useMemo } from "react";

/**
 * useMemo - Övning
 * Modifiera MemoExercise nedan på ett sånt vis
 * så att sidan renderas snabbare när du skriver in ett nummer
 * som du skrivit in tidigare
 *
 * Steg för att reproducera om svaret är rätt:
 * 1. Skriv in 2 i inputfältet så värdet blir 12
 * 2. Vänta lite på att texten ändras
 * 3. Klicka på knappen
 * 4. Inget ska loggas ut i konsollen
 */

const reallyExpensiveSquare = (number) => {
  console.log(number);
  for (let i = 0; i < 1e9; i++);
  return number * number;
};

function MemoExercise() {
  const [v, setV] = useState(1);
  const [k, setK] = useState(2);
  const vSquared = useMemo(() => reallyExpensiveSquare(v), [v]);
  return (
    <>
      <input value={v} onChange={(e) => setV(e.target.value)} />
      <p>
        {v}^2 is {vSquared}
      </p>
      <button onClick={() => setK((k) => k + 1)}>Click</button>
    </>
  );
}


export default MemoExercise