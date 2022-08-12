let express = require(`express`)
// let logger = require(`morgan`)
let cookieParser = require(`cookie-parser`)
const { application } = require("express")

let app = express()

function logger(req, req, next) {
    console.log(req.method);
next()

}

app.use(logger)

app.get(`/user`, (req, res) => {
    console.log(req.method);
})
app.listen(5000, () => {
    console.log(`server linstening on port 5k`);
})