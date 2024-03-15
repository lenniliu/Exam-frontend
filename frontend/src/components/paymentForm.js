import { useState } from "react";

const PaymentForm = () => {
    const [amount, setAmount] = useState("");
    const [method, setMethod] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(null)
    const token = localStorage.getItem("token")

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!token) {
          setError('You must be logged in');
          return;
        }
        const payment = { amount, method, status };

        const response = await fetch('/api/payment', {
            method: 'POST',
            body: JSON.stringify(payment),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
          const json = await response.json();

          if (!response.ok) {
            setError(json.error);
          }
          if (response.ok) {
            setAmount('');
            setMethod('');
            setStatus('');
          }
        };
        return (
            <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New payment</h3>

      <label>Amount:</label>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <label>Method:</label>
      <input
        type="text"
        onChange={(e) => setMethod(e.target.value)}
        value={method}
      />

      <label>Status:</label>
      <input
        type="text"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      />

      <button>Add Payment</button>
      {error && <div className="error">{error}</div>}
    </form>
        );
};

export default PaymentForm;
