import React, { useState } from 'react';

function useActionState(initialState: any) {
  const [state, setState] = useState<any>(initialState);
  
  const performAction = () => {
    // Thực hiện các hành động hoặc tương tác người dùng ở đây
    // Ví dụ: Gửi yêu cầu API, mở cửa sổ modal, hiển thị thông báo, vv.
    console.log("Action performed!");
  };

  return [state, performAction] as const;
}

// Sử dụng custom hook "useActionState" trong một thành phần
function MyComponent() {
  const [data, performAction] = useActionState(null);

  return (
    <div>
      <button onClick={performAction}>Perform Action</button>
      <p>Data: {data}</p>
    </div>
  );
}

export default MyComponent;
