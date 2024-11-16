// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker, InfoWindow } from '@react-google-maps/api';
// import axios from 'axios';
// const containerStyle = {
//   width: '100%',
//   height: '100vh',
// };

// const crimeReports = [
//   {
//     "id": "barnala-chandigarh-1",
//     "type": "robbery",
//     "description": "Robbery reported near Barnala",
//     "event_time": "2024-09-01T09:00:00Z",
//     "title": "Barnala Robbery",
//     "lat": 30.3725,
//     "lng": 75.8174 // Close to Barnala
//   },
//   {
//     "id": "sangrur-chandigarh-1",
//     "type": "accident",
//     "description": "Accident reported near Sangrur",
//     "event_time": "2024-09-01T10:00:00Z",
//     "title": "Sangrur Accident",
//     "lat": 30.2388,
//     "lng": 75.8426 // Close to Sangrur
//   },
//   {
//     "id": "bhawanigarh-chandigarh-1",
//     "type": "theft",
//     "description": "Theft reported near Bhawanigarh",
//     "event_time": "2024-09-01T11:00:00Z",
//     "title": "Bhawanigarh Theft",
//     "lat": 30.3742,
//     "lng": 76.1422 // Close to Bhawanigarh
//   },
//   {
//     "id": "central-sector-17-1",
//     "type": "accident",
//     "description": "Accident involving two buses at Central Sector 17",
//     "event_time": "2024-02-20T00:00:00Z",
//     "title": "Central Sector 17 Bus Collision",
//     "lat": 30.7333,  // Approximate latitude for Central Sector 17
//     "lng": 76.7833   // Approximate longitude for Central Sector 17
// },
// {
//     "id": "central-sector-17-2",
//     "type": "accident",
//     "description": "Accident involving Activa near Kiran Cinema, Sector 22",
//     "event_time": "2024-04-18T13:00:00Z",
//     "title": "Sector 22 Activa Accident",
//     "lat": 30.7354,  // Approximate latitude for Kiran Cinema, Sector 22
//     "lng": 76.7905   // Approximate longitude for Kiran Cinema, Sector 22
// },
// {
//     "id": "central-sector-17-3",
//     "type": "accident",
//     "description": "Motorcycle accident at Cricket Stadium Chowk",
//     "event_time": "2024-05-20T01:00:00Z",
//     "title": "Cricket Stadium Chowk Motorcycle Accident",
//     "lat": 30.7343,  // Approximate latitude for Cricket Stadium Chowk
//     "lng": 76.7850   // Approximate longitude for Cricket Stadium Chowk
// },
// {
//     "id": "east-sector-26-1",
//     "type": "accident",
//     "description": "Car accident near Khalsa College, Sector 26",
//     "event_time": "2024-01-03T22:00:00Z",
//     "title": "Sector 26 Khalsa College Car Accident",
//     "lat": 30.7300,  // Approximate latitude for Sector 26
//     "lng": 76.7880   // Approximate longitude for Sector 26
// },
// {
//     "id": "east-sector-26-2",
//     "type": "accident",
//     "description": "Accident involving E-Rickshaw and Car near EWS Flat Light Point",
//     "event_time": "2024-03-10T09:30:00Z",
//     "title": "EWS Flat Light Point Accident",
//     "lat": 30.7297,  // Approximate latitude for EWS Flat Light Point
//     "lng": 76.7901   // Approximate longitude for EWS Flat Light Point
// },
// {
//     "id": "east-sector-26-3",
//     "type": "accident",
//     "description": "Scooter and Mini Truck accident at Oriental Lounge",
//     "event_time": "2024-03-20T18:40:00Z",
//     "title": "Oriental Lounge Scooter and Truck Accident",
//     "lat": 30.7338,  // Approximate latitude for Oriental Lounge
//     "lng": 76.7906   // Approximate longitude for Oriental Lounge
// },
// {
//     "id": "east-sector-26-4",
//     "type": "accident",
//     "description": "Heavy Truck and Scooterette accident at Purv Marg",
//     "event_time": "2024-03-23T13:35:00Z",
//     "title": "Purv Marg Heavy Truck and Scooterette Accident",
//     "lat": 30.7312,  // Approximate latitude for Purv Marg
//     "lng": 76.7875   // Approximate longitude for Purv Marg
// },
// {
//     "id": "east-sector-26-5",
//     "type": "accident",
//     "description": "Car accident near ITI Gate",
//     "event_time": "2024-04-26T22:00:00Z",
//     "title": "ITI Gate Car Accident",
//     "lat": 30.7330,  // Approximate latitude for ITI Gate
//     "lng": 76.7885   // Approximate longitude for ITI Gate
// },
// {
//     "id": "east-sector-26-6",
//     "type": "accident",
//     "description": "Heavy Truck accident at Purv Marg",
//     "event_time": "2024-04-30T18:55:00Z",
//     "title": "Purv Marg Heavy Truck Accident",
//     "lat": 30.7315,  // Approximate latitude for Purv Marg
//     "lng": 76.7880   // Approximate longitude for Purv Marg
// },
// {
//     "id": "east-sector-26-7",
//     "type": "accident",
//     "description": "Heavy Truck accident near SCO No 42",
//     "event_time": "2024-05-08T05:00:00Z",
//     "title": "SCO No 42 Heavy Truck Accident",
//     "lat": 30.7305,  // Approximate latitude for SCO No 42
//     "lng": 76.7885   // Approximate longitude for SCO No 42
// },
// {
//     "id": "east-sector-26-8",
//     "type": "accident",
//     "description": "Fortuner car accident near CCET College Water Works",
//     "event_time": "2024-05-19T00:15:00Z",
//     "title": "CCET College Car Accident",
//     "lat": 30.7320,  // Approximate latitude for CCET College
//     "lng": 76.7890   // Approximate longitude for CCET College
// },
//   {
//     "id": "patiala-chandigarh-1",
//     "type": "robbery",
//     "description": "Robbery reported near Patiala",
//     "event_time": "2024-09-01T12:00:00Z",
//     "title": "Patiala Robbery",
//     "lat": 30.3375,
//     "lng": 76.3858 // Close to Patiala
//   },
//   {
//     "id": "rajpura-chandigarh-1",
//     "type": "accident",
//     "description": "Accident reported near Rajpura",
//     "event_time": "2024-09-01T13:00:00Z",
//     "title": "Rajpura Accident",
//     "lat": 30.5097,
//     "lng": 76.5824 // Close to Rajpura
//   },
//   {
//     "id": "zirakpur-chandigarh-1",
//     "type": "theft",
//     "description": "Theft reported near Zirakpur",
//     "event_time": "2024-09-01T14:00:00Z",
//     "title": "Zirakpur Theft",
//     "lat": 30.6607,
//     "lng": 76.7995 // Close to Zirakpur
//   },
//   {
//     "id": "chandigarh-chandigarh-1",
//     "type": "robbery",
//     "description": "Robbery reported in Chandigarh",
//     "event_time": "2024-09-01T15:00:00Z",
//     "title": "Chandigarh Robbery",
//     "lat": 30.7333,
//     "lng": 76.7794 // In Chandigarh
//   },
//   {
//     "id": "ludhiana-chandigarh-1",
//     "type": "accident",
//     "description": "Accident reported near Ludhiana",
//     "event_time": "2024-09-01T16:00:00Z",
//     "title": "Ludhiana Accident",
//     "lat": 30.9009,
//     "lng": 75.8573 // Close to Ludhiana
//   },
//   {
//     "id": "jalandhar-chandigarh-1",
//     "type": "theft",
//     "description": "Theft reported near Jalandhar",
//     "event_time": "2024-09-01T17:00:00Z",
//     "title": "Jalandhar Theft",
//     "lat": 31.3260,
//     "lng": 75.5762 // Close to Jalandhar
//   },
//   {
//     "id": "delhi-chandigarh-1",
//     "type": "robbery",
//     "description": "Robbery reported in Delhi",
//     "event_time": "2024-09-01T18:00:00Z",
//     "title": "Delhi Robbery",
//     "lat": 28.6139,
//     "lng": 77.2090 // In Delhi
//   },
//   {
//     "id": "mohali-highway-1",
//     "type": "accident",
//     "description": "Speeding BMW with VIP number hits a bike on Zirakpur Patiala Highway, resulting in 1 death and 2 critical injuries",
//     "event_time": "2024-05-29T23:00:00Z", // Assuming late night refers to the previous day
//     "title": "BMW Hits Bike on Punjab Highway",
//     "lat": 30.6659,  // Approximate latitude for Zirakpur Patiala Highway, Mohali
//     "lng": 76.7816   // Approximate longitude for Zirakpur Patiala Highway, Mohali
// },
// {
//   "id": "desumajra-chemical-leak-1",
//   "type": "chemical leak",
//   "description": "Chemical leakage from a tanker hit by a truck on Kharar National Highway, causing panic due to burning eyes and pungent smell",
//   "event_time": "2024-09-13T04:30:00Z", // Time of the accident
//   "title": "Chemical Leak on Kharar National Highway",
//   "lat": 30.7084,  // Approximate latitude for Desumajra, Mohali
//   "lng": 76.7438   // Approximate longitude for Desumajra, Mohali
// },
// {
//   "id": "ghost-sighting-sector-16-1",
//   "type": "supernatural event",
//   "description": "Eyewitnesses report a ghost in a white apron, resembling a doctor, seen on the Haunted Bridge near General Hospital in Sector 16, Chandigarh. The ghost is said to be of a doctor who died in a road accident 20 years ago.",
//   "event_time": "2024-09-13T00:00:00Z", // Assuming the report date
//   "title": "Ghost Sighting on Haunted Bridge",
//   "lat": 30.7360,  // Approximate latitude for General Hospital, Sector 16, Chandigarh
//   "lng": 76.7973   // Approximate longitude for General Hospital, Sector 16, Chandigarh
// },
// {
//   "id": "landslide-aut-2023",
//   "type": "natural disaster",
//   "description": "A massive landslide blocked the Chandigarh-Manali highway near Aut in Mandi district. The landslide occurred at the entrance of tunnel No. 11 at Jhanogi, around 4km from Aut, causing significant traffic disruption. The highway remains closed due to ongoing falling rocks and boulders.",
//   "event_time": "2023-09-10T22:15:00Z", // Date and time of the landslide
//   "title": "Landslide on Chandigarh-Manali Highway",
//   "lat": 31.8315,  // Approximate latitude for the landslide location near Aut
//   "lng": 77.2031,  // Approximate longitude for the landslide location near Aut
//   "avoidance_notice": "The Chandigarh-Manali highway is blocked due to a massive landslide. Avoid this route and consider alternate paths to reach your destination."
// },
// // {
// //   "id": "sector-30-robbery-1",
// //   "type": "robbery",
// //   "description": "Robbery at a convenience store near Sector 30, Chandigarh",
// //   "event_time": "2024-09-15T18:30:00Z",
// //   "title": "Sector 30 Convenience Store Robbery",
// //   "lat": 30.7250,  // Approximate latitude for Sector 30
// //   "lng": 76.7950   // Approximate longitude for Sector 30
// // },
// {
//   "id": "sector-23-accident-1",
//   "type": "accident",
//   "description": "Car accident near the intersection of Sector 23, Chandigarh",
//   "event_time": "2024-09-15T21:15:00Z",
//   "title": "Sector 23 Car Accident",
//   "lat": 30.7220,  // Approximate latitude for Sector 23
//   "lng": 76.7920   // Approximate longitude for Sector 23
// },
// {
//   "id": "sector-21-roadblock-1",
//   "type": "road_block",
//   "description": "Road block on the main road near Sector 21, Chandigarh",
//   "event_time": "2024-09-15T20:00:00Z",
//   "title": "Sector 21 Road Block",
//   "lat": 30.7190,  // Approximate latitude for Sector 21
//   "lng": 76.7885   // Approximate longitude for Sector 21
// },
// {
//   "id": "attawa-chowk-incident-1",
//   "type": "road_block",
//   "description": "Road block at Attawa Chowk on Jan Marg, Chandigarh",
//   "event_time": "2024-09-15T16:00:00Z",
//   "title": "Attawa Chowk Road Block",
//   "lat": 30.7315,  // Approximate latitude for Attawa Chowk
//   "lng": 76.7887   // Approximate longitude for Attawa Chowk
// },
// {
//   "id": "children-traffic-park-incident-1",
//   "type": "event",
//   "description": "Event at the Children's Traffic Park, Chandigarh",
//   "event_time": "2024-09-15T14:00:00Z",
//   "title": "Children's Traffic Park Event",
//   "lat": 30.743553,  // Approximate latitude for Children's Traffic Park
//   "lng": 76.763298   // Approximate longitude for Children's Traffic Park
// },
// {
//   "id": "road-sector-17-sector-43-robbery-1",
//   "type": "robbery",
//   "description": "Robbery reported on the road connecting Sector 17 and Sector 43, Chandigarh",
//   "event_time": "2024-09-15T10:30:00Z",
//   "title": "Robbery on Road between Sector 17 and Sector 43",
//   "lat": 30.7265,  // Approximate latitude for a central road between Sector 17 and Sector 43
//   "lng": 76.7925   // Approximate longitude for a central road between Sector 17 and Sector 43
// },
// {
//   "id": "brothers-amritsari-kulcha-hub-1",
//   "type": "restaurant",
//   "description": "Popular eatery known for its Amritsari kulchas, located in Chandigarh",
//   "event_time": "2024-09-15T09:00:00Z",
//   "title": "Brothers Amritsari Kulcha Hub",
//   "lat": 30.743317,  // Latitude for Brothers Amritsari Kulcha Hub
//   "lng": 76.789520   // Longitude for Brothers Amritsari Kulcha Hub
// },
// {
//   "id": "taj-chandigarh-1",
//   "type": "hotel",
//   "description": "Luxury hotel located in Chandigarh, known for its upscale amenities and services.",
//   "event_time": "2024-09-15T12:00:00Z",
//   "title": "Taj Chandigarh",
//   "lat": 30.745766,  // Latitude for Taj Chandigarh
//   "lng": 76.784699   // Longitude for Taj Chandigarh
// },
// {
//   "id": "chandigarh-judicial-academy-crime-1",
//   "type": "theft",
//   "description": "Theft reported at the Chandigarh Judicial Academy.",
//   "event_time": "2024-09-15T17:30:00Z",
//   "title": "Theft at Chandigarh Judicial Academy",
//   "lat": 30.721641,  // Approximate latitude for Chandigarh Judicial Academy
//   "lng": 76.745789   // Approximate longitude for Chandigarh Judicial Academy
// },
// {
//   "id": "sonu-dhaba-crime-1",
//   "type": "assault",
//   "description": "Assault reported at Sonu Dhaba, a popular roadside eatery.",
//   "event_time": "2024-09-15T20:00:00Z",
//   "title": "Assault at Sonu Dhaba",
//   "lat": 30.726060,  // Approximate latitude for Sonu Dhaba
//   "lng": 76.751186   // Approximate longitude for Sonu Dhaba
// },
// {
//   "id": "chandigarh-bird-park-accident-1",
//   "type": "accident",
//   "description": "Frequent accidents reported at Chandigarh Bird Park.",
//   "event_time": "2024-09-15T13:45:00Z",
//   "title": "Accident at Chandigarh Bird Park",
//   "lat": 30.7489,  // Latitude for Chandigarh Bird Park
//   "lng": 76.8104   // Longitude for Chandigarh Bird Park
// },
// {
//   "id": "chandigarh-public-disturbance-1",
//   "type": "public_disturbance",
//   "description": "Public disturbance reported at the location near the given coordinates in Chandigarh.",
//   "event_time": "2024-09-15T14:30:00Z",
//   "title": "Public Disturbance",
//   "lat": 30.7335,  // Latitude for the location
//   "lng": 76.7977   // Longitude for the location
// },
// // {
// //   "id": "chandigarh-road-rage-1",
// //   "type": "road_rage",
// //   "description": "Road rage incident reported at the location near the given coordinates in Chandigarh.",
// //   "event_time": "2024-09-15T16:00:00Z",
// //   "title": "Road Rage Incident",
// //   "lat": 30.7261,  // Latitude for the location
// //   "lng": 76.8047   // Longitude for the location
// // },
// {
//   "id": "chandigarh-protest-1",
//   "type": "protest",
//   "description": "Protest reported at the location near the given coordinates in Chandigarh.",
//   "event_time": "2024-09-15T09:00:00Z",
//   "title": "Protest in Chandigarh",
//   "lat": 30.7782,  // Latitude for the location
//   "lng": 76.7194   // Longitude for the location
// },
// {
//   "id": "hotel-aroma-burglary-1",
//   "type": "burglary",
//   "description": "Burglary reported at Hotel Aroma. Items were stolen from the guest rooms.",
//   "event_time": "2024-09-15T22:00:00Z",
//   "title": "Burglary at Hotel Aroma",
//   "lat": 30.7302,  // Latitude for Hotel Aroma
//   "lng": 76.7735   // Longitude for Hotel Aroma
// },
// {
//   "id": "chandigarh-protest-2",
//   "type": "protest",
//   "description": "Protest reported at the location near the given coordinates in Chandigarh.",
//   "event_time": "2024-09-15T15:00:00Z",
//   "title": "Protest in Chandigarh",
//   "lat": 30.7382,  // Latitude for the location
//   "lng": 76.7756   // Longitude for the location
// },
// {
//   "id": "car-robbery-1",
//   "type": "car_robbery",
//   "description": "Car robbery reported at the location near the given coordinates in Chandigarh.",
//   "event_time": "2024-09-15T18:00:00Z",
//   "title": "Car Robbery",
//   "lat": 30.7396,  // Latitude for the location
//   "lng": 76.7915   // Longitude for the location
// }
// ];

