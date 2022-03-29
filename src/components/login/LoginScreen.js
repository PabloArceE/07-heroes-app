import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const {
    user: { logged },
    dispatch,
  } = useContext(AuthContext);

  console.log(logged);

  const navegate = useNavigate();
  useEffect(() => {
    logged && navegate("/marvel");    
  }, [logged, navegate])

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Pablo Arce",
      },
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
