import { Navigate, Outlet } from 'react-router-dom'
import { userStateContext } from '../contexts/ContextProvider';

const GuestLayout = () => {
  // TODO: uncomment this later
    // const { currentUser, userToken } = userStateContext();
    // const { currentDoctor, doctorToken } = userStateContext();

    // // if(userToken){ 
    // //   return <Navigate to='/' />
    // // }
    // // if(doctorToken){
    // //   return <Navigate to='/' />
    // // }
  return (
    <Outlet/>
  )
}

export default GuestLayout