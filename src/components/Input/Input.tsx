import React, { useState } from "react";
import "./input.css";
import eyeIcon from "../../assets/eye.png";
import eyeCrossedIcon from "../../assets/eye-crossed.png";

export interface InputProps {
  /**
   * Input type
   */
  type?: "text" | "password" | "number" | "email";
  /**
   * Input value
   */
  value?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Input label
   */
  label?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether to show a clear button
   */
  clearable?: boolean;
  /**
   * Input size
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional clear handler
   */
  onClear?: () => void;
}

export const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  label,
  disabled = false,
  clearable = false,
  size = "medium",
  onChange,
  onClear,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleClear = () => {
    setInputValue("");
    if (onClear) {
      onClear();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div
      className={[
        "storybook-input-wrapper",
        `storybook-input-wrapper--${size}`,
      ].join(" ")}
    >
      {label && <label className="storybook-input-label">{label}</label>}
      <div className="storybook-input-container">
        <input
          type={inputType}
          className={["storybook-input", `storybook-input--${size}`].join(" ")}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="storybook-input-toggle"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <img src={eyeCrossedIcon} alt="Hide password" />
            ) : (
              <img src={eyeIcon} alt="Show password" />
            )}
          </button>
        )}
        {clearable && inputValue && (
          <button
            type="button"
            className="storybook-input-clear"
            onClick={handleClear}
            disabled={disabled}
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
