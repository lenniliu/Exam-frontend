import PaymentForm from "../components/paymentForm";
import PaymentDetails from "../components/paymentDetails";
import { useEffect, useState} from "react";

const Home = ({isAuthenticated, setIsAuthenticated}) => {
  const [PaymentArray, setPaymentArray] = useState([]);
  useEffect(() => {
    const getPayments = async () => {
      setIsAuthenticated(true);
      isAuthenticated = true;
    const response = await fetch("/api/payment",{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    
    const data = await response.json();
    if (!response.ok) {
      console.log(data.error);
      setPaymentArray([]);
      return;
    }
    setPaymentArray(data);
    console.log(PaymentArray);
  }
  setIsAuthenticated(true);
  isAuthenticated = true;
  getPayments()
  },[])
  return (
    <>
    <div className="home">
      <div className="payment">
        {PaymentArray.length === 0 && <h2>No Payments Found</h2>}
        {PaymentArray.map((payment) => (
          <PaymentDetails key={payment._id} payment={payment} />
        ))}
      </div>
      <PaymentForm/>
    </div>
    </>
  );
};
export default Home;
