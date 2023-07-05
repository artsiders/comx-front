import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import UserTopBar from "./UserTopBar";

export default function UserDasboardLayout() {
    return (
        <div className="user_dasboard_layout">
            <SideMenu />
            <UserTopBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
