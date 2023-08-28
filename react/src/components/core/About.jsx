import { useEffect } from 'react';
import { aboutBg } from '../../asset/desktop';
import AOS from 'aos'; 

const About = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
   <>
    <div className='w-full px-10 py-10 h-auto relative overflow-hidden | md:px-0 md:py-0' id='about' data-aos="fade-up" >
      <img
      src={ aboutBg }
      alt="background image for doctor"
      className='absolute w-full inset-0 h-[500px] | md:h-[600px]'
      />
      <div className='absolute inset-0 min-h-auto bg-black opacity-40'></div>
      <div className='text-center text-textColor flex flex-col | md:items-center md:my-20 md:px-20' data-aos="fade-up" >
        <div className="flex flex-col items-center text-center py-5 px-5 mt-5 drop-shadow-lg rounded-md font-opensans bg-bgColor | md:w-[80%] md:px-10">
        <h1 className="text-2xl font-semibold text-textColor z-10 font-poppins mb-4" data-aos="fade-up" >About us</h1>
          <p className='text-xs | md:text-base' data-aos="fade-up" >Vicente Lao, MD Medical Clinic is a trusted medical health facility located in Camarines Sur, Bicol. With a team of highly skilled healthcare professionals, we are committed to providing exceptional medical care and personalized treatment to our patients. Our clinic is equipped with state-of-the-art technology and modern facilities, ensuring accurate diagnoses and effective treatments. We prioritize the well-being and comfort of our patients, and strive to create a warm and welcoming environment where they feel cared for and supported. At Vicente Lao, MD Medical Clinic, your health is our priority.</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default About