require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3333;

const routes = require('./routes');


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT);

