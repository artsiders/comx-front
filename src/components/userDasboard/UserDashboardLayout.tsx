import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import UserTopBar from "./UserTopBar";

export default function UserDashboardLayout() {
    return (
        <div className="user_dasboard_layout">
            <UserTopBar />
            <section className="user_section">
                <SideMenu />
                <main>
                    <Outlet />
                </main>
            </section>
        </div>
    )
}
