import React from 'react';
import { EmployeeProvider } from './EmployeeContext';
import EmployeeList from './EmployeeList';

const useContext: React.FC = () => {
  return (
    <EmployeeProvider>
      <div>
        <EmployeeList />
      </div>
    </EmployeeProvider>
  );
};

export default useContext;
