import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Signin = () => {
    const navigate = useNavigate()
    const URL = "https://march-backend-class.onrender.com/student/login"

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        // onSubmit: async (values) => {
        //     try {
        //         const response = await axios.post(URL, values);
        //         console.log("Login successful:", response.data);
        //     }
        //     catch(error){
        //         console.log(error);
        //     }
        // }})
        
        onSubmit: (values, {setValues}) => {
            if (values.email =="" || values.password =="") {
                console.log("please fill in the values ");
            }
            const errors = {};
            if(!values.email) {
                errors.email = "Required";
                console.log("Email is Required");
            } 
            // else if (!/^[A-Z0-9._%+-]+@[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = "Invalid Email";
            //     console.log("Invalid Email Address");
            // }
            else {
                console.log(values);
                axios.post(URL, values)
                .then((response) => {
                    console.log(response);
                    if (response.data && response.data.user) {
                        console.log("User Login successfully");
                        toast.success("Login Successful");
                        let token = response.data.token
                        localStorage.setItem("token", token)
                        console.log(token);
                        navigate("/dashboard")
                        setValues({
                            ...values,
                            email: "",
                            password: ""
                        });
                    } else {
                        console.log("User not found");
                    }
                })
                .catch((err)=>{
                    console.log(err);
                    console.log("Wrong credentials");
                    toast.error("Wrong email or password");
                });
                values.email = "";
                values.password = "";
            }
        },
    });
  return (
    <div style={{border: "1px solid #ccc", borderRadius: "10px", textAlign: "center", margin: "100px", padding: "10px"}}>
        <form onSubmit={formik.handleSubmit}>
            <h1 style={{color: "blue"}}>Login</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                 placeholder="Email"
                 id="email"
                 name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{margin: "10px"}}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                placeholder="Password"  
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                style={{margin: "10px"}}/>
            </div>
            <button type="submit" style={{padding: "10px 20px"}}>Login</button>
        </form>
    </div>
  )
}

export default Signin