import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import UserTopBar from "./UserTopBar";

export default function UserDasboardLayout() {
    return (
        <div>
            <SideMenu />
            <UserTopBar />
            <main style={{ marginTop: 80 }}>
                <Outlet />
            </main>
        </div>
    )
}
