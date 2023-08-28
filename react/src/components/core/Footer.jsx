import { logoWhite } from "../../asset";

const Footer = () => {
  return (
    <>
        <div className='w-full flex flex-col items-center mt-6 h-auto px-16 py-16 bg-gradient-to-l from-blue-500 to-blue-700 text-bgColor'>
            <footer className="flex justify-center flex-col items-center">
                <img
                    className='mobile-logo | md:hidden'
                    src={logoWhite }
                    alt="website logo"
                />
                <img
                    className='hidden md:block desktop-logo'
                    src={logoWhite}
                    alt="website logo"
                />
                <small className="opacity-50 text-center" >© 2023 Vicente Lao, MD Medical Clinic. All rights reserved.</small>
            </footer>
        </div>
    </>
  )
}

export default Footer