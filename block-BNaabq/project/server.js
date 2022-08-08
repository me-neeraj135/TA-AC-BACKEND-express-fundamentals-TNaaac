let express=require(`express`)
let logger=require(`morgan`)
let cookieParser=require(`cookie-parser`)
const { urlencoded } = require("express")
const morgan = require("morgan")
let app=express()

app.use(logger(`dev`))

app.use(morgan())
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(express.static(__dirname+`/public`))
app.use(cookieParser())

app.use((req,res,next)=>{
   console.log(req.url);
    res.cookie(`username`,`suraj`)
    next()
})


app.get(`/about`,(req,res)=>{
    res.send(`welcome to express`)
})

app.listen(3000,()=>{
    console.log(`server listening on port 3k`);
})