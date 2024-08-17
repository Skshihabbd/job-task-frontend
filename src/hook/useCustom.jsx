import { useContext } from "react";
import { authContext } from "../pages/Authorization";


const useCustom = () => {
    const authy =useContext(authContext)
    return (
        authy
    );
};

export default useCustom;