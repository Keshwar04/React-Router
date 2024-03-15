import { createBrowserRouter } from 'react-router-dom'
import Error from '../pages/error';
import Contactus from '../pages/contactus';
import Aboutus from '../pages/aboutus';
import App from '../App';
import DynamicURLPath from '../pages/dynamicURLPath';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/contactUs',
        element: <Contactus />,
        children: [
            {
                path: '/contactUs/:num',
                element: <DynamicURLPath />
            },
        ]
    },
    {
        path: '/aboutUs',
        element: <Aboutus />
    }
])