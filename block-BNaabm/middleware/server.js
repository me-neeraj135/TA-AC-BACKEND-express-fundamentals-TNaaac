let express=require(`express`)
let app=express()

// function logger(req,res,next) {
// console.log(req.method,req.url); 
// next()   
// }


app.use("/",(req,res,next)=>{
console.log(req.method,req.url); 
next()   


})

// app.use(logger)
app.listen(4000,()=>{
    console.log(`server linstening on port 4k`);
})