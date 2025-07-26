import TextLogo from "../logos/TextLogo";
import IconLogo from "../logos/IconLogo";
import MainNavigation from "../navs/MainNavigation";

const Header = () => {

    return (
        <div className="sticky top-0 flex justify-between items-center w-full bg-primary px-15 py-3 font-AlbertSans">
            <div className="flex gap-3 items-center cursor-pointer">
                <IconLogo height="2.5em" />
                <TextLogo fontSize="1.3em" />
            </div>
            <div className="flex items-center gap-10">
                <MainNavigation />
                <button
                    className="font-bold text-white tracking-widest bg-dark px-4 py-2 rounded-md cursor-pointer hover:bg-light transition-all"
                >
                    SIGNUP
                </button>
            </div>
        </div>
    );
}

export default Header;
