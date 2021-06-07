import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    const navTitle = "text-2xl font-bold "
    const navChild = "pl-2 pr-2 p-1 font-sans rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600 text-gray-100 justify-center self-center ml-3 "
  return (
   <>
   <nav className="p-6 bg-gradient-to-b from-black to-transparent">
       <div className="container mx-auto">
       <ul className="flex flex-row items-center">
           <li>
               <Link to="/">
                    <button className={navChild+navTitle}>Home</button>
                </Link>
           </li>
           <li>
                <button className={navChild}>address</button>
           </li>
           <li>
                <button className={navChild}>contact</button>
           </li>
           <li>
                <button className={navChild}>report</button>
           </li>
       </ul>
      </div>
   </nav>
   </>
  );
}

export default Navbar;
