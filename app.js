const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const request = require('request')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views/'));
app.use('/api/execute', require('./routes/api/execute'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))