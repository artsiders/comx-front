import { useState } from "react";
import axiosURL from "../../axiosConfig";
import { AxiosResponse, AxiosError } from 'axios'
import { toast } from "react-toastify"
import { Tag } from "../../_interface";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

interface Props {
    tag: Tag;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: boolean;
}

export default function TagItem({ tag, refresh, setRefresh }: Props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(tag.name)
    const { Shop } = useSelector((state: RootState) => state.session)

    const removeTag = (tagId: string) => {
        axiosURL.delete(`/tags/${tagId}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setRefresh(() => !refresh)
                }
            }).catch((err: AxiosError) => {
                console.log(err);
                toast("Une erreur inatendue s'est produite !", {
                    type: "error",
                })
            })
    };
    const handleUpdate = (tagId: string, name: string, _idShop: string) => {
        axiosURL.patch(`/tags/${tagId}`, { name, _idShop })
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                })
                if (data.type === "success") {
                    setRefresh(() => !refresh)
                }
                setIsEditing(false)
            }).catch((err: AxiosError) => {
                console.log(err);
                toast("Une erreur inatendue s'est produite !", {
                    type: "error",
                })
            })
    };
    return (
        <>
            {!isEditing ? <li onDoubleClick={() => setIsEditing(true)} key={tag._id}>
                {tag.name}{" "}
                <i
                    className="fa fa-close"
                    onClick={() => removeTag(tag._id)}
                ></i>
            </li> : <li>
                <label className="form_edit_tag">
                    <input
                        type="text"
                        className="input"
                        defaultValue={tag.name}
                        value={editName}
                        onChange={(e) => setEditName(e.currentTarget.value)}
                    />
                    <i
                        onClick={() => {
                            if (tag.name !== editName) {
                                handleUpdate(tag._id, editName, Shop._id)
                            } else {
                                setIsEditing(false)
                            }
                        }}
                        className="fa fa-check"
                    ></i>
                </label>

            </li>
            }
        </>
    )
}
