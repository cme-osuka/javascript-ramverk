# Övning: News page

I dagens övning kommer vi skapa en egen Activity tracker. [DEMO](https://activity-tracker-xi.vercel.app/)

Det är valfritt om man vill styla sin applikation, men det rekommenderas för att lättare hålla reda på de olika delarna

## Krav 

- Man ska kunna lägga till en aktivitet
- Varje aktivitet ska ha 30 dagar man kan "klara av"
- Varje dag representerar om uppgiften är klar eller inte
- Kunna välja dagen om man slutfört den
- Kunna "välja av" dagen om man inte slutfört den
- BONUS: Spara detta med hjälp av Localstorage

## Mål

- Träna på att använda och hantera states
- Villkorlig rendering (ex. med Ternaries)

## Instruktioner

1. Skapa ett nytt project med **create-react-app** eller återanvänd den vi skapade tidigare under dagen
2. Fundera på vad för komponenter vi behöver för vårt ändamål (se Hinten längre ner om du fastnat)


## Länkar
- https://reactjs.org/docs/lists-and-keys.html

## Hintar

- Komponenter: 
  - En Parent-komponent vi vill hålla vårt state i
  - En komponent för att lägga till saker med en input och en knapp
  - En Activity-komponent som ritar ut dagar, aktivitetens namn samt en "ta bort"-knapp
  - En lista som är ansvarig för att rita ut våra Activity-komponenter
  - När Activity-listan är tom, vill vi skriva ut exempelvis: "Inga aktiviteter i Listan"
- useState: Det går att "lazy"-initialisera med en metod istället för ett rent värde [React Docs: Lazy initial state](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)
- localStorage [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
  - Vi kan spara värden i vår webbläsare med localStorage, och i kombination med lazy initial state kan vi även läsa av vårt state från localStorage när vi initialiserar den.
  - Vi kan bara spara strängar i localStorage, så vi behöver konvertera vårt state till en sträng innan vi sparar. Det går att göra med JSON.stringify() och för att kunna använda det i vårt state använder vi JSON.parse() för att omvandla strängen till ett objekt.