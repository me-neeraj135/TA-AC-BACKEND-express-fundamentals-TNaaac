let express=require(`express`)
let app= express()


app.get(`/`,(req,res)=>{
    res.send(`Welcome`)
})

app.get(`/about`,(req,res)=>{
    res.send(`this is about page`)
})

app.listen(3000,()=>{
    console.log(`server listenting on 3k`);
})