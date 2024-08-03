import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { logout } from "../../../data/auth"
import { Context } from "../../context/Context";


export function Logout() {
    const navigate = useNavigate();
    const { clearContextAuthData } = useContext(Context);

    useEffect(() => {

        try {
            clearContextAuthData();
            logout();
            navigate('/');

        } catch (err) {
            alert(err.message);
        }

    }, []);
}