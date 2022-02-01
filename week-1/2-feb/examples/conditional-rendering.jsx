

function ConditionalRendering() {
  const [ready, setReady] = useState(false);

  // Vi kan exempelvis välja att rendera 
  // en laddnings-indikator eller annat 
  // innehåll ifall vi väntar på något.
  // 
  // Exempelvis när vi hämtar data från ett API. 
  if (!ready) {
    return <LoadingIndicator />
  }

  // Vi kan som exemplet nedan använda ternary-operatorn
  // för att rendera olika saker beroende på state 
  // eller andra variabler.
  return (
    <div>
      {ready ? "Not ready" : "Ready"}
      {ready ? <Component /> : null}
      {ready && <Component />}
    </div>
  );
}

export default UseEffect;
