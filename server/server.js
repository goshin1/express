const express = require('express');
const app = express();
const test = require('./Router/test');

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());


app.use('/api', test);

const port=5000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

