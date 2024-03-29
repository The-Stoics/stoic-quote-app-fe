Had to refactor the index.js due to React 18 changes.


// In App.js, I may add SWR and Suspense at a later time, this stops re-renders and allows loading to be synchronous. 

// ___________________________________________________


UNIT TESTING


TESTING: RTL & Jest
Must install Jest, RTL come with create-react-app. 
https://jestjs.io/docs/getting-started


`npm install --save-dev jest`

Dev Dep in package.json will now look like

  "devDependencies": {
    "@testing-library/react": "^13.3.0",
    "jest": "^28.1.1"
  }

// ___________________________________________________



// test is a global function from jest dom

// Can't query by className


// Arrange
// Act
// Assert

data-testid="banana":
When we want to query something that changes, we can use data-testid=""


// ____________________________


Created the __mocks__ folder and everything in it. It must connect to every test file like this:

import { server } from '../../components/__mocks__/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'wArNiNg' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// ------------------------------------------------------------------


// data-testid="banana"
// Look at common testing methods, not to be num toBe visable and all that jazz. RTL cheat sheet
// Add Test Driven Development to the project. Click to sort authors by name.



// __________________________________________________________________

Some tests I scrapped but saving for reference:



// Google Shallow mount and wrapper*
// State & props is always mocked

it('form input updates value when typing and resets on submit', async () => {

    let mockFormData = {
        author: '',
        source: '',
        quote: ''
    }

    let mockQuotes = [];


    const setFormData = jest.fn((newData) => {
        mockQuotes = newData;
    });

    const screen = render(<Form
        quotes={mockQuotes}
        setQuotes={(newQuote) => {
            mockQuotes.push(newQuote);
        }}
        formData={mockFormData}
        setFormData={setFormData}
    />);


    const authorInput = screen.getByPlaceholderText(/author*/i);
    const sourceInput = screen.getByPlaceholderText(/source*/i);
    const quoteInput = screen.getByPlaceholderText(/quote*/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });


    fireEvent.change(authorInput, { target: { value: 'Seneca' } }); // returns true. Why?
    console.log('authorInput.value =', authorInput.value);

    expect(authorInput.value).toBe('Seneca');
    // await waitFor(() => expect(authorInput.value).toBe('Seneca'));
    // console.log('authorInput.value =', authorInput);
    // fireEvent.change(sourceInput, { target: { value: 'On Anger' } });
    // fireEvent.change(quoteInput, { target: { value: 'The greatest remedy for anger is postponement' } });


    // expect(authorInput.value).toBe('Seneca');
    // expect(sourceInput.value).toBe('On Anger');
    // expect(quoteInput.value).toBe('The greatest remedy for anger is postponement');

    // fireEvent.click(submitButton)

    // await waitFor(() => {
    //     expect(authorInput.value).toBe("");
    //     expect(sourceInput.value).toBe("");
    //     expect(quoteInput.value).toBe("");
    // })
});







// ------------------------------------------------------------------

// test('Testing if data/quotes get rendered', async () => {
//     render(<App />); // Fails with App and Form
//     // render(<Form
//     //     quotes={[]}
//     //     formData={{}}
//     // />);

//     const button = await screen.getByRole(button);
//     // userEvent.click(button);
//     // expect(screen.getAllByTestId('banana')).toHaveLength(3);
//     screen.debug()
// });


// ------------------------------------------------------------------

























// ________________________________________

