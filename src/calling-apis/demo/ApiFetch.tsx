import { useState, useEffect } from 'react';

const ApiFetch = () => {
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://run.mocky.io/v3/457d2c21-7c03-43a4-9da9-348a817071c4');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setText(data.text);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleRefresh = () => {
    fetchQuote();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Quote of the Day</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>An error has ocurred, please try again.</p>}
      {text && !loading && (
        <div>
          <p>{text}</p>
        </div>
      )}
      <button onClick={handleRefresh} style={{ marginTop: '20px' }}>
        Refresh
      </button>
    </div>
  );
};

export default ApiFetch;
