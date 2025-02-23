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



'use client';

import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from '@/app/components/Input';
import Dropdown from '@/app/components/Dropdown'; // Updated Dropdown that accepts onSelect & selected props
import ExploreButton from '@/app/components/ExploreButton';
import Loading from '@/app/components/Loading';
import Card from '@/app/components/Card';

// Styled components for the suggestion popup (same as People page)
const SuggestionList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px; /* Rounded corners */
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  color: #000; /* Black text */
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export default function BusinessPage() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [fetchingRecommendation, setFetchingRecommendation] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const [businessType, setBusinessType] = useState('');
  const timeoutRef = useRef(null);

  // Fetch autocomplete suggestions for the address
  useEffect(() => {
    if (optionSelected) return; // Do not refetch if an option was selected
    if (query.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/autocomplete?input=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data.predictions) {
          setSuggestions(data.predictions);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
        setShowSuggestions(true);
      }
    }, 300);
    return () => clearTimeout(timeoutRef.current);
  }, [query, optionSelected]);

  // When a suggestion is clicked, update the address input and clear suggestions
  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.description);
    setSuggestions([]);         // Clear suggestions so the popup disappears
    setShowSuggestions(false);  // Hide the dropdown
    setRecommendation(null);    // Clear previous recommendation if needed
    setOptionSelected(true);    // Mark that an option was selected
  };

  // Reset optionSelected flag when the user types a new address
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setOptionSelected(false);
  };

  // Callback for when a business type is selected from the dropdown
  const handleBusinessTypeSelect = (selectedType) => {
    setBusinessType(selectedType);
  };

  // Handle form submission to fetch recommendations
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    setFetchingRecommendation(true);
    try {
      // Optionally include the business type in your API call if needed
      const response = await fetch(
        `/api/getRecommendations?address=${encodeURIComponent(query)}&businessType=${encodeURIComponent(businessType)}`
      );
      const data = await response.json();
      setRecommendation(data.message);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendation("Error fetching recommendations.");
    } finally {
      setFetchingRecommendation(false);
    }
  };

  return (
    <div style={{ position: 'relative', maxWidth: '1000px', margin: '3rem auto' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Address input with autocomplete suggestions */}
          <div style={{ position: 'relative' }}>
            <Input 
              value={query} 
              onChange={handleInputChange} 
              placeholder="Shoot your Address?" 
            />
            {loading && (
              <div style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                Loading suggestions...
              </div>
            )}
            {showSuggestions && suggestions.length > 0 && (
              <SuggestionList>
                {suggestions.map((suggestion) => (
                  <SuggestionItem
                    key={suggestion.place_id}
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                    {suggestion.description}
                  </SuggestionItem>
                ))}
              </SuggestionList>
            )}
          </div>
          {/* Business type dropdown */}
          <div>
            <Dropdown 
              onSelect={handleBusinessTypeSelect} 
              selected={businessType} 
            />
          </div>
          {/* Submit button or loading indicator */}
          <div>
            {fetchingRecommendation ? (
              <Loading />
            ) : (
              <ExploreButton type="submit">Submit</ExploreButton>
            )}
          </div>
        </div>
      </form>
      {recommendation && (
        <div style={{ marginTop: '2rem', padding: '1rem' }}>
          <Card message={recommendation} />
        </div>
      )}
    </div>
  );
}