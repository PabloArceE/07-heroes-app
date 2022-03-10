import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navegate = useNavigate();

  const handleLogin = () => {
    navegate("/marvel", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
