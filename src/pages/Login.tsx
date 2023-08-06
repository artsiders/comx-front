import { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import axiosURL from "../axiosConfig"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { connect } from "../feature/session.slice"
import { RootState } from "../app/store"
import { NavLink, useNavigate } from "react-router-dom"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const session = useSelector((state: RootState) => state.session)
    useEffect(() => {
        if (session.connected) {
            navigate('/my-shop/custom/')
        }
    }, [session, navigate])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axiosURL.post('/users/sign-in/', { email, password })
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    dispatch(connect(data.data))
                }
                toast(data.message, {
                    type: data.type,
                });

            }).catch(({ response }: AxiosError) => {
                const data = response?.data as { message: string, type: string };
                if (data) {
                    toast(data.message, {
                        type: "error",
                    })
                } else {
                    toast("Erreur innattendue", {
                        type: "error",
                    })
                }


            })
    }

    return (
        <div className="login_form">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="text"
                    className="input"
                    placeholder="example@gmail.com"
                    value={email}
                    autoFocus
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <label>Mot de passe</label>
                <input
                    type="password"
                    className="input"
                    placeholder="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <button type="submit">
                    Se connecter
                    <i className="fa fa-sign-in"></i>
                </button>
                <p>Je suis nouveau ici ! <NavLink to="/create-shop">Créer une boutique</NavLink></p>
            </form>
        </div>
    )
}
