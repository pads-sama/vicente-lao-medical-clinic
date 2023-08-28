import { mobileServices } from "../../constants"
import { desktopServices } from "../../constants"
import { useEffect } from "react"
import AOS from 'aos';

const Services = () => {
    useEffect(()=>{
        AOS.init();
      })
  return (
    <>
     <div className='w-full h-auto bg-bgColor py-16' id="services" data-aos="fade-up"  >
        <div className='flex flex-col items-center | md:px-20 md:flex-wrap md:justify-between md:items-center md:flex-col md:pl-[9.4rem] md:pr-[9rem] md:py-10'>
            <h1 className="text-2xl font-semibold font-poppins text-textColor mb-7" data-aos="fade-up" >Services</h1>
            <div className="relative | md:hidden" data-aos="fade-up" >
                {mobileServices.map((create) => (
                    <div key={create.id} className="relative mb-5" data-aos="fade-up" >
                        <img src={create.image} alt="" className="w-full h-auto" />
                        <div className='absolute inset-0 bg-black opacity-30'></div>
                        <div className='absolute inset-0 flex items-end justify-start text-white uppercase' data-aos="fade-up" >
                            <p className={`text-2xl font-light font-josefin mx-5 pb-5`} >{create.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:order-3 relative hidden gap-2 flex-wrap | md:flex">
                {desktopServices.map((create) => (
                    <div key={create.id} className="relative flex-auto" data-aos="fade-up" >
                    <img src={create.image} alt="" className="w-[250px] h-auto drop-shadow-lg" />
                    <div className='absolute inset-0 bg-black opacity-30 w-[250px]' ></div>
                    <div className='absolute inset-0 flex items-end justify-start text-white uppercase'>
                        <p className={`text-2xl font-light font-josefin mx-5 pb-5`} >{create.content}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>   
    </>
  )
}

export default Services