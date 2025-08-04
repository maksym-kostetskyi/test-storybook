import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-Dquy2Cpg.js";import"./preload-helper-D9Z9MdNV.js";const S=({message:k,type:v="info",duration:d=4e3,closable:x=!1,visible:g=!0,onClose:f,position:E="bottom-right"})=>{const[_,T]=s.useState(g),[b,w]=s.useState(!1),y=s.useCallback(()=>{w(!1),setTimeout(()=>{T(!1),f&&f()},300)},[f]);s.useEffect(()=>{if(g){T(!0);const h=setTimeout(()=>w(!0),50);return()=>clearTimeout(h)}},[g]),s.useEffect(()=>{if(b&&d>0){const h=setTimeout(()=>{y()},d);return()=>clearTimeout(h)}},[b,d,y]);const N=()=>{switch(v){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":default:return"ℹ"}};return _?e.jsx("div",{className:["storybook-toast",`storybook-toast--${v}`,`storybook-toast--${E}`,b?"storybook-toast--visible":"storybook-toast--hidden"].join(" "),role:"alert","aria-live":"polite",children:e.jsxs("div",{className:"storybook-toast-content",children:[e.jsx("span",{className:"storybook-toast-icon","aria-hidden":"true",children:N()}),e.jsx("span",{className:"storybook-toast-message",children:k}),x&&e.jsx("button",{type:"button",className:"storybook-toast-close",onClick:y,"aria-label":"Close notification",children:"✕"})]})}):null};S.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:"Toast message content"},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"Toast type/variant",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"Duration in milliseconds before auto-dismiss (0 = no auto-dismiss)",defaultValue:{value:"4000",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show a manual close button",defaultValue:{value:"false",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"Whether the toast is visible",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when toast is dismissed"},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"Position on screen",defaultValue:{value:'"bottom-right"',computed:!1}}}};const{fn:j}=__STORYBOOK_MODULE_TEST__,q={title:"Components/Toast",component:S,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","error","warning","info"]},position:{control:{type:"select"},options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"]},duration:{control:{type:"number",min:0,max:1e4,step:500}},closable:{control:"boolean"},visible:{control:"boolean"}},args:{onClose:j()}},t={args:{message:"This is a default toast notification",visible:!0}},o={args:{message:"Operation completed successfully!",type:"success",visible:!0,duration:4e3}},r={args:{message:"Something went wrong. Please try again.",type:"error",visible:!0,duration:5e3}},a={args:{message:"Please check your input before proceeding.",type:"warning",visible:!0,duration:4e3}},n={args:{message:"Here is some helpful information for you.",type:"info",visible:!0,duration:4e3}},i={args:{message:"This toast has a manual close button",type:"info",closable:!0,visible:!0,duration:0}},l={args:{message:"This is a much longer toast message that demonstrates how the component handles multiple lines of text. It should wrap properly and maintain good readability.",type:"warning",closable:!0,visible:!0,duration:6e3}},u={args:{message:"Quick notification (2 seconds)",type:"success",visible:!0,duration:2e3}},c={args:{message:"Persistent notification (8 seconds)",type:"error",visible:!0,duration:8e3}},m={args:{message:"This toast will never auto-dismiss",type:"info",closable:!0,visible:!0,duration:0}},p={args:{message:"Toast positioned at top-left",type:"info",position:"top-left",visible:!0,duration:4e3}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is a default toast notification",
    visible: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Operation completed successfully!",
    type: "success",
    visible: true,
    duration: 4000
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Something went wrong. Please try again.",
    type: "error",
    visible: true,
    duration: 5000
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Please check your input before proceeding.",
    type: "warning",
    visible: true,
    duration: 4000
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Here is some helpful information for you.",
    type: "info",
    visible: true,
    duration: 4000
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This toast has a manual close button",
    type: "info",
    closable: true,
    visible: true,
    duration: 0 // No auto-dismiss
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is a much longer toast message that demonstrates how the component handles multiple lines of text. It should wrap properly and maintain good readability.",
    type: "warning",
    closable: true,
    visible: true,
    duration: 6000
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Quick notification (2 seconds)",
    type: "success",
    visible: true,
    duration: 2000
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Persistent notification (8 seconds)",
    type: "error",
    visible: true,
    duration: 8000
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This toast will never auto-dismiss",
    type: "info",
    closable: true,
    visible: true,
    duration: 0
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Toast positioned at top-left",
    type: "info",
    position: "top-left",
    visible: true,
    duration: 4000
  }
}`,...p.parameters?.docs?.source}}};const L=["Default","Success","Error","Warning","Info","WithCloseButton","LongMessage","ShortDuration","LongDuration","NeverExpires","TopLeft"];export{t as Default,r as Error,n as Info,c as LongDuration,l as LongMessage,m as NeverExpires,u as ShortDuration,o as Success,p as TopLeft,a as Warning,i as WithCloseButton,L as __namedExportsOrder,q as default};
