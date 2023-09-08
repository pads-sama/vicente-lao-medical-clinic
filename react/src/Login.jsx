import { useState } from 'react';
import LoginPageComponent from './components/pageComponents/LoginPageComponent'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};


  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev)
  }


  return (
    <LoginPageComponent>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm font-roboto">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wide text-[#191919] slide-up">Login to your account</h1>
          <form className="mt-10 space-y-6" action="#" method="POST">
            <div className=''>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 slide-up">
                Email address
              </label>
              <div className="mt-2 slide-up">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-secondaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div >
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 slide-up">
                  Password
                </label>
                <div className="text-sm slide-up">
                  <a href="#" className="font-semibold text-primaryColor hover:text-secondaryColor">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative slide-up">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-secondaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"
                />
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
            </div>

            <div className='slide-up'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primaryColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500 slide-up">
            No account yet?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-primaryColor hover:text-secondaryColor slide-up">
              Sign up here
            </Link>
          </p>
        </div>
    </LoginPageComponent>
  )
}

export default Login