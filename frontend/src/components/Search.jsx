import React, { useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const Search = () => {
    const navigate = useNavigate();
    const [mobileNo , setMobileNo] =useState();
const[allCandidateData ,setAllCandidateData] =useState(null);

    useEffect(
      ()=>{
         (  ()=>  load())();        
      }
      
  ,[])

  
  const load = async ()=> {
    try {
    if(mobileNo.length ==12){
      const result= await axios.get("http://localhost:8084/api/v1/candidate/" +mobileNo);
      setAllCandidateData(result.data);
     //  setRecords(result.data);
      console.log(mobileNo);
    }else
    {
      alert("phone number should be 12 digit");
    }
  } catch (error) {
    // alert("Error to record data...");
}
    
  } 
  const data = allCandidateData;

  const handleInputChange = (event) => {
    setMobileNo(event.target.value);
  };
    const BackToHome =()=>{
        navigate("/");
    }
  return (
    <div className='container'>
            <h1>JALA Service</h1>
        <div className='serach-bar-button'>
            <label >Search User:</label>
            <input type="number" placeholder="Enter 12-digit number"              
             onChange={handleInputChange}
             value={mobileNo}
            />
            <button id="searchButton" onClick={()=>load()}>Search</button>
        </div>
{
  allCandidateData
  &&

<table className="table">
<thead>
  <tr>
    <th scope="col"> Name : </th><td scope="col">{data.name}</td>
    </tr>
    <tr>
                          <th scope="col">Contact :</th><td scope="col">{data.contact}</td>

    </tr>
    <tr>
                         <th scope="col">DOJ : </th><td scope="col">{data.doj}</td>

    </tr>
    <tr>
                          <th scope="col">Email : </th> <td scope="col">{data.email} </td>

    </tr>
    <tr>
                        <th scope="col">Type : </th>  <td scope="col">{data.candidate_type}</td>

    </tr>
    <tr>
                          <th scope="col">Status : </th><td scope="col">{data.status}</td>

    </tr>
    <tr>
                          <th scope="col">Comments :</th><td scope="col">{data.comments}</td>

    </tr>
    <tr>
                          <th scope="col">Experience : </th> <td scope="col">{data.experience}</td>

    </tr>
    <tr>
                          <th scope="col">Due By :</th><td scope="col">{data.due_by}</td>

    </tr>


</thead>



</table>
}
        

              <button onClick={BackToHome}>Back to Home</button>

    </div>

    
  )
}

export default Search