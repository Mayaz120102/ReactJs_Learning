import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [authUser, setAuthuser] = useState(()=> JSON.parse(localStorage.getItem('user')) || null)

    const login = (useremail, password)=>{
        setAuthuser({useremail, id:101})
        localStorage.setItem('user', JSON.stringify({useremail, id:101}))
    }
    
    const logout = ()=>{
        setAuthuser(null)
        localStorage.removeItem("user")
    }

    console.log(authUser)
    return (
        
    <AuthContext.Provider value={{authUser, login, logout}}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;