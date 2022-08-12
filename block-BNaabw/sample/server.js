let express = require(`express`)
let logger = require(`morgan`)
let cookieParser = require(`cookie-parser`)

let app = express()

app.use(logger(`dev`))
app.use(cookieParser())


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname))

app.use(`/admin`,(req, res, next) => {
    next(`unothorized access`)
})

app.get(`/`, (req, res) => {
    console.log(req.url);
    res.sendFile(__dirname+`index.html`)
})
app.get(`/users`, (req, res) => {
    res.send(`hello users`)
})






// 404 middleware
app.use((req, res, next) => {
    res.send(`page not found`)
})
// custom error middleware

app.use((err, req, res, next) => {
    res.status(500).send(err)
})
app.listen(4000, () => {
    console.log(`server linstening on port 4k`);
})