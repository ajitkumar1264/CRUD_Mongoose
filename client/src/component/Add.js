import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Add() { 

  const [data, setdata] = useState([])
  const nav=useNavigate();


  const deleteitem=async(id)=>{

  
  
    await axios.delete(`http://localhost:8000/api/${id}`).then((res)=>{
      
      const dat=res.data;
      console.log(dat)
     alert("deleted the data")
      setdata([dat])
    })
    
  
  }

useEffect(()=>{

const update=()=>{

  axios.get('http://localhost:8000/api').then((res)=>{
    console.log(res)
    const dat=res.data;
    console.log(dat)
    setdata([...dat])
    console.log(data)
   
  }).catch(error=>{console.log(error)})
}
 
update();
deleteitem();

},[data])






 


  



  return (
    <>
    <div className='mt-5'>
    <div className="container">
   <h1>MERN CRUD</h1> 
    <div className="add_btn mt-2">
    
    <Link to="/entry">
    
    <button type="button" class="btn btn-success">add</button></Link>

    
   
    </div>
<div className='mt-5 container'>
    <table class="table table-dark">
  <thead>
    <tr claaName=''>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">age</th>
      <th scope="col">view</th>
      <th scope="col">delete</th>
      <th scope="col">update</th>
      

    </tr>
  </thead>

  {data.map((res,id)=>{
    return(


      <tbody>
      <tr className=''>
        <th scope="row">{id+1}</th>
        <td>{res.name}</td>
        <td>{res.email}</td>
        <td>{res.age}</td>
        <td>{res.mobile}</td>
    
        <td>   <Link to={`/profile/${res._id}`}><button className="btn btn-primary">see</button> </Link></td>
        
        <td> <button className="btn btn-success" onClick={()=>{deleteitem(res._id)}} >delete</button></td>
        <td> <Link to={`/update/${res._id}`}> <button className="btn btn-danger">update</button></Link></td>
      </tr>
      
      
    </tbody>


    )
  })}

      





   



  

  
</table>

</div>
    
    </div>
    
    </div>
    </>
  )
}

export default Add