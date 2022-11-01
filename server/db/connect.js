const mongoose=require('mongoose');

const db='mongodb+srv://crud:new1234@crud.aql5kdl.mongodb.net/test'
//const db='mongodb+srv://meshohack:meshohack1234@hackthon.chq4mqj.mongodb.net/test'

mongoose.connect(db)
.then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})