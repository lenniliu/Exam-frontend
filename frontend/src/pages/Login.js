import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const email = useField("email");
  const password = useField("password");

  const { login, isLoading, error } = useLogin("/api/users/login");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const success = await login({ email: email.value, password: password.value });
    if (success) {
      setIsAuthenticated(true);
      console.log("success");
      navigate("/")
    } else {
      console.log(error.message)
    }
  }
  
  return (
    <>
      <form className="login" onSubmit={handleFormSubmit}>
        <h3>Login</h3>
        <label>Email address:</label>
        <input type="email" placeholder="Email" {...email} />
        <label>Password:</label>
        <input type="password" placeholder="Password" {...password} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
