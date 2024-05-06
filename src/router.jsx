import { createBrowserRouter } from "react-router-dom";
import Login from './TrackerComponents/Forms/Login'
import Signup from './TrackerComponents/Forms/Signup'
import Starterpage from './TrackerComponents/StarterFolder/Starterpage'
import Mainpage from './TrackerComponents/Mainpagefolder/Mainpage'
import Addtrans from './TrackerComponents/AddTransition/Addtrans'
import Incomebox from './TrackerComponents/Income&Expense/Incomebox'
import Developer from './TrackerComponents/Mainpagefolder/Developer'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Starterpage/>
    },
    {
        path: "/sign",
        element: <Signup/>
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Mainpage",
        element: <Mainpage/>
    },
    {
        path: "/Addtrans",
        element: <Addtrans/>
    },
    {
        path: "/Incomebox",
        element: <Incomebox/>
    },
    
    {
        path: "/Developer",
        element: <Developer/>
    },
])

export default router
