import axios from "axios";
import { loginUser, clearAuthStatus } from "./helpers";
import backendApi from "../api/backendApi";
import { redirect } from "react-router-dom";

export const loginAction = async ({ request }: { request: Request }) => {
    console.log("Login Action: Processing login request...");

    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const response = await loginUser({ email, password });
        return { success: true, token: response.token, user: response.user };
    } catch (error) {
        let errorMessage = 'Login failed. Please try again.';
        
        if (axios.isAxiosError(error) && error.response) {
            errorMessage = error.response.data.message || error.response.data.error || errorMessage;
        }
        console.error("Login Action: Error during login: ", errorMessage);
        return { success: false, error: errorMessage };
    }
};


export const logoutAction = async () => {
    console.log("Logout Action: Performing logout...");
    
    try {
        await backendApi.post('/logout');
        console.log("Logout Action: Backend session successfully terminated.");
    } catch (error) {
        console.log('Logout Action: API call failed, but proceeding with local logout. ', error);
    } finally {
        await clearAuthStatus();
    }

    console.log("Logout Action: Redirecting to /Login.");
    return redirect('/Login');
};
