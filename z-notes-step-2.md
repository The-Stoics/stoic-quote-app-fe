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