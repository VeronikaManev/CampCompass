import { useContext, useEffect } from "react"
import { logout } from "../../../data/auth"
import { useNavigate } from "react-router-dom";
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