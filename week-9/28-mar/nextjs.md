# Next.js

## Länkar
Deras webbplats och dokumentation innehåller mycket nyttigt för de som vill fördjupa sig i Next.js!  
[Next.js webbplats](https://nextjs.org/)

Rekommenderar varmt deras guide "From React to Next.js".  
[Next.js Guide: From React to Next.js](https://nextjs.org/learn/foundations/from-react-to-nextjs)

De har även en väldigt trevlig guide om "From Javascript to React" för er som vill ha en kort uppfräschning av det innan "From React to Next.js" :)  
[Next.js Guide: From Javascript to React](https://nextjs.org/learn/foundations/from-javascript-to-react)

## Vad är Next.js?
Det är ett s.k. React metaframework - ett ramverk byggt ovanpå React som ger mer möjligheter och lite mer struktur. Som exempelvis server-side rendering, routing, bundling och mer. 

Så i denna genomgången kommer vi titta på hur vi kommer igång med Next.js, SSR och SSG och Routing i Next.js.

## Skapa en Next.js app
Precis som till mycket annat, finns det även ett CLI-verktyg som ger oss en uppsättning kod att komma igång med. Vi kommer lättast igång genom att köra:
```
npx create-next-app [NAMN]
```
När det är klart navigerar vi in i projektet och startar dev-servern:
```
cd [NAMN]
npm run dev
```

Skapa sedan en mapp i projektet du kallar `data` med en fil med namnet `products.json` inuti.
```
[
  { "name": "pink-shirt", "description": "En beskrivning på vår rosa tröja" },
  { "name": "orange-tshirt", "description": "En beskrivning på vår orange tröja" },
  { "name": "red-tshirt", "description": "En beskrivning på vår röda tröja" },
  { "name": "black-tshirt", "description": "En beskrivning på vår svarta tröja" }
]
```

## Routing
Next.js kommer med redan inbyggd fil-baserad Routing. Man skapar en fil inuti mappen `pages` och Next.js kommer göra det till en Route. Skulle du exempelvis skapa en fil som heter `helloworld.js` inuti den mappen så kommer du kunna gå in på `/helloworld` till exempel. Med undantaget `index.js` som blir `/`.

Du kan även skapa mappar inuti `pages` för att skapa routes som exempelvis `/products/pink-tshirt`. Skulle du vilja skapa dynamiska sidor baserat på URL-parametrar som ex. `/products/pink-tshirt` där `pink-tshirt` är parametern. Ungefär som hur vi använde `/products/:productName` i våra `react-router-dom`-routes.

Isåfall skapar du en fil inuti mappen `/products` där du sätter parameter-namnet inom `[]` - exempelvis: `[productName].js`.  
Skulle vi nu gå in på `/products/orange-tshirt` eller `/products/blue-tshirt` så kommer den använda `[productName].js`.

**Du kan börja med att skapa en mapp `products` inuti `pages` och skapa en `[productName].js` inuti den.**

## getStaticPaths
Detta är en metod Next.js tittar efter för att i förväg kunna generera alla routes/sidor för den templaten. I detta fallet i vår `[productName].js`.   
Som namnet föreslår hämtar den våra statiska **paths**.

Så här vi kommer importera vår `products.json`, så vi kan skapa en array som vi ger till Next.js så den vet vilka sidor vi vill att den ska generera i förväg.

```
// Inuti [productName].js
import products from '../data/products.json'

export async function getStaticPaths() {
  // loopa igenom products-arrayen
  const paths = products.map(product => ({
    // returnerar ett objekt med params.productName satt till varje produkts namn
    params: { productName: product.name }
  }))

  // Våra paths kommer sedan se ut såhär:
  // [
  //   { params: { product: 'pink-tshirt' } },
  //   { params: { product: 'orange-tshirt'} }
  //   ... 
  // ]
  return { paths, fallback: false }
}
```

Vi sätter paths'en i ett objekt tillsammans med nyckeln `fallback` som vi sätter till false. Så när du går till en produkt vi inte har i vår lista, kommer användaren få en 404 (Not found)-sida.  
I "verkliga livet" skulle vi isåfall här läsa in exempelvis filer (ex. markdown-filer) eller hämta data från ett API, för att generera våra paths.

## getStaticProps
Nu ska vi lägga till något som kallas för `getStaticProps` som Next.js även letar efter i våra filer. Som med föregående funktion, så använder vi denna för att hämta statiska *props*.  
Dessa ger vi sedan till vår React-sida. I vårt fall vill vi ge den informationen om vår produkt så att `/products/pink-tshirt` ger oss endast `{ PRODUKTINFO }`.  
**Ungefär så som vi gjort när vi visat en enskild produkt i K3** fast på ett annat sätt.

```
// Också inuti [productName].js
export async function getStaticProps({ params }) {
  // hämta data om EN av våra produkter
  const product = products.find(product => product.name === params.product)
  // och returnera den i lämpligt format
  return { props: { product } } 
  // { product } är samma sak som att skriva { product: product }
}
```
I "verkliga livet" skulle vi här ex. hämta data från ett API för att få information om en produkt.
## Template
Nu ska vi skriva "template-delen" och React-komponenten i vår sida. Här kan vi få ut propsen vi genererade med `getStaticProps` eftersom de passas till den komponenten av Next.js. Så allt vi behöver göra är att rendera ut datan på själva sidan.  
Nu innehåller inte exemplet så mycket data, men vi kommer skriva ut det vi har på produkten här.

```
// Fortfarande i [productName.js]
export default function Product({ product }) {
  return <div>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
  </div>
}
```

## Link-komponenten
För att navigera till produkterna vi har, så behöver vi såklart lägga till länkar. Det gör vi med hjälp av Next.js's `Link`-komponent.  
Vi använder den istället för vanliga `a`-taggar för att den "lirar bättre" med Next.js interna routing.

Här kommer vi även använda en annan Next.js-komponent som heter `Head`. Den kan vi använda för att ändra och lägga till data i vår `<head>`-tagg i html'en. Vi kommer använda den för att uppdatera sid-titeln beroende på vilken sida vi är på.

```
// I vår index.js
import Head from 'next/head'
import Link from 'next/link'

import products from '../data/products.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Produkter i vår första Next.js app</title>
      </Head>
      {products.map(product => (
        <Link href={`/${product.name}`}>
        <h3>{product.name}</h3>
        </Link>
      ))}
    </div>
  )
}
```

## SSR vs SSG
Och nu har vi byggt en s.k. Statiskt genererad Next.js app. Där all data hämtas endast en gång, när applikationen byggs. Skulle vi exempelvis använda ett API för att hämta produkterna och byggt & deployat vår app så hade den inte uppdaterats med några produkt-ändringar i vårt API. Och i de flesta fallen så är detta helt ok!

Det är det som kallas SSG - Static Site Generation  
(rekommenderas så ofta det går)

![Från Nextjs.org](https://nextjs.org/static/images/learn/data-fetching/static-generation.png)

Men ibland behöver vi generera sidor och hämta dynamisk data, där saker kanske ändras mer frekvent och vi inte vill behöva bygga om våra statiska sidor hela tiden. Då finns det något som kallas `SSR - Server-side Rendering`.  

Med SSR genereras istället våra sidor när man gör ett anrop till vår server, exempelvis när en användare går in på vår vackra webshop i sin webbläsare - istället för att skapa alla sidor när vi bygger och deployar.


![Från Nextjs.org](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)


För att använda `SSR` byter vi ut våra `getStaticPaths` och `getStaticProps` mot en enda `getServerSideProps`. Exempelvis mot K4-backenden:
```
// I vår [product]
export async function getServerSideProps({ params }) {
  // Gör ett anrop till vår Backend för data om vår produkt
  const res = await axios.get(`http://k4backend.osuka.dev/products/${params.productId}`)
  const product = res.data;
  // Vi returnerar sedan datan som props som kommer ges till vår Product-komponent
  return { props: { product } }
}
```

## Deploya en Next.js app på Netlify
Instruktionerna hittar du på Netlifys blogg, men vi kommer gå igenom det här också:  
https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/


### 1. Lägg din Next.js-site i ett Github-repo
Det gör du så att Netlify kan bygga om din sida och deploya den vid varje push till detta github-repot.

### 2. Skapa en ny Netlify-site från ditt Github-repo
Det kan du göra antingen med Netlifys CLI [Netlify CLI: Get Started](https://docs.netlify.com/cli/get-started/) eller med hjälp av Netlifys UI (där vi har deployat applikationer tidigare!)

### 3. Lägg till Next on Netlify-pluginnet på Netlify
Sista vi behöver göra är att lägga till en plugin på Netlify som tillåter oss att använda Next.js dynamiska funktioner som SSR, API Routes, etc.

### Vill du testa deploya någon annanstans?
De som har skapat Next.js, Vercel, har skapat en plattform där du lätt kan deploya din Next.js app. Det kan du läsa om [här](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy).

## Vill du öva vidare på Next.js?
Då rekommenderar jag att du grottar ner dig i deras dokumentation, där finns både guider och deras funktioner väl dokumenterade. Finns även små quizzes i slutet av sidorna när du läst om en topic - för att se om du hängt med.

Men här är några saker jag rekommenderar att du kikar på:  
- API Routes [Länk](https://nextjs.org/learn/basics/api-routes)
- SEO i Nextjs [Länk](https://nextjs.org/learn/seo/introduction-to-seo)
- Statiska filer i Next (bilder, etc) [Länk](https://nextjs.org/learn/basics/assets-metadata-css)
- Resten av deras Dokumentation [Länk](https://nextjs.org/docs/getting-started)
- Deras lista på Exempel [Länk](https://nextjs.org/examples)