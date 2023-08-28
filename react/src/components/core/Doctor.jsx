import { useEffect } from "react"
import { doctorVector } from "../../asset"
import { doctorBg } from "../../asset/desktop"
import AOS from 'aos'; 

const Doctor = () => {
  useEffect(()=>{
    AOS.init();
  })
  
  return (
    <>
    <div data-aos="fade-up" className='w-full px-10 py-10 h-auto relative overflow-hidden | md:px-0 md:py-0' id="doctor">
      <img
      src={ doctorBg }
      alt="background image for doctor"
      className='absolute w-full inset-0 h-[500px] | md:h-[600px]'
      />
      <div className='absolute inset-0 min-h-auto bg-black opacity-40'></div>
      <div className='text-center text-textColor flex flex-col | md:items-center md:my-20 '>
        <h1  data-aos="fade-up" className="text-2xl font-semibold text-bgColor z-10 font-poppins">Our Doctor</h1>
        <div  data-aos="fade-up" className="flex flex-col items-center text-center py-5 px-5 mt-5 drop-shadow-lg rounded-md font-opensans bg-bgColor | md:w-[340px]">
          <img 
          src={doctorVector}         
          alt="default image for doctor" 
          className="w-[300px] h-auto rounded-md"
          />
          <h3 className="text-2xl mt-5" >Dr. Vicente Lao</h3>
          <small className="text-sm | md:text-lg" >General Practitioner</small>
        </div>
      </div>
    </div>
    </>
  )
}

export default Doctor