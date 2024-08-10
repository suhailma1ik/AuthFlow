import React from "react";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
}

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
        type={"text"}
        className="border-customBorderColor border-[1.5px] w-full px-3 py-2 mt-1 text-white placeholder-lightGray bg-customGray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
