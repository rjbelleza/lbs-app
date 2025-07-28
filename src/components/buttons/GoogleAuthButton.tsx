import { Link } from "react-router-dom";

const GoogleAuthButton = () => {

    return (
        <Link to="" className="flex justify-center items-center gap-3 px-5 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-all">
            <img src="../../src/assets/icons/google.png" alt="" className="h-6" />
            <p className="text-sm font-AlbertSans">Signin with Google</p>
        </Link>
    );
}

export default GoogleAuthButton;
