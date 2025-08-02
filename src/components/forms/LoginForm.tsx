import FormHeader from "./FormHeader";
import InputLabel from "./InputLabel";
import InputField from "./InputField";
import FormButton from "../buttons/FormButton";
import GoogleAuthButton from "../buttons/GoogleAuthButton";
import { Link, useNavigate, useActionData, useNavigation, Form } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";


const LoginForm = () => {
    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuth();
    const actionData = useActionData() as { success: boolean; error?: string; token: string; user?: any } | undefined;
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';


    useEffect(() => {
        if (actionData?.success && actionData.token && actionData.user) {
            console.log("LoginPage: Login successful, updating AuthContext and redirecting.")
            login(actionData.token, actionData.user);
            navigate('/user', { replace: true });
        }
    }, [actionData, login, navigate]);


    useEffect(() => {
        if (isLoggedIn) {
            console.log("LoginPage: Already logged in, redirecting to /user.");
            navigate('/user//', { replace: true });
        }
    }, [isLoggedIn, navigate]);
    

    return (
        <div className="border-2 rounded-sm border-dark px-5">
            <FormHeader label="Login" />
            <Form method="post" action="/login">
                <div className="flex flex-col py-5">
                    <InputLabel ref="email" label="Email" fontSize="sm" />
                    <InputField 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Input your email here" 
                        required={true}
                    />
                    <InputLabel ref="password" label="Password" fontSize="sm" />
                    <InputField 
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Input your password here" 
                        required={true}
                    />
                    <FormButton 
                        label="Login" 
                        type="submit" 
                        disabled={isSubmitting} 
                    />
                    <p className="text-center text-dark my-3">or</p>
                    <div className="flex justify-center w-full mb-7">
                        <GoogleAuthButton />
                    </div>
                    <p className="text-center text-sm font-AlbertSans">
                        Don't have an account?
                        <span className="ml-2 border-b border-dark text-dark">
                            <Link to="/">
                                Register
                            </Link>
                        </span>
                    </p>
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;
