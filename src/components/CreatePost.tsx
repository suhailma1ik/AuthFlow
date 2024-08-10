import React, { useState } from "react";

interface CreatePostProps {
  onClick: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onClick }) => {
  const [postContent, setPostContent] = useState<string>("");

  return (
    <div
      onClick={onClick}
      className="bg-customGray p-6 rounded-lg shadow-lg space-y-2 border-2 border-customBorderColor"
    >
      <text className="text-white">Create post</text>
      <div className="input-container flex bg-customBlack items-center justify-center p-2 rounded-lg">
        <div className="flex items-center bg-customGray p-2 rounded-full h-10.5 w-11 ml-1.5 justify-center ">
          💬
        </div>
        <input
          type="text"
          placeholder="How are you feeling today?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full p-3 bg-customBlack text-gray-300 rounded-md focus:outline-none pl-4 " // Add left padding for the icon
        />
      </div>
      <div className="flex justify-end pt-1">
        <button
          onClick={() => console.log(postContent)}
          className="bg-lightBlue text-white py-2 px-4 rounded-md w-1/6 "
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
