import axios from "axios";
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let URL = "http://localhost:8000/student/login"

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        axios.post(URL, {email, password})
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
             <input type="email" name="email" id="email" placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
              />
              <input type="password" name="password" id="password" placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
               />
               <button type="button" onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login