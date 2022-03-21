# Redux

## Kom igång
För att komma igång med denna uppgiften, kan du använda detta repot eller skapa ett nytt.

Väljer du detta repot, behöver du bara köra:
```
npm install
npm run start
```
för att komma igång.



Skapar du hellre ett nytt repo eller vill installera det i ett existerande:
```
npm install react-redux @reduxjs/toolkit
npm run start
```
och följa instruktionerna här: https://redux-toolkit.js.org/tutorials/quick-start


## Redux Devtools
[Chrome Web Store: Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

[Firefox Addons: Redux Devtools](https://addons.mozilla.org/sv-SE/firefox/addon/reduxdevtools/)

## Redux? Actions?? Reducers???
Innan vi dyker in i koden och kodar, kan vi gå igenom de olika delarna Redux består av.
- Actions
- Reducers
- State
- Store

![bild från Redux.js.org](https://www.freecodecamp.org/news/content/images/2021/04/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26-1.gif)

Låt säga att vi i detta fallet har en komponent som låter oss sätta in pengar när vi klickar på en knapp (UI i exemplet ovan)

Normalt sett när vi klickar på en knapp kallar vi en funktion som hanterar detta event, men istället kommer vi kalla på en funktion Redux ger oss: **Dispatch**. Som låter oss **"trigga" actions**

En **action** innehåller en **typ** och en **payload**. Typen brukar bara vara en sträng med namnet av ens **action**. **Payload**en innehåller data som vi behöver hantera, vi kan exempelvis inte sätta in pengar utan att veta summan.

Vår **store** är ansvarig för att hålla i vårt state, och tar emot vår **action**. Tänk på det lite som en databas som håller all vår information.

Den är även ansvarig för att uppdatera vårt state utifrån vilken **action** vi skickar till den och hur det nuvarande statet ser ut, med hjälp av **reducers**.

En **reducer** låter komplext, men det är bara en funktion som tar det nuvarande statet och vår **action**, kombinerar dessa och returnerar ett nytt state.

Tänk på det som ett löpande band, den tar det gamla statet och vår **action**, ändrar litegrann och ger oss vårt nya state.

Vårt nya state returneras sedan från **reducern** och sparas i vår store, som sedan skickas till våra komponenter - som i sin tur renderar om med vårt uppdaterade state.

## Vad vi ska göra idag:

Vi ska skapa en Todo-list med Redux och Redux Toolkit.
- Man ska kunna lägga till en todo
- Man ska kunna ändra status på en todo
- Man ska kunna ta bort en todo
- Vi ska visa antalet färdiga todos i vår lista


## Vill du öva vidare?

- Implementera en Shopping Cart med Redux, där en användare kan lägga till och ta bort varor ur varukorgen
- Lägg till så användaren kan öka och minska antal i sin varukorg
- Lägg till så man kan logga in som Admin och håll koll på inloggnings-status i Redux (Skapa en ny "Slice" för detta, behöver inte autentiseras mot ett riktigt API)
- Lägg till Routing, och en sida där en admin kan lägga till en ny produkt med: Titel, beskrivning, länk till en bild och ett pris. (Behövs inte ett riktigt API här heller, spara produkterna i Redux)
- Lägg till så admin kan ändra priset eller andra properties på en produkt

## Extra: Testa att implementera API-anrop med Middleware/Thunks
Här hittar du information om hur du går tillväga från ett liknande exempel, för att lägga till något som kallas Middleware och s.k. Thunks för att hantera API-anrop direkt i Redux.

[FCC: How to work with an API in Redux](https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux#how-to-work-with-an-api-in-redux)