Random saved stuff to be deleted at a later time*





  This was in manifest.json

  {
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

-----------------------------------






  // _______ quotes



Epictetus

Discourses 4.1.128

The unhindered person is free. Whoever can be prevented, or coerced, frustrated or forced into a situation against their will, that person is a slave. The person who renounces externals cannot be hindered, as externals are things that are not within our power either to have or not to have.



  Cicero

On Ends 3.22

Take the case of one whose task it is to shoot a spear or arrow straight at some target. One’s ultimate aim is to do all in one’s power to shoot straight, and the same applies with our ultimate goal. In this kind of example, it is to shoot straight that one must do all one can; none the less, it is to do all one can to accomplish the task that is really the ultimate aim. It is just the same with what we call the supreme good in life. To actually hit the target is, as we say, to be selected but not sought.

Pierre Hadot

The Inner Citadel, pg 106-7

The hēgemonikon is alone free, because it alone can give or refuse its assent to that inner discourse which enunciates what the object is which is represented by a given phantasia. This borderline which objects cannot cross, this inviolable stronghold of freedom, is the limit of what I shall revert to as the inner citadel.

Marcus Aurelius

Meditations 7.47

Observe the movement of the stars as if you were running their courses with them, and let your mind constantly dwell on the changes of the elements into each other. Such imaginings wash away the filth of life on the ground.

Seneca

Letters 95.51

It is more wretched to harm than to be harmed.

Marcus Aurelius

Meditations 11.18.9

Kindness is invincible, if it is sincere and not an act. What can the most aggressive man do to you if you continue to be kind to him?

Seneca

Letters 6.9.3

There is no beneﬁt unless it proceeds from a good intention.

Seneca

Letters 94.74

You see, it is as if good fortune and good character were opposite. We are wiser in adversity, for prosperity robs us of rectitude. Farewell.

Epictetus

Discourses 3.25.102

I seek no other place than that in which I am.

Marcus Aurelius

Meditations 6.50

Your intentions to act are always with a reserve clause, remember; you were not aiming at the impossible. At what then? Simply at making the attempt itself. In this you succeeded; and with that, the object of your existence is attained.

Epictetus

Enchiridion 8

Do not wish that all things will go well with you, but that you will go well with all things.

Epictetus

Enchiridion 5

Uneducated people blame others when they are doing badly. Those whose education is underway blame themselves. But the fully educated person blames no one, neither himself or anyone else.

Epictetus

Discourses 4.7.13

Is it your wish that I should be poor? Bring it on then, and you’ll see what poverty is when it finds a good actor to play the part. Is it your wish that I should hold office? Bring it on. Is it your wish that I should be deprived of office? Bring it on. Is it your wish that I should suffer hardships? Bring those on too. What, and exile? Wherever I go, all will be well with me, since that was also the case here, not because of the place but because of my judgements, and those that I’ll carry away with me, no one can take them away from me, they’re the only things that are truly my own, and it is enough for me that I should possess them, wherever I am and whatever I’m doing. ‘But the time has come for you to die.’ Why do you say ‘to die’? Don’t make a tragedy of the matter, but tell it as it is: ‘It is now time for the material of which you’re composed to return to the elements from which it came.’ And what is terrible in that? What element among all that make up the universe will be fated to perish? What new or extraordinary thing is going to come about?

Marcus Aurelius

Meditations 11.18.7

It is not people's actions that trouble us, but our judgements of them, because the harm lies in their own minds. Remove these judgments, make up your mind to dismiss your assessment of some supposed outrage, and your anger is gone. And how to remove them? By reflecting that no moral harm has been done to you. Moral harm is the only true harm.






  // _____________











// Could not get this one to work.***
// test('mocking input', () => {

//     const fakeQuotes = jest.fn(() => {
//         return 'This is FAKE!'
//     });

//     const fakeSubmitHandler = jest.fn(() => {
//         return 'This is FaKE!'
//     });

//     const fakeSetFormData = jest.fn(() => {
//         return 'This is FAKE!'
//     });

//     const fakeFormData = jest.fn(() => {
//         return 'This is FAKE!'
//     });

//     const fakeSetQuotes = jest.fn(() => {
//         return 'This is FaaaAKE!'
//     });

//     render(<App
//         // quotes={fakeQuotes}
//         // formData={fakeFormData}
//         submitHandler={fakeSubmitHandler}
//     // setFormData={fakeSetFormData}
//     // setQuotes={fakeSetQuotes}
//     />);

//     const button = screen.getByRole(/button/i); // button is a role.
//     fireEvent.click(button);
//     // userEvent.click(button);
//     // userEvent.click(button);
//     expect(button).toHaveBeenCalledTimes(1);

//     console.log('@@@@@@@@@@@@', fakeFormData.mock);
// })

// --------------------------



it('should render a list of quote cards when isLoading is false', async () => {
    render(<App />);
    const skeletonLoading = screen.getAllByTestId('skeleton-loading');
    expect(skeletonLoading).toBeInTheDocument();
    expect(screen.queryByText(/AuthorMock/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/SourceMock/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/QuoteMock/i)).not.toBeInTheDocument();
});



// ----------------------------------------------------------------







 ___________________________________________________________



Personal notes below, I will delete later:



```js


  // Gets all of the data and sets it to state.
  useEffect(()=>{
    axios
    .get('https://thestoics.herokuapp.com/quotes')
    .then(res => setQuotes(res.data))
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
