// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-hot-toast';
// // import { useNavigate } from 'react-router-dom';

// // const Feedback = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     locality: '',
// //     problem: '',
// //     measures: '',
// //     landmark: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [successMessage, setSuccessMessage] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Clear previous errors and success message
// //     setErrors({});
// //     setSuccessMessage('');

// //     try {
// //       const response = await axios.post('/feedback', formData);
// //       setSuccessMessage('Feedback submitted successfully!');
// //       setFormData({
// //         name: '',
// //         locality: '',
// //         problem: '',
// //         measures: '',
// //         landmark: '',
// //       });
// //       toast.success('Feedback submitted successfully!');
// //     } catch (error) {
// //       if (error.response && error.response.data) {
// //         setErrors(error.response.data.errors || {});
// //         toast.error('Error submitting feedback');
// //       } else {
// //         setErrors({ general: 'An error occurred. Please try again.' });
// //         toast.error('An error occurred. Please try again.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-[#18181B] p-6">
// //       <div className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Feedback Form</h2>

// //         {successMessage && <div className="bg-green-500 text-white p-3 rounded mb-4">{successMessage}</div>}
// //         {errors.general && <div className="bg-red-500 text-white p-3 rounded mb-4">{errors.general}</div>}

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //             {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
// //           </div>

// //           <div>
// //             <label htmlFor="locality" className="block text-sm font-medium text-black">Locality</label>
// //             <input
// //               type="text"
// //               id="locality"
// //               name="locality"
// //               value={formData.locality}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //             {errors.locality && <p className="text-red-400 text-sm">{errors.locality}</p>}
// //           </div>

// //           <div>
// //             <label htmlFor="problem" className="block text-sm font-medium text-black">Problem</label>
// //             <select
// //               id="problem"
// //               name="problem"
// //               value={formData.problem}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             >
// //               <option value="">Select</option>
// //               <option value="No Street Lightning">No Street Lightning</option>
// //               <option value="Solitary">Solitary</option>
// //               <option value="No Police Survey or Duty">No Police Survey or Duty</option>
// //               <option value="Roads Not Good">Roads Not Good</option>
// //             </select>
// //             {errors.problem && <p className="text-red-400 text-sm">{errors.problem}</p>}
// //           </div>
// //           <div>
// //             <label htmlFor="problem" className="block text-sm font-medium text-black">Problem</label>
// //             <select
// //               id="problem"
// //               name="problem"
// //               value={formData.problem}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             >
// //               <option value="">Select</option>
// //               <option value="No Street Lightning">No Street Lightning</option>
// //               <option value="Solitary">Solitary</option>
// //               <option value="No Police Survey or Duty">No Police Survey or Duty</option>
// //               <option value="Roads Not Good">Roads Not Good</option>
// //             </select>
// //             {errors.problem && <p className="text-red-400 text-sm">{errors.problem}</p>}
// //           </div> <div>
// //             <label htmlFor="problem" className="block text-sm font-medium text-black">Problem</label>
// //             <select
// //               id="problem"
// //               name="problem"
// //               value={formData.problem}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             >
// //               <option value="">Select</option>
// //               <option value="No Street Lightning">No Street Lightning</option>
// //               <option value="Solitary">Solitary</option>
// //               <option value="No Police Survey or Duty">No Police Survey or Duty</option>
// //               <option value="Roads Not Good">Roads Not Good</option>
// //             </select>
// //             {errors.problem && <p className="text-red-400 text-sm">{errors.problem}</p>}
// //           </div>

// //           <div>
// //             <label htmlFor="measures" className="block text-sm font-medium text-black">Measures</label>
// //             <input
// //               type="text"
// //               id="measures"
// //               name="measures"
// //               value={formData.measures}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //             {errors.measures && <p className="text-red-400 text-sm">{errors.measures}</p>}
// //           </div>

// //           <div>
// //             <label htmlFor="landmark" className="block text-sm font-medium text-black">Landmark</label>
// //             <input
// //               type="text"
// //               id="landmark"
// //               name="landmark"
// //               value={formData.landmark}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
// //             />
// //             {errors.landmark && <p className="text-red-400 text-sm">{errors.landmark}</p>}
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
// //           >
// //             Submit Feedback
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feedback;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     locality: '',
//     noStreetLightning: false,
//     solitary: false,
//     noPoliceSurvey: false,
//     roadsNotGood: false,
//     measures: '',
//     landmark: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, type, checked, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Clear previous errors and success message
//     setErrors({});
//     setSuccessMessage('');

