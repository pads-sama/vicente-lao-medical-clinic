
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { logoGreen } from '../../asset'
import './LoginPageComponent.css'
import { Link } from 'react-router-dom'

 const LoginPageComponent = ({children}) => {
  return (
    <>
        <div className='overflow-hidden skew flex justify-center | md:justify-end'>
          <div className='w-full h-screen bg-textColor px-10 py-10 | md:w-[40%]'>
            <div className='w-full h-auto flex flex-col items-center justify-center relative'>
              <button className='w-[50px] h-[50px] bg-textColor rounded-full absolute inset-0 flex items-center justify-center -left-16 | hover:bg-secondaryColor '>
                <Link to='/'>
                  <ChevronLeftIcon className='w-[28px] h-[28px] text-primaryColor'/>
                </Link>
              </button>
              <img 
                src={logoGreen}
                alt="Logo image" 
                className='h-auto w-[150px] slide-up'  
              />
              <h2 className="text-2xl font-semibold font-roboto text-center slide-up">
                Vicente Lao, MD Medical Clinic
              </h2>
              <p className="mt-2 text-sm font-roboto slide-up">
                Your Health, Our Priority
              </p>
            </div>
            {children}
          </div>
        </div>
    </>
  )
}

export default LoginPageComponent