import { useNavigate } from "react-router-dom";

const LoginPages = () => {
  const navigate = useNavigate();

  const onLogin = () => {
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