// const redIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'; 
// const yellowIcon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';

// function Maps() {
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [travelMode, setTravelMode] = useState('DRIVING');
//   const [currentPosition, setCurrentPosition] = useState({});
//   const [response, setResponse] = useState(null);
//   const [inTravelMode, setInTravelMode] = useState(false);
//   const [showPath, setShowPath] = useState(false);
//   const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
//   const [incidentMarkers, setIncidentMarkers] = useState([]);
//   const [selectedIncident, setSelectedIncident] = useState(null); // State to manage selected incident for InfoWindow
//   const [alertShown, setAlertShown] = useState(false); // Track if alert has been shown for the current path
//   const [feedbackMarkers, setFeedbackMarkers] = useState([]);


//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(position => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (inTravelMode) {
//       const interval = setInterval(() => {
//         if (currentPosition.lat && currentPosition.lng) {
//           setOrigin(`${currentPosition.lat},${currentPosition.lng}`);
//         }
//       }, 10000); // Update every 10 seconds

//       return () => clearInterval(interval);
//     }
//   }, [inTravelMode, currentPosition]);

//   const directionsCallback = (response) => {
//     if (response !== null) {
//       if (response.status === 'OK') {
//         setResponse(response);
//         if (!inTravelMode) {
//           setShowPath(true);
//         }
//         checkIncidentsOnRoute(response);
//       } else {
//         console.log('response: ', response);
//       }
//     }
//   };

