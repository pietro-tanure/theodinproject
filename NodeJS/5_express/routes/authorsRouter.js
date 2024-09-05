const Router = require('express')

const authorsRouter = Router()

authorsRouter.get('/', (req, res) => { res.send('all authors') })
authorsRouter.get('/:authorId', (req, res) => {
  const authorId = req.params.authorId
  res.send(`Author ID: ${authorId}`)
})

module.exports = authorsRouter;