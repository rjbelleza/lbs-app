import { Link } from "react-router-dom";
import type { NavigatorProps } from "../../types";

const HeaderButton  = ({ 
    label, 
    path 
} : NavigatorProps ) => {

    return (
        <Link 
            to={path}
            className="text-white font-bold tracking-wider px-4 py-2 bg-dark rounded-sm hover:bg-light transition-all"
        >
            {label}
        </Link>
    );
}

export default HeaderButton;
