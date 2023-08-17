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
    const [Edit, setEdit] = useState<boolean>(false)
    const [editName, setEditName] = useState<string>(tag.name)
    const { Shop } = useSelector((state: RootState) => state.session)
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)


    const removeTag = (tagId: string) => {
        setIsDeleting(true)
        axiosURL.delete(`/tags/${tagId}`)
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                })
                if (data.type === "success") {
                    setRefresh(() => !refresh)
                }
                setIsDeleting(false)
            }).catch((err: AxiosError) => {
                console.log(err);
                toast("Une erreur inatendue s'est produite !", {
                    type: "error",
                })
                setIsDeleting(false)
            })
    };
    const handleUpdate = (tagId: string, name: string, _idShop: string) => {
        setIsEditing(true)
        axiosURL.patch(`/tags/${tagId}`, { name, _idShop })
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                })
                if (data.type === "success") {
                    setRefresh(() => !refresh)
                }
                setEdit(false)
                setIsEditing(false)
            }).catch((err: AxiosError) => {
                console.log(err);
                toast("Une erreur inatendue s'est produite !", {
                    type: "error",
                })
                setEdit(false)
                setIsEditing(false)
            })
    };
    return (
        <>
            {!Edit ? <li
                onDoubleClick={() => setEdit(true)}
                key={tag._id}
                className={isDeleting ? "deleting" : ""}
            >
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
                    {isEditing ? <i className="fa fa-spinner fa-spin"></i> : <i
                        onClick={() => {
                            if (tag.name !== editName) {
                                handleUpdate(tag._id, editName, Shop._id)
                            } else {
                                setEdit(false)
                            }
                        }}
                        className="fa fa-check"
                    ></i>}
                </label>

            </li>
            }
        </>
    )
}
