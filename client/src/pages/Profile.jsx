// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-hot-toast';

// // const Profile = () => {
// //   const [username, setUsername] = useState('');
// //   const [bio, setBio] = useState('');
// //   const [totalCrimesReported, setTotalCrimesReported] = useState(0);
// //   const [profilePicture, setProfilePicture] = useState(null); // To handle image file
// //   const [imageURL, setImageURL] = useState(''); // To display uploaded image

// //   const handleFileChange = (e) => {
// //     setProfilePicture(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('username', username);
// //     formData.append('bio', bio);
// //     formData.append('totalCrimesReported', totalCrimesReported);
// //     formData.append('profilePicture', profilePicture); // Append profile picture

// //     try {
// //       const response = await axios.post('/uploadProfilePicture', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setImageURL(response.data.profile.profilePicture); // Set the returned image URL
// //       toast.success("Profile updated successfully!");
// //     } catch (error) {
// //       console.error("Error updating profile:", error);
// //       toast.error("Failed to update profile. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-[#18181B]">
// //       <div className="w-full max-w-md p-8 bg-[#1F1F23] rounded-lg shadow-lg">
// //         <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">User Profile</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label htmlFor="username" className="block text-sm font-medium text-purple-300">Username</label>
// //             <input
// //               type="text"
// //               id="username"
// //               placeholder="Enter username"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="bio" className="block text-sm font-medium text-purple-300">Bio</label>
// //             <textarea
// //               id="bio"
// //               placeholder="Enter your bio"
// //               value={bio}
// //               onChange={(e) => setBio(e.target.value)}
// //               maxLength={500}
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="totalCrimesReported" className="block text-sm font-medium text-purple-300">Total Crimes Reported</label>
// //             <input
// //               type="number"
// //               id="totalCrimesReported"
// //               placeholder="Enter total crimes reported"
// //               value={totalCrimesReported}
// //               onChange={(e) => setTotalCrimesReported(e.target.value)}
// //               required
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="profilePicture" className="block text-sm font-medium text-purple-300">Profile Picture</label>
// //             <input
// //               type="file"
// //               id="profilePicture"
// //               onChange={handleFileChange}
// //               accept="image/*"
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
// //           >
// //             Save Profile
// //           </button>
// //         </form>

// //         {imageURL && (
// //           <div className="mt-6 text-center">
// //             <h3 className="text-xl text-purple-400">Uploaded Profile Picture:</h3>
// //             <img src={imageURL} alt="Profile" className="w-40 h-40 mx-auto rounded-full mt-4 border-4 border-purple-600" />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-hot-toast';
// // import Cookies from 'js-cookie';
// // import { useNavigate } from 'react-router-dom';

// // const Profile = () => {
// //   const [username, setUsername] = useState('');
// //   const [bio, setBio] = useState('');
// //   const [totalCrimesReported, setTotalCrimesReported] = useState(0);
// //   const [profilePicture, setProfilePicture] = useState(null); // To handle image file
// //   const [imageURL, setImageURL] = useState(''); // To display uploaded image
// //   const navigate = useNavigate();

// //   const handleFileChange = (e) => {
// //     setProfilePicture(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('username', username);
// //     formData.append('bio', bio);
// //     formData.append('totalCrimesReported', totalCrimesReported);
// //     formData.append('profilePicture', profilePicture); // Append profile picture

// //     try {
// //       const response = await axios.post('/uploadProfilePicture', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setImageURL(response.data.profile.profilePicture); // Set the returned image URL
// //       toast.success("Profile updated successfully!");
// //     } catch (error) {
// //       console.error("Error updating profile:", error);
// //       toast.error("Failed to update profile. Please try again.");
// //     }
// //   };

// //   // Logout functionality
// //   const handleLogout = () => {
// //     Cookies.remove('token');  // Remove the token from cookies
// //     toast.success("Logout successful!");
// //     navigate('/login');  // Redirect to login page
// //   };

