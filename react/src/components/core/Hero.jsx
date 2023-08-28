import { NavLink } from "react-router-dom"
import { doctor, stethoscope, waving } from "../../asset"
import Button from "./Button"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

const Hero = () => {
  return (
    <div className='flex min-w-full md:relative'>
        <div className =' flex flex-col items-center justify-center text-center text-bgColor h-[76vh] overflow-hidden | md:items-start md:text-left md:pl-20 '>
            <div className='relative slide-up z-10'>
                <img 
                src={waving}
                alt="stethoscope"
                className='w-[35px] h-auto text-white absolute inset-0 -top-6 -left-4 z-[1] | md:left-0 md:w-[45px] md:-top-8 '
                 />
                <p className='px-3 py-1 text-xs italic border font-poppins | md:px-4 md:py-2 md:text-sm'>Welcome to Vicente Lao, MD Medical Clinic</p>
            </div>
            <div className="flex flex-col items-center mt-2 | md:items-start z-10">
                <h1 className='text-4xl font-bold drop-shadow-md slide-up | md:text-6xl'>Your Trusted Source for <span className="text-green-300">Comprehensive Care</span>.</h1>
                <p className='text-base w-[90%] slide-up | md:w-[70%] md:mt-3'>Good health is a state of mental, physical and social well being and it does not just mean the absence of disease! </p>
            </div>
            <Button color='primary' size='small'>
                <NavLink to={'/signup'} className='flex gap-2 items-center justify-center h-auto'>
                    Book an appointment <ArrowLongRightIcon className="w-[28px] h-auto"/>
                </NavLink>
            </Button>
        </div>
        <img 
        src={ stethoscope }
        alt="picture of stethoscope" 
        className="absolute z-0 opacity-10  rotate-45 inset-0 top-96 -left-20 | md:top-28 md:-left-10"
        />
        <div className='hidden md:block w-2/3 relative'>
            <img 
            src={ doctor }
            alt="images of a doctor"
            className='min-w-[45vw] h-[90vh] absolute inset-0'
            />
        </div>
    </div>
  )
}

export default Hero