import React, { createContext, useContext, useState, useEffect } from 'react';

// Khai báo interface cho thông tin nhân viên
interface Employee {
  id: number;
  code: string;
  name: string;
  phone: string;
}

// Tạo một context cho danh sách nhân viên và các hàm callback
interface EmployeeContextType {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  fetchEmployees: () => Promise<void>;
}

const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
  fetchEmployees: async () => {},
});

// Tạo một custom hook để sử dụng context
export const useEmployeeContext = () => useContext(EmployeeContext);

// Props cho EmployeeProvider
interface EmployeeProviderProps {
  children: React.ReactNode;
}

// Component cha
export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Callback để gọi API và cập nhật danh sách nhân viên
  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://6656cd289f970b3b36c69125.mockapi.io/api/v1/UseActionState');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched employees:', data); // Debug log
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Gọi API một lần khi component được mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, fetchEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
