 - [Deployment:](https://thestoics.netlify.app/)

 - [Figma prototype:](https://www.figma.com/proto/1ilZj7gIRRZy6RAZNFXHTp/Stoics?page-id=0%3A1&node-id=13%3A78&viewport=-661%2C522%2C0.71&scaling=min-zoom)



  - My API [https://thestoics.herokuapp.com/quotes](https://thestoics.herokuapp.com/quotes)


| Method | URL              | Description                           |
| ------ | ---------------- | -------------------------------------------------------------------------- |
| GET    | /quotes          | Returns an array of all the quotes objects contained in the database.      |
| GET    | /quotes/:id      | Returns the quote object with the specified `id`.                          |
| POST   | /quotes          | Creates a quote using the information sent inside the `request body`.      |
| DELETE | /quotes/:id      | Removes the quote with the specified `id`.                                 |
| PUT    | /quotes/:id      | Update & return quote with the specified `id` from the `request body`      |








 ___________________________________________________________























____________________________________________________________


```js


  // Gets all of the data and sets it to state.
  useEffect(()=>{
    axios
    .get('http://localhost:5000/api/movies')
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  }, []);



  const deleteMovie = (id) => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`, id)
      .then(res => console.log(res))
      .catch(err => console.log(err, "err in deleteMovie"))
  }


____



function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't allow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

   if (error) <div>Error: {error.message}</div>;
   else if (!isLoaded) <div>Loading...</div>;
   else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}






```


_____________________________________________________________

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
