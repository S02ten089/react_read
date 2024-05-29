import React, { useState } from 'react';
import ErrorAlert from './ErrorAlert';

function Home() {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      // Logic có thể gây ra lỗi
      throw new Error('This is a sample error!');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {error && <ErrorAlert message={error} />}
      <button onClick={handleClick}>Cause Error</button>
    </div>
  );
}

export default Home;
