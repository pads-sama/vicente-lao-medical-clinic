import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import PageForm from "../components/PageForm";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
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
        if (formData.fullName.length < 2 || !formData.fullName) {
            newErrors.fullName =
                "Name should 2 or more character and cannot be empty";
        }
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
      <PageForm >
       <form onSubmit={handleSubmit}>
          <h1 className="mb-4 text-2xl font-semibold text-center md:text-left">
              Sign Up
          </h1>
          <div className="mb-4">
            <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
            >
            Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full py-2 px-3 border rounded-full ${
              errors.fullName
                ? "focus:outline-none border-red-300 placeholder-red-300"
                : "focus:outline-none focus:border-green-500"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-center text-red-300">
                {errors.fullName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
            Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full py-2 px-3 border rounded-full ${
              errors.email
                ? "focus:outline-none border-red-300 placeholder-red-300"
                : "focus:outline-none focus:border-green-500"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-center text-red-300">
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
            Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleInputChange}
                className={`w-full py-2 px-3 border rounded-full ${
                errors.password
                  ? "focus:outline-none border-red-300 placeholder-red-300"
                  : "focus:outline-none focus:border-green-500"
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-gray-400 top-3 right-4 focus:outline-none"
              >
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
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center font-opensans"> Already have an account?
          <NavLink
          to='/login'>
            <span className="text-blue-500 underline"> Login here</span>
          </NavLink>
        </p>
      </PageForm>
    );
};

export default Signup;
