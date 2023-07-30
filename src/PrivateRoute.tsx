import { useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RootState } from "./app/store";
import { useEffect, useState } from "react";
import axiosURL from "./axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { ShopUser } from "./_interface";

export default function PrivateRoute() {
    const navigate = useNavigate();
    const { shopName } = useParams();

    const session = useSelector((state: RootState) => state.session)

    const [shopUserDatas, setSetshopUserDatas] = useState<ShopUser>({
        Shop: {
            shopName: "",
            logo: "",
            adresse: "",
            description: "",
            langue: "",
            _idUser: "",
            _id: "",
        },
        User: {
            email: "",
            fullname: "",
            password: "",
            phone: 0,
            _id: "",
        },
    })


    useEffect(() => {
        axiosURL.get(`/shop/${shopName}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setSetshopUserDatas(data.data)
                }

            }).catch((err: AxiosError) => console.log(err))
    }, [shopName, navigate])

    if (!session.connected && shopUserDatas.User._id !== session.User._id) {
        navigate(`/`)
    }
    return (
        <>
            <Outlet />
        </>
    )
}
