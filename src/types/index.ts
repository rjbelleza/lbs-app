import React from "react";
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
