import React, { useState } from 'react';

function useApiRequest(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error: any) { // Chỉ định kiểu dữ liệu cho error là any
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

function MyComponent() {
  const { data, loading, error, fetchData } = useApiRequest('https://6656cd289f970b3b36c69125.mockapi.io/api/v1/UseActionState');

  const handleFetchData = () => {
    fetchData();
  };

  return (
    <div>
      <h1>API Data</h1>
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && Array.isArray(data) && (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;
