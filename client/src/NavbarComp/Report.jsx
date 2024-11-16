// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const Report = () => {
//   const navigate = useNavigate();

//   // Check token and navigate to login if not present
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (!token || token === undefined) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [error, setError] = useState(null);



//   useEffect(() => {
//     // Check if Geolocation API is available
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 // Successfully retrieved location
//                 setLocation({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                 });
//             },
//             (err) => {
//                 // Error retrieving location
//                 setError(err.message);
//             }
//         );
//     } else {
//         setError('Geolocation is not supported by this browser.');
//     }
// }, []);


//   // State to store form data
//   const [formData, setFormData] = useState({
//     title: '',
//     type: '',
//     description: '',
//     time: '',
//     contact: '',
//     address: '',
//     latitude:'',
//     longitude:''
//   });

//   // State to store the selected images
//   const [images, setImages] = useState([]);

//   // Handling form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handling image file change
//   const handleFileChange = (e) => {
//     setImages(Array.from(e.target.files));
//   };

//   // Handling form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create form-data to send with the request
//     const formDataToSend = new FormData();
//     formDataToSend.append('title', formData.title);
//     formDataToSend.append('type', formData.type);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('time', formData.time);
//     formDataToSend.append('contact', formData.contact);
//     formDataToSend.append('address', formData.address);
//     formDataToSend.append('latitude', location.latitude);
//     formDataToSend.append('longitude', location.longitude);


//     // Append images to form-data
//     images.forEach((image) => {
//       formDataToSend.append('images', image);
//     });

//     try {
//       // Send the POST request to the API
//       const response = await axios.post('/report', formDataToSend, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       // Show success toast and navigate to home page
//       toast.success('Complaint filed successfully!');
//       navigate('/');
//     } catch (error) {
//       console.error('Error filing complaint:', error);
//       toast.error('Failed to file complaint');
//     }
//   };

//   return (
//     <div className="bg-[#18181B] min-h-screen h-[120vh] flex overflow-hidden items-center justify-center">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">File a Complaint</h2>
//         <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          
//           {/* Flexbox to split form into two columns */}
//           <div className="flex gap-6">
//             {/* First column */}
//             <div className="w-1/2 space-y-4">
//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Title:</label>
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Enter the complaint title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Type:</label>
//                 <select
//                   name="type"
//                   value={formData.type}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 >
//                   <option value="">Select Complaint Type</option>
//                   <option value="Vandalism">Vandalism</option>
//                   <option value="Theft">Theft</option>
//                   <option value="Assault">Assault</option>
//                   <option value="Murder">Murder</option>
//                   <option value="Robbery">Robbery</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Description:</label>
//                 <textarea
//                   name="description"
//                   placeholder="Enter the details of the complaint"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>
//             </div>

//             {/* Second column */}
//             <div className="w-1/2 space-y-4">
//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Time of Incident:</label>
//                 <input
//                   type="text"
//                   name="time"
//                   placeholder="E.g., 2024-09-10 11:00 AM"
//                   value={formData.time}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Contact:</label>
//                 <input
//                   type="text"
//                   name="contact"
//                   placeholder="Enter your contact details"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Address:</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Enter the location of the incident"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-purple-600 font-semibold mb-2">Location:</label>
//                 <div className="w-full p-3 border border-purple-300 rounded-lg text-black bg-gray-50">
//                   {location.latitude && location.longitude ? (
//                     <p className="text-black">
//                       Latitude: {location.latitude}, Longitude: {location.longitude}
//                     </p>
//                   ) : (
//                     <p className="text-gray-500">Fetching location...</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image Upload Section */}
//           <div>
//             <label className="block text-purple-600 font-semibold mb-2">Upload Images:</label>
//             <input
//               type="file"
//               name="images"
//               accept=".jpeg,.jpg,.png"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Display selected images */}
//           {images.length > 0 && (
//             <div className="mt-4">
//               <h3 className="text-purple-600 font-semibold mb-2">Preview:</h3>
//               <div className="flex flex-wrap gap-4">
//                 {Array.from(images).map((image, index) => (
//                   <img
//                     key={index}
//                     src={URL.createObjectURL(image)}
//                     alt={`preview ${index}`}
//                     className="w-32 h-32 object-cover rounded-lg border border-purple-300"
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
//           >
//             File Complaint
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Report;



// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const Report = () => {
//   const navigate = useNavigate();

//   // Check token and navigate to login if not present
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (!token || token === undefined) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   // State to store form data
//   const [formData, setFormData] = useState({
//     title: '',
//     type: '',
//     description: '',
//     time: '',
//     contact: '',
//     address: ''
//   });

//   // State to store the selected images
//   const [images, setImages] = useState([]);

//   // Handling form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handling image file change
//   const handleFileChange = (e) => {
//     setImages(Array.from(e.target.files));
//   };

//   // Handling form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create form-data to send with the request
//     const formDataToSend = new FormData();
//     formDataToSend.append('title', formData.title);
//     formDataToSend.append('type', formData.type);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('time', formData.time);
//     formDataToSend.append('contact', formData.contact);
//     formDataToSend.append('address', formData.address);

//     // Append images to form-data
//     images.forEach((image) => {
//       formDataToSend.append('images', image);
//     });

//     try {
//       // Send the POST request to the API
//       const response = await axios.post('/report', formDataToSend, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       // Show success toast and navigate to home page
//       toast.success('Complaint filed successfully!');
//       navigate('/');
//     } catch (error) {
//       console.error('Error filing complaint:', error);
//       toast.error('Failed to file complaint');
//     }
//   };

