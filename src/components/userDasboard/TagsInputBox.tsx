import { useState, useEffect } from "react";
import axiosURL from "../../axiosConfig";
import { AxiosResponse, AxiosError } from 'axios'
import { toast } from "react-toastify"

interface Tag {
    _id: string;
    name: string;
}

const TagsInputBox = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)

    useEffect(() => {
        axiosURL.get(`/tags/`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setTags(data.data);
                }
            }).catch((err: AxiosError) => {
                console.log(err);
            })
    }, [refresh])


    const [inputValue, setInputValue] = useState<string>("");

    const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const tagNames = inputValue.split(",").map((tagName) => tagName.trim());

            axiosURL.post('tags', { name: tagNames }).then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setTags(data.data)
                    setRefresh(() => !refresh)
                } else if (data.type === "warning") {
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

    const removeTag = (tagId: string) => {
        const filteredTags = tags.filter((tag) => tag._id !== tagId);
        setTags(filteredTags);
    };

    return (
        <div className="tags_input_box">
            <div className="title">
                <i className="fa fa-product-hunt"></i>
                <h2>Categorie de produit</h2>
            </div>
            <div className="content">
                <p>Press enter or add a comma after each tag</p>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag._id}>
                            {tag.name}{" "}
                            <i
                                className="fa fa-close"
                                onClick={() => removeTag(tag._id)}
                            ></i>
                        </li>
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
                    <span>{'limite'}</span> tags are remaining
                </p>
            </div>
        </div>
    );
};

export default TagsInputBox;