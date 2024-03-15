import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const email = useField("email");
  const password = useField("password");
  const firstName = useField("firstName");
  const lastName = useField("lastName");
  const phoneNumber = useField("phoneNumber");

  const { signup, isLoading, error } = useSignup("/api/users/signup");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signup({ email: email.value, password: password.value });
    if (!error) console.log("success");
    setIsAuthenticated(true);
    
  };

  return (
    <>
      <form className="signup" onSubmit={handleFormSubmit}>
        <h3>Sign Up</h3>
        <label>Email address:</label>
        <input {...email} />
        <label>Password:</label>
        <input {...password} />
        <label>First Name:</label>
        <input {...firstName} />
        <label>Last Name:</label>
        <input {...lastName} />
        <label>Phonenumber:</label>
        <input {...phoneNumber} />
        <button>Sign up</button>
      </form>
    </>
  );
};

export default Signup;
