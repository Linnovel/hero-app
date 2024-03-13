import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPages = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Luis Linares");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>login</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        {" "}
        login
      </button>
    </div>
  );
};

export default LoginPages;
