import React, { useState, useEffect, useContext, createContext, useCallback } from "react";
import type { AuthContextType, AuthProviderProps, User } from "../types";
import localforage from "localforage";
import backendApi from "../api/backendApi";


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);


    // Set/clear auth data in state and storage
    const setAuthData = useCallback(async (newToken: string | null, newUser: User | null) => {
        if (newToken && newUser) {
            await localforage.setItem('authToken', newToken);
            await localforage.setItem('user', JSON.stringify(newUser));

            setUser(newUser);
            setToken(newToken);
            setIsLoggedIn(true);

            backendApi.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        } else {
            await localforage.removeItem('authToken');
            await localforage.removeItem('user');

            setUser(null);
            setToken(null);
            setIsLoggedIn(false);

            delete backendApi.defaults.headers.common['Authorization'];
        }
    }, []);


    // Load auth data from storage on initiall app load
    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const storedToken = await localforage.getItem<string>('authToken');
                const storedUserJson = await localforage.getItem<string>('user');

                if (storedToken && storedUserJson) {
                    try {
                        const parsedUser: User = JSON.parse(storedUserJson);
                        await setAuthData(storedToken, parsedUser);
                    } catch (error) {
                        console.error("Failed to parse stored user data: ", error);
                        await setAuthData(null, null);
                    }
                } else {
                    await setAuthData(null, null);
                }
            } catch (error) {
                console.error("Error loading auth data from storage: ", error);
                await setAuthData(null, null);
            } finally {
                setIsLoadingAuth(false);
            }
        };

        loadAuthData();
    }, [setAuthData]);


    const login = useCallback(async (newToken: string, newUser: User) => {
        await setAuthData(newToken, newUser);
    }, [setAuthData]);


    const logout = useCallback(async () => {
        await setAuthData(null, null);
    }, [setAuthData]);


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
