import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom'

function Profile() {
const [data, setdata] = useState([])
const {id}=useParams("");
console.log(id)

const profilenew=async()=>{

await axios.get(`http://localhost:8000/api/${id}`).
then((res)=>{
  console.log(res)
  const dat=res.data;
  setdata([dat])
}).catch((err)=>{
  console.log(err)
})
}

useEffect(()=>{

profilenew();

},[data])


  return (
    <>

{data.map((item,id)=>{

  return(


    <div className="container mt-10 ">
    
    <div class="card ">
   
  <div class="card-header ">
  <h4 className='px-5'>Your id : {item._id}</h4>
    
  </div>
  <div className='px-5 '>
  <div class="card-body">
    <h3 class="card-title mt-4">Your name : {item.name}</h3>
    <h3 class="card-text mt-4">Your email address : {item.email}</h3>
    <h3 class="card-text mt-4">Your age : {item.age}</h3>
    <h3 class="card-text mt-4">Your mobileno : {item.mobile}</h3>
   <Link to={`/update/${item._id}`}><button className="btn btn-primary mt-4">update</button></Link> 

    
  
  </div>
  </div>
</div>
    
    </div>
    





  )


})}

   
    </>
  )
}

export default Profile