import axios from "axios";
import { useState } from 'react'
// import bcrypt from 'bcryptjs';

const Fetch = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let URL = "http://localhost:8000/student/register"

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        axios.post(URL, {firstName, lastName, email, password})
        .then((res) => {
            console.log("Request sent successfully");
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    };
  return (
    <div>
        <form action="">
            <input type="text" name="firstName" id="firstName" placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
             />
             <input type="text" name="lastName" id="lastName" placeholder="Enter last Name"
            onChange={(e) => setLastName(e.target.value)}
             />
             <input type="email" name="email" id="email" placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
              />
              <input type="password" name="password" id="password" placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
               />
               <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Fetch