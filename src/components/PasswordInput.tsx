import React from "react";
import { Link } from "react-router-dom";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  rightIcon?: JSX.Element;
  type?: string;
  onRightIconClick?: () => void;
  isForgetPassword?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  rightIcon,
  type,
  onRightIconClick,
  isForgetPassword,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-customWhite "
      >
        <div className="flex justify-between">
          {label}
          {isForgetPassword && (
            <div className="flex items-center justify-end">
              <Link to="/" className="text-sm text-gray-400 hover:underline">
                Forgot password?
              </Link>
            </div>
          )}
        </div>
      </label>
      <input
        type={type}
        id="password"
        className="border-customBorderColor border-[1.5px] w-full px-3 py-2 mt-1 text-white placeholder-lightGray bg-customGray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6"
        onClick={onRightIconClick}
      >
        {rightIcon}
      </button>
    </div>
  );
};

export default PasswordInput;
