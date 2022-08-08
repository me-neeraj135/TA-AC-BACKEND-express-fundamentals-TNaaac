const { urlencoded } = require("express")
let express=require(`express`)
let app =express()



app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+ `/public`))



app.use(`/`,(req,res,next)=>{
    console.log(req.url);
next()
})

app.get(`/`,(req,res)=>{
    console.log(req.url);
    res.sendFile(__dirname+`/index.html`)

})
app.post(`/json`,(req,res)=>{
    console.log(req.body);
   
})
app.post(`/contact`,(req,res)=>{
    console.log(req.body);
})


app.listen(4000,()=>{
    console.log(`server listening on port 4k`);
})