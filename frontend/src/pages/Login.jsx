import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-20 py-4 bg-gray-900 text-white">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">BlogVista</Link></h1>
        <h3><Link to="/register">Register</Link></h3>
      </div>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-left">Log in to your account</h1>
          <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black" type="text" placeholder="Enter your email" />
          <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black" type="password" placeholder="Enter your password" />
          <button onClick={handleLogin} className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Log in</button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>New here?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;