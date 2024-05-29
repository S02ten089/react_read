import React, { useState, useEffect, useDebugValue } from 'react';
import axios from 'axios';

interface Employee {
  status: boolean;
  name: string;
  employeeCode: string;
  id: string;
}

// Custom hook to fetch and manage employee data
function useEmployeeData(apiUrl: string) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>(apiUrl);
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [apiUrl]);

  // Use useDebugValue to display the loading state and number of employees
  useDebugValue(loading ? 'Loading...' : `Loaded ${employees.length} employees`);

  return { employees, loading, error };
}

const EmployeeList: React.FC = () => {
  const { employees, loading, error } = useEmployeeData('https://6656f1099f970b3b36c7408e.mockapi.io/api/v1/useDebugValue');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <p>Name: {employee.name}</p>
            <p>Employee Code: {employee.employeeCode}</p>
            <p>Status: {employee.status ? 'Active' : 'Inactive'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
