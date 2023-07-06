import { useState } from "react";

interface Tag {
    id: number;
    name: string;
}

const tagsLimit = 10;

const TagsInputBox = () => {
    const [tags, setTags] = useState<Tag[]>([
        { id: 1, name: "null" },
        { id: 2, name: "Technologie" },
        { id: 3, name: "vetements" },
    ]);
    const [remainingTags, setRemainingTags] = useState<number>(tagsLimit - tags.length);
    const [inputValue, setInputValue] = useState<string>("");

    const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const tagNames = inputValue.split(",").map((tagName) => tagName.trim());
            const newTags: Tag[] = tagNames.map((tagName) => ({ id: Date.now(), name: tagName }));
            const allTags = [...tags, ...newTags].slice(0, tagsLimit);
            setTags(allTags);
            setInputValue("");
            setRemainingTags(tagsLimit - allTags.length);
        }
    };

    const removeTag = (tagId: number) => {
        const filteredTags = tags.filter((tag) => tag.id !== tagId);
        setTags(filteredTags);
        setRemainingTags(tagsLimit - filteredTags.length);
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
                        <li key={tag.id}>
                            {tag.name}{" "}
                            <i
                                className="fa fa-close"
                                onClick={() => removeTag(tag.id)}
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
                    <span>{remainingTags}</span> tags are remaining
                </p>
            </div>
        </div>
    );
};

export default TagsInputBox;