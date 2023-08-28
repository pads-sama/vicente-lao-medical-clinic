import { NavLink } from "react-router-dom";
import { logoWhite } from "../asset";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const PageForm = ({children}) => {
  return (
    <div className="relatvie min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center font-poppin px-[20px]">
        <button className="absolute px-6 py-3 text-xs font-bold uppercase rounded-full left-5 top-2 bg-gradient-to-l from-blue-500 to-blue-700 drop-shadow-lg text-bgColor">
            <NavLink to='/home' className='flex items-center'>
                <ArrowLongLeftIcon className="w-[24px] h-auto"/>
                Back To Home
            </NavLink>
        </button>
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-[40px] overflow-hidden mt-20 | md:mt-0">
            <div className="md:flex">
                {/* Left Column */}
                <div className="flex flex-col items-center justify-center p-8 text-white bg-blue-700 md:w-2/3 md:py-16">
                    <img
                        src={logoWhite}
                        alt="Clinic Logo"
                        className="h-24 mb-4 w-38"
                    />
                    <h2 className="text-2xl font-semibold text-center">
                        Vicente Lao, MD Medical Clinic{" "}
                    </h2>
                    <p className="mt-2 text-sm">
                        Your Health, Our Priority
                    </p>
                </div>

                {/* Right Column */}
                <div className="p-8 md:w-2/3 md:py-16">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageForm