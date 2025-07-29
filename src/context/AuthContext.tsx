import React, { useState, useEffect, useContext, createContext } from "react";
import type { AuthContextType, AuthProviderProps, User } from "../types";
import backendApi from "../api/backendApi";


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);


    // Check token in localStorage on initial load
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
            try {
                const parsedUser: User = JSON.parse(storedUser);
                setToken(storedToken);
                setUser(parsedUser);
                setIsLoggedIn(true);

                backendApi.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
            } catch (error) {
                console.error("Failed to parse stored user data: ", error);
                logout();
            }
        }
        setIsLoadingAuth(false);
    }, []);


    const login = (newToken: string, newUser: User) => {
        setToken(newToken);
        setUser(newUser);
        setIsLoggedIn(true);

        localStorage.setItem('authToken', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));

        backendApi.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    };


    const logout = () => {
        setToken(null);
        setUser(null);
        setIsLoggedIn(false);

        localStorage.removeItem('authToken');
        localStorage.removeItem('user');

        delete backendApi.defaults.headers.common['Authorization'];
    };


    const value = {
        user,
        token,
        isLoggedIn,
        login,
        logout,
        isLoadingAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
