let express=require(`express`)
let logger=require(`morgan`)
let cookieParser=require(`cookie-parser`)
const { urlencoded } = require("express")


let app=express()


app.use(logger(`dev`))


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname +`/public/`))


app.use((req, res, next) => {
    // console.log(req.url);
    next()
})
app.get(`/`,(req,res)=>{
    res.sendFile( __dirname+`/index.html`)
})


app.get(`/new`, (req, res) => {
  
    res.sendFile( __dirname+`/new.html`)
})

app.post(`/new`, (req, res) => {
    console.log(req.body);
    res.json(req.body)
})
app.get(`/user/:name`, (req, res) => {
    let username = req.params.name
    res.send(username)
})
app.listen(4000,()=>{
    console.log(`server linstening on port 4k`);
})