import { useContext, useEffect } from "react"
import { logout } from "../../../data/auth"
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

export function Logout() {
    const navigate = useNavigate();
    const { setContextData } = useContext(Context);


    useEffect(() => {

        try {
            setContextData((state) => ({ ...state, userData: undefined }))
            logout();
            navigate('/');

        } catch (err) {
            alert(err.message);
        }

    }, []);

}