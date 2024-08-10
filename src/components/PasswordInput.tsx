import React from "react";
import { Link } from "react-router-dom";

/**
 * Props for the PasswordInput component.
 * @interface PasswordInputProps
 */
interface PasswordInputProps {
  /** The label text for the password input field */
  label?: string;
  /** The placeholder text for the password input field */
  placeholder?: string;
  /** JSX Element to be rendered as the right icon (e.g., for password visibility toggle) */
  rightIcon?: JSX.Element;
  /** The type of the input field, typically 'password' or 'text' */
  type?: string;
  /** Function to be called when the right icon is clicked */
  onRightIconClick?: () => void;
  /** Whether to show the "Forgot password?" link */
  isForgetPassword?: boolean;
}

/**
 * PasswordInput component for rendering a styled password input field with additional features.
 *
 * This component creates a password input with a customizable label, placeholder, and right icon.
 * It also includes an optional "Forgot password?" link and the ability to toggle password visibility.
 *
 * @component
 * @example
 * ```jsx
 * <PasswordInput
 *   label="Password"
 *   placeholder="Enter your password"
 *   rightIcon={<EyeIcon />}
 *   type="password"
 *   onRightIconClick={() => setShowPassword(!showPassword)}
 *   isForgetPassword={true}
 * />
 * ```
 */
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
