import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input } from "../components/Input/Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number", "email"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  // Use `fn` to spy on the onChange and onClear args
  args: {
    onChange: fn(),
    onClear: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Default Input",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name...",
    label: "Text Input",
    value: "",
  },
};

export const TextWithClear: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    label: "Text Input with Clear",
    clearable: true,
    value: "Sample text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
    label: "Password Input",
    value: "secretpassword",
  },
};

export const PasswordWithClear: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
    label: "Password Input with Clear",
    clearable: true,
    value: "secretpassword",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
    label: "Number Input",
    value: "42",
  },
};

export const NumberWithClear: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
    label: "Number Input with Clear",
    clearable: true,
    value: "123",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email...",
    label: "Email Input",
    value: "user@example.com",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small input...",
    label: "Small Input",
    clearable: true,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Large input...",
    label: "Large Input",
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input...",
    label: "Disabled Input",
    disabled: true,
    value: "Cannot edit this",
    clearable: true,
  },
};

export const DisabledPassword: Story = {
  args: {
    type: "password",
    placeholder: "Disabled password...",
    label: "Disabled Password Input",
    disabled: true,
    value: "secretpassword",
    clearable: true,
  },
};
