// QuoteGenerator.js
import React, { useState, useEffect } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.fisenko.net/v1/quotes/en?query=string&offset=0&limit=1')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quotes[0]?.text || 'Failed to fetch quote.');
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
        setQuote('Failed to fetch quote.');
      });
  }, []);

  return (
    <div>
      <h2>Quote Generator</h2>
      <p>{quote}</p>
    </div>
  );
}
