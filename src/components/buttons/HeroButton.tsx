import { Link } from "react-router-dom";
import type { NavigatorProps } from "../../types";

const HeroButton = ({ 
    label, 
    variant = "solid",
    path
} : NavigatorProps ) => {

    const defaultStyle = "text-xl px-7 py-3 rounded-full font-AlbertSans cursor-pointer transition-all";

    const styles = {
        solid: `bg-dark text-white hover:bg-light ${defaultStyle}`,
        transparent: `border-2 border-dark hover:border-light hover:text-light ${defaultStyle}`
    };

    return (
        <Link to={path} className={styles[variant]}>
            {label}
        </Link>
    );
}

export default HeroButton;
