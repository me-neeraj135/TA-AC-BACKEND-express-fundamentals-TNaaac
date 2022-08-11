let express = require(`express`)
let logger = require(`morgan`)
let cookieParser = require(`cookie-parser`)


let app = express()

app.use(logger(`dev`))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname))



app.use(`/admin`,( req, res, next) => {
    next(`unothorized accessed`)
})


app.use((req, res, next) => {
    let count = req.cookies.count
    console.log(req.cookies);
    if (count) {
        res.cookie(`count`,Number(count)+1)

    }
    else {
        res.cookie(`count`, 1)
        
    }
    next()
 
})



app.get(`/`, (req, res) => {
    res.send(`<h2> Welcome to express</h2>`)
})
app.get(`/about`, (req, res) => {
    res.send(`My name is qwerty`)
    
})
app.get(`/user/:username`, (req, res) => {
    let username = req.params.username
    res.send(`<h2>${username}</h2>`)
})
app.post(`/form`, (req, res) => {
res.json(req.body)
    
})

app.post(`/json`, (req, res) => {
    res.send(req.body)
})

// page not found handler

app.use((req, res, next) => {
    res.status(404).send(`page not found`)
})

// custom error handler 

app.use((err,req, res, next) => {
    res.status(500).send(err)
})
app.listen(3000, () => {
    console.log(`server listening on port 3k`);

})