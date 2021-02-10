const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

console.log(`db URI: ${db}`)
mongoose.connect(db, dbOptions)
  .then( () => console.log('DB connected'))
  .catch( err => console.log(err))

app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server up on ${port} 🚀🚀`))