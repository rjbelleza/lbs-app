import { mainNavs } from "../../utils/constants";

const MainNavigation = () => {

    return (
        <ul className="flex gap-10 text-white">
            {mainNavs.map((nav) => (
                <li className="cursor-pointer">
                    {nav.name}
                </li>
            ))}
        </ul>
    );
}

export default MainNavigation;
