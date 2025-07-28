import FormHeader from "./FormHeader";
import InputLabel from "./InputLabel";
import InputField from "./InputField";
import GoogleAuthButton from "../buttons/GoogleAuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
    const [val, setVal] = useState('');
    const call = () => {
        setVal('');
    };

    return (
        <div className="border-2 rounded-sm border-dark px-5">
            <FormHeader label="Login" />
            <div className="flex flex-col py-5">
                <InputLabel ref="email" label="Email" fontSize="sm" />
                <InputField 
                    name="email"
                    callback={call} 
                    value={val}
                    placeholder="Input your email here" 
                />
                <InputLabel ref="password" label="Password" fontSize="sm" />
                <InputField 
                    name="password"
                    callback={call}
                    value={val} 
                    placeholder="Input your password here" 
                />
                <p className="text-center text-dark mb-3">or</p>
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
        </div>
    );
}

export default LoginForm;