//   return (
//     <div className="bg-[#18181B] min-h-screen h-[120vh] flex overflow-hidden items-center justify-center">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">File a Complaint</h2>
//         <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          
//           {/* Flexbox to split form into two columns */}
//           <div className="flex gap-6">
//             {/* First column */}
//             <div className="w-1/2 space-y-4">
//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Title:</label>
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Enter the complaint title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Type:</label>
//                 <select
//                   name="type"
//                   value={formData.type}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 >
//                   <option value="">Select Complaint Type</option>
//                   <option value="Vandalism">Vandalism</option>
//                   <option value="Theft">Theft</option>
//                   <option value="Assault">Assault</option>
//                   <option value="Murder">Murder</option>
//                   <option value="Robbery">Robbery</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Description:</label>
//                 <textarea
//                   name="description"
//                   placeholder="Enter the details of the complaint"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>
//             </div>

//             {/* Second column */}
//             <div className="w-1/2 space-y-4">
//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Time of Incident:</label>
//                 <input
//                   type="text"
//                   name="time"
//                   placeholder="E.g., 2024-09-10 11:00 AM"
//                   value={formData.time}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Contact:</label>
//                 <input
//                   type="text"
//                   name="contact"
//                   placeholder="Enter your contact details"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-purple-600 font-semibold mb-2">Address:</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Enter the location of the incident"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Image Upload Section */}
//           <div>
//             <label className="block text-purple-600 font-semibold mb-2">Upload Images:</label>
//             <input
//               type="file"
//               name="images"
//               accept=".jpeg,.jpg,.png"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Display selected images */}
//           {images.length > 0 && (
//             <div className="mt-4">
//               <h3 className="text-purple-600 font-semibold mb-2">Preview:</h3>
//               <div className="flex flex-wrap gap-4">
//                 {Array.from(images).map((image, index) => (
//                   <img
//                     key={index}
//                     src={URL.createObjectURL(image)}
//                     alt={`preview ${index}`}
//                     className="w-32 h-32 object-cover rounded-lg border border-purple-300"
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
//           >
//             File Complaint
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Report;








































import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Report = () => {
  const navigate = useNavigate();
  
  // Check token and navigate to login if not present
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token || token === undefined) {
      navigate("/login");
    }
  }, [navigate]);

  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    time: '',
    contact: '',
    address: '',
  });

  // State to store the selected images
  const [images, setImages] = useState([]);

  // State to store police verification choice
  const [verifyByPolice, setVerifyByPolice] = useState(false);

  // Handling form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling image file change
  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  // Function to handle police verification
  const handlePoliceVerification = () => {
    return new Promise((resolve) => {
      // Custom confirmation dialog with Yes/No options
      const userConsent = window.confirm("Do you want this report to be verified by the police?");
      if (userConsent) {
        setVerifyByPolice(true);
        resolve(true);
      } else {
        setVerifyByPolice(false);
        toast.info('Complaint will not be verified by police.');
        resolve(false);
      }
    });
  };

  // Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form-data to send with the request
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('contact', formData.contact);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('verifyByPolice', verifyByPolice);

    // Append images to form-data
    images.forEach((image) => {
      formDataToSend.append('images', image);
    });

    try {
      // Send the POST request to the API
      const response = await axios.post('/report', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Show success toast and navigate to home page
      toast.success('Complaint filed successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error filing complaint:', error);
      toast.error('Failed to file complaint');
    }
  };

  // Show the police verification alert when the component mounts
  useEffect(() => {
    const hasAlertBeenShown = sessionStorage.getItem('alertShown');
    if (!hasAlertBeenShown) {
      handlePoliceVerification().then(() => {
        // Set flag in sessionStorage to ensure the alert is not shown again during this session
        sessionStorage.setItem('alertShown', 'true');
      });
    }
  }, []);

  return (
    <div className="bg-[#18181B] min-h-screen h-[120vh] flex overflow-hidden items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">File a Complaint</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          
          {/* Flexbox to split form into two columns */}
          <div className="flex gap-6">
            {/* First column */}
            <div className="w-1/2 space-y-4">
              <div>
                <label className="block text-purple-600 font-semibold mb-2">Title:</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the complaint title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-purple-600 font-semibold mb-2">Type:</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select Complaint Type</option>
                  <option value="Vandalism">Vandalism</option>
                  <option value="Theft">Theft</option>
                  <option value="Assault">Assault</option>
                  <option value="Murder">Murder</option>
                  <option value="Robbery">Robbery</option>
                </select>
              </div>

              <div>
                <label className="block text-purple-600 font-semibold mb-2">Description:</label>
                <textarea
                  name="description"
                  placeholder="Enter the details of the complaint"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* Second column */}
            <div className="w-1/2 space-y-4">
              <div>
                <label className="block text-purple-600 font-semibold mb-2">Time of Incident:</label>
                <input
                  type="text"
                  name="time"
                  placeholder="E.g., 2024-09-10 11:00 AM"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-purple-600 font-semibold mb-2">Contact:</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter your contact details"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-purple-600 font-semibold mb-2">Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter the location of the incident"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-purple-600 font-semibold mb-2">Upload Images:</label>
            <input
              type="file"
              name="images"
              accept=".jpeg,.jpg,.png"
              multiple
              onChange={handleFileChange}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Display selected images */}
          {images.length > 0 && (
            <div className="mt-4">
              <h3 className="text-purple-600 font-semibold mb-2">Preview:</h3>
              <div className="flex flex-wrap gap-4">
                {Array.from(images).map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`preview ${index}`}
                    className="w-32 h-32 object-cover rounded-lg border border-purple-300"
                  />
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            File Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;