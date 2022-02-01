import { useEffect, useState } from 'react';

function ConditionalRendering() {
  // useEffect(effect, deps)
  // effect ger du en callback-funktion
  // deps är en dependency list - en lista med variabler 
  // som useEffect ska bero på.
  //
  // Se Exempel 2 nedan

  // Exempel 1 - Livscykelmetod som körs vid varje rendering
  useEffect(() => {
    // I useEffect kan vi definiera kod som körs när komponenten renderats.
    // Exempelvis hämta data från ett API och spara det i state,
    // eller sätta en timeout som skriver ut i konsolen 10 sekunder
    // efter komponenten renderats.
    let timer1 = setTimeout(() => console.log("Jag körs 10 sekunder efter rendering"), 10 * 1000)


    // Vi kan även returnera en Cleanup-callback som körs när komponenten
    // inte längre ska renderas i trädet, användbart för att
    // exempelvis rensa intervaller eller eventListeners som inte
    // längre ska köras när komponenten tas bort.
    // 
    // https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
    return () => {
      clearTimeout(timer1);
    }

    // Med en tom dependency-lista kan vi säga 
    // att den inte ska bero på något värde från
    // varken props eller state, och därmed inte 
    // behöver köras om när komponenten renderas om
  },[])

  // Vi kan även använda useEffect för att köra kod
  // som ska köras varje gång ett state eller en prop
  // uppdateras, genom att använda dependency-arrayn i 
  // vår useEffect. 
  const [countries, setCountries] = useState([]);

  // Exempel 2
  useEffect(() => {
    // Här skriver vi ut längden på countries,
    // och kommer köras varje gång countries-statet
    // uppdateras.
    console.log(countries.length);

    // Det gör vi genom att lägga till countries
    // till vår dependency-lista. 
    // 
    // https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  },[countries])

  // Exempel 3
  useEffect(() => {
    console.log("Jag körs varje gång komponenten renderas och renderas om")

    // Vi kan även skippa vår dependency-lista helt
    // och kommer köras varje gång komponenten renderas
    // och renderas om.
  })

  // Du kan läsa mer på:
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <div>
      <p>useEffect-exempel</p>
    </div>
  );
}

export default UseEffect;
