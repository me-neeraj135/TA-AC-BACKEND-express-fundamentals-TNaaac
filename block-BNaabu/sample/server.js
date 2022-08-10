let express = require(`express`)
let logger = require(`morgan`)
let cookiePraser = require(`cookie-parser`)


let app = express()

app.use(logger(`tiny`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname))

app.use((req, res, next) => {
    if (req.url === `/admin`) {
        return next(`unauthorized`)
    } else {
        next()
    }
})

app.get(`/`, (req, res) => {
    res.sendFile(__dirname+`index.html`)
})

app.get(`/about`, (req, res) => {
    res.sendFile(__dirname+`/about.html`)
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err)
})

app.listen(4000, () => {
    console.log(`server listen on port 4k `);
})
