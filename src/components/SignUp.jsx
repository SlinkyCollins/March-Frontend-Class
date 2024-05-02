import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate();
    const URL = "https://march-backend-class.onrender.com/student/register"; // Define URL as constant
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',   
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup
            .string()
            .required("first name is required")
            .max(15, "Must be 15 characters or less")
            .min(3, "Must be at least 3 characters"),
            lastName: Yup
            .string()
            .required("last name is required")
            .max(15, "Must be 15 characters or less")
            .min(3, "Must be at least 3 characters"),
            email: Yup.string().email("Invalid Email Address").required("required"),
            password: Yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .required("required"),
            // .matches(/[A-Z]/, "")
        }),
        // onSubmit: async (values) => {
        //     try {
        //         const response = await axios.post(URL, values);
        //         console.log("Registration successful:", response.data);
        //     } catch (error) {
        //         console.error("Error occurred during registration:", error);
        //     }
        // },
    onSubmit: (values) => {
        if (values.firstName==="" || values.lastName==="" || values.email ==="" || values.password ===""){
            console.log("please fill in the values");
        }
        const errors = {};
        if (values.firstName) {
            errors.firstName = "Required";
            console.log("Required");
        } else if (values.firstName.length > 15) {
            errors.firstName = "Must be at least 10 characters or less";
            console.log("Must be at least 15 characters or less");
        }
        if (!values.lastName) {
            errors.lastName = "Required";
        } else if (values.lastName.length > 20) {
            errors.lastName = "Must be 20 characters or less";
            console.log("Must be 20 characters or less");
        }
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
                toast.success('Sign Up Successful!');
                console.log("User saved successfully");
                navigate("/Signin")
            })
            .catch((err)=> {
                console.log(err);
                toast.error("error saving user");
            })
        }
    }
});

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        onBlur={formik.handleBlur}
                        type="text" 
                        placeholder="Enter first name" 
                        id="firstName" 
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div style={{color: "red", fontWeight: "500"}}>{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        onBlur={formik.handleBlur}
                        type="text" 
                        placeholder="Enter last name" 
                        id="lastName" 
                        name="lastName" 
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div style={{color: "red", fontWeight: "500"}}>{formik.errors.lastName}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        onBlur={formik.handleBlur}
                        type="email" 
                        placeholder="Enter email" 
                        id="email"
                        name="email" 
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{color: "red", fontWeight: "500"}}>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        onBlur={formik.handleBlur}
                        type="password" 
                        placeholder="Enter password" 
                        id="password" 
                        name="password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div style={{color: "red", fontWeight: "500"}}>{formik.errors.password}</div>
                    ) : null}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
