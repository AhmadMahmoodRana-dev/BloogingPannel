import React, { useState } from "react";
import darkTheme from "../../colors/theme";

const TagInput = ({ tags, setTags, placeholder }) => {
  const [input, setInput] = useState("");

  const handleAddTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="w-full">
      <div style={{borderColor:darkTheme.colors.border}} className="flex flex-wrap gap-2 border px-4 py-2 rounded-lg">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white px-2 py-1 rounded flex items-center gap-2"
          >
            <span>{tag}</span>
            <button onClick={() => removeTag(index)} type="button">
              ×
            </button>
          </div>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow outline-none text-white bg-transparent"
        />
      </div>
    </div>
  );
};

export default TagInput;
