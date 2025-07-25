import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    if (success) {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Image Section */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-white">
        <img
          src="https://media.istockphoto.com/id/1389823038/vector/young-man-working-on-the-laptop-computer-and-having-a-idea-freelance-job-creativity.jpg?s=612x612&w=0&k=20&c=eAlHMALZxQG21xy8n5RNd-kXDIy9Gvz3d9AZJL8BPMc="
          alt="Login Illustration"
          className="object-cover h-4/5"
        />
      </div>

      {/* Right Login Form Section */}
      <div className="w-full md:w-1/2 bg-blue-700 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <div className="text-4xl mb-2 text-blue-700 font-bold">Sign In</div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password*"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />

            <div className="flex items-center justify-between text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="#" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition duration-300"
            >
              SIGN IN
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Not registered yet?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
