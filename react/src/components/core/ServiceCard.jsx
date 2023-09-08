import AOS from 'aos'; 
import { useEffect } from 'react';

const ServiceCard = ({image, altText, title, description, icon}) => {
    useEffect(()=>{
        AOS.init();
      })
  return (
    <>
        <div className="w-full my-5 overflow-hidden rounded-md bg-textColor drop-shadow-lg" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className="w-full ">
                <div className="flex flex-col items-center">
                    <img 
                        src={image} 
                        alt={altText}
                        className="w-full h-auto"
                        data-aos="fade-right"
                    />
                    <div className="z-10 -mt-14 bg-textColor flex items-center justify-center rounded-full w-[100px] h-[100px]" data-aos="fade-left">
                        {icon}
                    </div>
                </div>
               <div className="px-5 py-5">
                    <h2 className="text-xl font-medium text-center font-roboto" data-aos="fade-right">{title}</h2>
                    <p className="mt-3 text-sm text-center font-roboto" data-aos="fade-left">{description}</p>
               </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCard