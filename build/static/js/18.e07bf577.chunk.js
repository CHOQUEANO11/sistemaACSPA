(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{623:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(624);function n(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c.a)(e,t):void 0}}},624:function(e,t,r){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}r.d(t,"a",(function(){return c}))},625:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(623);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],c=!0,n=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(c=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);c=!0);}catch(o){n=!0,a=o}finally{try{c||null==i.return||i.return()}finally{if(n)throw a}}return r}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},630:function(e,t,r){"use strict";var c=r(640);r(638);t.a=c.a.initializeApp({apiKey:"AIzaSyA2izCgMGp6HPJBBQOExAwS8tqOqoROodM",authDomain:"acspmbm-2a56d.firebaseapp.com",projectId:"acspmbm-2a56d",storageBucket:"acspmbm-2a56d.appspot.com",messagingSenderId:"239970468989",appId:"1:239970468989:web:ae6452602cb799014f9d14"})},683:function(e,t,r){"use strict";r.r(t);var c=r(17),n=r(625),a=r(1),s=r(20),i=r(621),o=r(626),l=r(630),u=r(160);t.default=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),r=t[0],j=t[1],d=Object(a.useState)(""),b=Object(n.a)(d,2),m=b[0],h=b[1],p=Object(s.g)();return Object(c.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(c.jsx)(i.s,{children:Object(c.jsx)(i.qb,{className:"justify-content-center",children:Object(c.jsx)(i.q,{md:"8",children:Object(c.jsxs)(i.i,{children:[Object(c.jsx)(i.f,{className:"p-4",children:Object(c.jsx)(i.g,{children:Object(c.jsxs)(i.D,{children:[Object(c.jsx)("h1",{style:{textAlign:"center"},children:"Login"}),Object(c.jsx)("p",{className:"text-muted",children:"Digite seus dados para prosseguir"}),Object(c.jsxs)(i.P,{className:"mb-3",children:[Object(c.jsx)(i.R,{children:Object(c.jsx)(i.S,{children:Object(c.jsx)(o.a,{name:"cil-user"})})}),Object(c.jsx)(i.M,{type:"email",placeholder:"Digite seu email",autoComplete:"email",onChange:function(e){return j(e.target.value)},value:r})]}),Object(c.jsxs)(i.P,{className:"mb-4",children:[Object(c.jsx)(i.R,{children:Object(c.jsx)(i.S,{children:Object(c.jsx)(o.a,{name:"cil-lock-locked"})})}),Object(c.jsx)(i.M,{type:"password",placeholder:"Digite sua senha",autoComplete:"current-password",onChange:function(e){return h(e.target.value)},value:m})]}),Object(c.jsxs)(i.qb,{children:[Object(c.jsx)(i.q,{xs:"6",children:Object(c.jsx)(i.d,{onClick:function(){l.a.auth().signInWithEmailAndPassword(r,m).then((function(e){console.log("USER",e),p.push("/home"),u.b.success("Seja bem vindo(@), ".concat(r))})).catch((function(e){u.b.error("Desculpe, voc\xea n\xe3o \xe9 um ADMINISTRADOR!"),console.log("ERROR",e)}))},color:"primary",className:"px-4",children:"Entrar"})}),Object(c.jsx)(i.q,{xs:"6",className:"text-right",children:Object(c.jsx)(i.d,{color:"link",className:"px-0",children:"Esqueceu a senha?"})})]})]})})}),Object(c.jsx)(i.f,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"},children:Object(c.jsx)(i.g,{className:"text-center",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{style:{marginTop:10},children:"ACSPMBMPA"}),Object(c.jsx)("img",{src:"avatars/fotoLogo.png",style:{width:170,height:170,textAlign:"center",borderRadius:100},alt:"admin@bootstrapmaster.com"}),Object(c.jsx)("h5",{style:{marginTop:10},children:"Diretoria Uni\xe3o e Justi\xe7a."})]})})})]})})})})})}}}]);
//# sourceMappingURL=18.e07bf577.chunk.js.map