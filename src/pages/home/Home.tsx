import React, { useState } from "react";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/PostCard";
import Modal from "../../components/Modal";

/**
 * Renders the Home component with user information and posts.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOrSignup, setIsLoginOrSignup] = useState(true);

  // Function to close the modal
  const closeModal = () => {
    setIsLoginOrSignup(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        isLoginOrSignup={isLoginOrSignup}
        setIsLoginOrSignup={setIsLoginOrSignup}
      />
      <div className="min-h-screen bg-customBlack p-16 font-inter ">
        <div className="max-w-2xl mx-auto space-y-3">
          <header className="space-y-1 mb-8">
            <span
              style={{
                fontWeight: "500",
              }}
              className="text-white text-2xl font-inter text-left normal-font"
            >
              Hello Jane
            </span>
            <p className="text-gray-400 w-[60vw]">
              How are you doing today? Would you like to share something with
              the community 🤗
            </p>
          </header>

          <CreatePost onClick={() => setIsModalOpen(true)} />

          <Post
            name="Theresa Webb"
            time="5mins ago"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            comments={24}
            avatar="https://randomuser.me/api/portraits/women/68.jpg"
            emoji="👋"
            onClick={() => setIsModalOpen(true)}
          />

          <Post
            name="Marvin McKinney"
            time="8mins ago • Edited"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            comments={18}
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            emoji="😞"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
