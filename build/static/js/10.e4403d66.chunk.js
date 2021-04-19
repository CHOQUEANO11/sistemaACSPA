(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{622:function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(44),r=c(17),o=c(158),a=c(1),i=c.n(a),s=c(621),u=function(t){var e=t.name,c=t.text,a=Object(o.a)(t,["name","text"]),i=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(r.jsx)("div",{className:"card-header-actions",children:Object(r.jsx)(s.X,Object(n.a)(Object(n.a)({},a),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(r.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},l=i.a.memo(u)},623:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(624);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(t,e):void 0}}},624:function(t,e,c){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}c.d(e,"a",(function(){return n}))},625:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(623);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(c.push(a.value),!e||c.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},641:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c(624);var r=c(623);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},687:function(t,e,c){"use strict";c.r(e);var n=c(17),r=c(641),o=c(625),a=c(1),i=c(621),s=c(622);e.default=function(){var t=Object(a.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(o.a)(t,2),c=e[0],u=e[1],l=Object(a.useState)("top-right"),j=Object(o.a)(l,2),b=j[0],d=j[1],h=Object(a.useState)(!0),m=Object(o.a)(h,2),f=m[0],O=m[1],p=Object(a.useState)(5e3),x=Object(o.a)(p,2),y=x[0],v=x[1],g=Object(a.useState)(!0),k=Object(o.a)(g,2),S=k[0],N=k[1],w=Object(a.useState)(!0),A=Object(o.a)(w,2),C=A[0],E=A[1],T=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(n.jsxs)(i.f,{children:[Object(n.jsxs)(i.j,{children:["Toasts.",Object(n.jsx)(s.a,{name:"-Toast"})]}),Object(n.jsx)(i.g,{children:Object(n.jsx)(i.s,{children:Object(n.jsxs)(i.qb,{children:[Object(n.jsx)(i.q,{sm:"12",lg:"6",children:Object(n.jsxs)(i.D,{children:[Object(n.jsx)("h5",{children:"Add toast with following props:"}),Object(n.jsxs)(i.E,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(n.jsx)(i.N,{id:"autohide",checked:f,onChange:function(t){O(t.target.checked)},custom:!0}),Object(n.jsx)(i.W,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),f&&Object(n.jsxs)(i.E,{className:"my-2",children:[Object(n.jsx)(i.W,{htmlFor:"ccyear",children:"Time to autohide"}),Object(n.jsx)(i.M,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(n.jsxs)(i.E,{className:"my-2",children:[Object(n.jsx)(i.W,{htmlFor:"ccyear",children:"Position"}),Object(n.jsx)("select",{className:"form-control",value:b,onChange:function(t){d(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(n.jsx)("option",{children:t},e)}))})]}),Object(n.jsxs)(i.E,{variant:"custom-checkbox",className:"my-2",children:[Object(n.jsx)(i.N,{id:"fade",checked:C,onChange:function(t){E(t.target.checked)},custom:!0}),Object(n.jsx)(i.W,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(n.jsxs)(i.E,{variant:"custom-checkbox",className:"my-2",children:[Object(n.jsx)(i.N,{id:"close",custom:!0,checked:S,onChange:function(t){N(t.target.checked)}}),Object(n.jsx)(i.W,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(n.jsx)(i.d,{className:"mr-1 w-25",color:"success",onClick:function(){u([].concat(Object(r.a)(c),[{position:b,autohide:f&&y,closeButton:S,fade:C}]))},children:"Add toast"})]})}),Object(n.jsx)(i.q,{sm:"12",lg:"6",children:Object.keys(T).map((function(t){return Object(n.jsx)(i.Ib,{position:t,children:T[t].map((function(e,c){return Object(n.jsxs)(i.Fb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(n.jsx)(i.Hb,{closeButton:e.closeButton,children:"Toast title"}),Object(n.jsx)(i.Gb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=10.e4403d66.chunk.js.map