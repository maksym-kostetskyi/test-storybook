import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  SidebarMenu,
  type MenuItem,
} from "../components/SidebarMenu/SidebarMenu";

// Mock menu data
const flatMenuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: "🏠", href: "/" },
  { id: "about", label: "About", icon: "📄", href: "/about" },
  { id: "contact", label: "Contact", icon: "📧", href: "/contact" },
  { id: "settings", label: "Settings", icon: "⚙️", href: "/settings" },
  { id: "disabled", label: "Disabled Item", icon: "🚫", disabled: true },
];

const oneLevelMenuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "📊", href: "/dashboard" },
  {
    id: "products",
    label: "Products",
    icon: "📦",
    children: [
      { id: "all-products", label: "All Products", href: "/products" },
      { id: "categories", label: "Categories", href: "/products/categories" },
      { id: "inventory", label: "Inventory", href: "/products/inventory" },
      { id: "pricing", label: "Pricing", href: "/products/pricing" },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: "🛒",
    children: [
      {
        id: "pending-orders",
        label: "Pending Orders",
        href: "/orders/pending",
      },
      {
        id: "completed-orders",
        label: "Completed Orders",
        href: "/orders/completed",
      },
      {
        id: "cancelled-orders",
        label: "Cancelled Orders",
        href: "/orders/cancelled",
      },
    ],
  },
  { id: "analytics", label: "Analytics", icon: "📈", href: "/analytics" },
  { id: "support", label: "Support", icon: "💬", href: "/support" },
];

const twoLevelMenuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: "🏠", href: "/" },
  {
    id: "e-commerce",
    label: "E-Commerce",
    icon: "🛍️",
    children: [
      {
        id: "products-management",
        label: "Products",
        children: [
          { id: "add-product", label: "Add Product", href: "/products/add" },
          { id: "product-list", label: "Product List", href: "/products/list" },
          {
            id: "product-categories",
            label: "Categories",
            href: "/products/categories",
          },
          {
            id: "product-attributes",
            label: "Attributes",
            href: "/products/attributes",
          },
        ],
      },
      {
        id: "orders-management",
        label: "Orders",
        children: [
          { id: "new-orders", label: "New Orders", href: "/orders/new" },
          {
            id: "processing-orders",
            label: "Processing",
            href: "/orders/processing",
          },
          { id: "shipped-orders", label: "Shipped", href: "/orders/shipped" },
          {
            id: "delivered-orders",
            label: "Delivered",
            href: "/orders/delivered",
          },
        ],
      },
      { id: "customers", label: "Customers", href: "/customers" },
      { id: "promotions", label: "Promotions", href: "/promotions" },
    ],
  },
  {
    id: "content",
    label: "Content Management",
    icon: "📝",
    children: [
      {
        id: "blog",
        label: "Blog",
        children: [
          { id: "blog-posts", label: "Posts", href: "/blog/posts" },
          {
            id: "blog-categories",
            label: "Categories",
            href: "/blog/categories",
          },
          { id: "blog-tags", label: "Tags", href: "/blog/tags" },
        ],
      },
      {
        id: "pages",
        label: "Pages",
        children: [
          { id: "static-pages", label: "Static Pages", href: "/pages/static" },
          {
            id: "landing-pages",
            label: "Landing Pages",
            href: "/pages/landing",
          },
        ],
      },
      { id: "media-library", label: "Media Library", href: "/media" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "⚙️",
    children: [
      { id: "general-settings", label: "General", href: "/settings/general" },
      {
        id: "user-settings",
        label: "User Management",
        href: "/settings/users",
      },
      { id: "system-settings", label: "System", href: "/settings/system" },
    ],
  },
];

// Interactive wrapper component
const SidebarMenuWrapper = ({
  items,
  ...props
}: { items: MenuItem[] } & Partial<
  React.ComponentProps<typeof SidebarMenu>
>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Open Sidebar Menu
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #e1e5e9",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", color: "#333" }}>Instructions:</h3>
        <ul style={{ margin: 0, paddingLeft: "20px", color: "#666" }}>
          <li>Click "Open Sidebar Menu" to see the sidebar</li>
          <li>Sidebar slides in from the right side</li>
          <li>Click the overlay or close button to dismiss</li>
          <li>Expand/collapse nested menu items</li>
          <li>Press ESC key to close the sidebar</li>
        </ul>
      </div>

      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onItemClick={(item) => {
          console.log("Menu item clicked:", item);
          alert(`Clicked: ${item.label}`);
        }}
        {...props}
      />
    </div>
  );
};

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive sidebar menu component with slide-in animation, nested submenus, and backdrop close functionality. Features accordion-style expandable menu items and support for multi-level nesting.",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Whether the sidebar is currently open",
    },
    title: {
      control: "text",
      description: "Title displayed in the sidebar header",
    },
    width: {
      control: { type: "range", min: 200, max: 500, step: 20 },
      description: "Width of the sidebar in pixels",
    },
    showOverlay: {
      control: "boolean",
      description: "Whether to show the background overlay",
    },
    animationDuration: {
      control: { type: "range", min: 100, max: 1000, step: 50 },
      description: "Animation duration in milliseconds",
    },
    items: {
      control: "object",
      description: "Array of menu items to display",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

// Basic flat menu
export const FlatMenu: Story = {
  render: (args) => <SidebarMenuWrapper {...args} />,
  args: {
    title: "Navigation",
    items: flatMenuItems,
    width: 320,
    showOverlay: true,
    animationDuration: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A simple flat menu structure with no nested items. Good for basic navigation needs.",
      },
    },
  },
};

// One level nested menu
export const OneLevelNested: Story = {
  render: (args) => <SidebarMenuWrapper {...args} />,
  args: {
    title: "Admin Panel",
    items: oneLevelMenuItems,
    width: 320,
    showOverlay: true,
    animationDuration: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Menu with one level of nesting. Parent items can be expanded to reveal child items in an accordion style.",
      },
    },
  },
};

// Two level nested menu
export const TwoLevelNested: Story = {
  render: (args) => <SidebarMenuWrapper {...args} />,
  args: {
    title: "CMS Dashboard",
    items: twoLevelMenuItems,
    width: 350,
    showOverlay: true,
    animationDuration: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complex menu with two levels of nesting. Demonstrates deep hierarchical navigation with multiple expandable sections.",
      },
    },
  },
};

// Without overlay
export const WithoutOverlay: Story = {
  render: (args) => <SidebarMenuWrapper {...args} />,
  args: {
    title: "Side Panel",
    items: oneLevelMenuItems,
    width: 320,
    showOverlay: false,
    animationDuration: 250,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar without background overlay. Users must use the close button or ESC key to dismiss.",
      },
    },
  },
};

// Always open state (for design purposes)
export const AlwaysOpen: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Always Visible",
    items: oneLevelMenuItems,
    width: 320,
    showOverlay: false,
    animationDuration: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar in permanent open state for design review. No overlay or close functionality.",
      },
    },
  },
};
