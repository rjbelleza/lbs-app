import { mainNavs } from "../../utils/constants";

const MainNavigation = () => {

    return (
        <ul className="flex gap-10 text-dark">
            {mainNavs.map((nav, i) => (
                <li key={i} className="cursor-pointer">
                    {nav.label}
                </li>
            ))}
        </ul>
    );
}

export default MainNavigation;
