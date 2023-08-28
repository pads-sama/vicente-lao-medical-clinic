import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

const DefaultLayoutDoctor = () => {
  const {currentDoctor, doctorToken} = useContext();
  if(!doctorToken){
    return <Navigate to='/login' />
  }

  return (
    <div>DefaultLayoutDoctor
    <Outlet/>
    </div>
    )
}

export default DefaultLayoutDoctor