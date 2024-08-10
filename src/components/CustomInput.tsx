import React from "react";

/**
 * Props for the CustomInput component.
 * @interface CustomInputProps
 */
interface CustomInputProps {
  /** The label text for the input field */
  label?: string;
  /** The placeholder text for the input field */
  placeholder?: string;
}

/**
 * CustomInput component for rendering a styled text input field with a label.
 *
 * This component creates a text input with a customizable label and placeholder.
 * It uses custom styling classes for a consistent look across the application.
 *
 * @component
 * @example
 * ```jsx
 * <CustomInput
 *   label="Username"
 *   placeholder="Enter your username"
 * />
 * ```
 */
const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder }) => {
  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-customWhite "
      >
        <div className="flex justify-between">{label}</div>
      </label>
      <input
        type="text"
        className="border-customBorderColor border-[1.5px] w-full px-3 py-2 mt-1 text-white placeholder-lightGray bg-customGray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
