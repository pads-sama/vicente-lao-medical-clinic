import { useEffect } from "react";
import AOS from 'aos'; 

const About = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
        <div className='w-full h-auto py-16 flex justify-center items-center flex-col bg-[#191919] text-textColor font-roboto' id='about' data-aos="fade-up">
          <h2 className='py-5 text-3xl font-bold text-center'>About us</h2>
            <div className='px-14 '>
              <p className='text-sm text-center | md:text-base' data-aos="fade-up" >Vicente Lao, MD Medical Clinic is a trusted medical health facility located in Camarines Sur, Bicol. With a team of highly skilled healthcare professionals, we are committed to providing exceptional medical care and personalized treatment to our patients. Our clinic is equipped with state-of-the-art technology and modern facilities, ensuring accurate diagnoses and effective treatments. We prioritize the well-being and comfort of our patients, and strive to create a warm and welcoming environment where they feel cared for and supported. At Vicente Lao, MD Medical Clinic, your health is our priority.</p>
            </div>
        </div>
    </>
  )
}

export default About