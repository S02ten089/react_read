import React, { useState } from 'react';
import ErrorAlert from '../Error/ErrorAlert';

const Home: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    try {
      throw new Error('This is a sample error!');
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {error && <ErrorAlert message={error} />}
      <button onClick={handleClick}>Cause Error</button>
    </div>
  );
};

export default Home;
