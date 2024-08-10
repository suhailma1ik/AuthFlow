import React from "react";
import { ChatIcon } from "../assets/Icon";

/**
 * Represents a post card component.
 * @param name - The name of the post author.
 * @param time - The time the post was created.
 * @param content - The content of the post.
 * @param comments - The number of comments on the post.
 * @param avatar - The URL of the author's avatar.
 * @param emoji - Optional emoji associated with the post.
 * @param onClick - Function to handle click events on the post.
 */
interface PostProps {
  name: string;
  time: string;
  content: string;
  comments: number;
  avatar: string;
  emoji?: string;
  onClick: () => void;
}

const Post: React.FC<PostProps> = ({
  name,
  time,
  content,
  comments,
  avatar,
  emoji,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-customGray p-4 rounded-lg shadow-lg space-y-2 mt-4 border-2 border-customBorderColor"
    >
      <div className="flex items-center space-x-3 justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-white font-medium">{name}</h3>
            <p className="text-gray-400 text-sm">{time}</p>
          </div>
        </div>
        <div className="ml-auto text-gray-400">...</div>
      </div>
      <div className="text-lightGray bg-customBlack rounded-lg p-3 flex">
        {emoji && (
          <div className="flex items-center mr-2 bg-customGray p-2 rounded-full h-12 w-[5.5rem] justify-center  ">
            {emoji}
          </div>
        )}
        <div>{content}</div>
      </div>
      <div className="text-gray-400 text-sm flex items-center">
        <ChatIcon />
        {comments} comments
      </div>
    </div>
  );
};

export default Post;
