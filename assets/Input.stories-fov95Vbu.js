import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-Dquy2Cpg.js";import"./preload-helper-D9Z9MdNV.js";const K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4nO2Zy0uUURTAf2YPs7Dc1S6EKHq5rlaVu7QX9BKTalH9DZm0CKO9VhBUSlD/QbTIHLIXtSioCKlF2aI0KGrsJdTEiWMMA9+dcz7vqMT3gwPDN3Ne3733nHvvQEZGRkZGxsxhNrAaaAVOAd3AFZVufSbfrQKqmWHUAHuBa8AnoGAU+e1VYI/amDaWAqeBD47gk2QU6AKWTGUCi9TpWIQESmVMp19dpZNoBt5WIIFSeQfsqkQCC3XBWgN5D1wEOoCDKvL5EjDisNMHLIiVhFSYF0bHt4FNwKyAPfluMzBotPkcWDnZJJqMlegLsDuFfal2eYP9j5p8KnYA4wYnb4A1aZ0Aa4Fhg5+fwHav8a3AD+NISCAxpu9ng79xfcEmdhpHopByOiWxz+jTNDIbjSMxsbBjc8fo+zuwIclIg3ZYa2mU6hRC3lpOm5zIANBSRmeLw7+U8WWlBmqBZ84+ESqxZwK6sitIotr5Mp8C84sNnHcoF7SxhUainL7sEJLodcZybkJxm1NR5HggkJxB/1ZAv8MZy2/NgdcpEjkUCCRvLNtJHE4Rj+TA0H+QyJAoHog8tQYM+v0B/RMp4mkTxSqdsx7Fy4FAWgz6snNIos8Zy03N4S8rnAelkTJn7q6ArhycYpXfPLC81Eib802U240260jnVfrLjITQ5Ixhf5KhCw4jcp6IiUyPew7/Z0PG5gI3HMbkBiQWck1k9XtdYw1SqxtC6xxdFyGJRscave85/tYDT4yGhyeZTKPjQuMxsNjroN45MnKe8K6JVsdI5DSmVNQ46/pd3YqHSnO1VifPwu4F5hGBY8A3h+NRbZqdRddBnRqQp098BY4QmYYUO4DJyKA26opQpU3oVQUTeKnXRP+2HZVkDtAOPIiYgJTVdrU9LUj5PAk80kOONfBfwEPVjdGLolKntxtHdePYU/RHT48+k8W7fipu3DMyMjIyMjDyB848MRwaYwdUAAAAAElFTkSuQmCC",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nN2VySvEYRjHP0QO9iZTE8pBJOXg6sLdTY6cLHFw5Mhf4oxkLSfmLGmSJVsRyo0JWVKW3uk7ent735mhJvGt39KzvN/3Wd7nhf+I0nwuPgUcArF87XwP+NA3KnkFMAOcA4/AC3AFrAL9QNl3SKIBkh7gVXL3eQAmgOJcSdqANw9JTFGaHbcAA8C6RZQA6rItXg8cy+HdQ+JDJ3Aq2wugKWRYCZzIcBNoDaSrA5gGai3fKiAuW0MW8RHMy2AHKM+hJtcOSak2ZmyX3MW7rYI1OLo5K88uiYnEhqlBUrZGn0Khet8IxzyR3Up3HEiXi1HZHWnt1CvtPOJxuJeuPZAuFyMugUGvhElPqy1ItyYSXyRpNPpSlMaK1UH2PGoGbgKHzCYpALYlX/SFFrH6Oa7WS6NOxb4T2SywHyj8AVBNAOaQXFr93BUyzNDCJRl8vnabsNKwAQxqPJRr+JlDOAxsBdKVFUXAuNVBmR6TtrOfkKBi9wHLmjPPwJP+jWxII8ZNV14urRpgF5jkr163/Ao+AfVmmByHiVedAAAAAElFTkSuQmCC",E=({type:A="text",value:C="",placeholder:N="",label:g,disabled:b=!1,clearable:T=!1,size:h="medium",onChange:w,onClear:y,...P})=>{const[I,x]=v.useState(C),[a,D]=v.useState(!1),H=f=>{x(f.target.value),w&&w(f)},V=()=>{x(""),y&&y()},B=()=>{D(!a)},k=A==="password"&&a?"text":A;return e.jsxs("div",{className:["storybook-input-wrapper",`storybook-input-wrapper--${h}`].join(" "),children:[g&&e.jsx("label",{className:"storybook-input-label",children:g}),e.jsxs("div",{className:"storybook-input-container",children:[e.jsx("input",{type:k,className:["storybook-input",`storybook-input--${h}`].join(" "),value:I,placeholder:N,disabled:b,onChange:H,...P}),A==="password"&&e.jsx("button",{type:"button",className:"storybook-input-toggle",onClick:B,disabled:b,"aria-label":a?"Hide password":"Show password",children:a?e.jsx("img",{src:R,alt:"Hide password"}):e.jsx("img",{src:K,alt:"Show password"})}),T&&I&&e.jsx("button",{type:"button",className:"storybook-input-clear",onClick:V,disabled:b,"aria-label":"Clear input",children:"✕"})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"union",raw:'"text" | "password" | "number" | "email"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'},{name:"literal",value:'"number"'},{name:"literal",value:'"email"'}]},description:"Input type",defaultValue:{value:'"text"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value",defaultValue:{value:'""',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Input label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the input is disabled",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Input size",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Optional change handler"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional clear handler"}}};const{fn:S}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Input",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","number","email"]},size:{control:{type:"select"},options:["small","medium","large"]},clearable:{control:"boolean"},disabled:{control:"boolean"}},args:{onChange:S(),onClear:S()}},r={args:{placeholder:"Enter text...",label:"Default Input"}},s={args:{type:"text",placeholder:"Enter your name...",label:"Text Input",value:""}},t={args:{type:"text",placeholder:"Enter text...",label:"Text Input with Clear",clearable:!0,value:"Sample text"}},l={args:{type:"password",placeholder:"Enter password...",label:"Password Input",value:"secretpassword"}},n={args:{type:"password",placeholder:"Enter password...",label:"Password Input with Clear",clearable:!0,value:"secretpassword"}},o={args:{type:"number",placeholder:"Enter number...",label:"Number Input",value:"42"}},p={args:{type:"number",placeholder:"Enter number...",label:"Number Input with Clear",clearable:!0,value:"123"}},u={args:{type:"email",placeholder:"Enter email...",label:"Email Input",value:"user@example.com"}},c={args:{size:"small",placeholder:"Small input...",label:"Small Input",clearable:!0}},d={args:{size:"large",placeholder:"Large input...",label:"Large Input",clearable:!0}},i={args:{placeholder:"Disabled input...",label:"Disabled Input",disabled:!0,value:"Cannot edit this",clearable:!0}},m={args:{type:"password",placeholder:"Disabled password...",label:"Disabled Password Input",disabled:!0,value:"secretpassword",clearable:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    label: "Default Input"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter your name...",
    label: "Text Input",
    value: ""
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter text...",
    label: "Text Input with Clear",
    clearable: true,
    value: "Sample text"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password...",
    label: "Password Input",
    value: "secretpassword"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password...",
    label: "Password Input with Clear",
    clearable: true,
    value: "secretpassword"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "Enter number...",
    label: "Number Input",
    value: "42"
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "Enter number...",
    label: "Number Input with Clear",
    clearable: true,
    value: "123"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Enter email...",
    label: "Email Input",
    value: "user@example.com"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    placeholder: "Small input...",
    label: "Small Input",
    clearable: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    placeholder: "Large input...",
    label: "Large Input",
    clearable: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input...",
    label: "Disabled Input",
    disabled: true,
    value: "Cannot edit this",
    clearable: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Disabled password...",
    label: "Disabled Password Input",
    disabled: true,
    value: "secretpassword",
    clearable: true
  }
}`,...m.parameters?.docs?.source}}};const U=["Default","Text","TextWithClear","Password","PasswordWithClear","Number","NumberWithClear","Email","Small","Large","Disabled","DisabledPassword"];export{r as Default,i as Disabled,m as DisabledPassword,u as Email,d as Large,o as Number,p as NumberWithClear,l as Password,n as PasswordWithClear,c as Small,s as Text,t as TextWithClear,U as __namedExportsOrder,M as default};
