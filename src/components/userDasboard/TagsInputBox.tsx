import { useState, useEffect } from "react";
import axiosURL from "../../axiosConfig";
import { AxiosResponse, AxiosError } from 'axios'
import { toast } from "react-toastify"
import { RootState } from "../../app/store";
import { useSelector } from "react-redux"
import { Tag } from "../../_interface";
import TagItem from "./TagItem";

const TagsInputBox = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [limit, setLimit] = useState<number>(10)
    const session = useSelector((state: RootState) => state.session)

    useEffect(() => {
        axiosURL.get(`/tags/${session.Shop._id}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setTags(data.data);
                    setLimit(10 - data.data.length)

                }
            }).catch((err: AxiosError) => {
                console.log(err);
            })
    }, [refresh, session])


    const [inputValue, setInputValue] = useState<string>("");

    const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const tagNames = inputValue.split(",").map((tagName) => tagName.trim());

            axiosURL.post(`/tags/`, { name: tagNames, _idShop: session.Shop._id })
                .then(({ data }: AxiosResponse) => {
                    if (data.type === "success") {
                        setRefresh(() => !refresh)
                    } else {
                        toast(data.message, {
                            type: data.type,
                        })
                    }
                }).catch((err: AxiosError) => {
                    toast("Une erreur inatendue s'est produite !", {
                        type: "error",
                    })
                    console.log(err);
                })
            setInputValue("");
        }
    };

    return (
        <div className="tags_input_box">
            <div className="title">
                <i className="fa fa-tags"></i>
                <h2>Etiquette des produits</h2>
            </div>
            <div className="content">
                <p>Appuie sur entrée ⌨ ou ajoute une virgule (,) après chaque étiquette</p>
                <ul>
                    {tags.map((tag) => (
                        <TagItem
                            tag={tag}
                            setRefresh={setRefresh}
                            refresh={refresh}
                        />
                    ))}
                    <input
                        type="text"
                        spellCheck={false}
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyUp={addTag}
                    />
                </ul>
            </div>
            <div className="details">
                <p>
                    <span>{limit}</span> étiquettes restantes
                </p>
            </div>
        </div>
    );
};

export default TagsInputBox;