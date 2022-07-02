 # [Deployment https://thestoics.netlify.app/:](https://thestoics.netlify.app/)

 Welcome to The Stoics, a quote app about the ancient Stoic philosophers from Greece and Rome. 


| Method | URL              | Description                           |
| ------ | ---------------- | -------------------------------------------------------------------------- |
| GET    | /quotes          | Returns an array of all the quote objects contained in the database.       |
| GET    | /quotes/:id      | Returns the quote object with the specified `id`.                          |
| POST   | /quotes          | Creates a quote using the information sent inside the `request body`.      |
| DELETE | /quotes/:id      | Removes the quote with the specified `id`.                                 |
| PUT    | /quotes/:id      | Update & return quote with the specified `id` from the `request body`.     |


 - [Figma prototype:](https://www.figma.com/proto/1ilZj7gIRRZy6RAZNFXHTp/Stoics?page-id=0%3A1&node-id=13%3A78&viewport=-661%2C522%2C0.71&scaling=min-zoom)

  - My API [https://thestoics.herokuapp.com/quotes](https://thestoics.herokuapp.com/quotes)



