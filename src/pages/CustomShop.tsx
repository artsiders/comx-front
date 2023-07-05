import SideMenu from "../components/SideMenu";
import UserTopBar from "../components/userDasboard/UserTopBar";

export default function CustomShop() {
    return (
        <div>
            <SideMenu />
            <UserTopBar />
            <main style={{ marginTop: 80 }}>
                main
            </main>
        </div>
    )
}
