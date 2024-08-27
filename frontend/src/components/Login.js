import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_LOGIN_API } from "../utils/constants";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { setUserName } = useUserContext();

  const navigate = useNavigate();

  const auth = async () => {
    // auth logic
    try {
      const { data } = await axios.post(USER_LOGIN_API, {
        username: user,
        password: password,
      });
      localStorage.setItem("token", data.token);
      setUserName(user);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }

    setUser("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="shadow-lg shadow-gray-400 p-5 w-5/12 rounded-lg">
        <div className="flex justify-center py-2 text-xl">Login</div>
        <div>
          <label htmlFor="user-name">Username</label> <br />
          <input
            id="user-name"
            placeholder="Username...."
            value={user}
            className="bg-white my-2 rounded-md w-full p-1"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="login">Login</label> <br />
          <input
            type="password"
            id="login"
            placeholder="Password...."
            value={password}
            className="bg-white my-2 rounded-md w-full p-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-2">
          <button
            className="bg-blue-500 font-bold px-5 py-2 rounded-md hover:bg-blue-600"
            onClick={auth}
          >
            Login
          </button>
        </div>

        <p className="mt-5">
          Don't have an account.
          <Link to="/signup">
            <span className="text-blue-500 hover:text-blue-700">Signup</span>
          </Link>
        </p>

        <p className="mt-2">
          Forgot Password?
          <Link to="/forgot-password">
            <span className="text-blue-500 hover:text-blue-700">
              Click here.
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
