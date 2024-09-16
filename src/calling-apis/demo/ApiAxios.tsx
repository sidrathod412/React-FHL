import { useQuery } from 'react-query';
import axios from 'axios';

const fetchQuote = async () => {
  const response = await axios.get('https://run.mocky.io/v3/457d2c21-7c03-43a4-9da9-348a817071c4');
  return response.data.text;
};

const ApiAxios = () => {
  const { data: text, isLoading, isError, refetch } = useQuery('quote', fetchQuote, {
    refetchOnWindowFocus: false,
  });

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Quote of the Day</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>An error has occurred, please try again.</p>}
      {text && !isLoading && (
        <div>
          <p>{text}</p>
        </div>
      )}
      <button onClick={() => refetch()}style={{ marginTop: '20px' }}>
        Refresh
      </button>
    </div>
  );
};

export default ApiAxios;
