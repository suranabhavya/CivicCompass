"use client";
import { useState } from "react";

export default function Dropdown() {
  const options = [
    { id: "all", label: "Business Type" },
    { id: "option-1", label: "Option 1" },
    { id: "option-2", label: "Option 2" },
    { id: "option-3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-fit cursor-pointer text-white">
      {/* Selected Value */}
      <div
        className="bg-gray-800 px-4 py-2 flex justify-between items-center rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.label}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-1 bg-gray-800 w-full rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.id}
              className={`px-4 py-2 hover:bg-gray-700 ${
                selectedOption.id === option.id ? "hidden" : ""
              }`}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
