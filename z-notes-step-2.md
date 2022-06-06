Had to refactor the index.js due to React 18 changes.


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