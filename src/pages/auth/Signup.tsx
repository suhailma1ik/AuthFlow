import React from "react";
import SignUpForm from "./components/SignUpForm";

/**
 * Signup component that renders the signup page.
 *
 * This component serves as a container for the SignUpForm, centering it
 * on the page and applying a full-screen background.
 *
 * @component
 * @example
 * ```jsx
 * <Signup />
 * ```
 */
const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-customBlack w-screen h-screen">
      <SignUpForm />
    </div>
  );
};

export default Signup;