// //   return (
// //     <div className="flex items-center h-[120vh] justify-center min-h-screen bg-[#1c1c1e]">
// //       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
// //         <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">User Profile</h2>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label htmlFor="username" className="block text-sm font-medium text-purple-300">Username</label>
// //             <input
// //               type="text"
// //               id="username"
// //               placeholder="Enter username"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="bio" className="block text-sm font-medium text-purple-300">Bio</label>
// //             <textarea
// //               id="bio"
// //               placeholder="Enter your bio"
// //               value={bio}
// //               onChange={(e) => setBio(e.target.value)}
// //               maxLength={500}
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="totalCrimesReported" className="block text-sm font-medium text-purple-300">Total Crimes Reported</label>
// //             <input
// //               type="number"
// //               id="totalCrimesReported"
// //               placeholder="Enter total crimes reported"
// //               value={totalCrimesReported}
// //               onChange={(e) => setTotalCrimesReported(e.target.value)}
// //               required
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="profilePicture" className="block text-sm font-medium text-purple-300">Profile Picture</label>
// //             <input
// //               type="file"
// //               id="profilePicture"
// //               onChange={handleFileChange}
// //               accept="image/*"
// //               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
// //           >
// //             Save Profile
// //           </button>
// //         </form>

// //         {imageURL && (
// //           <div className="mt-6 text-center">
// //             <h3 className="text-xl text-purple-400">Uploaded Profile Picture:</h3>
// //             <img src={imageURL} alt="Profile" className="w-40 h-40 mx-auto rounded-full mt-4 border-4 border-purple-600" />
// //           </div>
// //         )}

// //         <button
// //           onClick={handleLogout}
// //           className="mt-6 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState('');
//   const [totalCrimesReported, setTotalCrimesReported] = useState(0);
//   const [profilePicture, setProfilePicture] = useState(null); // To handle image file
//   const [imageURL, setImageURL] = useState(''); // To display uploaded image
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('username', username);
//     formData.append('bio', bio);
//     formData.append('totalCrimesReported', totalCrimesReported);
//     formData.append('profilePicture', profilePicture); // Append profile picture

//     try {
//       const response = await axios.post('/uploadProfilePicture', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setImageURL(response.data.profile.profilePicture); // Set the returned image URL
//       toast.success("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast.error("Failed to update profile. Please try again.");
//     }
//   };

//   // Logout functionality
//   const handleLogout = () => {
//     Cookies.remove('token');  // Remove the token from cookies
//     toast.success("Logout successful!");
//     navigate('/login');  // Redirect to login page
//   };

//   return (
//     <div className="flex items-center h-[120vh] justify-center min-h-screen bg-[#1c1c1e]">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">User Profile</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-purple-300">Username</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//           </div>

//           <div>
//             <label htmlFor="bio" className="block text-sm font-medium text-purple-300">Bio</label>
//             <textarea
//               id="bio"
//               placeholder="Enter your bio"
//               value={bio}
//               onChange={(e) => setBio(e.target.value)}
//               maxLength={500}
//               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//           </div>

//           <div>
//             <label htmlFor="totalCrimesReported" className="block text-sm font-medium text-purple-300">Total Crimes Reported</label>
//             <input
//               type="number"
//               id="totalCrimesReported"
//               placeholder="Enter total crimes reported"
//               value={totalCrimesReported}
//               onChange={(e) => setTotalCrimesReported(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//           </div>

//           <div>
//             <label htmlFor="profilePicture" className="block text-sm font-medium text-purple-300">Profile Picture</label>
//             <input
//               type="file"
//               id="profilePicture"
//               onChange={handleFileChange}
//               accept="image/*"
//               className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//           >
//             Save Profile
//           </button>
//         </form>

//         {imageURL && (
//           <div className="mt-6 text-center">
//             <h3 className="text-xl text-purple-400">Uploaded Profile Picture:</h3>
//             <img src={imageURL} alt="Profile" className="w-40 h-40 mx-auto rounded-full mt-4 border-4 border-purple-600" />
//           </div>
//         )}

//         <button
//           onClick={handleLogout}
//           className="mt-6 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  
  // Logout functionality
  const handleLogout = () => {
    Cookies.remove('token'); // Remove the token from cookies
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1c1c1e]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Welcome User!</h2>
        
        
        <div className="mb-6 ml-[8vw]">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" 
    className="w-32 h-32 rounded-full"
    alt="Circular Image" 
  />
</div>


        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
