# Autentisering mot Backend

I detta exemplet använder vi oss av Axios, ett paket "on top of" fetch för att enklare kunna skapa requests till backends exempelvis.

Och vi kommer göra anrop mot ett Content Management System (CMS) som heter Strapi.
Strapi gör det lätt för oss att "skapa en backend" och lägga till olika content types, exempelvis posts och users i detta fallet.

Strapi REST API docs: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html

## Skapa användare

```
const res = await axios.post("https://cme-blog.osuka.dev/api/auth/local/register", {
  username: "ANVÄNDARNAMN HÄR",
  email: "EMAIL HÄR",
  password: "LÖSENORD HÄR (använd inget du faktiskt använder)"
})
```

## Logga in och få Token

```
const res = await axios.post("https://cme-blog.osuka.dev/api/auth/local", {
  identifier: "ANVÄNDARNAMN / EMAIL",
  password: "LÖSENORD"
})
```

## Hämta ALLA posts

```
const res = await axios.get("https://cme-blog.osuka.dev/api/posts");
```

### Exempel-respons:

```
{
   "data":[
      {
         "id":1,
         "attributes":{
            "title":"En test-post",
            "slug":"en-test",
            "content":"Detta är en test-post",
            "author":"Oscar",
            "createdAt":"2022-02-28T09:58:30.863Z",
            "updatedAt":"2022-02-28T09:58:30.863Z"
         }
      }
   ],
   "meta":{
      "pagination":{
         "page":1,
         "pageSize":25,
         "pageCount":1,
         "total":1
      }
}
```
## Hämta EN posts

Vi använder "?populate=%2A" i slutet av urlen för att berätta för Strapi att vi vill ha allt innehåll och att den ska "populera" responsen med data, bland annat information om bilden vi har i vår post.

Vi får en /uploads/1o39u24u24.jpg-url av Strapi, och i detta fallet behöver vi lägga till adressen till servern innan - så det blir:
```
https://cme-blog.osuka.dev/uploads/1o39u24u24.jpg
```

```
const res = await axios.get("https://cme-blog.osuka.dev/api/posts/:id?populate=%2A");
```

### Exempel-respons:

```
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "En test-post",
      "slug": "en-test",
      "content": "Detta är en test-post",
      "author": "Oscar",
      "createdAt": "2022-02-28T09:58:30.863Z",
      "updatedAt": "2022-02-28T09:58:30.863Z",
      "image": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "600.jpeg",
            "alternativeText": "600.jpeg",
            "caption": "600.jpeg",
            "width": 1000,
            "height": 600,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_600.jpeg",
                "hash": "thumbnail_600_bca7c03eaf",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "path": null,
                "width": 245,
                "height": 147,
                "size": 7.64,
                "url": "/uploads/thumbnail_600_bca7c03eaf.jpeg"
              },
              "medium": {
                "name": "medium_600.jpeg",
                "hash": "medium_600_bca7c03eaf",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "path": null,
                "width": 750,
                "height": 450,
                "size": 46.48,
                "url": "/uploads/medium_600_bca7c03eaf.jpeg"
              },
              "small": {
                "name": "small_600.jpeg",
                "hash": "small_600_bca7c03eaf",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "path": null,
                "width": 500,
                "height": 300,
                "size": 24.62,
                "url": "/uploads/small_600_bca7c03eaf.jpeg"
              }
            },
            "hash": "600_bca7c03eaf",
            "ext": ".jpeg",
            "mime": "image/jpeg",
            "size": 52.74,
            "url": "/uploads/600_bca7c03eaf.jpeg",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2022-02-28T09:58:21.808Z",
            "updatedAt": "2022-02-28T09:58:21.808Z"
          }
        }
      }
    }
  },
  "meta": {}
}
```
