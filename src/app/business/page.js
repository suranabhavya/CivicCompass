// // src/app/business/page.js
// 'use client';

// import { useRef, useState } from 'react';
// import Script from 'next/script';

// export default function Business() {
//   const inputRef = useRef(null);
//   const [businessType, setBusinessType] = useState('');
//   let autocomplete;

//   const initAutocomplete = () => {
//     if (inputRef.current && window.google) {
//       autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
//         types: ['address']
//       });
//       autocomplete.addListener('place_changed', () => {
//         const place = autocomplete.getPlace();
//         console.log('Selected place:', place);
//       });
//     }
//   };

//   const handleBusinessTypeChange = (e) => {
//     setBusinessType(e.target.value);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '3rem' }}>
//       <h1>For Business</h1>
//       <div style={{ marginTop: '2rem' }}>
//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Enter business address"
//           style={{ padding: '0.5rem', width: '300px' }}
//         />
//       </div>
//       <div style={{ marginTop: '1rem' }}>
//         <select
//           value={businessType}
//           onChange={handleBusinessTypeChange}
//           style={{ padding: '0.5rem' }}
//         >
//           <option value="">Select business type</option>
//           <option value="restaurant">Restaurant</option>
//           <option value="retail">Retail</option>
//           <option value="services">Services</option>
//           {/* Add additional options as needed */}
//         </select>
//       </div>
//       <Script
//         src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`}
//         strategy="lazyOnload"
//         onLoad={initAutocomplete}
//       />
//     </div>
//   );
// }