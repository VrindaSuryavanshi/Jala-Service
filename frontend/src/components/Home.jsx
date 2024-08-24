import React, { useState } from 'react'
import { 
    useNavigate,
  
} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [password , setPassWord] = useState("")

    const showSearchPage =()=>{console.log("search")
        navigate("/search");
    };
    const showEntryForm =()=>{console.log("form");
        if(password ==="admin"){
                   navigate("/form"); 
        }else{
            alert("Invalid password....")
        }
    };
  return (
    <div className='container'>
        <h1>JALA Service</h1>
    
    <div id="landingPage" className='serach-bar-button'>
        <button onClick={showSearchPage}>Search User</button>
        <input type='text' placeholder='Enter Password' value={password}
         onChange={(event)=> setPassWord(event.target.value)} required
         className='passwordInput'></input>
        <button onClick={showEntryForm}>Enter User Data</button>
    </div>
    
    </div>
  )
}

export default Home