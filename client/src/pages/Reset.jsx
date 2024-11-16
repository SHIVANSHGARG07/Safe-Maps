import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Reset = () => {
    const [password, setPassword] = useState("");
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`/reset/${token}`, { password });
            if (response.data.status) {
                toast.success("Password has been reset successfully.");
                navigate('/login');
            } else {
                toast.error(response.data.message || "Failed to reset password.");
            }
        } catch (error) {
            console.error("Reset Password Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#18181B]">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Reset Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Reset Password
                    </button>
                    <p className="text-purple-900 text-center mt-3">
                        <a href="/login" className="font-bold hover:underline">Back to Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Reset;
