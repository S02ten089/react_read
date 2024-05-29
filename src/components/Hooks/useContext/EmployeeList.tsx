import React, { useEffect } from 'react';
import { useEmployeeContext } from './EmployeeContext';

const EmployeeList: React.FC = () => {
  const { employees, fetchEmployees } = useEmployeeContext();

  // Gọi API mỗi khi component được render lại
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  console.log('Rendering EmployeeList with employees:', employees); // Debug log

  return (
    <div>
      <h2>Danh sách nhân viên</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <div>ID: {employee.id}</div>
            <div>Mã: {employee.code}</div>
            <div>Tên: {employee.name}</div>
            <div>Số điện thoại: {employee.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
