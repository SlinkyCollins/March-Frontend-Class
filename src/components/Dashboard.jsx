import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let url = "https://march-backend-class.onrender.com/student/dashboard";
    let token = localStorage.getItem("token");
    axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then((res) => {
      if (res.data.status == true) {
        console.log("success");
      } else {
        localStorage.removeItem("token");
        navigate("/signin");
        console.log(res.status);
        console.log("error");
      }
    });
  }, []);
  return (
    <div>
      <h1>welcome to Dashboard</h1>
    </div>
  )
};

export default Dashboard