//   const checkIncidentsOnRoute = (response) => {
//     if (response.routes.length > 0) {
//       const path = response.routes[selectedRouteIndex].overview_path;
//       let incidentDetected = false;

//       // Reset incident markers
//       setIncidentMarkers([]);

//       for (const incident of crimeReports) {
//         if (isIncidentOnPath(path, incident)) {
//           incidentDetected = true;
//           setIncidentMarkers(prev => [...prev, incident]);
//         }
//       }

//       // Show the alert only once
//       if (incidentDetected && !alertShown) {
//         alert('Incident detected on your route! Please select another route.');
//         setAlertShown(true);
//       }
//     }
//   };

//   const isIncidentOnPath = (path, incident) => {
//     for (const coordinate of path) {
//       const distance = getDistance(incident.lat, incident.lng, coordinate.lat(), coordinate.lng());
//       if (distance < 0.1) { // Adjust distance threshold as needed
//         return true;
//       }
//     }
//     return false;
//   };

//   const getDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the earth in km
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
//       Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in km
//     return distance;
//   };

//   const handleCallPolice = () => {
//     const policeNumber = '7717430984'; // Default police number
//     window.location.href = `tel:${policeNumber}`; // This will initiate a call
//   };

//   const handleSearch = () => {
//     setInTravelMode(false);  // Ensure we are not in travel mode
//     setResponse(null);       // Clear previous response
//     setShowPath(true);       // Show path on search
//     setIncidentMarkers([]);  // Clear previous incident markers
//     setAlertShown(false);    // Reset alert flag for new path
//   };

