import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
          // If token exists, navigate to the profile page
          navigate("/profile");
        }
      }, [navigate])
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const registerUser = async (e) => {
        e.preventDefault();

        const { email, name, password } = data;

        try {
            const response = await axios.post('/register', { name, email, password });
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setData({ name: "", email: "", password: "" });
                toast.success("Signup Successful");
                navigate("/login");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#18181B]">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Register</h2>
                <form onSubmit={registerUser} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            required
                            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>

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

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                    <p className="text-purple-900  px-12 font-bold">Already Have an Account? <Link to="/login">Login</Link> </p> 

                </form>
            </div>
        </div>
    );
};

export default Register;
