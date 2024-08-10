import React from "react";
import SignUpForm from "./components/SignUpForm";

const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-customBlack w-screen h-screen">
      <SignUpForm />
    </div>
  );
};

export default Signup;
