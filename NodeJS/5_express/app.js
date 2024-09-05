const express = require('express')
const app = express()
const booksRouter = require('./routes/booksRouter')
const authorsRouter = require('./routes/authorsRouter')
const indexRouter = require('./routes/indexRouter')

app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
app.use('/', indexRouter)

const PORT = 3000;
app.listen(PORT, () => console.log(`My first express app on port ${PORT}`))
// http://localhost:3000/
// http://localhost:3000/books/
// http://localhost:3000/books/12
// http://localhost:3000/books/12/reserve
// http://localhost:3000/authors
// http://localhost:3000/authors/12