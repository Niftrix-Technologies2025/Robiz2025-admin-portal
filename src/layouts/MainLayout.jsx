import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import PageHeader from "../components/PageHeader";
import ProtectedRoute from "../wrappers/ProtectedRoute";

const MainLayout = () => {
    return (
        <ProtectedRoute>
            <div className="flex flex-col w-full h-full">
                <PageHeader />
                <div className="flex flex-row w-full h-full">
                    <Sidebar />
                    <div className="pt-[48px] pl-[70px] w-full h-screen">
                        <Outlet />
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default MainLayout;
