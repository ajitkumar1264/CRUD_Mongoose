import React,{useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';


function Update() {

const {id}=useParams("");
console.log(id)
const nav=useNavigate();


const [inpval, setinpval] = useState({
  name:"",
  email:"",
  age:"",
  mobile:""
})

const handlechange=(e)=>{
  setinpval({
   ...inpval,[e.target.name]:e.target.value
  })
  console.log(setinpval)
}

const handlecache=async()=>{
  
  await axios.patch(`http://localhost:8000/api/${id}`,{
   name:inpval.name,
   email:inpval.email,
   age:inpval.age,
   mobile:inpval.mobile
  })

  alert("data updated")
  nav("/")

}





  return (
    <div className="container px-5 py-5 mt-5">
   <h1 className="mb-5">update entry id:{id}</h1>
    <div class="input-group flex-nowrap px-3">
    
    <input type="text" class="form-control mx-5" name='name' onChange={handlechange} placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
    <input type="text" class="form-control mx-5" name='email' onChange={handlechange}   placeholder="email" aria-label="Username" aria-describedby="addon-wrapping"/>
    
    
  </div>
    <div class="input-group flex-nowrap px-3 mt-5">
    
    <input type="Number" class="form-control mx-5" name='age' onChange={handlechange}    placeholder="age" aria-label="Username" aria-describedby="addon-wrapping"/>
    <input type="Number" class="form-control mx-5" name='mobile' onChange={handlechange}  placeholder="mobile no" aria-label="Username" aria-describedby="addon-wrapping"/>
    
  </div>
<div className="conatiner mt-5 flex px-5">
<div className="px-3">
  <button class="btn btn-primary w-80" onClick={handlecache}> update</button>
  </div>
  </div>

    </div>
  )
}

export default Update