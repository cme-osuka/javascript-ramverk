# Övningar

## useEffect
Ni kan använda ett och samma CRA-projekt för detta

### Övning 1 - Kör en gång vid mount, hämta API-data
1. Skapa en komponent som hämtar data från valfritt API när den mountas.
2. Rendera ut resultatet med hjälp av ett state och .map

Exempel-API: `https://www.reddit.com/r/reactjs.json`
Hint: `[]`

### Övning 2 - Live-filtrering (on State change)
1. Skapa en komponent eller återanvänd den från #1
2. Skapa ett sök-fält med en input
3. Filtrera resultatet från API't med hjälp av useEffect och rendera ut det filtrerade resultatet istället

### Övning 3 - Initialisera en interval & cleanup
1. Lägg till ett state där du håller reda på `count`
2. Lägg till en interval med setInterval som ökar count med 1 varje sekund
3. Använd cleanup-metoden i useEffect för att ta bort intervallen (med clearInterval)

## Forms

### Bygg en login-form
1. Skapa en komponent med tre olika inputs: email, password och submit
2. Validera så att användaren har skrivit en korrekt email (se hint nedan) med hjälp av useEffect
3. Validera så att användaren har skrivit ett lösenord som är mellan 6 och 20 tecken
4. Skriv sedan en onSubmit-funktion som tar värdena och skickar dessa med en POST-request till `https://mocki.io/v1/2edc87db-8dbf-4cce-982f-66279724f6ce` (ett fake-API som kommer returnera `{ "status": "success" }`)


## Hintar

### Validera Email
Man kan använda RegEx för att testa innehållet i strängar exempelvis.
I detta fallet kollar den innehållet i en email-sträng och ser till så att den följer rätt mönster (email@domain.com)
```
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
```
Vill man läsa mer om RegEx och öva finns det en bra tutorial här:
https://regexone.com/
