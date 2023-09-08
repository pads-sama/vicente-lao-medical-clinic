import { useEffect } from "react";
import { logoWhite } from "../../asset";
import AOS from 'aos';
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    useEffect(()=>{
        AOS.init();
    })

    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    
  return (
    <>
        <div className='w-full flex flex-col items-center h-auto px-16 py-20 bg-primaryColor text-bgColor' data-aos="fade-up" >
            <footer className="flex justify-center flex-col items-center">
                <button 
                    className="w-14 h-14 rounded-full bg-[#191919] -mt-28 flex items-center justify-center border-4"
                    onClick={goToTop}
                >
                    <ChevronUpIcon className="text-secondaryColor w-10 h-10"/>
                </button>
                <img
                    className='w-44 h-auto | md:w-52'
                    src={logoWhite }
                    alt="website logo"
                    data-aos="fade-left"
                />
                <small className="opacity-50 text-center" >© 2023 Vicente Lao, MD Medical Clinic. All rights reserved.</small>
            </footer>
        </div>
    </>
  )
}

export default Footer