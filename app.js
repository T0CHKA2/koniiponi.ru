const express = require("express")
const app = express()
const port = 3000
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile("home.html", {root: __dirname})
});

router.get('/price', (req, res) => {
    res.sendFile("price.html", {root: __dirname})
});

app.use(express.static(__dirname + '/public'));
app.use('/', router);
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})