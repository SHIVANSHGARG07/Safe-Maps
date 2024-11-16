// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ShowReports = () => {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch reports from the backend
//     axios.get('http://localhost:3000/getReports') // Adjust if needed
//       .then((response) => {
//         setReports(response.data.data); // Assuming your data is inside the 'data' key
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching reports:', error);
//         setError('Failed to load reports');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl  text-white-600 mb-6 text-center font-semibold">Reports List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reports.map((report) => (
//             <div key={report._id} className="bg-gray-300 p-4 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold text-black">{report.title}</h2>
//               <p className="text-gray-600 mt-1">{report.description}</p>
//               <p className="text-gray-800 mt-2"><strong>Type:</strong> {report.type}</p>
//               <p className="text-gray-800"><strong>Time:</strong> {report.time}</p>
//               <p className="text-gray-800"><strong>Contact:</strong> {report.contact}</p>
//               <p className="text-gray-800"><strong>Address:</strong> {report.address}</p>
//               {report.images.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold text-black">Images:</h3>
//                   <div className="flex space-x-2 overflow-x-auto">
//                     {report.images.map((img, index) => (
//                       <img key={index} src={img} alt={`Report ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowReports;



// export default ShowReports;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// const ShowReports = () => {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     const token = Cookies.get('token'); // Check if the cookie exists
//     if (!token) {
//       navigate('/login'); // Redirect to login if token is not present
//       return;
//     }

//     // Fetch reports from the backend
//     axios.get('http://localhost:3000/getReports') // Adjust the endpoint if needed
//       .then((response) => {
//         setReports(response.data.data); // Assuming your data is inside the 'data' key
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching reports:', error);
//         setError('Failed to load reports');
//         setLoading(false);
//       });
//   }, [navigate]);

//   const handleSendMail = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/sendmail', { reports });
//       setMessage('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setMessage('Failed to send email.');
//     }
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl text-white-600 mb-6 text-center font-semibold">Reports List</h1>
//         <button
//           onClick={handleSendMail}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6"
//         >
//           Send All to Mail
//         </button>
//         <p className="text-white">{message}</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reports.map((report) => (
//             <div key={report._id} className="bg-gray-300 p-4 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold text-black">{report.title}</h2>
//               <p className="text-gray-600 mt-1">{report.description}</p>
//               <p className="text-gray-800 mt-2"><strong>Type:</strong> {report.type}</p>
//               <p className="text-gray-800"><strong>Time:</strong> {report.time}</p>
//               <p className="text-gray-800"><strong>Contact:</strong> {report.contact}</p>
//               <p className="text-gray-800"><strong>Address:</strong> {report.address}</p>
//               {report.images.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold text-black">Images:</h3>
//                   <div className="flex space-x-2 overflow-x-auto">
//                     {report.images.map((img, index) => (
//                       <img key={index} src={img} alt={`Report ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowReports;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ShowReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Fetch user details to get the email
    axios.get('http://localhost:3000/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setUserEmail(response.data.email);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
        setError('Failed to fetch user details');
      });

    // Fetch reports
    axios.get('http://localhost:3000/getReports')
      .then(response => {
        setReports(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
        setError('Failed to load reports');
        setLoading(false);
      });
  }, [navigate]);

  const handleSendMail = async () => {
    try {
      const response = await axios.post('http://localhost:3000/sendmail', { email: userEmail, reports });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send email.');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl text-white-600 mb-6 text-center font-semibold">Reports List</h1>
        <button
          onClick={handleSendMail}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6"
        >
          Send All to Mail
        </button>
        <p className="text-white">{message}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report._id} className="bg-gray-300 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-black">{report.title}</h2>
              <p className="text-gray-600 mt-1">{report.description}</p>
              <p className="text-gray-800 mt-2"><strong>Type:</strong> {report.type}</p>
              <p className="text-gray-800"><strong>Time:</strong> {report.time}</p>
              <p className="text-gray-800"><strong>Contact:</strong> {report.contact}</p>
              <p className="text-gray-800"><strong>Address:</strong> {report.address}</p>
              {report.images.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-black">Images:</h3>
                  <div className="flex space-x-2 overflow-x-auto">
                    {report.images.map((img, index) => (
                      <img key={index} src={img} alt={`Report ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowReports;
