import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-Dquy2Cpg.js";import"./preload-helper-D9Z9MdNV.js";const w=({isOpen:s,onClose:n,items:g,title:o="Menu",width:d=320,showOverlay:y=!0,animationDuration:f=300,onItemClick:v})=>{const[C,O]=a.useState(new Set),[N,S]=a.useState(!1);a.useEffect(()=>{const e=i=>{i.key==="Escape"&&s&&n()};return s&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow="unset"}},[s,n]),a.useEffect(()=>{if(s)S(!0);else{const e=setTimeout(()=>{S(!1)},f);return()=>clearTimeout(e)}},[s,f]);const A=a.useCallback(()=>{y&&n()},[y,n]),j=a.useCallback(e=>{O(i=>{const t=new Set(i);return t.has(e)?t.delete(e):t.add(e),t})},[]),I=a.useCallback((e,i)=>{i.preventDefault(),!e.disabled&&(e.children&&e.children.length>0?j(e.id):(v&&v(e),e.href&&n()))},[v,n,j]),M=(e,i=0)=>{const t=e.children&&e.children.length>0,l=C.has(e.id);return r.jsxs("div",{className:"storybook-sidebar-menu-item-container",children:[r.jsx("div",{className:["storybook-sidebar-menu-item",`storybook-sidebar-menu-item--level-${i}`,t?"storybook-sidebar-menu-item--parent":"",l?"storybook-sidebar-menu-item--expanded":"",e.disabled?"storybook-sidebar-menu-item--disabled":""].filter(Boolean).join(" "),onClick:x=>I(e,x),role:"menuitem",tabIndex:e.disabled?-1:0,"aria-expanded":t?l:void 0,"aria-disabled":e.disabled,children:r.jsxs("div",{className:"storybook-sidebar-menu-item-content",children:[e.icon&&r.jsx("span",{className:"storybook-sidebar-menu-item-icon","aria-hidden":"true",children:e.icon}),r.jsx("span",{className:"storybook-sidebar-menu-item-label",children:e.label}),t&&r.jsx("span",{className:["storybook-sidebar-menu-item-arrow",l?"storybook-sidebar-menu-item-arrow--expanded":""].join(" "),"aria-hidden":"true",children:"▶"})]})}),t&&r.jsx("div",{className:["storybook-sidebar-menu-submenu",l?"storybook-sidebar-menu-submenu--expanded":""].join(" "),role:"menu","aria-label":`${e.label} submenu`,children:e.children.map(x=>M(x,i+1))})]},e.id)};return!s&&!N?null:r.jsxs("div",{className:"storybook-sidebar-menu-container",children:[y&&r.jsx("div",{className:["storybook-sidebar-menu-overlay",s?"storybook-sidebar-menu-overlay--visible":""].join(" "),onClick:A,"aria-hidden":"true"}),r.jsxs("div",{className:["storybook-sidebar-menu",s?"storybook-sidebar-menu--open":""].join(" "),style:{width:`${d}px`,transitionDuration:`${f}ms`},role:"navigation","aria-label":"Sidebar menu",children:[r.jsxs("div",{className:"storybook-sidebar-menu-header",children:[r.jsx("h2",{className:"storybook-sidebar-menu-title",children:o}),r.jsx("button",{className:"storybook-sidebar-menu-close",onClick:n,"aria-label":"Close menu",type:"button",children:"✕"})]}),r.jsx("div",{className:"storybook-sidebar-menu-content",role:"menu",children:g.map(e=>M(e))})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"SidebarMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the sidebar is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sidebar should close"},items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Array of menu items"},title:{required:!1,tsType:{name:"string"},description:"Sidebar title",defaultValue:{value:'"Menu"',computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Sidebar width",defaultValue:{value:"320",computed:!1}},showOverlay:{required:!1,tsType:{name:"boolean"},description:"Whether to show overlay background",defaultValue:{value:"true",computed:!1}},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in milliseconds",defaultValue:{value:"300",computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: MenuItem) => void",signature:{arguments:[{type:{name:"MenuItem"},name:"item"}],return:{name:"void"}}},description:"Callback when a menu item is clicked"}}};const P=[{id:"home",label:"Home",icon:"🏠",href:"/"},{id:"about",label:"About",icon:"📄",href:"/about"},{id:"contact",label:"Contact",icon:"📧",href:"/contact"},{id:"settings",label:"Settings",icon:"⚙️",href:"/settings"},{id:"disabled",label:"Disabled Item",icon:"🚫",disabled:!0}],k=[{id:"dashboard",label:"Dashboard",icon:"📊",href:"/dashboard"},{id:"products",label:"Products",icon:"📦",children:[{id:"all-products",label:"All Products",href:"/products"},{id:"categories",label:"Categories",href:"/products/categories"},{id:"inventory",label:"Inventory",href:"/products/inventory"},{id:"pricing",label:"Pricing",href:"/products/pricing"}]},{id:"orders",label:"Orders",icon:"🛒",children:[{id:"pending-orders",label:"Pending Orders",href:"/orders/pending"},{id:"completed-orders",label:"Completed Orders",href:"/orders/completed"},{id:"cancelled-orders",label:"Cancelled Orders",href:"/orders/cancelled"}]},{id:"analytics",label:"Analytics",icon:"📈",href:"/analytics"},{id:"support",label:"Support",icon:"💬",href:"/support"}],D=[{id:"home",label:"Home",icon:"🏠",href:"/"},{id:"e-commerce",label:"E-Commerce",icon:"🛍️",children:[{id:"products-management",label:"Products",children:[{id:"add-product",label:"Add Product",href:"/products/add"},{id:"product-list",label:"Product List",href:"/products/list"},{id:"product-categories",label:"Categories",href:"/products/categories"},{id:"product-attributes",label:"Attributes",href:"/products/attributes"}]},{id:"orders-management",label:"Orders",children:[{id:"new-orders",label:"New Orders",href:"/orders/new"},{id:"processing-orders",label:"Processing",href:"/orders/processing"},{id:"shipped-orders",label:"Shipped",href:"/orders/shipped"},{id:"delivered-orders",label:"Delivered",href:"/orders/delivered"}]},{id:"customers",label:"Customers",href:"/customers"},{id:"promotions",label:"Promotions",href:"/promotions"}]},{id:"content",label:"Content Management",icon:"📝",children:[{id:"blog",label:"Blog",children:[{id:"blog-posts",label:"Posts",href:"/blog/posts"},{id:"blog-categories",label:"Categories",href:"/blog/categories"},{id:"blog-tags",label:"Tags",href:"/blog/tags"}]},{id:"pages",label:"Pages",children:[{id:"static-pages",label:"Static Pages",href:"/pages/static"},{id:"landing-pages",label:"Landing Pages",href:"/pages/landing"}]},{id:"media-library",label:"Media Library",href:"/media"}]},{id:"settings",label:"Settings",icon:"⚙️",children:[{id:"general-settings",label:"General",href:"/settings/general"},{id:"user-settings",label:"User Management",href:"/settings/users"},{id:"system-settings",label:"System",href:"/settings/system"}]}],h=({items:s,...n})=>{const[g,o]=a.useState(!1);return r.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx("button",{onClick:()=>o(!0),style:{padding:"12px 24px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Open Sidebar Menu"})}),r.jsxs("div",{style:{padding:"20px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e1e5e9"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"Instructions:"}),r.jsxs("ul",{style:{margin:0,paddingLeft:"20px",color:"#666"},children:[r.jsx("li",{children:'Click "Open Sidebar Menu" to see the sidebar'}),r.jsx("li",{children:"Sidebar slides in from the right side"}),r.jsx("li",{children:"Click the overlay or close button to dismiss"}),r.jsx("li",{children:"Expand/collapse nested menu items"}),r.jsx("li",{children:"Press ESC key to close the sidebar"})]})]}),r.jsx(w,{isOpen:g,onClose:()=>o(!1),items:s,onItemClick:d=>{console.log("Menu item clicked:",d),alert(`Clicked: ${d.label}`)},...n})]})},W={title:"Components/SidebarMenu",component:w,parameters:{layout:"fullscreen",docs:{description:{component:"A comprehensive sidebar menu component with slide-in animation, nested submenus, and backdrop close functionality. Features accordion-style expandable menu items and support for multi-level nesting."}}},argTypes:{isOpen:{control:"boolean",description:"Whether the sidebar is currently open"},title:{control:"text",description:"Title displayed in the sidebar header"},width:{control:{type:"range",min:200,max:500,step:20},description:"Width of the sidebar in pixels"},showOverlay:{control:"boolean",description:"Whether to show the background overlay"},animationDuration:{control:{type:"range",min:100,max:1e3,step:50},description:"Animation duration in milliseconds"},items:{control:"object",description:"Array of menu items to display"}},tags:["autodocs"]},c={render:s=>r.jsx(h,{...s}),args:{title:"Navigation",items:P,width:320,showOverlay:!0,animationDuration:300},parameters:{docs:{description:{story:"A simple flat menu structure with no nested items. Good for basic navigation needs."}}}},u={render:s=>r.jsx(h,{...s}),args:{title:"Admin Panel",items:k,width:320,showOverlay:!0,animationDuration:300},parameters:{docs:{description:{story:"Menu with one level of nesting. Parent items can be expanded to reveal child items in an accordion style."}}}},m={render:s=>r.jsx(h,{...s}),args:{title:"CMS Dashboard",items:D,width:350,showOverlay:!0,animationDuration:300},parameters:{docs:{description:{story:"Complex menu with two levels of nesting. Demonstrates deep hierarchical navigation with multiple expandable sections."}}}},p={render:s=>r.jsx(h,{...s}),args:{title:"Side Panel",items:k,width:320,showOverlay:!1,animationDuration:250},parameters:{docs:{description:{story:"Sidebar without background overlay. Users must use the close button or ESC key to dismiss."}}}},b={args:{isOpen:!0,onClose:()=>{},title:"Always Visible",items:k,width:320,showOverlay:!1,animationDuration:300},parameters:{docs:{description:{story:"Sidebar in permanent open state for design review. No overlay or close functionality."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarMenuWrapper {...args} />,
  args: {
    title: "Navigation",
    items: flatMenuItems,
    width: 320,
    showOverlay: true,
    animationDuration: 300
  },
  parameters: {
    docs: {
      description: {
        story: "A simple flat menu structure with no nested items. Good for basic navigation needs."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarMenuWrapper {...args} />,
  args: {
    title: "Admin Panel",
    items: oneLevelMenuItems,
    width: 320,
    showOverlay: true,
    animationDuration: 300
  },
  parameters: {
    docs: {
      description: {
        story: "Menu with one level of nesting. Parent items can be expanded to reveal child items in an accordion style."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarMenuWrapper {...args} />,
  args: {
    title: "CMS Dashboard",
    items: twoLevelMenuItems,
    width: 350,
    showOverlay: true,
    animationDuration: 300
  },
  parameters: {
    docs: {
      description: {
        story: "Complex menu with two levels of nesting. Demonstrates deep hierarchical navigation with multiple expandable sections."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarMenuWrapper {...args} />,
  args: {
    title: "Side Panel",
    items: oneLevelMenuItems,
    width: 320,
    showOverlay: false,
    animationDuration: 250
  },
  parameters: {
    docs: {
      description: {
        story: "Sidebar without background overlay. Users must use the close button or ESC key to dismiss."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Always Visible",
    items: oneLevelMenuItems,
    width: 320,
    showOverlay: false,
    animationDuration: 300
  },
  parameters: {
    docs: {
      description: {
        story: "Sidebar in permanent open state for design review. No overlay or close functionality."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const q=["FlatMenu","OneLevelNested","TwoLevelNested","WithoutOverlay","AlwaysOpen"];export{b as AlwaysOpen,c as FlatMenu,u as OneLevelNested,m as TwoLevelNested,p as WithoutOverlay,q as __namedExportsOrder,W as default};
