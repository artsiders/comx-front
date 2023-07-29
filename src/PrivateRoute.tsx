import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "./app/store";

export default function PrivateRoute() {
    const navigate = useNavigate();

    const session = useSelector((state: RootState) => state.session)
    if (!session.connected) {
        navigate(`/`)
    }
    return (
        <>
            <Outlet />
        </>
    )
}
