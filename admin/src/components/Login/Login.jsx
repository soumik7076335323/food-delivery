import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = ({ url }) => {
  const navigate = useNavigate();

  const { admin, setAdmin, token, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${url}/api/user/login`, data);

      console.log("Login Response:", response.data);

      if (!response.data.success) {
        toast.error(response.data.message);
        return;
      }

      if (response.data.role !== "admin") {
        toast.error("You are not an admin");
        return;
      }

      // Save token
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("admin", "true");

      console.log("Saved Token:", localStorage.getItem("token"));

      setToken(response.data.token);
      setAdmin(true);

      toast.success("Login Successfully");

      navigate("/add");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedAdmin = localStorage.getItem("admin");

    if (savedToken && savedAdmin === "true") {
      setToken(savedToken);
      setAdmin(true);
      navigate("/add");
    }
  }, [navigate, setAdmin, setToken]);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>

        <div className="login-popup-inputs">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
