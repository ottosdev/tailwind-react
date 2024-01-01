import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface AuthContextProps{
    isAuthenticated: boolean;
    setAuthenticated: (value: boolean) => void
    signin: (email: string, password: string) => void
    logout: () => void
}


interface AuthProviderProps{
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({children} : AuthProviderProps) {
    const [isAuthenticated, setAuthenticated] = useState(false)

     function signin(email: string, password: string) {
        try {
            localStorage.setItem('@token', JSON.stringify(true));
            setAuthenticated(true);
        }catch (e: any) {
            console.log(e.message)
            setAuthenticated(false);
        }
    }

    function logout() {
        localStorage.clear();
        setAuthenticated(false)
    }

    useEffect(() => {
        const token = localStorage.getItem('@token');
        if (token) {
            setAuthenticated(JSON.parse(token));
        } else {
            setAuthenticated(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated, signin, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuth() {
    return useContext(AuthContext);
}