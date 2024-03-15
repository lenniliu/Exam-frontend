import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const PaymentDetails = ({ payment }) => {
    const navigate = useNavigate();
    const [updatedPayment, setUpdatedPayment] = useState({
        amount: payment.amount,
        method: payment.method,
        status: payment.status,
      });

    const PaymentDelete = async (id) => {
      await fetch(`/api/payment/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
    };

    const handleUpdate = async () => {
        // Perform update request with updatedPayment data
        // You should replace this with your actual update logic
        await fetch(`/api/payment/${payment._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedPayment),
        });
        // Navigate to a success page or display a success message
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPayment((prevPayment) => ({
          ...prevPayment,
          [name]: value,
        }));
      };

    return (
      <div className="payment-details">
        <h4>{payment.amount}</h4>
        <p>Payment method: {payment.method}</p>
        <p>Payment status: {payment.status}</p>
        <span
          className="material-symbols-outlined"
          onClick={() => {
            PaymentDelete(payment._id);
            navigate("/login");
          }}
        >
          delete
        </span>
        <div className="Details">
        <h3>Update Payment</h3>
        <input type="number" name="amount" value={updatedPayment.amount} onChange={handleChange} />
        <input type="text" name="method" value={updatedPayment.method} onChange={handleChange} />
        <input type="text" name="status" value={updatedPayment.status} onChange={handleChange} />
        <button  onClick={handleUpdate}>Update Payment</button>
      </div>
      </div>
    );
  };
   
  export default PaymentDetails;
