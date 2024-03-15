const paymentDelete = (id) => {
    const data = fetch(`/api/payment/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  };
  
  const paymentDetails = ({ fitness }) => {
    return (
      <div className="fitness-details">
        <h4>{payment.amount}</h4>
        <p>Duration: {payment.method}</p>
        <p>Calories Burned: {payment.status}</p>
        <span
          className="material-symbols-outlined"
          onClick={() => {
            fitnessDelete(fitness._id);
          }}
        >
          delete
        </span>
      </div>
    );
  };
  
  export default paymentDetails;