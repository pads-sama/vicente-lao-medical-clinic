import { useState } from "react";
import { logoWhite } from "../../asset";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const link = [
    {name:'Login', to:'/login'},
    {name:'Signup', to:'/signup'},
]
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Nav = () => {
    // menu toggle for mobile
    const [toggleMenu, setToggleMenu] = useState(false);
    const onToggle = () => {
        setToggleMenu((prev) => !prev) //this set the value of prev to its opposite on click
}
    // change the navbar on scroll
    const [navColor, setNavColor] = useState(false);
    const changeColor = () => { //this function will run if user scroll on the page  
        if(window.scrollY >= 100){
            setNavColor(true) //it'll set the setNavbar color to true if the height of the navbar is less than or equal to 100px
        }else{
            setNavColor(false) //if condition is not met it'll set is to false 
        }
    }
    window.addEventListener('scroll', changeColor) //added eventlistener when user scroll it will listen to the changColor function 


  return (
    <>
        <nav className={`${ navColor ? 'bg-primaryColor' : 'bg-transparent'} fixed z-50 min-w-full h-[50px] flex items-center justify-between px-5 pl-2 font-roboto drop-shadow-lg | md:h-[100px] md:px-20`}>
            <div>
                <img 
                    src={logoWhite} 
                    alt="website logo" 
                    className="w-[100px] h-auto | md:w-[150px]"
                />
            </div>
            <button onClick={() => {
                    onToggle();
                    // setActive(""); 
                }}
                className='md:hidden'
                >
                { toggleMenu ? (
                    <XMarkIcon className='w-[28px] h-auto text-textColor'/>
                ) : (
                    <Bars3Icon className='w-[28px] h-auto text-textColor'/>
                )}
            </button>
            {/* desktop navigation */}
            <ul className='justify-between flex-1 text-sm pl-72 text-textColor hidden | md:flex'>
                <div className="flex">
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a 
                            href=""
                            className="uppercase"
                        >Home</a>
                    </li>
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a
                            href="#doctor"
                            className="uppercase"
                        >Doctor</a>
                    </li>
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a
                            href="#services"
                            className="uppercase"
                        >Services</a>
                    </li>
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a 
                            href="#about"
                            className="uppercase"
                        >About</a>
                    </li>
                </div>
                <div className='flex justify-center'>
                    {link.map((item) => (
                        <NavLink 
                            key={item.name}
                            to={item.to}
                            className={classNames(item.name === 'Login' ? 'font-roboto text-textColor uppercase slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20' : 'slide-up px-4 py-2 uppercase w-44 flex justify-center border bg-secondaryColor border-secondaryColor rounded-md hover:border-white/40 hover:bg-primaryColor drop-shadow-lg ')}
                            >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </ul>

            {/* mobile navigation */}
            <ul className={`absolute inset-x-auto w-56 text-textColor right-1 h-80 rounded-md top-12 bg-secondaryColor border-[1px] border-white/20 shadow-2xl overflow-hidden slide-up flex-col px-5 py-14 text-sm ${toggleMenu ? 'flex' : 'hidden'}`}>
                <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                    <a href="">Home</a>
                </li>
                <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                    <a href="#doctor">Doctor</a>
                </li>
                <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                    <a href="#services">Services</a>
                </li>
                <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                    <a href="#about">About</a>
                </li>
            
            <div className='flex flex-col justify-center | md:hidden'>
                {link.map((item) => (
                    <NavLink 
                        key={item.name}
                        to={item.to}
                        className='slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20'
                        >
                        {item.name}
                    </NavLink>
                ))}
            </div>
            </ul>
        </nav>
    </>
  )
}

export default Nav