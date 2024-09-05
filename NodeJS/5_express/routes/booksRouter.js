const Router = require('express')

const booksRouter = Router()

class Library {
  constructor() {
    this.list = []
  }

  reserve(bookId) {
    if (this.getReserve(bookId)) {
      return false
    } else {
      this.list.push(bookId)
      return true
    }
  }

  getReserve(bookId) {
    return this.list.includes(bookId)
  }
}

const newLibrary = new Library

booksRouter.get('/', (req, res) => {
  const allBooks = newLibrary.list
  res.send(`Books: ${allBooks}`)
})
booksRouter.post('/:bookId/reserve', (req, res) => {
  const bookId = req.params.bookId
  const message = newLibrary.reserve(bookId)
    ? `${bookId} reserved succesfully`
    : `${bookId} hasn't been reserved`
  res.send(message)
})
booksRouter.get('/:bookId/reserve', (req, res) => {
  const bookId = req.params.bookId
  const message = newLibrary.getReserve(bookId)
    ? `${bookId} already reserved`
    : `${bookId} is not reserved`
  res.send(message)
})
booksRouter.get('/:bookId', (req, res) => {
  const bookId = req.params.bookId
  res.send(`Book ${bookId}`)
})

module.exports = booksRouter;