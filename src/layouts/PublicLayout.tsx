import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return(
        <div className="h-screen w-full overflow-x-hidden">
            <Header />
            <Outlet />
        </div>
    );
}

export default MainLayout;