//   const handleRouteChange = (index) => {
//     setSelectedRouteIndex(index);
//     if (response) {
//       checkIncidentsOnRoute(response); // Recheck incidents for the new route
//     }
//   };

//   const handleExitTravelMode = () => {
//     setInTravelMode(false);
//     setShowPath(false);     // Hide path
//     setResponse(null);
//     setOrigin('');
//     setDestination('');
//     setAlertShown(false);    // Reset alert flag when exiting travel mode
//   };


//   useEffect(() => {
//     const fetchFeedbackData = async () => {
//       try {
//         const response = await axios.get('/api/feedback');
//         const feedbackData = response.data;

//         const markers = feedbackData.filter(feedback => 
//           feedback.policePresence === 'yes' ||
//           feedback.lightning === 'yes' ||
//           feedback.solitary === 'yes' ||
//           feedback.roadsNotGood === 'yes'
//         ).map(feedback => ({
//           position: {
//             lat: feedback.location.lat,
//             lng: feedback.location.lng,
//           },
//           title:` Police Presence: ${feedback.policePresence}, Lightning: ${feedback.lightning}, Solitary: ${feedback.solitary}, Roads Not Good: ${feedback.roadsNotGood}`,
//         }));

//         setFeedbackMarkers(markers);
//       } catch (error) {
//         console.error('Error fetching feedback data:', error);
//       }
//     };

//     fetchFeedbackData();
//   }, []);

//   return (
//     <div className="App">
//       {!inTravelMode && (
//         <div style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
//           <input
//             type="text"
//             placeholder="Enter starting location"
//             value={origin}
//             onChange={e => setOrigin(e.target.value)}
//             style={{ marginRight: '10px', padding: '5px',color:'black' }}
//           />
//           <button onClick={() => {
//             if (currentPosition.lat && currentPosition.lng) {
//               setOrigin(`${currentPosition.lat},${currentPosition.lng}`);
//             } else {
//               alert('Current location is not available.');
//             }
//           }} style={{ padding: '5px 10px', marginRight: '10px',background: 'linear-gradient(to right, #6b46c1, #4c51bf)',color:'white' }}>
//             Use Current Location
//           </button>
//           <input
//             type="text"
//             placeholder="Enter destination"
//             value={destination}
//             onChange={e => setDestination(e.target.value)}
//             style={{ marginRight: '10px', padding: '5px',color:'black' }}
//           />
//           <select
//             value={travelMode}
//             onChange={e => setTravelMode(e.target.value)}
//             style={{ marginRight: '10px', padding: '5px',color:'black' }}
//           >
//             <option value="DRIVING">Driving</option>
//             <option value="WALKING">Walking</option>
//             <option value="BICYCLING">Bicycling</option>
//             <option value="TRANSIT">Transit</option>
//           </select>
//           <button onClick={handleSearch} style={{ padding: '5px 10px',background: 'linear-gradient(to right, #6b46c1, #4c51bf)',color:'white' }}>Search</button>
//           <div style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px' }}>
//             <button onClick={() => setInTravelMode(true)} style={{ padding: '5px 10px',background: 'linear-gradient(to right, #6b46c1, #4c51bf)',color:'white' }}>Start Tracking</button>
//           </div>
//         </div>
//       )}

//       <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={currentPosition.lat ? currentPosition : { lat: 0, lng: 0 }}
//           zoom={15}
//         >
//           {feedbackMarkers.map((marker, index) => (
//             <Marker
//               key={index}
//               position={marker.position}
//               icon={yellowIcon}
//               label={marker.title}
//             />
//           ))}
//           {(showPath || inTravelMode) && origin && destination && travelMode && (
//             <DirectionsService
//               options={{
//                 destination: destination,
//                 origin: origin,
//                 travelMode: travelMode,
//                 provideRouteAlternatives: true,
//               }}
//               callback={directionsCallback}
//             />
//           )}

//           {response && (
//             <>
//               <DirectionsRenderer
//                 options={{
//                   directions: response,
//                   routeIndex: selectedRouteIndex,
//                 }}
//               />
//               {/* Add a dropdown or some UI to select route index */}
//               {response.routes.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleRouteChange(index)}
//                   style={{ position: 'absolute', top: `${index * 30 + 10}px`, left: '10px', zIndex: 2,background: 'linear-gradient(to right, #6b46c1, #4c51bf)', color:'white' }}
//                 >
//                   Route {index + 1}
//                 </button>
//               ))}
//             </>

// )}

// {/* Render incident markers */}
// {incidentMarkers.map(incident => (
//   <Marker
//     key={incident.id}
//     position={{ lat: incident.lat, lng: incident.lng }}
//     icon={redIcon}
//     onClick={() => setSelectedIncident(incident)}
//   />
// ))}

