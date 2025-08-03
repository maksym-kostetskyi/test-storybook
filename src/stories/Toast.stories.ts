import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Toast } from "../components/Toast/Toast";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    position: {
      control: { type: "select" },
      options: [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ],
    },
    duration: {
      control: { type: "number", min: 0, max: 10000, step: 500 },
    },
    closable: { control: "boolean" },
    visible: { control: "boolean" },
  },
  // Use `fn` to spy on the onClose arg
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    message: "This is a default toast notification",
    visible: true,
  },
};

export const Success: Story = {
  args: {
    message: "Operation completed successfully!",
    type: "success",
    visible: true,
    duration: 4000,
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong. Please try again.",
    type: "error",
    visible: true,
    duration: 5000,
  },
};

export const Warning: Story = {
  args: {
    message: "Please check your input before proceeding.",
    type: "warning",
    visible: true,
    duration: 4000,
  },
};

export const Info: Story = {
  args: {
    message: "Here is some helpful information for you.",
    type: "info",
    visible: true,
    duration: 4000,
  },
};

export const WithCloseButton: Story = {
  args: {
    message: "This toast has a manual close button",
    type: "info",
    closable: true,
    visible: true,
    duration: 0, // No auto-dismiss
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "This is a much longer toast message that demonstrates how the component handles multiple lines of text. It should wrap properly and maintain good readability.",
    type: "warning",
    closable: true,
    visible: true,
    duration: 6000,
  },
};

export const ShortDuration: Story = {
  args: {
    message: "Quick notification (2 seconds)",
    type: "success",
    visible: true,
    duration: 2000,
  },
};

export const LongDuration: Story = {
  args: {
    message: "Persistent notification (8 seconds)",
    type: "error",
    visible: true,
    duration: 8000,
  },
};

export const NeverExpires: Story = {
  args: {
    message: "This toast will never auto-dismiss",
    type: "info",
    closable: true,
    visible: true,
    duration: 0,
  },
};

// Position variants
export const TopLeft: Story = {
  args: {
    message: "Toast positioned at top-left",
    type: "info",
    position: "top-left",
    visible: true,
    duration: 4000,
  },
};

export const TopCenter: Story = {
  args: {
    message: "Toast positioned at top-center",
    type: "success",
    position: "top-center",
    visible: true,
    duration: 4000,
  },
};

export const TopRight: Story = {
  args: {
    message: "Toast positioned at top-right",
    type: "warning",
    position: "top-right",
    visible: true,
    duration: 4000,
  },
};

export const BottomLeft: Story = {
  args: {
    message: "Toast positioned at bottom-left",
    type: "warning",
    position: "bottom-left",
    visible: true,
    duration: 4000,
  },
};

export const BottomCenter: Story = {
  args: {
    message: "Toast positioned at bottom-center",
    type: "error",
    position: "bottom-center",
    visible: true,
    duration: 4000,
  },
};

export const BottomRight: Story = {
  args: {
    message: "Toast positioned at bottom-right",
    type: "success",
    position: "bottom-right",
    visible: true,
    duration: 4000,
  },
};
