import { Bars3Icon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Children, useState } from "react"
import { Link } from "react-router-dom"



const Sidebar = ({logo, altText, children}) => {

    const [toggleSidebar, setToggleSidebar] = useState(false)
    const toggleSideMenu = () => {
        setToggleSidebar((prev) => !prev)
    }

  return (
    <>
        <div className='relative'>
            <div className={`h-screen bg-secondaryColor flex flex-col justify-between peer:transition delay-75 duration-500 ease-in-out ${ toggleSidebar ? 'w-[250px] absolute inset-0 ' : 'w-0' } | md:w-[250px]`}>
                <button 
                    className={`w-[50px] h-[50px] flex items-center justify-center | md:hidden ${toggleSidebar ? 'hidden' : 'absolute inset-y-0 -right-14 top-[5px]' }`}
                    onClick={toggleSideMenu}
                >
                    <Bars3Icon className="w-[24px] h-[24px]"/>
                </button>
                
                <div className={`${toggleSidebar ? 'flex flex-col' : 'hidden'} md:flex md:flex-col`}>
                <div className="justify-between py-3 flex items-center | md:justify-center">
                    <img
                        src={logo}
                        alt={altText}
                        className={`w-32 h-auto | md:w-44`}
                    />
                    <button 
                        className={`w-[50px] h-[50px] flex items-center justify-center text-textColor ${toggleSidebar ? 'block' : 'hidden' } | md:hidden`}
                        onClick={toggleSideMenu}    
                    >
                        <XMarkIcon className="w-[24px] h-[24px]" />
                    </button>
                </div>
                    {children}
                </div>
                <div className={`text-textColor font-roboto px-5 py-5 text-center ${toggleSidebar ? 'flex' : 'hidden'} md:block`}>
                    <small className="opacity-50 text-center" >© 2023 Vicente Lao, MD Medical Clinic. All rights reserved.</small>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar