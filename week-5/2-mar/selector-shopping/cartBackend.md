## Logga in

`POST: https://feather-gaudy-path.glitch.me/login`

Du kan logga in genom att göra ett POST anrop till **/login**
med följande **body**:

**body**
```
{
  "username": "USERNAME",
  "password: "password"
}
```

**respons**

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiaWF0IjoxNjQ2MjIzMTYzfQ.hEZMviBjuomJOPWWg_IVV7YGSi_LcafLcoyeTEnPwrI"
}
```

## Skapa en Cart

`POST: https://feather-gaudy-path.glitch.me/cart`

Du kan skapa en ny cart genom att göra ett POST anrop till **/cart**
där du skickar med headern **Authorization** och ett objekt med
en lista på dina cart items:

**body**
```
{
  items: [
    <dina cart items här>
  ]
}
```

**headers**
```
headers: {
  Authorization: "Bearer <TOKEN>"
}
```

**respons**
```
	{
		"items": [],
		"id": "ZJsYQpxo2ajO38ZHIGhk_",
		"username": "oscar"
	}
```

## Hämta alla carts
`GET: https://feather-gaudy-path.glitch.me/cart`

Du kan hämta alla dina carts genom att göra ett GET anrop till **/cart**
där du skickar med headern **Authorization**, och ingen body (går inte i GET-anrop)

**headers**
```
headers: {
  Authorization: "Bearer <TOKEN>"
}
```

**respons**
```
[
	{
		"items": [],
		"id": "ZJsYQpxo2ajO38ZHIGhk_",
		"username": "oscar"
	}
]
```

## Hämta en cart baserat på ID
`GET: https://feather-gaudy-path.glitch.me/cart/:id`

Du kan hämta en cart genom att göra ett GET anrop till **/cart/:id**
där du skickar med headern **Authorization** och ID't från Carten i url:en

**headers**
```
headers: {
  Authorization: "Bearer <TOKEN>"
}
```

**respons**
```
[
	{
		"items": [],
		"id": "ZJsYQpxo2ajO38ZHIGhk_",
		"username": "oscar"
	}
]
```