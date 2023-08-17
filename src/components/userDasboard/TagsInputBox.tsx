import { useState, useEffect } from "react";
import axiosURL from "../../axiosConfig";
import { AxiosResponse, AxiosError } from 'axios'
import { toast } from "react-toastify"
import { RootState } from "../../app/store";
import { useSelector } from "react-redux"
import { Tag } from "../../_interface";
import TagItem from "./TagItem";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const TagsInputBox = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [limit, setLimit] = useState<number>(9)
    const session = useSelector((state: RootState) => state.session)

    useEffect(() => {
        setIsLoading(true)
        axiosURL.get(`/tags/${session.Shop._id}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setTags(data.data);
                    setLimit(9 - data.data.length)

                }
                setIsLoading(false)
            }).catch((err: AxiosError) => {
                setIsLoading(false)
                console.log(err);
            })
    }, [refresh, session])


    const [inputValue, setInputValue] = useState<string>("");

    const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setIsLoading(true)

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
                    setIsLoading(false)
                }).catch((err: AxiosError) => {
                    toast("Une erreur inatendue s'est produite !", {
                        type: "error",
                    })
                    console.log(err);
                    setIsLoading(false)
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
                    <li>Non catégorisé</li>
                    {tags.map((tag, key) => (
                        <TagItem
                            tag={tag}
                            setRefresh={setRefresh}
                            refresh={refresh}
                            key={key}
                        />
                    ))}
                    {isLoading && <li className="skeleton">
                        <SkeletonTheme
                            baseColor="var(--skeleton-base-color)"
                            highlightColor="var(--skeleton-highlight-color)"
                        >
                            <Skeleton height={30} width={100} />
                        </SkeletonTheme>
                    </li>}
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