// {/* Render info windows for selected incidents */}
// {selectedIncident && (
//   <InfoWindow
//     position={{ lat: selectedIncident.lat, lng: selectedIncident.lng }}
//     onCloseClick={() => setSelectedIncident(null)}
//   >
//     <div>
//       <h3 style={{color:'black'}}>{selectedIncident.title}</h3>
//       <p style={{color:'black'}}>{selectedIncident.description}</p>
//       <p style={{color:'black'}}>{new Date(selectedIncident.event_time).toLocaleString()}</p>
//     </div>
//   </InfoWindow>
// )}
// </GoogleMap>
// </LoadScript>

// {inTravelMode && (
//   <>
// <button
// onClick={handleExitTravelMode}
// style={{ position: 'absolute', bottom: '10px', right: '10px', padding: '10px', color:'white', background: 'linear-gradient(to right, #6b46c1, #4c51bf)' }}
// >
// Exit Travel Mode
// </button>
// <button
//             onClick={handleCallPolice}
//             style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '10px', color: 'white', background: 'linear-gradient(to right, #ff0000, #b30000)' }}
//           >
//             Call Police
//           </button>
// </>
// )}
// </div>
// );
// }

// export default Maps;
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
const containerStyle = {
  width: '100%',
  height: '100vh',
};

