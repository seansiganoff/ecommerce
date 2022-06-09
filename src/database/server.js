const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const db = require('./db');



app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json('Node.js, Express, and Postgres API')
})
  
app.get('/rolex', db.getWatches);
app.post('/rolex', db.addWatch);
app.delete('/rolex/:id', db.deleteWatch);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})