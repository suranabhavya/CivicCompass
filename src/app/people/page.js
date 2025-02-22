// my-app/src/app/people/page.js
'use client';

import { useState, useEffect, useRef } from 'react';

export default function PeoplePage() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    // Debounce the API call by 300ms
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
  }, [query]);

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.description);
    setShowSuggestions(false);
  };

  return (
    <div style={{ position: 'relative', maxWidth: '300px', margin: '3rem auto' }}>
      <h1 style={{ textAlign: 'center' }}>Enter Your Address</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your address"
        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
      />
      {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #ccc',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            zIndex: 1000,
            maxHeight: '200px',
            overflowY: 'auto',
          }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelectSuggestion(suggestion)}
              style={{
                padding: '0.5rem',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
              }}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}