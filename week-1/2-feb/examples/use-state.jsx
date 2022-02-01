import { useState } from 'react';

function UseState() {
  // useState(effect, deps)

  // Såhär använder vi vår hook useState
  // som är vår motsvarighet till this.state
  // i klass-komponenterna vi tittat på.
  const [state, setState] = useState("");

  // När vi använder useState så är det rekommenderat
  // att följa namn-konventionen [variabel, setVariabel]
  // när vi sätter namnet på vårt state som exemplet ovan.
  //
  // "variabel" i lower-case
  // "setVariabel" i camelCase, där vi börjar med
  // set följt av namnet vi valt att kalla
  // vår state-variabel

  // Och argumentet vi ger till vår useState är 
  // det värdet vi initialt vill sätta i vårt
  // state. I exemplet ovan sätter vi vårt state
  // till en tom sträng. 

  // NOTERA: useState mergar inte automatiskt state
  // som det gör med setState() i klass-komponenterna.
  // 
  // Så istället får vi manuellt merga vårt state 
  // när vi uppdaterar det. Lättast är att använda
  // spread-operatorn (...) när vi gör detta.
  // Exempel:
  // 
  // const [state, setState] = useState({
  //    name: "Oscar"
  // })
  // 
  // setState(prevState => {
  //   return {...prevState, age: 29 }
  // })
  // 
  // Testa gärna att skapa ett state med ett objekt som i exemplet ovan,
  // och testa sätta ditt state till { age: 29 } utan att merga
  // prevState med det nya statet som ovan.

  // Du kan läsa mer på:
  // https://reactjs.org/docs/hooks-reference.html#usestate
  return (
    <div>
      <p>useState-exempel</p>
    </div>
  );
}

export default App;
