import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'MJqcJuwjG+vec0Fm4kxAkA==WsdgHHgdv8FxPXXb' },
      });
      const data = await response.json();
      const randomQuote = data[0];
      setQuote(randomQuote);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          {quote && (
            <div>
              <p>
                &ldquo;
                {quote.quote}
                &rdquo;
              </p>
              <p>
                -
                {quote.author}
              </p>
            </div>
          )}
        </blockquote>
      </div>
    </div>
  );
}

export default Quote;