const crimeReports = [
  {
    "id": "barnala-chandigarh-1",
    "type": "robbery",
    "description": "Robbery reported near Barnala",
    "event_time": "2024-09-01T09:00:00Z",
    "title": "Barnala Robbery",
    "lat": 30.3725,
    "lng": 75.8174 // Close to Barnala
  },
  {
    "id": "sangrur-chandigarh-1",
    "type": "accident",
    "description": "Accident reported near Sangrur",
    "event_time": "2024-09-01T10:00:00Z",
    "title": "Sangrur Accident",
    "lat": 30.2388,
    "lng": 75.8426 // Close to Sangrur
  },
  {
    "id": "bhawanigarh-chandigarh-1",
    "type": "theft",
    "description": "Theft reported near Bhawanigarh",
    "event_time": "2024-09-01T11:00:00Z",
    "title": "Bhawanigarh Theft",
    "lat": 30.3742,
    "lng": 76.1422 // Close to Bhawanigarh
  },
  {
    "id": "central-sector-17-1",
    "type": "accident",
    "description": "Accident involving two buses at Central Sector 17",
    "event_time": "2024-02-20T00:00:00Z",
    "title": "Central Sector 17 Bus Collision",
    "lat": 30.7333,  // Approximate latitude for Central Sector 17
    "lng": 76.7833   // Approximate longitude for Central Sector 17
},
{
    "id": "central-sector-17-2",
    "type": "accident",
    "description": "Accident involving Activa near Kiran Cinema, Sector 22",
    "event_time": "2024-04-18T13:00:00Z",
    "title": "Sector 22 Activa Accident",
    "lat": 30.7354,  // Approximate latitude for Kiran Cinema, Sector 22
    "lng": 76.7905   // Approximate longitude for Kiran Cinema, Sector 22
},
{
    "id": "central-sector-17-3",
    "type": "accident",
    "description": "Motorcycle accident at Cricket Stadium Chowk",
    "event_time": "2024-05-20T01:00:00Z",
    "title": "Cricket Stadium Chowk Motorcycle Accident",
    "lat": 30.7343,  // Approximate latitude for Cricket Stadium Chowk
    "lng": 76.7850   // Approximate longitude for Cricket Stadium Chowk
},
{
    "id": "east-sector-26-1",
    "type": "accident",
    "description": "Car accident near Khalsa College, Sector 26",
    "event_time": "2024-01-03T22:00:00Z",
    "title": "Sector 26 Khalsa College Car Accident",
    "lat": 30.7300,  // Approximate latitude for Sector 26
    "lng": 76.7880   // Approximate longitude for Sector 26
},
{
    "id": "east-sector-26-2",
    "type": "accident",
    "description": "Accident involving E-Rickshaw and Car near EWS Flat Light Point",
    "event_time": "2024-03-10T09:30:00Z",
    "title": "EWS Flat Light Point Accident",
    "lat": 30.7297,  // Approximate latitude for EWS Flat Light Point
    "lng": 76.7901   // Approximate longitude for EWS Flat Light Point
},
{
    "id": "east-sector-26-3",
    "type": "accident",
    "description": "Scooter and Mini Truck accident at Oriental Lounge",
    "event_time": "2024-03-20T18:40:00Z",
    "title": "Oriental Lounge Scooter and Truck Accident",
    "lat": 30.7338,  // Approximate latitude for Oriental Lounge
    "lng": 76.7906   // Approximate longitude for Oriental Lounge
},
{
    "id": "east-sector-26-4",
    "type": "accident",
    "description": "Heavy Truck and Scooterette accident at Purv Marg",
    "event_time": "2024-03-23T13:35:00Z",
    "title": "Purv Marg Heavy Truck and Scooterette Accident",
    "lat": 30.7312,  // Approximate latitude for Purv Marg
    "lng": 76.7875   // Approximate longitude for Purv Marg
},
{
    "id": "east-sector-26-5",
    "type": "accident",
    "description": "Car accident near ITI Gate",
    "event_time": "2024-04-26T22:00:00Z",
    "title": "ITI Gate Car Accident",
    "lat": 30.7330,  // Approximate latitude for ITI Gate
    "lng": 76.7885   // Approximate longitude for ITI Gate
},
{
    "id": "east-sector-26-6",
    "type": "accident",
    "description": "Heavy Truck accident at Purv Marg",
    "event_time": "2024-04-30T18:55:00Z",
    "title": "Purv Marg Heavy Truck Accident",
    "lat": 30.7315,  // Approximate latitude for Purv Marg
    "lng": 76.7880   // Approximate longitude for Purv Marg
},
{
    "id": "east-sector-26-7",
    "type": "accident",
    "description": "Heavy Truck accident near SCO No 42",
    "event_time": "2024-05-08T05:00:00Z",
    "title": "SCO No 42 Heavy Truck Accident",
    "lat": 30.7305,  // Approximate latitude for SCO No 42
    "lng": 76.7885   // Approximate longitude for SCO No 42
},
{
    "id": "east-sector-26-8",
    "type": "accident",
    "description": "Fortuner car accident near CCET College Water Works",
    "event_time": "2024-05-19T00:15:00Z",
    "title": "CCET College Car Accident",
    "lat": 30.7320,  // Approximate latitude for CCET College
    "lng": 76.7890   // Approximate longitude for CCET College
},
  {
    "id": "patiala-chandigarh-1",
    "type": "robbery",
    "description": "Robbery reported near Patiala",
    "event_time": "2024-09-01T12:00:00Z",
    "title": "Patiala Robbery",
    "lat": 30.3375,
    "lng": 76.3858 // Close to Patiala
  },
  {
    "id": "rajpura-chandigarh-1",
    "type": "accident",
    "description": "Accident reported near Rajpura",
    "event_time": "2024-09-01T13:00:00Z",
    "title": "Rajpura Accident",
    "lat": 30.5097,
    "lng": 76.5824 // Close to Rajpura
  },
  {
    "id": "zirakpur-chandigarh-1",
    "type": "theft",
    "description": "Theft reported near Zirakpur",
    "event_time": "2024-09-01T14:00:00Z",
    "title": "Zirakpur Theft",
    "lat": 30.6607,
    "lng": 76.7995 // Close to Zirakpur
  },
  {
    "id": "chandigarh-chandigarh-1",
    "type": "robbery",
    "description": "Robbery reported in Chandigarh",
    "event_time": "2024-09-01T15:00:00Z",
    "title": "Chandigarh Robbery",
    "lat": 30.7333,
    "lng": 76.7794 // In Chandigarh
  },
  {
    "id": "ludhiana-chandigarh-1",
    "type": "accident",
    "description": "Accident reported near Ludhiana",
    "event_time": "2024-09-01T16:00:00Z",
    "title": "Ludhiana Accident",
    "lat": 30.9009,
    "lng": 75.8573 // Close to Ludhiana
  },
  {
    "id": "jalandhar-chandigarh-1",
    "type": "theft",
    "description": "Theft reported near Jalandhar",
    "event_time": "2024-09-01T17:00:00Z",
    "title": "Jalandhar Theft",
    "lat": 31.3260,
    "lng": 75.5762 // Close to Jalandhar
  },
  {
    "id": "delhi-chandigarh-1",
    "type": "robbery",
    "description": "Robbery reported in Delhi",
    "event_time": "2024-09-01T18:00:00Z",
    "title": "Delhi Robbery",
    "lat": 28.6139,
    "lng": 77.2090 // In Delhi
  },
  {
    "id": "mohali-highway-1",
    "type": "accident",
    "description": "Speeding BMW with VIP number hits a bike on Zirakpur Patiala Highway, resulting in 1 death and 2 critical injuries",
    "event_time": "2024-05-29T23:00:00Z", // Assuming late night refers to the previous day
    "title": "BMW Hits Bike on Punjab Highway",
    "lat": 30.6659,  // Approximate latitude for Zirakpur Patiala Highway, Mohali
    "lng": 76.7816   // Approximate longitude for Zirakpur Patiala Highway, Mohali
},
{
  "id": "desumajra-chemical-leak-1",
  "type": "chemical leak",
  "description": "Chemical leakage from a tanker hit by a truck on Kharar National Highway, causing panic due to burning eyes and pungent smell",
  "event_time": "2024-09-13T04:30:00Z", // Time of the accident
  "title": "Chemical Leak on Kharar National Highway",
  "lat": 30.7084,  // Approximate latitude for Desumajra, Mohali
  "lng": 76.7438   // Approximate longitude for Desumajra, Mohali
},
{
  "id": "ghost-sighting-sector-16-1",
  "type": "supernatural event",
  "description": "Eyewitnesses report a ghost in a white apron, resembling a doctor, seen on the Haunted Bridge near General Hospital in Sector 16, Chandigarh. The ghost is said to be of a doctor who died in a road accident 20 years ago.",
  "event_time": "2024-09-13T00:00:00Z", // Assuming the report date
  "title": "Ghost Sighting on Haunted Bridge",
  "lat": 30.7360,  // Approximate latitude for General Hospital, Sector 16, Chandigarh
  "lng": 76.7973   // Approximate longitude for General Hospital, Sector 16, Chandigarh
},
{
  "id": "landslide-aut-2023",
  "type": "natural disaster",
  "description": "A massive landslide blocked the Chandigarh-Manali highway near Aut in Mandi district. The landslide occurred at the entrance of tunnel No. 11 at Jhanogi, around 4km from Aut, causing significant traffic disruption. The highway remains closed due to ongoing falling rocks and boulders.",
  "event_time": "2023-09-10T22:15:00Z", // Date and time of the landslide
  "title": "Landslide on Chandigarh-Manali Highway",
  "lat": 31.8315,  // Approximate latitude for the landslide location near Aut
  "lng": 77.2031,  // Approximate longitude for the landslide location near Aut
  "avoidance_notice": "The Chandigarh-Manali highway is blocked due to a massive landslide. Avoid this route and consider alternate paths to reach your destination."
},
// {
//   "id": "sector-30-robbery-1",
//   "type": "robbery",
//   "description": "Robbery at a convenience store near Sector 30, Chandigarh",
//   "event_time": "2024-09-15T18:30:00Z",
//   "title": "Sector 30 Convenience Store Robbery",
//   "lat": 30.7250,  // Approximate latitude for Sector 30
//   "lng": 76.7950   // Approximate longitude for Sector 30
// },
{
  "id": "sector-23-accident-1",
  "type": "accident",
  "description": "Car accident near the intersection of Sector 23, Chandigarh",
  "event_time": "2024-09-15T21:15:00Z",
  "title": "Sector 23 Car Accident",
  "lat": 30.7220,  // Approximate latitude for Sector 23
  "lng": 76.7920   // Approximate longitude for Sector 23
},
{
  "id": "sector-21-roadblock-1",
  "type": "road_block",
  "description": "Road block on the main road near Sector 21, Chandigarh",
  "event_time": "2024-09-15T20:00:00Z",
  "title": "Sector 21 Road Block",
  "lat": 30.7190,  // Approximate latitude for Sector 21
  "lng": 76.7885   // Approximate longitude for Sector 21
},
{
  "id": "attawa-chowk-incident-1",
  "type": "road_block",
  "description": "Road block at Attawa Chowk on Jan Marg, Chandigarh",
  "event_time": "2024-09-15T16:00:00Z",
  "title": "Attawa Chowk Road Block",
  "lat": 30.7315,  // Approximate latitude for Attawa Chowk
  "lng": 76.7887   // Approximate longitude for Attawa Chowk
},
{
  "id": "children-traffic-park-incident-1",
  "type": "event",
  "description": "Event at the Children's Traffic Park, Chandigarh",
  "event_time": "2024-09-15T14:00:00Z",
  "title": "Children's Traffic Park Event",
  "lat": 30.743553,  // Approximate latitude for Children's Traffic Park
  "lng": 76.763298   // Approximate longitude for Children's Traffic Park
},
{
  "id": "road-sector-17-sector-43-robbery-1",
  "type": "robbery",
  "description": "Robbery reported on the road connecting Sector 17 and Sector 43, Chandigarh",
  "event_time": "2024-09-15T10:30:00Z",
  "title": "Robbery on Road between Sector 17 and Sector 43",
  "lat": 30.7265,  // Approximate latitude for a central road between Sector 17 and Sector 43
  "lng": 76.7925   // Approximate longitude for a central road between Sector 17 and Sector 43
},
{
  "id": "brothers-amritsari-kulcha-hub-1",
  "type": "restaurant",
  "description": "Popular eatery known for its Amritsari kulchas, located in Chandigarh",
  "event_time": "2024-09-15T09:00:00Z",
  "title": "Brothers Amritsari Kulcha Hub",
  "lat": 30.743317,  // Latitude for Brothers Amritsari Kulcha Hub
  "lng": 76.789520   // Longitude for Brothers Amritsari Kulcha Hub
},
{
  "id": "taj-chandigarh-1",
  "type": "hotel",
  "description": "Luxury hotel located in Chandigarh, known for its upscale amenities and services.",
  "event_time": "2024-09-15T12:00:00Z",
  "title": "Taj Chandigarh",
  "lat": 30.745766,  // Latitude for Taj Chandigarh
  "lng": 76.784699   // Longitude for Taj Chandigarh
},
{
  "id": "chandigarh-judicial-academy-crime-1",
  "type": "theft",
  "description": "Theft reported at the Chandigarh Judicial Academy.",
  "event_time": "2024-09-15T17:30:00Z",
  "title": "Theft at Chandigarh Judicial Academy",
  "lat": 30.721641,  // Approximate latitude for Chandigarh Judicial Academy
  "lng": 76.745789   // Approximate longitude for Chandigarh Judicial Academy
},
{
  "id": "sonu-dhaba-crime-1",
  "type": "assault",
  "description": "Assault reported at Sonu Dhaba, a popular roadside eatery.",
  "event_time": "2024-09-15T20:00:00Z",
  "title": "Assault at Sonu Dhaba",
  "lat": 30.726060,  // Approximate latitude for Sonu Dhaba
  "lng": 76.751186   // Approximate longitude for Sonu Dhaba
},
{
  "id": "chandigarh-bird-park-accident-1",
  "type": "accident",
  "description": "Frequent accidents reported at Chandigarh Bird Park.",
  "event_time": "2024-09-15T13:45:00Z",
  "title": "Accident at Chandigarh Bird Park",
  "lat": 30.7489,  // Latitude for Chandigarh Bird Park
  "lng": 76.8104   // Longitude for Chandigarh Bird Park
},
{
  "id": "chandigarh-public-disturbance-1",
  "type": "public_disturbance",
  "description": "Public disturbance reported at the location near the given coordinates in Chandigarh.",
  "event_time": "2024-09-15T14:30:00Z",
  "title": "Public Disturbance",
  "lat": 30.7335,  // Latitude for the location
  "lng": 76.7977   // Longitude for the location
},
// {
//   "id": "chandigarh-road-rage-1",
//   "type": "road_rage",
//   "description": "Road rage incident reported at the location near the given coordinates in Chandigarh.",
//   "event_time": "2024-09-15T16:00:00Z",
//   "title": "Road Rage Incident",
//   "lat": 30.7261,  // Latitude for the location
//   "lng": 76.8047   // Longitude for the location
// },
{
  "id": "chandigarh-protest-1",
  "type": "protest",
  "description": "Protest reported at the location near the given coordinates in Chandigarh.",
  "event_time": "2024-09-15T09:00:00Z",
  "title": "Protest in Chandigarh",
  "lat": 30.7782,  // Latitude for the location
  "lng": 76.7194   // Longitude for the location
},
{
  "id": "hotel-aroma-burglary-1",
  "type": "burglary",
  "description": "Burglary reported at Hotel Aroma. Items were stolen from the guest rooms.",
  "event_time": "2024-09-15T22:00:00Z",
  "title": "Burglary at Hotel Aroma",
  "lat": 30.7302,  // Latitude for Hotel Aroma
  "lng": 76.7735   // Longitude for Hotel Aroma
},
{
  "id": "chandigarh-protest-2",
  "type": "protest",
  "description": "Protest reported at the location near the given coordinates in Chandigarh.",
  "event_time": "2024-09-15T15:00:00Z",
  "title": "Protest in Chandigarh",
  "lat": 30.7382,  // Latitude for the location
  "lng": 76.7756   // Longitude for the location
},
{
  "id": "car-robbery-1",
  "type": "car_robbery",
  "description": "Car robbery reported at the location near the given coordinates in Chandigarh.",
  "event_time": "2024-09-15T18:00:00Z",
  "title": "Car Robbery",
  "lat": 30.7396,  // Latitude for the location
  "lng": 76.7915   // Longitude for the location
}
];

const redIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'; 
const yellowIcon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';

function Maps() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState('DRIVING');
  const [currentPosition, setCurrentPosition] = useState({});
  const [response, setResponse] = useState(null);
  const [inTravelMode, setInTravelMode] = useState(false);
  const [showPath, setShowPath] = useState(false);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [incidentMarkers, setIncidentMarkers] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null); // State to manage selected incident for InfoWindow
  const [alertShown, setAlertShown] = useState(false); // Track if alert has been shown for the current path
  const [feedbackMarkers, setFeedbackMarkers] = useState([]);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (inTravelMode) {
      const interval = setInterval(() => {
        if (currentPosition.lat && currentPosition.lng) {
          setOrigin(`${currentPosition.lat},${currentPosition.lng}`);
        }
      }, 10000); // Update every 10 seconds

      return () => clearInterval(interval);
    }
  }, [inTravelMode, currentPosition]);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setResponse(response);
        if (!inTravelMode) {
          setShowPath(true);
          // Update distance and duration
          const route = response.routes[selectedRouteIndex];
          setDistance(route.legs[0].distance.text);
          setDuration(route.legs[0].duration.text);
        }
        checkIncidentsOnRoute(response);
      } else {
        console.log('response: ', response);
      }
    }
  };
  
  const checkIncidentsOnRoute = (response) => {
    if (response.routes.length > 0) {
      const path = response.routes[selectedRouteIndex].overview_path;
      let incidentDetected = false;

      // Reset incident markers
      setIncidentMarkers([]);

      for (const incident of crimeReports) {
        if (isIncidentOnPath(path, incident)) {
          incidentDetected = true;
          setIncidentMarkers(prev => [...prev, incident]);
        }
      }

      // Show the alert only once
      if (incidentDetected && !alertShown) {
        alert('Incident detected on your route! Please select another route.');
        setAlertShown(true);
      }
    }
  };

  const isIncidentOnPath = (path, incident) => {
    for (const coordinate of path) {
      const distance = getDistance(incident.lat, incident.lng, coordinate.lat(), coordinate.lng());
      if (distance < 0.1) { // Adjust distance threshold as needed
        return true;
      }
    }
    return false;
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const handleCallPolice = () => {
    const policeNumber = '7717430984'; // Default police number
    window.location.href = `tel:${policeNumber}`; // This will initiate a call
  };

  const handleSearch = () => {
    setInTravelMode(false);  // Ensure we are not in travel mode
    setResponse(null);       // Clear previous response
    setShowPath(true);       // Show path on search
    setIncidentMarkers([]);  // Clear previous incident markers
    setAlertShown(false);    // Reset alert flag for new path
    setDistance(null);       // Reset distance
    setDuration(null); 
  };

  const handleRouteChange = (index) => {
    setSelectedRouteIndex(index);
    if (response) {
      checkIncidentsOnRoute(response); // Recheck incidents for the new route
      // Update distance and duration for new route
      const route = response.routes[index];
      setDistance(route.legs[0].distance.text);
      setDuration(route.legs[0].duration.text);
    }
  };

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get('/feedback');
        const feedbackData = response.data;
  
        // Process and map feedback to markers
        const markers = feedbackData.filter(feedback => 
          !feedback.noPoliceSurvey || !feedback.noStreetLightning || 
          !feedback.solitary || !feedback.roadsNotGood
        ).map(feedback => ({
          position: {
            lat: feedback.landmark.lat,
            lng: feedback.landmark.lng,
          },
          title: `Police Presence: ${feedback.noPoliceSurvey}, Lightning: ${feedback.noStreetLightning}, Solitary: ${feedback.solitary}, Roads Not Good: ${feedback.roadsNotGood}`,
        }));
  
        setFeedbackMarkers(markers);

        console.log(feedbackMarkers);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };
  
    fetchFeedbackData();
  }, []);
  

  const handleExitTravelMode = () => {
    setInTravelMode(false);
    setShowPath(false);     // Hide path
    setResponse(null);
    setOrigin('');
    setDestination('');
    setAlertShown(false);    // Reset alert flag when exiting travel mode
    setDistance(null);       // Reset distance
    setDuration(null);  
  };

  return (
    <div className="App">
      {!inTravelMode && (
        <div style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
          <input
            type="text"
            placeholder="Enter starting location"
            value={origin}
            onChange={e => setOrigin(e.target.value)}
            style={{ marginRight: '10px', padding: '5px', color: 'black' }}
          />
          <button onClick={() => {
            if (currentPosition.lat && currentPosition.lng) {
              setOrigin(`${currentPosition.lat},${currentPosition.lng}`);
            } else {
              alert('Current location is not available.');
            }
          }} style={{ padding: '5px 10px', marginRight: '10px', background: 'linear-gradient(to right, #6b46c1, #4c51bf)', color: 'white' }}>
            Use Current Location
          </button>
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={e => setDestination(e.target.value)}
            style={{ marginRight: '10px', padding: '5px', color: 'black' }}
          />
          <select
            value={travelMode}
            onChange={e => setTravelMode(e.target.value)}
            style={{ marginRight: '10px', padding: '5px', color: 'black' }}
          >
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>
          <button onClick={handleSearch} style={{ padding: '5px 10px', background: 'linear-gradient(to right, #6b46c1, #4c51bf)', color: 'white' }}>Search</button>
          <div style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px' }}>
            <button onClick={() => setInTravelMode(true)} style={{ padding: '5px 10px', background: 'linear-gradient(to right, #6b46c1, #4c51bf)', color: 'white' }}>Start Tracking</button>
          </div>
        </div>
      )}

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition.lat ? currentPosition : { lat: 0, lng: 0 }}
          zoom={15}
        >
          {(showPath || inTravelMode) && origin && destination && travelMode && (
            <DirectionsService
              options={{
                destination: destination,
                origin: origin,
                travelMode: travelMode,
                provideRouteAlternatives: true,
              }}
              callback={directionsCallback}
            />
          )}

          {response && (
            <>
              <DirectionsRenderer
                options={{
                  directions: response,
                  routeIndex: selectedRouteIndex,
                }}
              />
              {response.routes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleRouteChange(index)}
                  style={{ position: 'absolute', top: `${index * 30 + 10}px`, left: '10px', zIndex: 2, background: 'linear-gradient(to right, #6b46c1, #4c51bf)', color: 'white' }}
                >
                  Route {index + 1}
                </button>
              ))}
              {!inTravelMode && distance && duration && (
                <div style={{ position: 'absolute', bottom: '50px', left: '10px', background: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)',color:'black' }}>
                  <h4>Route Details</h4>
                  <p><strong>Distance:</strong> {distance}</p>
                  <p><strong>Duration:</strong> {duration}</p>
                </div>
              )}
            </>
          )}

          {incidentMarkers.map(incident => (
            <Marker
              key={incident.id}
              position={{ lat: incident.lat, lng: incident.lng }}
              icon={redIcon}
              onClick={() => setSelectedIncident(incident)}
            />
          ))}

          {feedbackMarkers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={yellowIcon}
              label={marker.title}
            />
          ))}

          {selectedIncident && (
            <InfoWindow
              position={{ lat: selectedIncident.lat, lng: selectedIncident.lng }}
              onCloseClick={() => setSelectedIncident(null)}
            >
              <div>
                <h3 style={{ color: 'black' }}>{selectedIncident.title}</h3>
                <p style={{ color: 'black' }}>{selectedIncident.description}</p>
                <p style={{ color: 'black' }}>{new Date(selectedIncident.event_time).toLocaleString()}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {inTravelMode && (
        <>
          <button
            onClick={handleExitTravelMode}
            style={{ position: 'absolute', bottom: '10px', right: '10px', padding: '10px', color: 'white', background: 'linear-gradient(to right, #6b46c1, #4c51bf)' }}
          >
            Exit Travel Mode
          </button>
          <button
            onClick={handleCallPolice}
            style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '10px', color: 'white', background: 'linear-gradient(to right, #ff0000, #b30000)' }}
          >
            Call Police
          </button>
        </>
      )}
    </div>
  );
}

export default Maps;