import React, { useState, useCallback } from 'react';
import axios from 'axios';

interface OrderDetails {
  product: string;
  quantity: number;
  price: number;
}

interface ProductPageProps {
  productId?: string;
  referrer?: string;
//   theme: string;
}

const UseCallback: React.FC<ProductPageProps> = ({ productId, referrer }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    product: '',
    quantity: 0,
    price: 0,
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {

      const response = await axios.post(`https://6656cd289f970b3b36c69125.mockapi.io/api/v1/UseActionState/${productId}&?/buy`, {
        referrer,
        orderDetails,
      });
      setResponseMessage('Order placed successfully!');
    } catch (error: any) {
      setError(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [productId, referrer, orderDetails]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  return (
    <div 
    // style={{ theme }}
    >
      <h1>Product Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label>
            Product:
            <input
              type="text"
              name="product"
              value={orderDetails.product}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={orderDetails.quantity}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={orderDetails.price}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UseCallback;
