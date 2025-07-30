import type { ReactNode } from "react";
export interface NavigatorProps {
    label: string;
    path: string;
    variant?: "solid" | "transparent";
}

export interface RatingProps {
    rating: number;
    totalStars?: number;
}

export interface LabelProps {
    ref: string;
    label: string;
    fontSize: "sm" | "md" | "xl" | "xxl"
}

export type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface InputFieldProps {
    name: string;
    value: string | number;
    placeholder: string;
    callback: InputChangeHandler;
}

export interface User {
    id: string;
    email: string;
    role: "admin" | "customer" | "courier";
}

export interface AuthContextType {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string, user: User) => void;
    logout: () => void;
    isLoadingAuth: boolean;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface PrivatePagesLoaderData {
    user: User | null;
}

export interface AdminLoaderData {
    user: User | null;
}
