import React, { useState } from "react";
import { CloseIcon, LoginIcon } from "../../../assets/Icon";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Props for the LoginForm component.
 * @interface LoginFormProps
 */
interface LoginFormProps {
  /** Optional function to handle closing the form */
  onCloseClick?: () => void;
  /** Optional function to toggle between login and signup views */
  setIsLoginOrSignup?: (value: boolean) => void;
}

/**
 * LoginForm component for rendering a user login interface.
 *
 * This component displays a form with email/username and password inputs,
 * along with a login button and a link to register. It can be used both as
 * a standalone page and as a modal component.
 *
 * @component
 * @example
 * ```jsx
 * const handleClose = () => {
 *   console.log('Form closed');
 * };
 *
 * const toggleLoginSignup = (isLogin: boolean) => {
 *   console.log(isLogin ? 'Switched to Login' : 'Switched to Signup');
 * };
 *
 * return <LoginForm onCloseClick={handleClose} setIsLoginOrSignup={toggleLoginSignup} />;
 * ```
 */
const LoginForm: React.FC<LoginFormProps> = ({
  onCloseClick,
  setIsLoginOrSignup,
}) => {
  /** State to toggle password visibility */
  const [showPassword, setShowPassword] = useState(false);

  /** Hook for programmatic navigation */
  const navigate = useNavigate();

  /**
   * Navigates to the home page when called.
   */
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      {!onCloseClick && (
        <div className="flex justify-center mb-[3.125rem]">
          <LoginIcon />
        </div>
      )}
      <div className="w-full max-w-md p-[2px] rounded-lg bg-gradient-to-br from-[#969696] to-[#343434]">
        <div className="w-full h-full p-8 space-y-2 bg-customGray rounded-lg shadow-xl">
          {onCloseClick && (
            <div
              onClick={onCloseClick}
              className="flex justify-end text-2xl font-bold text-white mt-0 mb-[-1rem]"
            >
              <CloseIcon />
            </div>
          )}
          <h2 className="text-sm  text-center text-lightGray mt-1" font-inter>
            WELCOME BACK
          </h2>
          <h3 className="text-white font-inter text-[18px] leading-[21.78px] text-center pb-10">
            Log into your account
          </h3>
          <form className="space-y-4">
            <CustomInput
              label="Email or Username"
              placeholder="Enter your email or username"
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              rightIcon={
                showPassword ? (
                  <EyeOffIcon className="w-5 h-5 text-gray-400" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-gray-400" />
                )
              }
              onRightIconClick={() => setShowPassword(!showPassword)}
              type={showPassword ? "password" : "text"}
              isForgetPassword
            />

            <button
              onClick={() => navigateToHome()}
              className="w-full px-4 py-2 text-white bg-lightBlue rounded-md "
            >
              Login now
            </button>
          </form>
          {onCloseClick && setIsLoginOrSignup ? (
            <p
              onClick={() => setIsLoginOrSignup(false)}
              className="text-sm  text-lightGray flex "
            >
              Not registered yet?{" "}
              <p className="text-customWhite hover:underline ml-1">
                Register →
              </p>
            </p>
          ) : (
            <p className="text-sm  text-lightGray">
              Not registered yet?{" "}
              <Link to="/signup" className="text-customWhite hover:underline">
                Register →
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
