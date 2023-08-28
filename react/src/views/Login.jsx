import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import PageForm from "../components/PageForm";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Example validation
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);

        // Handle form submission if no errors
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevVisible) => !prevVisible);
    };

    return (
    <PageForm>
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-2xl font-semibold text-center text-textColor md:text-left">
            Login
        </h1>
        <div className="mb-4">
          <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-textColor">
              Email
          </label>
          <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full py-2 px-3 border rounded-full ${
                errors.email
                ? "focus:outline-none border-red-300 placeholder-red-300"
                : "focus:outline-none focus:border-green-500"
              }`}/>
            {errors.email && (
              <p className="text-xs text-center text-red-300">
                  {errors.email}
              </p>
            )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-textColor">
            Password
          </label>
          <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className={`w-full py-2 px-3 border rounded-full ${
            errors.password
                ? "focus:outline-none border-red-300 placeholder-red-300"
                : "focus:outline-none focus:border-green-500"
            }`}/>

            <button
              type="button"
              className="absolute transform -translate-y-1/2 right-2 top-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                  <EyeIcon className="w-[20px] text-secondaryColor h-auto" />
              ) : (
                  <EyeSlashIcon className="w-[20px] text-secondaryColor/25 h-auto" />
              )}
            </button>
          </div>
          {errors.password && (
          <p className="text-xs text-center text-red-300">
            {errors.password}
          </p>
          )}
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none mb-[15px]">
        Login
      </button>
    </form>
      <p className="text-sm text-center font-opensans"> No account yet?
      <NavLink
      to='/signup'>
        <span className="text-blue-500 underline"> Sign up here</span>
      </NavLink>
      </p>
      </PageForm>
    );
};

export default Login;
