const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('/', (req, res) => res.send('Hello Clontarf'))
app.listen(3000, () => console.log('Catching a ride on port 3000'))
