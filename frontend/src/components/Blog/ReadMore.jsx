import { useState } from "react";

const ReadMore = ({ text, maxLength = 150, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    if (!text) return null;
    if (text.length <= maxLength) {
      return <p className={className}>{text}</p>;
    }
  
    return (
      <div className={className}>
        {isExpanded ? text : `${text.slice(0, maxLength).trim()}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#ff5500] hover:underline ml-1"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    );
  };

  export default ReadMore;