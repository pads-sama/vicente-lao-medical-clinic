import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Sidebar'
import { logoWhite } from '../asset'
import { ClipboardDocumentCheckIcon, DocumentChartBarIcon, Squares2X2Icon } from '@heroicons/react/24/solid'
 

const sidebarMenu = [
    {name:'Dashboard', icon:<Squares2X2Icon className="w-[24px] h-[24px]"/>, to:'/'},
    {name:'Set Appointment', icon:<ClipboardDocumentCheckIcon className="w-[24px] h-[24px]"/>, to:'/setAppointment'},
    {name:'Medical Chart', icon:<DocumentChartBarIcon className="w-[24px] h-[24px]"/>, to:'/medicalChart'},
]

 const UserDefaultLayout = () => {
   return (
     <>
       <div className='flex'>
            <Sidebar logo={logoWhite} altText='website'>
                <div className='text-textColor text-sm font-roboto uppercase px-5 mt-5'>
                    {sidebarMenu.map((item) => (
                        <NavLink 
                            key={item.name}
                            to={item.to}
                            className='flex py-2 items-center rounded-md px-5 | hover:bg-white/20 space-x-2 hover:shadow-md'
                        >
                           <div>{item.icon}</div> <div>{item.name}</div>
                        </NavLink>
                    ))}
                </div>
            </Sidebar>
            <Outlet/>
       </div>
     </>
   )
 }
 
 export default UserDefaultLayout