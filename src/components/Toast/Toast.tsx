import { useState, useEffect, useCallback } from "react";
import "./toast.css";

export interface ToastProps {
  /**
   * Toast message content
   */
  message: string;
  /**
   * Toast type/variant
   */
  type?: "success" | "error" | "warning" | "info";
  /**
   * Duration in milliseconds before auto-dismiss (0 = no auto-dismiss)
   */
  duration?: number;
  /**
   * Whether to show a manual close button
   */
  closable?: boolean;
  /**
   * Whether the toast is visible
   */
  visible?: boolean;
  /**
   * Callback when toast is dismissed
   */
  onClose?: () => void;
  /**
   * Position on screen
   */
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

export const Toast = ({
  message,
  type = "info",
  duration = 4000,
  closable = false,
  visible = true,
  onClose,
  position = "bottom-right",
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 300);
  }, [onClose]);

  // Handle initial visibility
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      // Trigger animation after component mounts
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Handle duration-based auto-dismiss
  useEffect(() => {
    if (isAnimating && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, handleClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
      default:
        return "ℹ";
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={[
        "storybook-toast",
        `storybook-toast--${type}`,
        `storybook-toast--${position}`,
        isAnimating ? "storybook-toast--visible" : "storybook-toast--hidden",
      ].join(" ")}
      role="alert"
      aria-live="polite"
    >
      <div className="storybook-toast-content">
        <span className="storybook-toast-icon" aria-hidden="true">
          {getIcon()}
        </span>
        <span className="storybook-toast-message">{message}</span>
        {closable && (
          <button
            type="button"
            className="storybook-toast-close"
            onClick={handleClose}
            aria-label="Close notification"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

// Toast Container for managing multiple toasts
export interface ToastContainerProps {
  /**
   * Array of toast configurations
   */
  toasts: Array<ToastProps & { id: string }>;
  /**
   * Position for all toasts in container
   */
  position?: ToastProps["position"];
}

export const ToastContainer = ({
  toasts,
  position = "bottom-right",
}: ToastContainerProps) => {
  return (
    <div
      className={`storybook-toast-container storybook-toast-container--${position}`}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} position={position} />
      ))}
    </div>
  );
};
