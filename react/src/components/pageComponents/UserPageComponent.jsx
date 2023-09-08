import { Bars3Icon, BellAlertIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const UserPageComponent = ({title, children}) => {
  return (
    <>
      <div className='h-screen w-full'>
        <div className='h-[60px] w-full shadow-sm px-5 pl-14 items-center flex justify-between | md:px-10'>
            <div className='flex w-44 justify-between'>
                <h1 className='text-xl font-robotot text-darkText font-bold tracking-wide | md:text-2xl'>{title}</h1>
            </div>
            <div className='flex text-primaryColor items-center'>
                <div>
                    <BellAlertIcon className='h-5 w-5 | md:h-6 md:w-6'/>
                </div>
                <div>
                    <UserCircleIcon className='h-8 w-8'/>
                </div>
            </div>
        </div>
        {children}
    </div>
    </>
  )
}

export default UserPageComponent