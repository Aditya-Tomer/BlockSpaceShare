import { createContext, useCallback, useState, useEffect} from "react";
import axios from 'axios';
export const Auth_Context = createContext();
import { useNavigate } from "react-router-dom";

export const Auth_ContextProvider = ({children}) => {
    const [user, setUser] = useState('');
    
    const [registerInfo, setRegisterInfo] = useState({
        metamaskId: "",
        email: "",
        password: "",
        type: ""
    });

    useEffect(() => {
        const User = localStorage.getItem("User")
        setUser(JSON.parse(User));
        console.log(user)
    }, []);
    const navigate = useNavigate();
    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/login",JSON.stringify(registerInfo), {
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.error) {
            return console.log(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        console.log(response.data);
        setUser(response);
        navigate("/profile");
    }, [registerInfo]);

    const updateRegisterInfo = useCallback((info) => {
        // console.log(registerInfo);
        setRegisterInfo(info);
        // console.log(registerInfo);
    }, []);

    const logoutUser = () => {
        localStorage.removeItem("User");
        setUser(null);
    }

    return (
        <Auth_Context.Provider
        value = {{
            registerInfo,
            registerUser,
            updateRegisterInfo,
            logoutUser,
            user
        }}>
            {children}
        </Auth_Context.Provider>
    )
}