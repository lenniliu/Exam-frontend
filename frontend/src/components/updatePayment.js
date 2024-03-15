import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";

const UpdatePayment = ({onCancel}) => {
    const { id } = useParams();
    const [amount, setAmount] = useState("");
    const [method, setMethod] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedPayment = { amount, method, status, };
            const res = await fetch(`http://localhost:3000/api/payment/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPayment),
            });

            const json = await res.json();
         
            if (res.ok) {
                console.log(json);
                setAmount('');
                setMethod('');
                setStatus('');
                setError(null);
            }
            else {
                setError(json.error);
            }
    }

    return (
        <div className='create-page'>
            <div className="create-wrapper">
                <h2>Update a payment</h2>
                <form onSubmit={handleUpdate}>
                    <div>
                        
                    <p>Enter a sum for your payment:</p>
                    <textarea className='desc'
                        type="number"
                        placeholder="..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    </div>
                    <p>Payment method:</p>
                    <textarea className='desc'
                        placeholder="..."
                        value={method}
                        onChange={(e) => setMethod(e.target.value)} // Update description state
                    ></textarea>
                    <p>Enter a status for your payment:</p>
                    <textarea className='desc'
                        placeholder="..."
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} // Update description state
                    ></textarea>
                    <div>
                    </div>
                    <button className='publish' type="submit" >Update</button>
                    <Link to='/login'>
                        <button className='cancel' onClick={onCancel}>Cancel</button>
                    </Link>
                </form>
            </div>
        </div>
      );
    };

export default UpdatePayment;