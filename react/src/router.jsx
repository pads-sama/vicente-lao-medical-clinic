import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Signup } from './views';
import { DashboardDoctor } from './views/doctor';
import { DashboardClient, DocInfo, MedicalChart, Profile, Services, SetAppointment } from './views/clients';
import { DefaultLayoutClient, DefaultLayoutDoctor, GuestLayout } from './components';


const router = createBrowserRouter([
    
    // {  //route for client
    //     path: '/',
    //     element: <DefaultLayoutClient/>,
    //     children:[
    //         {
    //             path: '/client-dashboard',
    //             element: <Navigate to='/'/>
    //         },
    //         {
    //             path: '/',
    //             element: <DashboardClient/>
    //         },
    //         {
    //             path: '/client-doctors-info',
    //             element: <DocInfo/>
    //         },
    //         {
    //             path: '/client-medical-chart',
    //             element: <MedicalChart/>
    //         },
    //         {
    //             path: '/client-profile',
    //             element: <Profile/>
    //         },
    //         {
    //             path: '/client-services',
    //             element: <Services/>
    //         },
    //         {
    //             path: '/client-set-appointment',
    //             element: <SetAppointment/>
    //         },
    //     ]
    // },

    //guest route
    {
        path: '/',
        element: <GuestLayout/>,
        children: [           
            {
                path: '/home',
                element: <Navigate to='/'/>
            },           
            {
                path: '/',
                element: <Home/>
            },           
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
  
   
    // { //route for doctor
    //     path: '/',
    //     element: <DefaultLayoutDoctor/>,
    //     children:[
    //         {
    //             path: '/dashboard',
    //             element: <DashboardDoctor/>,
    //         },
    //     ]
    // },

   
   
])

export default router