# Testing med Create React App & RTL
React Testing Library är ett test-verktyg som är byggt för att testa hur det faktiska DOM-trädet ser ut, som React renderar i webbläsaren. React Testing Library gör att vi kan skriva tester som bättre reflekterar hur en användare skulle använda vår applikation.

Biblioteket ger oss ett par metoder som query'ar DOM'en på samma sätt som en användare skulle. Exemeplvis när en användare söker efter en knapp med texten "Save" i, för att spara sitt arbete. Så ger RTL oss bl.a. en metod som heter `getByText()` som gör att vi kan hitta denna med text.

## Installera React Testing Library
För att använda RTL utanför ett **Create React App**-projekt behöver du installera RTL och jest, men dessa är inkluderade i våra CRA-projekt redan.   
Det kan du se om du kikar på våra dependencies i `package.json`.

Anledningen till att vi behöver Jest är för att RTL ger oss bara metoder för att skriva test-script, vi behöver fortfarande ett ramverk som kör test-koden - exempelvis Mocha, Jasmine eller Jest i detta fallet. Jest eftersom det funkar bra med både Rect och RTL.

```
npm install --save-dev @testing-library/react @testing-library/jest-dom

// --save-dev gör att vi sparar dessa under våra dev dependencies, så de inte följer med när vi bygger produktionsversionen av applikationen
```

## När applikationen är skapad
Har du startat en CRA-app så borde du se att de redan har genererat en App.test.js inuti vår `src/`-mapp. Den ser ut på detta viset:

```
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

Testkoden ovan använder RTL's `render`-metod för att virtuellt rendera `App`-komponenten från App.js och lägga till den i dess `document.body`. Du kan komma åt den virtuella HTML'en genom ett `screen`-objekt som RTL ger oss.

För att se resultatet av vår rendering och innehållet i `screen` har den en inbyggd metod vi kan använda, `screen.debug()`.

```
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.debug();
});
```

Öppnar du sedan din terminal och kör `npm run test` så kommer du se hela `document.body`-trädet i din konsol.

`screen` har dessutom redan testmetoderna för DOM'e inbyggda, så det är därför första exemplet kunde använda `screen.getByText()` för att få tag på vår `<a>`-tagg med hjälp av dess **textContent**-värde.

Slutligen testar koden om link-elementet finns inuti vårt `document`-objekt eller inte, med `expect`-metoden från **Jest**.

```
expect(linkElement).toBeInTheDocument();
```

Skulle elementet inte hittas, kommer Jest markera testet som misslyckat.

## Metoder för att hitta element
De flesta testfallen du kommer skriva borde använda metoder för att hitta element. RTL ger dig ett flertal olika metoder för att kunna hitta element med specifika attribut utöver `getByText`-metoden ovan.

- `getByText()`: Hitta baserat på dess textContent-värde
- `getByRole()`: Hitta baserat på dess `role`-attributvärde
- `getByLabelText()`: Hitta baserat på dess `label`-attributvärde
- `getByPlaceholderText()`: Hitta baserat på dess `placeholder`-attributvärde
- `getByAltText()`: Hitta baserat på dess `alt`-attributvärde
- `getByDisplayValue()`: Hitta baserat på dess `value`-attributvärde, oftast på `<input>`-element.
- `getByTitle()`: Hitta baserat på dess `title`-attributvärde

Och när dessa metoder inte är tillräckligt, finns det även en `getByTestId()`-metod som låter dig hitta ett element baserat på dess `data-testid`-attributvärde:

```
import { render, screen } from '@testing-library/react';

render(<div data-testid="custom-element" />);
const element = screen.getByTestId('custom-element');
```

Men eftersom `data-testid`-attribut inte motsvarar hur en riktig användare hade använt vår applikation, så rekommenderar dokumentationen att du endast använder det som en sista utväg när alla andra metoder misslyckas med att hitta ditt element. 

Oftast kommer vi klara oss bra genom att hitta baserat på Text, Role, Label bland annat.

## Testa användar-events med RTL
Bortsett från att hitta element i vår `document.body`, ger oss RTL ett sätt att testa användar-genererade event - exempelvis när man klickar på en knapp eller skriver i ett inputfält.

Deras `user-event`-library är ett bra tilläggsbibliotek till RTL som hjälper dig simulera användar-interaktioner. Anta att du har en knapp som växlar mellan Light och Dark-tema till exempel:

```
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>;
}

export default App;
```

Efter det skapar du ett test som htitar knappen och simulerar ett knapptryck med hjälp av dess `userEvent.click()`-metod. När knappen har tryckts på, skulle du kunna testa om knappen innehåller textvärdet "dark" eller inte.

`getByText` och `toHaveTextContent` i detta fallet använder RegEx för att söka och matcha en text-sträng. Vill du lära dig mer om det rekommenderar jag att du kollar in `https://regexone.com/` och dess tutorial. Den guidar dig från start till mästare i RegEx.

```
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});
```

Men det är så vi skulle kunna simulera användar-event med hjälp av RTL. `user-event`-biblioteket har även andra metoder som exempelvis `dblClick` för att dubbelklicka på ett element eller `type` för att simulera när man skriver i en textruta. Du kan kolla in dokumenationen för `user-event` för mer information:  
https://testing-library.com/docs/ecosystem-user-event

## Varför RTL?

Genom att testa applikationen på samma sätt som en användare skulle använt den med RTL, jämfört med många andra testing-bibliotek, kommer vi kunna sova bättre på natten och förvänta sig att applikationen kommer fungera väl för våra anvädnare när alla våra test-fall har gått igenom.

>The more your tests resemble the way your software is used, the more confidence they can give you.
>(Source: Kent C.Dodds, React Testing Library Author)