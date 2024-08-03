import { useContext } from "react";
import { Context } from "../context/Context";
import { Navigate, Outlet } from 'react-router-dom';


export function AuthGuard(props) {

    const { authData } = useContext(Context);

    if (!authData) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}