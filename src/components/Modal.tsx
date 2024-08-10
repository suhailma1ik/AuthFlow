import React from "react";
import LoginForm from "../pages/auth/components/LoginForm";
import SignUpForm from "../pages/auth/components/SignUpForm";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  isLoginOrSignup: boolean;
  setIsLoginOrSignup: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
  isLoginOrSignup,
  setIsLoginOrSignup,
}) => {
  if (!isModalOpen) return null;
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-[100vh] w-[100vw] backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen flex-col  w-screen h-screen">
        {isLoginOrSignup ? (
          <LoginForm
            onCloseClick={onClose}
            setIsLoginOrSignup={setIsLoginOrSignup}
          />
        ) : (
          <SignUpForm
            onCloseClick={onClose}
            setIsLoginOrSignup={setIsLoginOrSignup}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
