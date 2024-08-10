import React from "react";
import LoginForm from "./components/LoginForm";

// This file represents the Login page component.
// It imports React and the LoginForm component.
// The Login component is a functional component that renders a div with specific classes and includes the LoginForm component.
// Finally, it exports the Login component as the default export.

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-customBlack w-screen h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;
