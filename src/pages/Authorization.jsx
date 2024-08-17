import { createContext } from "react";

export const authContext=createContext(null)
const Authorization = ({children}) => {

const data={
    name:'shihab'
}

    return (
       <authContext.Provider value={data}>
         {children}
       </authContext.Provider>
    );
};

export default Authorization;