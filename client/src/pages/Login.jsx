// import React, { useState } from 'react';
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();

//     const [data, setData] = useState({
//         email: "",
//         password: ""
//     });

//     const loginUser = async (e) => {
//         e.preventDefault();
//         const { email, password } = data;

//         try {
//             const response = await axios.post('/login', { email, password });

//             if (response.data.error) {
//                 toast.error(response.data.error);
//             } else {
//                 setData({ email: "", password: "" });
//                 toast.success("Login Successful");
//                 console.log("Navigating to home");
//                 navigate('/');
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             toast.error("Something went wrong. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={loginUser}>
//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     placeholder="Enter email"
//                     value={data.email}
//                     onChange={(e) => setData({ ...data, email: e.target.value })}
//                     required
//                 />

//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     placeholder="Enter password"
//                     value={data.password}
//                     onChange={(e) => setData({ ...data, password: e.target.value })}
//                     required
//                 />

//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();

//     const [data, setData] = useState({
//         email: "",
//         password: ""
//     });

//     const loginUser = async (e) => {
//         e.preventDefault();
//         const { email, password } = data;

//         try {
//             const response = await axios.post('/login', { email, password });

//             if (response.data.error) {
//                 toast.error(response.data.error);
//             } else {
//                 setData({ email: "", password: "" });
//                 toast.success("Login Successful");
//                 console.log("Navigating to home");
//                 navigate('/');
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             toast.error("Something went wrong. Please try again.");
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-[#18181B] ">
//             <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Login</h2>
//                 <form onSubmit={loginUser} className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="Enter email"
//                             value={data.email}
//                             onChange={(e) => setData({ ...data, email: e.target.value })}
//                             required
//                             className="mt-1  text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Enter password"
//                             value={data.password}
//                             onChange={(e) => setData({ ...data, password: e.target.value })}
//                             required
//                             className="mt-1  text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//                         />
//                     </div>

//                     <button type="submit" className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Login</button>
//                     <p className="text-black px-12 font-semibold">Forgot Your Password? <Link to="/forgot">Click Here</Link></p>
//                     <p className="text-purple-900  px-12 font-bold">Don't Have an Account? <Link to="/register">Sign Up</Link></p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


// You said:
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        try {
            const response = await axios.post('/login', { email, password });

            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setData({ email: "", password: "" });
                toast.success("Login Successful");
                console.log("Navigating to home");
                navigate('/');
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#18181B] ">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Login</h2>
                <form onSubmit={loginUser} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            required
                            className="mt-1  text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            required
                            className="mt-1  text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Login</button>
                    <p className="text-black px-12 font-semibold">Forgot Your Password? <Link to="/forgot">Click Here</Link></p>
                    <p className="text-purple-900  px-12 font-bold">Don't Have an Account? <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;