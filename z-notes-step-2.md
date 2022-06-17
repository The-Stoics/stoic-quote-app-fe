Had to refactor the index.js due to React 18 changes.

TESTING: RTL & Jest
Must install Jest, RTL come with create-react-app. 
https://jestjs.io/docs/getting-started


`npm install --save-dev jest`

Dev Dep in package.json will now look like

  "devDependencies": {
    "@testing-library/react": "^13.3.0",
    "jest": "^28.1.1"
  }



  // --------------------------------------

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










IGNORE BELOW. NOTES TO BE DELETED!


// _____________________________________________


// get by id code to delete*
// const [quoteId, setQuoteId] = useState({});
// const params = useParams();
// console.log('#######################', params.id);
// useEffect(() => {
//     console.log('BEFORE AXIOS GET ID')
//     axios.get(`https://thestoics.herokuapp.com/quotes/${params.id}`)
//         .then(res => console.log('@@@@@@@@ getting id')) //  setQuoteId(res.data))
//         .catch(err => console.log(err))
// }, []);



```js
export default function App() {
    const [taskName, setTaskName] = useState('');
    const [time, setTime] = useState('');
    const [taskList, setTaskList] = useState([]);




    const addTask = (e) => {
        setTaskList([...taskList, { task: taskName, time: time }]);
        setTaskName('');
        setTime('');
    };

    return (
        <div className='app'>

            <label>Name</label>
            <input
                id="task"
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
            />

            <label>Time</label>
            <input
                id="time"
                type="text"
                onChange={(e) => setTime(e.target.value)}
            />

            <button onClick={addTask}>Add</button>


            {/* {taskList.map((task) => {
                return (
                    <Task taskName={task.task} time={task.time} />
                );
            })} */}

            {[...taskList].reverse().map((task) => {
                return (
                    <p>{task.task}</p>
                );
            })}

            {/* {taskList.slice(0).map((task) => {
                return (
                    <p>{task.task}</p>
                );
            })} */}

            {[...taskList].reverse().map((task, id) => (
                <div key={task}>
                    {console.log(task)}
                    <div>{task.task}</div>
                    <div>{task.time}</div>
                    {/* <button onClick={() => deleteQuote(quote.id)}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}



// expect(screen).getByRole('button', { name: /Add/i }).toBeEnabled()


// test('On initial render', () => {
//     render(<App />)
//     // screen.debug() // console.log() the body of the DOM

//     screen().getByText(/Add/i)

// })