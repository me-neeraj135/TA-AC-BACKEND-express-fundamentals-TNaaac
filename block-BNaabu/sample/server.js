let express = require(`express`)
let logger = require(`morgan`)
let cookiePraser = require(`cookie-parser`)


let app = express()

app.use(logger(`tiny`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname))

// custome middleware
app.use((req, res, next) => {
    if (req.url === `/admin`) {
        return next(`unauthorized`)
    } else {
        next()
    }
})
// route middlewares

app.get(`/`, (req, res) => {
    res.sendFile(__dirname+`index.html`)
})

app.get(`/about`, (req, res) => {
    res.sendFile(__dirname+`/about.html`)
})
// 404 error
app.use((req, res, next) => {
    res.send(`page not found`)
})
// custome error
app.use((err, req, res, next) => {

    res.status(500).send(err)
})

app.listen(4000, () => {
    console.log(`server listen on port 4k `);
})
