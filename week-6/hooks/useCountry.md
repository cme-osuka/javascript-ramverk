# useCountries

I denna övningen kommer du använda ett API, fetch och en custom hook du själv skapar för att söka efter länder och visar ut deras officiella namn.

```
const [searchPhrase, setSearchPhrase] = useState("");
const countries = useCountries(searchPhrase);

return (
  <input value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)} />
)
```

## Exempel på hur endpointen /v3.1/name/{name} ser ut
```
https://restcountries.com/v3.1/name/{name}
https://restcountries.com/v3.1/name/peru
https://restcountries.com/v3.1/name/united
```

## Exempel på respons (från /v3.1/name/swede):
```
[{"name":{"common":"Sweden","official":"Kingdom of Sweden","nativeName":{"swe":{"official":"Konungariket Sverige","common":"Sverige"}}},"tld":[".se"],"cca2":"SE","ccn3":"752","cca3":"SWE","cioc":"SWE","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"SEK":{"name":"Swedish krona","symbol":"kr"}},"idd":{"root":"+4","suffixes":["6"]},"capital":["Stockholm"],"altSpellings":["SE","Kingdom of Sweden","Konungariket Sverige"],"region":"Europe","subregion":"Northern Europe","languages":{"swe":"Swedish"},"translations":{"ara":{"official":"مملكة السويد","common":"السويد"},"ces":{"official":"Švédské království","common":"Švédsko"},"cym":{"official":"Kingdom of Sweden","common":"Sweden"},"deu":{"official":"Königreich Schweden","common":"Schweden"},"est":{"official":"Rootsi Kuningriik","common":"Rootsi"},"fin":{"official":"Ruotsin kuningaskunta","common":"Ruotsi"},"fra":{"official":"Royaume de Suède","common":"Suède"},"hrv":{"official":"Kraljevina Švedska","common":"Švedska"},"hun":{"official":"Svéd Királyság","common":"Svédország"},"ita":{"official":"Regno di Svezia","common":"Svezia"},"jpn":{"official":"スウェーデン王国","common":"スウェーデン"},"kor":{"official":"스웨덴 왕국","common":"스웨덴"},"nld":{"official":"Koninkrijk Zweden","common":"Zweden"},"per":{"official":"پادشاهی سوئد","common":"سوئد"},"pol":{"official":"Królestwo Szwecji","common":"Szwecja"},"por":{"official":"Reino da Suécia","common":"Suécia"},"rus":{"official":"Королевство Швеция","common":"Швеция"},"slk":{"official":"Švédske kráľovstvo","common":"Švédsko"},"spa":{"official":"Reino de Suecia","common":"Suecia"},"swe":{"official":"Konungariket Sverige","common":"Sverige"},"urd":{"official":"مملکتِ سویڈن","common":"سویڈن"},"zho":{"official":"瑞典王国","common":"瑞典"}},"latlng":[62.0,15.0],"landlocked":false,"borders":["FIN","NOR"],"area":450295.0,"demonyms":{"eng":{"f":"Swedish","m":"Swedish"},"fra":{"f":"Suédoise","m":"Suédois"}},"flag":"\uD83C\uDDF8\uD83C\uDDEA","maps":{"googleMaps":"https://goo.gl/maps/iqygE491ADVgnBW39","openStreetMaps":"https://www.openstreetmap.org/relation/52822"},"population":10353442,"gini":{"2018":30.0},"fifa":"SWE","car":{"signs":["S"],"side":"right"},"timezones":["UTC+01:00"],"continents":["Europe"],"flags":{"png":"https://flagcdn.com/w320/se.png","svg":"https://flagcdn.com/se.svg"},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/se.png","svg":"https://mainfacts.com/media/images/coats_of_arms/se.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[59.33,18.05]},"postalCode":{"format":"SE-### ##","regex":"^(?:SE)*(\\d{5})$"}}]
``` 

## Krav:
- Hooken ska returnera en lista på "resultat-ländernas" officiella namn (ex. `["Kingdom of Sweden", "Kingdom of Denmark"]`)
- Den ska uppdateras när sökfrasen/argumentet `useCountries(DENNA)` ändras
- Listan/resultatet ska renderas ut som en lista av element med dess namn

## Optional:
- Ländernas respons visar även en flagga (som i exemplet, `flags: { "png": "https://flagcdn.com/w320/se.png" }`), visa gärna den bland resultaten
- Visa gärna andra värden, såsom angränsande länder, population, osv. **Your imagination is the limit** :)