const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Clontarf')
app.listen(3000, () => console.log('Catching a ride on port 3000'))
