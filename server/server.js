const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/book.router.js');
// add routes to book.delete and book.update
const booksDelete = require('./routes/book.delete.js');
const booksUpdate = require('./routes/book.update.js')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// connect .js routes
app.use('/books', booksDelete);
app.use('/books', booksUpdate)

app.use('/books', booksRouter);

// Serve back static files by default
app.use(express.static('server/public'))

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
