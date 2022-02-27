const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('IT WORKED');
});
app.get('/new', function (req, res) {
  res.send('New also worked');
});

app.listen(process.env.PORT || 5000);
module.exports = app;

// const dotenv = require('dotenv');
// const dotenvExpand = require('dotenv-expand');
// const myEnv = dotenv.config();
// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs');

// dotenvExpand.expand(myEnv);

// const app = express();
// const API_PORT = process.env.API_PORT;
// const PORT = process.env.PORT || API_PORT;
// const FRONTEND_URI = process.env.FRONTEND_URI;

// let quotes;
// fs.readFile('data/programming-quotes.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   quotes = JSON.parse(data);
//   console.log(quotes[Math.floor(Math.random() * quotes.length)].en);
// });

// const getRandomQuote = () => {
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   return randomQuote;
// };

// const whitelist = [`${FRONTEND_URI}`];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// };
// app.use(cors(corsOptions));

// app.get('/Hello', (req, res) => {
//   res.send('<h1>Hello World</h1>');
// });

// const root = require('path').join(__dirname, 'client', 'build');
// app.use(express.static(root));

// app.get('/api/random-quote', (req, res) => {
//   res.send(getRandomQuote());
// });

// // All remaining requests return the React app, so it can handle routing.
// app.get('*', (req, res) => {
//   // res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
//   res.redirect(`${FRONTEND_URI}`);
// });

// app.listen(PORT, () => {
//   console.log(`App listening on PORT:${PORT}`);
// });
