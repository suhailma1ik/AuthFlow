import React, { useState } from "react";
import { CloseIcon, LoginIcon } from "../../../assets/Icon";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SignUpFormProps {
  onCloseClick?: () => void;
  setIsLoginOrSignup?: (value: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onCloseClick,
  setIsLoginOrSignup,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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

          <h2 className="text-sm  text-center text-lightGray mb-0" font-inter>
            SIGN UP
          </h2>
          <h3
            className="text-xl font-semibold text-center text-white mt-1 pb-8"
            font-inter
          >
            Create an account to continue
          </h3>
          <form className="space-y-4">
            <CustomInput label="Email" placeholder="Enter your email" />
            <CustomInput
              label="Username"
              placeholder="Choose a preferred username"
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
            />

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-lightBlue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Continue
            </button>
            {onCloseClick && setIsLoginOrSignup ? (
              <div
                onClick={() => setIsLoginOrSignup(true)}
                className="flex font-inter font-medium text-[14px] leading-[17px] text-[#7F8084]"
              >
                Already have an account?
                <p className=" text-customWhite hover:underline ml-1">
                  Login →
                </p>
              </div>
            ) : (
              <div className=" font-inter font-medium text-[14px] leading-[17px] text-[#7F8084]">
                Already have an account?{" "}
                <Link to="/" className="text-customWhite hover:underline">
                  Login →
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
