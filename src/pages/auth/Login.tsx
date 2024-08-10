import React from "react";
import LoginForm from "./components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-customBlack w-screen h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;
