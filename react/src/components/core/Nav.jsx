const link = [
  {name:'Login', to:'/login'},
  {name:'Signup', to:'/signup'},
]
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { logoWhite } from "../../asset"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '../../constants'

const Nav = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle((prevVisible) => !prevVisible);
    };


  return (
    <>
     <div className='w-full relative | xl:px-20'>
        <div className="w-full">
            <nav className="w-full">
                <div className='w-full h-[100px] flex justify-between items-center'>
                    <div className="w-64">
                        <NavLink to={'/home'}>
                        <img
                            className='mobile-logo | md:hidden'
                            src={logoWhite}
                            alt="website logo"
                        />
                        <img
                            className='hidden md:block desktop-logo'
                            src={logoWhite}
                            alt="website logo"
                        />
                        </NavLink>
                    </div>
                    <button 
                        onClick={() => {
                            toggleMenu();
                            setActive(""); // Reset the active link when toggling menu
                        }}
                        className='md:hidden'
                        >
                        { toggle ? (
                            <XMarkIcon className='w-[28px] h-auto text-bgColor'/>
                        ) : (
                            <Bars3Icon className='w-[28px] h-auto text-bgColor'/>
                        )}
                    </button>
                    {/* desktop menu */}
                    <ul className='hidden flex-1 items-center justify-center h-[100px] gap-[14px] | md:flex'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins navLinks cursor-pointer text-[16px] hover:text-white ${
                            active === nav.title ? "text-white" : "text-textColor"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a 
                            href={`#${nav.id}`}
                            className='scroll-smooth'
                            >{nav.title}</a>
                        </li>
                        ))}
                    </ul>                   
                    <div className='hidden items-center justify-center gap-[14px] h-[100px] w-64 | md:flex'>
                    {link.map((item) => (
                        <NavLink 
                            key={item.name}
                            to={item.to}
                            className={classNames(item.name === 'Login' ? 'navLinks font-poppins px-[20px] text-textColor hover:text-white' : 'bg-blue-700 px-[50px] drop-shadow-lg uppercase rounded-full py-[10px] text-bgColor/80 text-opensans font-bold | hover:text-bgColor/100 hover:bg-blue-500')}
                            >
                            {item.name}
                        </NavLink>
                    ))}
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* mobile navigation menu */}

    <div className={`w-[80%] h-auto bg-bgColor p-10 absolute top-20 right-0 rounded-l-lg slide-up space-y-4 z-50 overflow-hidden ${  toggle ? 'block' : 'hidden' }`}>
        <ul className='space-y-4'>
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-poppins navLinks cursor-pointer text-[16px] slide-up ${
                    active === nav.title ? "text-blue-700" : "text-textColor"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => {
                    setActive(nav.title);
                    toggleMenu(); // Close the mobile menu
                }}
                >
                <a 
                    href={`#${nav.id}`}
                    className='hover:text-blue-700 scroll-smooth '
                >
                    {nav.title}
                </a>
                </li>
            ))}
        </ul>

        <div className='flex flex-col justify-center gap-[14px] w-64 | md:hidden'>
        {link.map((item) => (
            <NavLink 
                key={item.name}
                to={item.to}
                className='navLinks font-poppins text-textColor text-[16px] slide-up hover:text-blue-700'
                >
                {item.name}
            </NavLink>
        ))}
        </div>
        </div>
    </>
  )
}

export default Nav