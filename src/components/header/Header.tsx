import IconLogo from "../logos/IconLogo";
import TextLogo from "../logos/TextLogo";
import MainNavigation from "../navs/MainNavigation";

const Header = () => {

    return (
        <div className="sticky top-0 flex justify-between items-center w-full bg-primary px-15 py-3 font-AlbertSans">
            <div className="flex gap-3 cursor-pointer">
                <IconLogo height="8" />
                <TextLogo fontSize="2xl" />
            </div>
            <MainNavigation />
        </div>
    );
}

export default Header;
