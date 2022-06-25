
import { rest } from 'msw'

export const handlers = [

    rest.get('https://thestoics.herokuapp.com/quotes', (req, res, ctx) => {
        return res(ctx.json(
            [
                {
                    id: 1,
                    author: 'authorMock 1',
                    source: 'sourceMock 1',
                    quote: 'quoteMock 1'
                },
                {
                    id: 2,
                    author: 'authorMock 2',
                    source: 'sourceMock 2',
                    quote: 'quoteMock 2'
                },
                {
                    id: 3,
                    author: 'authorMock 3',
                    source: 'sourceMock 3',
                    quote: 'quoteMock 3'
                }
            ]
        ))
    }),

    rest.post('https://thestoics.herokuapp.com/quotes', (req, res, ctx) => {
        return res(ctx.json(req.body))
    }),

    rest.put('https://thestoics.herokuapp.com/quotes/:id', (req, res, ctx) => {
        return res(ctx.json(req.body))
    }),

    rest.delete('https://thestoics.herokuapp.com/quotes/:id', (req, res, ctx) => {
        return res(ctx.json(req.body))
    }),

]






















// rest.post('https://thestoics.herokuapp.com/quotes'), (req, res, ctx) => {
//     return res(ctx.json(
//         {
//             id: 99,
//             author: '',
//             source: '',
//             quote: ''
//         }
//     ))
// }),

// rest.post('https://thestoics.herokuapp.com/quotes'), (req, res, ctx) => {
//     return res(ctx.json('req.body'))
// })


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