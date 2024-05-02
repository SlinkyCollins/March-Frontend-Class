import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cars from "./pages/Cars";
import Service from "./pages/Service";
import Details from "./pages/Details";
import Navbar from "./components/Navbar"
import Fetch from "./pages/Fetch";
import SignUp from "./components/SignUp";
import Login from "./pages/login";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import { Toaster } from "react-hot-toast";
// import Counter from "./components/Counter";

const App = () => {
  let token = localStorage.getItem("token")
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}

          <Route path="/about" element={<About/>} />
          {/* <Route path="/counter" element={<Counter/>}/> */}
          <Route path="/about/cars" element={<Cars/>} />
          <Route path="/about/service" element={<Service/>} />
          <Route path="/details/:user/:id" element={<Details/>} />
          <Route path="/api" element={<Fetch/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard" element={token ? <Navigate to="/dashboard"/> : <Navigate to = "/signin" />}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </div>
  )
}

export default App