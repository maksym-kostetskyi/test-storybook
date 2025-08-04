import { useState, useEffect, useCallback } from "react";
import "./sidebarMenu.css";

export interface MenuItem {
  /**
   * Unique identifier for the menu item
   */
  id: string;
  /**
   * Display label for the menu item
   */
  label: string;
  /**
   * Optional icon for the menu item
   */
  icon?: string;
  /**
   * URL or path for navigation
   */
  href?: string;
  /**
   * Child menu items for nested menus
   */
  children?: MenuItem[];
  /**
   * Whether the menu item is disabled
   */
  disabled?: boolean;
}

export interface SidebarMenuProps {
  /**
   * Whether the sidebar is open
   */
  isOpen: boolean;
  /**
   * Callback when sidebar should close
   */
  onClose: () => void;
  /**
   * Array of menu items
   */
  items: MenuItem[];
  /**
   * Sidebar title
   */
  title?: string;
  /**
   * Sidebar width
   */
  width?: number;
  /**
   * Whether to show overlay background
   */
  showOverlay?: boolean;
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
  /**
   * Callback when a menu item is clicked
   */
  onItemClick?: (item: MenuItem) => void;
}

export const SidebarMenu = ({
  isOpen,
  onClose,
  items,
  title = "Menu",
  width = 320,
  showOverlay = true,
  animationDuration = 300,
  onItemClick,
}: SidebarMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle animation state
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, animationDuration]);

  const handleOverlayClick = useCallback(() => {
    if (showOverlay) {
      onClose();
    }
  }, [showOverlay, onClose]);

  const toggleExpanded = useCallback((itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const handleItemClick = useCallback(
    (item: MenuItem, event: React.MouseEvent) => {
      event.preventDefault();

      if (item.disabled) {
        return;
      }

      // If item has children, toggle expansion
      if (item.children && item.children.length > 0) {
        toggleExpanded(item.id);
      } else {
        // If it's a leaf item, call the click handler and optionally close
        if (onItemClick) {
          onItemClick(item);
        }
        // Close sidebar when leaf item is clicked (optional behavior)
        if (item.href) {
          onClose();
        }
      }
    },
    [onItemClick, onClose, toggleExpanded]
  );

  const renderMenuItem = (
    item: MenuItem,
    level: number = 0
  ): React.ReactNode => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id} className="storybook-sidebar-menu-item-container">
        <div
          className={[
            "storybook-sidebar-menu-item",
            `storybook-sidebar-menu-item--level-${level}`,
            hasChildren ? "storybook-sidebar-menu-item--parent" : "",
            isExpanded ? "storybook-sidebar-menu-item--expanded" : "",
            item.disabled ? "storybook-sidebar-menu-item--disabled" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={(e) => handleItemClick(item, e)}
          role="menuitem"
          tabIndex={item.disabled ? -1 : 0}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-disabled={item.disabled}
        >
          <div className="storybook-sidebar-menu-item-content">
            {item.icon && (
              <span
                className="storybook-sidebar-menu-item-icon"
                aria-hidden="true"
              >
                {item.icon}
              </span>
            )}
            <span className="storybook-sidebar-menu-item-label">
              {item.label}
            </span>
            {hasChildren && (
              <span
                className={[
                  "storybook-sidebar-menu-item-arrow",
                  isExpanded
                    ? "storybook-sidebar-menu-item-arrow--expanded"
                    : "",
                ].join(" ")}
                aria-hidden="true"
              >
                ▶
              </span>
            )}
          </div>
        </div>

        {hasChildren && (
          <div
            className={[
              "storybook-sidebar-menu-submenu",
              isExpanded ? "storybook-sidebar-menu-submenu--expanded" : "",
            ].join(" ")}
            role="menu"
            aria-label={`${item.label} submenu`}
          >
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div className="storybook-sidebar-menu-container">
      {/* Overlay */}
      {showOverlay && (
        <div
          className={[
            "storybook-sidebar-menu-overlay",
            isOpen ? "storybook-sidebar-menu-overlay--visible" : "",
          ].join(" ")}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={[
          "storybook-sidebar-menu",
          isOpen ? "storybook-sidebar-menu--open" : "",
        ].join(" ")}
        style={{
          width: `${width}px`,
          transitionDuration: `${animationDuration}ms`,
        }}
        role="navigation"
        aria-label="Sidebar menu"
      >
        {/* Header */}
        <div className="storybook-sidebar-menu-header">
          <h2 className="storybook-sidebar-menu-title">{title}</h2>
          <button
            className="storybook-sidebar-menu-close"
            onClick={onClose}
            aria-label="Close menu"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="storybook-sidebar-menu-content" role="menu">
          {items.map((item) => renderMenuItem(item))}
        </div>
      </div>
    </div>
  );
};
