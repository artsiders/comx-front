import { AxiosError, AxiosResponse } from "axios";
import axiosURL from "../axiosConfig";

export default function Form() {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formdata: FormData = new FormData(e.currentTarget);
        axiosURL.post(`/shop/banane`, formdata)
            .then((data: AxiosResponse) => {
                console.log(data);
            }).catch((err: AxiosError) => console.log(err))
    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" name="test" value='banane' />
            <button type="submit">test</button>
        </form>
    )
}