//     try {
//       const response = await axios.post('/feedback', formData);
//       setSuccessMessage('Feedback submitted successfully!');
//       setFormData({
//         name: '',
//         locality: '',
//         noStreetLightning: false,
//         solitary: false,
//         noPoliceSurvey: false,
//         roadsNotGood: false,
//         measures: '',
//         landmark: '',
//       });
//       toast.success('Feedback submitted successfully!');
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setErrors(error.response.data.errors || {});
//         toast.error('Error submitting feedback');
//       } else {
//         setErrors({ general: 'An error occurred. Please try again.' });
//         toast.error('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#18181B] p-6">
//       <div className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Feedback Form</h2>

//         {successMessage && <div className="bg-green-500 text-white p-3 rounded mb-4">{successMessage}</div>}
//         {errors.general && <div className="bg-red-500 text-white p-3 rounded mb-4">{errors.general}</div>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//             {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
//           </div>

//           <div>
//             <label htmlFor="locality" className="block text-sm font-medium text-black">Locality</label>
//             <input
//               type="text"
//               id="locality"
//               name="locality"
//               value={formData.locality}
//               onChange={handleChange}
//               required
//               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//             {errors.locality && <p className="text-red-400 text-sm">{errors.locality}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-black">Problem</label>
//             <div className="space-y-2">
//               {['No Street Lighting', 'Solitary', 'No Police Survey or Duty', 'Roads Not Good'].map((problem) => (
//                 <div key={problem} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={problem}
//                     name={problem.toLowerCase().replace(/ /g, '')}
//                     checked={formData[problem.toLowerCase().replace(/ /g, '')]}
//                     onChange={handleChange}
//                     className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                   />
//                   <label htmlFor={problem} className="ml-2 text-sm font-medium text-black">{problem}</label>
//                 </div>
//               ))}
//             </div>
//             {errors.problems && <p className="text-red-400 text-sm">{errors.problems}</p>}
//           </div>

//           <div>
//             <label htmlFor="measures" className="block text-sm font-medium text-black">Measures</label>
//             <input
//               type="text"
//               id="measures"
//               name="measures"
//               value={formData.measures}
//               onChange={handleChange}
//               required
//               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//             {errors.measures && <p className="text-red-400 text-sm">{errors.measures}</p>}
//           </div>

//           <div>
//             <label htmlFor="landmark" className="block text-sm font-medium text-black">Landmark</label>
//             <input
//               type="text"
//               id="landmark"
//               name="landmark"
//               value={formData.landmark}
//               onChange={handleChange}
//               required
//               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//             />
//             {errors.landmark && <p className="text-red-400 text-sm">{errors.landmark}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//           >
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    locality: '',
    noStreetLightning: false,
    solitary: false,
    noPoliceSurvey: false,
    roadsNotGood: false,
    measures: '',
    landmark: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors and success message
    setErrors({});
    setSuccessMessage('');

    try {
      const response = await axios.post('/feedback', formData);
      setSuccessMessage('Feedback submitted successfully!');
      setFormData({
        name: '',
        locality: '',
        noStreetLightning: false,
        solitary: false,
        noPoliceSurvey: false,
        roadsNotGood: false,
        measures: '',
        landmark: '',
      });
      toast.success('Feedback submitted successfully!');
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
        toast.error('Error submitting feedback');
      } else {
        setErrors({ general: 'An error occurred. Please try again.' });
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#18181B] p-6">
      <div className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Feedback Form</h2>

        {successMessage && <div className="bg-green-500 text-white p-3 rounded mb-4">{successMessage}</div>}
        {errors.general && <div className="bg-red-500 text-white p-3 rounded mb-4">{errors.general}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="locality" className="block text-sm font-medium text-black">Locality</label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            {errors.locality && <p className="text-red-400 text-sm">{errors.locality}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Problem</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="noStreetLightning"
                  name="noStreetLightning"
                  checked={formData.noStreetLightning}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="noStreetLightning" className="ml-2 text-sm font-medium text-black">No Street Lighting</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="solitary"
                  name="solitary"
                  checked={formData.solitary}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="solitary" className="ml-2 text-sm font-medium text-black">Solitary</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="noPoliceSurvey"
                  name="noPoliceSurvey"
                  checked={formData.noPoliceSurvey}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="noPoliceSurvey" className="ml-2 text-sm font-medium text-black">No Police Survey or Duty</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="roadsNotGood"
                  name="roadsNotGood"
                  checked={formData.roadsNotGood}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="roadsNotGood" className="ml-2 text-sm font-medium text-black">Roads Not Good</label>
              </div>
            </div>
            {errors.problems && <p className="text-red-400 text-sm">{errors.problems}</p>}
          </div>

          <div>
            <label htmlFor="measures" className="block text-sm font-medium text-black">Measures</label>
            <input
              type="text"
              id="measures"
              name="measures"
              value={formData.measures}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            {errors.measures && <p className="text-red-400 text-sm">{errors.measures}</p>}
          </div>

          <div>
            <label htmlFor="landmark" className="block text-sm font-medium text-black">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            {errors.landmark && <p className="text-red-400 text-sm">{errors.landmark}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
