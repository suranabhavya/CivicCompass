'use client';

import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from '@/app/components/Input';
import ExploreButton from '@/app/components/ExploreButton';
import Loading from '@/app/components/Loading';
import Card from '@/app/components/Card';

// Styled components for the suggestion popup
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

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2000;
`;

export default function PeoplePage() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [fetchingRecommendation, setFetchingRecommendation] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const timeoutRef = useRef(null);

  // Fetch autocomplete suggestions as the user types
  useEffect(() => {
    if (optionSelected) return;

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

  // When a suggestion is clicked, update the input and clear suggestions
  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.description);
    setSuggestions([]);         // Clear suggestions so the popup disappears
    setShowSuggestions(false);  // Hide the dropdown
    setRecommendation(null);    // Clear previous recommendation if needed
    setOptionSelected(true);    // Mark that an option was selected
  };

  // Reset optionSelected flag when the user types again
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setOptionSelected(false);
  };

  // Handle form submission to fetch recommendations
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    setFetchingRecommendation(true);
    try {
      const response = await fetch(`/api/getRecommendations?address=${encodeURIComponent(query)}`);
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Container for the Input and its suggestions */}
          <div style={{ position: 'relative', flex: 1 }}>
            <Input 
              value={query} 
              onChange={handleInputChange} 
              placeholder="Shoot your Address?" 
            />
            {/* {loading && (
              <div style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                Loading suggestions...
              </div>
            )} */}
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
          {/* Always show the submit button */}
          <div style={{ marginLeft: '10px' }}>
            <ExploreButton type="submit">Submit</ExploreButton>
          </div>
        </div>
      </form>

      {recommendation && (
        <div style={{ marginTop: '2rem', padding: '1rem' }}>
          <Card message={recommendation} />
        </div>
      )}

      {fetchingRecommendation && (
        <LoadingOverlay>
          <Loading />
        </LoadingOverlay>
      )}
    </div>
  );
}