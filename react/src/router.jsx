import { createBrowserRouter } from 'react-router-dom';
// import App from './App' TODO:
// import Login from './Login';
// import Signup from './Signup';
import UserDefaultLayout from './layouts/UserDefaultLayout';
import { AppointmentPage, Dashboard, MedicalChartPage, ProfilePage } from './authenticatedPages/user';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserDefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/setAppointment',
                element: <AppointmentPage/>
            },
            {
                path: '/medicalChart',
                element: <MedicalChartPage/>
            },
            {
                path: '/Profile',
                element: <ProfilePage/>
            },
        ]
    },
    // { TODO: uncomment this later
    //     path: '/',
    //     element: <App />
    // },
    // {
    //     path: '/login',
    //     element: <Login/>
    // },
    // {
    //     path:'/signup',
    //     element: <Signup/>
    // }
])

export default router