const express=require('express')
const app=express()
const routes=require('./Routes/routes')
require('./db/connect')
const cors=require('cors')


app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next();
})



app.use('/api',routes)

app.get('/',(req,res)=>{
    res.status(200).json({msg:"hello i am main server"})
})

app.listen(8000,()=>{
    console.log('server listening on http://localhost:8000')
})