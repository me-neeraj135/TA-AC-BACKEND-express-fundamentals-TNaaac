const { urlencoded } = require("express")
let express=require(`express`)
let app =express()



app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+ `/public/i    mages`))



app.use(`/`,(req,res,next)=>{
    console.log(req.body);
next()
})


app.post(`/json`,(req,res)=>{
    console.log(req.body);
   
})
app.post(`/contact`,(req,res)=>{
    console.log(req.body);
})
app.get((req.url).slice(`.`).pop()===`jpg`,(req,res)=>{
    res.sendFile(__dirname+`/public/images`)
})

app.listen(4000,()=>{
    console.log(`server listening on port 4k`);
})