import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();

    const[allCandidateData ,setAllCandidateData] =useState([]);
    const [candidateName , setCandidateName] = useState("");
    const [contact , setContact] = useState();
    const [doj , setDoj] = useState("");
    const [email , setEmail] = useState("");
    const [candidateType , setcandidateType] = useState("");
    const [cstatus , setCstatus] = useState("");
    const [comments , setComments] = useState("");
    const [experience , setExperience] = useState("");
    const [dueBy , setdueBy] = useState("");

useEffect(
    ()=>{
       ( async ()=> await Load())();
        
    }
,[])

async function Load() {
    
   const result= await axios.get("http://localhost:8084/api/v1/candidate");
   setAllCandidateData(result.data);
//    console.log(result.data);
} 

async function saveData(event) {
    event.preventDefault();
    try {
        if(candidateName !== "" && contact!==0 && doj!=="" && email!=="" 
            && candidateType!=="" && cstatus!=="" 
            && experience!=="" && dueBy!==""){
        await axios.post("http://localhost:8084/api/v1/candidate/save" ,
            {
        name: candidateName,
        contact: contact,
        doj: doj,
        email: email,
        candidate_type: candidateType,
        status: cstatus,
        comments: comments,
        experience: experience,
        due_by: dueBy
            }
        );
        alert("candidate data save successfuly....!");
        setCandidateName("");
        setContact("");
        setDoj("");
        setEmail("");
        setcandidateType("");
        setCstatus("");
        setComments("");
        setExperience("");
        setdueBy("");
        Load();
    }else{
        alert("Enter required filds....")
    }

    } catch (error) {
        alert("Error to record data...");
    }
}

    const BackToHome =()=>{
        navigate("/");
    }
  return (
    <div className='container'>
          <h1>JALA Service</h1>
        <div id="entryFormPage">
        <form id="userForm">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" 
            value={candidateName}
            onChange={(event)=>{setCandidateName(event.target.value);}}
            required />
            
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" id="phoneNumber" placeholder="Phone Number (12 digits)"
            value={contact}
            onChange={(event)=>{setContact(event.target.value);}}
             required />
            
            <label htmlFor="doj">Date of Joining (DOJ):</label>
            <input type="date" id="doj" placeholder="Date of Joining"
            value={doj}
            onChange={(event)=>{setDoj(event.target.value);}}
             required />
            
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" placeholder="Email"
            value={email}
            onChange={(event)=>{setEmail(event.target.value);}} required />
            
            <label htmlFor="candidateType">Candidate Type:</label>
            <select id="candidateType" name="candidateType"
            value={candidateType}
            onChange={(event)=>{setcandidateType(event.target.value);}}
            >
                <option value="Job Seeker">Job Seeker</option>
                <option value="Intern">Intern</option>
                <option value="Kids">Kids</option>
            </select>
            
            <label htmlFor="status">Status:</label>
            <select id="status" name="status"
             value={cstatus}
             onChange={(event)=>{setCstatus(event.target.value);}}
             >
                <option value="Paid">Paid</option>
                <option value="Payment Due">Payment Due</option>
            </select>
            
            <label htmlFor="comments">Comments:</label>
            <input type="text" id="comments" placeholder="Comments" 
             value={comments}
             onChange={(event)=>{setComments(event.target.value);}}
             />
            
            <label htmlFor="experience">Experience:</label>
            <select id="experience" name="experience"
             value={experience}
             onChange={(event)=>{setExperience(event.target.value);}}
             >
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>
            </select>
            
            <label htmlFor="dueBy">Due By:</label>
            <input type="date" id="dueBy" placeholder="Due By" required 
             value={dueBy}
             onChange={(event)=>{setdueBy(event.target.value);}}
             />
            
            <button type="submit" onClick={saveData}>Submit</button>
        </form>
        <button onClick={BackToHome}>Back to Home</button>
    </div>
    
    </div>
  )
}

export default Form