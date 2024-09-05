const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const index = (req, res) => {
  res.render('index', { title: 'Board', messages })
}

const new_message_get = (req, res) => {
  res.render('form', { title: 'New Message' })
}

const new_message_post = (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
}

module.exports = { index, new_message_get, new_message_post }
