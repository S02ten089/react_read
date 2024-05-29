import React from 'react';

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  return (
    <div style={{ color: 'red', margin: '20px' }}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorAlert;
