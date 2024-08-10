import React, { useState } from "react";

/**
 * Props for the CreatePost component.
 * @interface CreatePostProps
 */
interface CreatePostProps {
  /** Function to be called when the post container is clicked */
  onClick: () => void;
}

/**
 * CreatePost component for rendering a post creation interface.
 *
 * This component displays an input field for entering post content and a button to submit the post.
 * It uses custom styling classes and manages its own state for the post content.
 *
 * @component
 * @example
 * ```jsx
 * const handlePostClick = () => {
 *   console.log('Post clicked');
 * };
 *
 * return <CreatePost onClick={handlePostClick} />;
 * ```
 */
const CreatePost: React.FC<CreatePostProps> = ({ onClick }) => {
  /** State to store the current value of the post input field */
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
          className="w-full p-3 bg-customBlack text-gray-300 rounded-md focus:outline-none pl-4"
        />
      </div>
      <div className="flex justify-end pt-1">
        <button
          onClick={() => {}}
          className="bg-lightBlue text-white py-2 px-4 rounded-md w-1/6"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

/**
 * Component Styling Notes:
 * - Uses custom Tailwind CSS classes:
 *   - bg-customGray: Custom gray background color
 *   - bg-customBlack: Custom black background color
 *   - bg-customBorderColor: Custom border color
 *   - bg-lightBlue: Light blue background for the post button
 *
 * Implementation Notes:
 * - The onClick prop is applied to the entire container div, which might not be the intended behavior.
 *   Consider moving it to a more specific element if needed.
 * - The "Post" button currently logs the post content to the console. In a real application,
 *   you would typically replace this with a function to submit the post to a backend service.
 */
