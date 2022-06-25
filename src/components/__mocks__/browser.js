// import { setupWorker, rest } from "msw";
import { setupWorker } from "msw";
import { handlers } from "./handlers";


export const worker = setupWorker(...handlers)


// worker.start()
// This is what actually starts the mock. Comment out to stop mock mode.






// rest.get('https://thestoics.herokuapp.com/quotes', (req, res, ctx) => {
//     return res(ctx.json(
//         [
//             {
//                 id: 1,
//                 author: 'authorMock 1',
//                 source: 'sourceMock 1',
//                 quote: 'quoteMock 1'
//             },
//             {
//                 id: 2,
//                 author: 'authorMock 2',
//                 source: 'sourceMock 2',
//                 quote: 'quoteMock 2'
//             },
//             {
//                 id: 3,
//                 author: 'authorMock 3',
//                 source: 'sourceMock 3',
//                 quote: 'quoteMock 3'
//             }
//         ]
//     ))
// }),

// rest.post('https://thestoics.herokuapp.com/quotes', (req, res, ctx) => {
//     return res(ctx.json(req.body))
// }),

// rest.put('https://thestoics.herokuapp.com/quotes/:id', (req, res, ctx) => {
//     return res(ctx.json(req.body))
// }),

// rest.delete('https://thestoics.herokuapp.com/quotes/:id', (req, res, ctx) => {
//     return res(ctx.json(req.body))
// }),
















// _____Random notes to delete before deployment:______


// router.post('/', async (req, res) => {
//     const createdQuote = await Quotes.create(req.body)
//     res.status(201).json(createdQuote)
// })

// async function create(newQuote) {
//   const [quote_data] = await db('quotes').insert(newQuote, ['*']);
//   return quote_data
// }

// .post('https://thestoics.herokuapp.com/quotes')

// Example from MSW.io:
// setupWorker(
//     // Match all "POST" requests to the given path
//     rest.post('/author/:authorId/:postId', responseResolver),
//   )
/*

// Delete by id = http://localhost:4040/quotes/:id
router.delete('/:id', checkId, async (req, res) => {
    const id = req.params.id;
    await Quotes.remove(id)
    res.status(204).json(`Plant id: ${id} information has been removed.`)
})

async function remove(id) {
  const deletedQuoteData = await db('quotes').where({ id: id }).del()
  return deletedQuoteData;
}

.delete(`https://thestoics.herokuapp.com/quotes/${id}`)


// Update by id. = http://localhost:4040/quotes/:id
router.put('/:id', checkId, async (req, res) => {
    const updatedQuote = await Quotes.updateById(req.params.id, req.body)
    res.status(200).json(updatedQuote)
})

async function updateById(id, quote_data) {
  await db('quotes').where({ id: id }).update(quote_data)
  return findById(id)
} 

.put(`https://thestoics.herokuapp.com/quotes/${quote.id}`)
*/



/*
    Example from MSW site on params:

    import { setupWorker, rest } from 'msw'

    const worker = setupWorker(
    rest.get('/users/:userId', (req, res, ctx) => {
        const { userId } = req.params
        return res(
        ctx.json({
            id: userId,
            firstName: 'John',
            lastName: 'Maverick',
        }),
        )
    }),
    )

    worker.start()
*/