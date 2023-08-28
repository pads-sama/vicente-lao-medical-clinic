import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { logoWhite } from '../asset'
import { userStateContext } from '../contexts/ContextProvider'


const navigation = [
  { name: 'Dashboard', to: '/'},
  { name: 'Appoinment', to: '/client-set-appointment'},
  { name: 'Medical Chart', to: '/client-medical-chart'},
  { name: 'Doctor', to: '/client-doctors-info'},
  { name: 'Services', to: '/client-services'},
]
const userNavigation = [
  { name: 'Your Profile', to: '/client-profile' },
  { name: 'Sign out', to: '/home' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DefaultLayoutClient = () =>{

  const { currentUser, userToken } = userStateContext();

  if(!userToken){
    return <Navigate to='login' />
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gradient-to-l from-blue-600 to-blue-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className=" w-[100px] | md:w-[150px] h-auto"
                        src={logoWhite}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4 font-poppins">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={( {isActive} ) => classNames(
                              isActive
                                ? 'bg-blue-900 text-white'
                                : 'text-gray-300 hover:bg-blue-800 hover:text-white',
                              'rounded-full px-4 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <button
                        type="button"
                        className="relative p-1 text-gray-300 rounded-full hover:text-white"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={currentUser.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-lg shadow-lg font-poppins ">
                            {userNavigation.map((item) => (
                                  <NavLink
                                  key={item.name}
                                    to={item.to}
                                    className={({isActive}) => classNames(
                                      isActive ? 'bg-blue-100 rounded-full' : '',
                                      'block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-full'
                                    )}
                                  >
                                    {item.name}
                                  </NavLink>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-bgColor">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({isActive}) => classNames(
                       isActive ? 'bg-blue-900 text-white'
                       : 'text-gray-300 hover:bg-blue-800 hover:text-white',
                        'block rounded-full px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="w-10 h-10 rounded-full" src={currentUser.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{currentUser.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{currentUser.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative flex-shrink-0 p-1 ml-auto text-gray-300 hover:text-white"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6 " aria-hidden="true" />
                    </button>
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({isActive}) => classNames(
                          isActive ? 'bg-blue-900 text-white'
                          : 'text-gray-300 hover:bg-blue-800 hover:text-white',
                           'block rounded-full px-3 py-2 text-base font-medium'
                         )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
            <Outlet/>
      </div>
    </>
  )
}

export default DefaultLayoutClient