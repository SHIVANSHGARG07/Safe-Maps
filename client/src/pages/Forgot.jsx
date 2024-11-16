// import React from 'react'
// import "./Forgot.css"
// import { Link } from 'react-router-dom';
// import {useNavigate} from "react-router-dom"
// import { useState } from 'react';
// import Axios from 'axios';
 
// const Forgot = () => {
//     const [email, setEmail] = useState('');
  
//     Axios.defaults.withCredentials = true;
//   const navigate = useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Submitting Forgot request:", { email});
//   Axios.post('http://localhost:3000/auth/forgot', {
//     email
//   })
//     .then((response) => {
//       console.log("Response received:", response);
//       if (response.data.status) {
//         alert("check your email to reset your password")
//         navigate('/login');
//       }
//       console.log(response.data)
//     })
//     .catch((err) => {
//       console.error('Axios error:', err);
//       return resizeBy.json("invalid token")
//     });
// };


//   return (
//     <div>
//  <center>
// <div className="container">
//       <h2>Forgot Password </h2>
//       <form onSubmit={handleSubmit}>
        
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           name="email"
//           autoComplete="off"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />


//         <button type="submit">Send</button>
        
//       </form>
//     </div>
  
//   </center> 
//     </div>
 
//   )
  
// }

// export default Forgot;
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Forgot = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/forgot', { email });
            if (response.data.status) {
                toast.success("Check your email to reset your password");
                navigate('/login');
            } else {
                toast.error(response.data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Forgot Password Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#18181B]">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Send Reset Link
                    </button>

                    <p className="text-purple-900 px-12 font-bold">
                        Remember your password? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Forgot;
