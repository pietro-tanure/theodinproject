const express = require('express')
const Routes = require('./routes/Routes')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

app.use('/', Routes)

const PORT = 3000; // You can change this to any port you prefer
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});