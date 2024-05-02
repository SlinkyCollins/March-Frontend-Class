// import { CgMenuGridR } from "react-icons/cg";
// import { GoBeaker } from "react-icons/go";
// import profile from "../assets/Images/profile.png";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


// let myName = "afoo";

// const Navbar = () => {
//   const NavLinks = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//     {
//       name: "Contact",
//       path: "/contact",
//     },
//     // {name: "FaqS", path: "/contact"},
//   ]
//   return (
//     <>
//     <ul className="unordered-list">
//       {NavLinks.map((link)=> {
//         <NavLink
//           className={({ isActive }) => 
//           isActive ? "text-dark" : null
//         }
//         key={link.name}
//         to={link.path}
//         >
         
//           <li className="text-black">{link.name}</li>
//         </NavLink>
//       })}
//     </ul>
//     </>
//   )
// }

// export default Navbar;

// import React from 'react'

const Navbar = () => {
  const NavLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/About"
    },
    {
      name: "Contact",
      path: "/Contact"
    },
    {
      name: "Upload",
      path: "/upload"
    },
    {
      name: "Sign In",
      path: "/signin"
    },
    {
      name: "Sign Up",
      path: "/signup"
    }
  ]
  return (
    <div>
      <ul className="d-flex gap-5" style={{listStyle: 'none'}}>
        {NavLinks.map((link) => (
          <NavLink
          className={({ isActive }) =>
          isActive ? "text-info" : null
        }
        key={link.name}
        to={link.path}>
          <li>{link.name}</li>
        </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
