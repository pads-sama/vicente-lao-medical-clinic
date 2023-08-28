import { createContext, useContext, useState } from "react";

const StateContext =  createContext({
    currentDoctor: {},
    doctorToken: null,
    setCurrentDoctor: () => { },
    setDoctorToken: () => { },
})

const ContextProviderDoctor = ({ children }) => {
  const [currentDoctor, setCurrentDoctor] = useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

  })
  const [doctorToken, setDoctorToken] = useState('1222')

    return (
    <StateContext.Provider value={{
        currentDoctor,
        setCurrentDoctor,

        doctorToken,
        setDoctorToken,
    }}>
        {children}
    </StateContext.Provider>
  )
}

export default ContextProviderDoctor

export const userStateContext = () => useContext(StateContext)