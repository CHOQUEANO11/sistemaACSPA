(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7,37],{623:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(624);function n(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c.a)(e,t):void 0}}},624:function(e,t,r){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}r.d(t,"a",(function(){return c}))},625:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(623);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],c=!0,n=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(c=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);c=!0);}catch(s){n=!0,i=s}finally{try{c||null==a.return||a.return()}finally{if(n)throw i}}return r}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},630:function(e,t,r){"use strict";var c=r(640);r(638);t.a=c.a.initializeApp({apiKey:"AIzaSyA2izCgMGp6HPJBBQOExAwS8tqOqoROodM",authDomain:"acspmbm-2a56d.firebaseapp.com",projectId:"acspmbm-2a56d",storageBucket:"acspmbm-2a56d.appspot.com",messagingSenderId:"239970468989",appId:"1:239970468989:web:ae6452602cb799014f9d14"})},636:function(e,t,r){e.exports=r(380)},637:function(e,t,r){"use strict";function c(e,t,r,c,n,i,l){try{var a=e[i](l),s=a.value}catch(o){return void r(o)}a.done?t(s):Promise.resolve(s).then(c,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var l=e.apply(t,r);function a(e){c(l,n,i,a,s,"next",e)}function s(e){c(l,n,i,a,s,"throw",e)}a(void 0)}))}}r.d(t,"a",(function(){return n}))},641:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var c=r(624);var n=r(623);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},644:function(e,t,r){"use strict";r.r(t);var c=r(17),n=(r(1),r(621)),i=r.p+"static/media/img01.e0f8c456.jpeg",l=r.p+"static/media/img02.ef05119c.jpeg",a=r.p+"static/media/img03.5fc33ace.jpeg";t.default=function(){return Object(c.jsx)(n.q,{xs:"12",children:Object(c.jsxs)(n.f,{style:{backgroundColor:"#7159c1"},children:[Object(c.jsx)(n.j,{style:{textAlign:"center",fontSize:20},children:"Trabalhando para oferecer o melhor para voc\xea!"}),Object(c.jsx)(n.g,{children:Object(c.jsxs)(n.k,{animate:!0,autoSlide:3e3,children:[Object(c.jsx)(n.n,{}),Object(c.jsxs)(n.o,{children:[Object(c.jsxs)(n.p,{children:[Object(c.jsx)("img",{style:{width:"100%",height:"500px"},src:i,alt:"slide 1"}),Object(c.jsxs)(n.l,{children:[Object(c.jsx)("h3",{children:"TEXTO"}),Object(c.jsx)("p",{children:"Texto 01"})]})]}),Object(c.jsxs)(n.p,{children:[Object(c.jsx)("img",{style:{width:"100%",height:"500px"},src:l,alt:"slide 2"}),Object(c.jsxs)(n.l,{children:[Object(c.jsx)("h3",{children:"TEXTO"}),Object(c.jsx)("p",{children:"Texto 02"})]})]}),Object(c.jsxs)(n.p,{children:[Object(c.jsx)("img",{style:{width:"100%",height:"500px"},src:a,alt:"slide 3"}),Object(c.jsxs)(n.l,{children:[Object(c.jsx)("h3",{children:"TEXTO"}),Object(c.jsx)("p",{children:"Texto 03"})]})]})]}),Object(c.jsx)(n.m,{direction:"prev"}),Object(c.jsx)(n.m,{direction:"next"})]})})]})})}},689:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var c=r(636),n=r.n(c),i=r(17),l=r(641),a=r(637),s=r(625),o=r(621),j=r(653),d=r(1),O=r(160),h=(r(381),r(630)),b=r(644),u=function(e){var t={};return e.nome||(t.nome=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Insira um Email V\xe1lido"):t.email=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"}),e.rg?e.rg.length>20&&(t.rg="Must be 20 characters or less"):t.rg=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"}),e.cpf?e.cpf.length>20&&(t.cpf="Must be 20 characters or less"):t.cpf=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"}),e.data||(t.data=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.naturalidade||(t.naturalidade=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.endere\u00e7o||(t.endere\u00e7o=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.bairro||(t.bairro=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.municipio||(t.municipio=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.cep||(t.cep=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.tel||(t.tel=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.cel||(t.cel=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.pai||(t.pai=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.mae||(t.mae=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.grad||(t.grad=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.orgao||(t.orgao=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.situacao||(t.situacao=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.matricula||(t.matricula=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.inclusao||(t.inclusao=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.atuacao||(t.atuacao=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),e.sede||(t.sede=Object(i.jsx)("p",{style:{color:"red"},children:"Esse Campo \xe9 Obrig\xe1torio"})),t};function x(){var e=Object(d.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],x=Object(d.useState)(null),p=Object(s.a)(x,2),m=p[0],E=p[1],g=Object(d.useState)(null),v=Object(s.a)(g,2),A=v[0],f=v[1],C=Object(d.useState)(null),y=Object(s.a)(C,2),N=y[0],T=y[1],I=Object(d.useState)(null),R=Object(s.a)(I,2),M=R[0],S=R[1],D=Object(d.useState)([]),q=Object(s.a)(D,2),L=q[0],F=q[1],w=Object(d.useState)(""),U=Object(s.a)(w,2),P=U[0],W=U[1];function G(){return(G=Object(a.a)(n.a.mark((function e(t){var r,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],c=h.a.storage().ref(),i=c.child(r.name),e.next=5,i.put(r);case 5:return e.t0=E,e.next=8,i.getDownloadURL();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(a.a)(n.a.mark((function e(t){var r,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],c=h.a.storage().ref(),i=c.child(r.name),e.next=5,i.put(r);case 5:return e.t0=f,e.next=8,i.getDownloadURL();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){var e=L;""!==P?F(e):setTimeout((function(){F(e)}),1e3)}var V=Object(j.a)({initialValues:{nome:"",email:"",rg:"",cpf:"",data:"",naturalidade:"","endere\xe7o":"",bairro:"",municipio:"",cep:"",tel:"",cel:"",pai:"",mae:"",grad:"",orgao:"",situacao:"",matricula:"",inclusao:"",atuacao:"",sede:"",status:"ATIVO"},validate:u,onSubmit:function(e){null!==m&&null!==A?(h.a.firestore().collection("users").add({nome:e.nome,email:e.email,rg:e.rg,cpf:e.cpf,data:e.data,naturalidade:e.naturalidade,"endere\xe7o":e.endere\u00e7o,bairro:e.bairro,municipio:e.municipio,cep:e.cep,tel:e.tel,cel:e.cel,pai:e.pai,mae:e.mae,grad:e.grad,orgao:e.orgao,situacao:e.situacao,matricula:e.matricula,inclusao:e.inclusao,atuacao:e.atuacao,sede:e.sede,dependente:L,contracheque:A,rgMilitar:m,status:"ATIVO"}),O.b.success("Militar foi Inserido com sucesso"),V.resetForm(),c(!0)):O.b.error("Insira a c\xf3pia do ContraCheque ou RG Militar ")}});return Object(i.jsx)("div",{children:!1===r?Object(i.jsx)(o.qb,{children:Object(i.jsx)(o.q,{xl:"12",children:Object(i.jsxs)(o.f,{children:[Object(i.jsx)(o.j,{style:{fontSize:20,textAlign:"center"},children:"Formul\xe1rio de Inclus\xe3o"}),Object(i.jsx)(o.g,{children:Object(i.jsx)("div",{id:"accordion",children:Object(i.jsx)("form",{onSubmit:V.handleSubmit,children:Object(i.jsx)(o.f,{className:"mb-0",children:Object(i.jsx)(o.g,{children:Object(i.jsx)(o.q,{xs:"12",sm:"12",children:Object(i.jsx)(o.f,{children:Object(i.jsxs)(o.g,{children:[Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"NOME"}),Object(i.jsx)(o.M,{id:"nome",name:"nome",type:"text",placeholder:"Digite o nome completo",onChange:V.handleChange,value:V.values.nome}),V.errors.nome?Object(i.jsx)("div",{children:V.errors.nome}):null]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"8",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"vat",children:"EMAIL"}),Object(i.jsx)(o.M,{type:"email",id:"email",name:"email",placeholder:"Digite o Email",autoComplete:"email",onChange:V.handleChange,value:V.values.email}),V.errors.email?Object(i.jsx)("div",{children:V.errors.email}):null]})}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"vat",children:"RG"}),Object(i.jsx)(o.M,{type:"number",id:"rg",name:"rg",placeholder:"Digite o RG",inputMode:"number",onChange:V.handleChange,value:V.values.rg}),V.errors.rg?Object(i.jsx)("div",{children:V.errors.rg}):null]})})]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"cpf",children:"CPF"}),Object(i.jsx)(o.M,{type:"number",id:"cpf",name:"cpf",placeholder:"Digite o cpf",onChange:V.handleChange,value:V.values.cpf}),V.errors.cpf?Object(i.jsx)("div",{children:V.errors.cpf}):null]})}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"vat",children:"DATA DE NASCIMENTO"}),Object(i.jsx)(o.M,{type:"date",id:"data",name:"data",onChange:V.handleChange,value:V.values.data,placeholder:"Digite a data de nascimento"}),V.errors.data?Object(i.jsx)("div",{children:V.errors.data}):null]})}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"vat",children:"NATURALIDADE"}),Object(i.jsx)(o.M,{type:"text",name:"naturalidade",id:"naturalidade",placeholder:"Digite a naturalidade",onChange:V.handleChange,value:V.values.naturalidade}),V.errors.naturalidade?Object(i.jsx)("div",{children:V.errors.naturalidade}):null]})})]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"6",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"street",children:"ENDERE\xc7O"}),Object(i.jsx)(o.M,{id:"endere\xe7o",type:"text",name:"endere\xe7o",placeholder:"Digite o endere\xe7o",onChange:V.handleChange,value:V.values.endere\u00e7o}),V.errors.endere\u00e7o?Object(i.jsx)("div",{children:V.errors.endere\u00e7o}):null]})}),Object(i.jsx)(o.q,{xs:"6",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"street",children:"BAIRRO"}),Object(i.jsx)(o.M,{id:"bairro",type:"text",name:"bairro",placeholder:"Digite o bairro",onChange:V.handleChange,value:V.values.bairro}),V.errors.bairro?Object(i.jsx)("div",{children:V.errors.bairro}):null]})})]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"city",children:"MUNIC\xcdPIO"}),Object(i.jsx)(o.M,{id:"municipio",type:"text",name:"municipio",placeholder:"Digite o munic\xedpio",onChange:V.handleChange,value:V.values.municipio}),V.errors.municipio?Object(i.jsx)("div",{children:V.errors.municipio}):null]})}),Object(i.jsx)(o.q,{xs:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"postal-code",children:"CEP"}),Object(i.jsx)(o.M,{id:"cep",type:"number",name:"cep",placeholder:"Digite o cep",onChange:V.handleChange,value:V.values.cep}),V.errors.cep?Object(i.jsx)("div",{children:V.errors.cep}):null]})}),Object(i.jsx)(o.q,{xs:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"postal-code",children:"TELEFONE FIXO"}),Object(i.jsx)(o.M,{id:"tel",type:"number",name:"tel",placeholder:"Digite o telefone fixo",onChange:V.handleChange,value:V.values.tel}),V.errors.tel?Object(i.jsx)("div",{children:V.errors.tel}):null]})}),Object(i.jsx)(o.q,{xs:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"postal-code",children:"TELEFONE CELULAR (ZAP)"}),Object(i.jsx)(o.M,{id:"cel",type:"number",name:"cel",placeholder:"Digite o celular",onChange:V.handleChange,value:V.values.cel}),V.errors.cel?Object(i.jsx)("div",{children:V.errors.cel}):null]})})]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"6",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"NOME DO PAI"}),Object(i.jsx)(o.M,{id:"pai",type:"text",name:"pai",placeholder:"Digite o nome do pai",onChange:V.handleChange,value:V.values.pai}),V.errors.pai?Object(i.jsx)("div",{children:V.errors.pai}):null]})}),Object(i.jsx)(o.q,{xs:"6",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"NOME DO M\xc3E"}),Object(i.jsx)(o.M,{id:"mae",type:"text",name:"mae",placeholder:"Digite o nome da m\xe3e",onChange:V.handleChange,value:V.values.mae})," ",V.errors.mae?Object(i.jsx)("div",{children:V.errors.mae}):null]})})]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"3",md:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"POST/GRAD"}),Object(i.jsxs)(o.rb,{custom:!0,name:"grad",id:"grad",onChange:V.handleChange,value:V.values.grad,children:[Object(i.jsx)("option",{value:"0",children:"Selecionar"}),Object(i.jsx)("option",{value:"CORONEL",children:"CORONEL"}),Object(i.jsx)("option",{value:"TENENTE COTONEL",children:"TENENTE COTONEL"}),Object(i.jsx)("option",{value:"MAJOR",children:"MAJOR"}),Object(i.jsx)("option",{value:"CAPIT\xc3O",children:"CAPIT\xc3O"}),Object(i.jsx)("option",{value:"1\xba TENENTE",children:"1\xba TENENTE"}),Object(i.jsx)("option",{value:"2\xba TENENTE",children:"2\xba TENENTE"}),Object(i.jsx)("option",{value:"ASPIRANTE A OFICIAL",children:"ASPIRANTE A OFICIAL"}),Object(i.jsx)("option",{value:"ALUNO OFICIAL",children:"ALUNO OFICIAL"}),Object(i.jsx)("option",{value:"SUB TENENTE",children:"SUB TENENTE"}),Object(i.jsx)("option",{value:"1\xba SARGENTO",children:"1\xba SARGENTO"}),Object(i.jsx)("option",{value:"2\xba SARGENTO",children:"2\xba SARGENTO"}),Object(i.jsx)("option",{value:"3\xba SARGENTO",children:"3\xba SARGENTO"}),Object(i.jsx)("option",{value:"CABO",children:"CABO"}),Object(i.jsx)("option",{value:"SOLDADO",children:"SOLDADO"}),Object(i.jsx)("option",{value:"ALUNO SOLDADO",children:"ALUNO SOLDADO"})]}),V.errors.grad?Object(i.jsx)("div",{children:V.errors.grad}):null]})}),Object(i.jsx)(o.q,{xs:"3",md:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"ORG\xc3O"}),Object(i.jsxs)(o.rb,{custom:!0,name:"orgao",id:"orgao",onChange:V.handleChange,value:V.values.orgao,children:[Object(i.jsx)("option",{value:"0",children:"Selecionar"}),Object(i.jsx)("option",{value:"POL\xcdCIA MILITAR",children:"POL\xcdCIA MILITAR"}),Object(i.jsx)("option",{value:"CORPO DE BOMBEIROS",children:"CORPO DE BOMBEIROS"})]}),V.errors.orgao?Object(i.jsx)("div",{children:V.errors.orgao}):null]})}),Object(i.jsx)(o.q,{xs:"3",md:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"SITUA\xc7\xc3O FUNCIONAL"}),Object(i.jsxs)(o.rb,{custom:!0,name:"situacao",id:"situacao",onChange:V.handleChange,value:V.values.situacao,children:[Object(i.jsx)("option",{value:"0",children:"Selecionar"}),Object(i.jsx)("option",{value:"ATIVA",children:"ATIVA"}),Object(i.jsx)("option",{value:"RESERVA REMUNERADA",children:"RESERVA REMUNERADA"})]}),V.errors.situacao?Object(i.jsx)("div",{children:V.errors.situacao}):null]})}),Object(i.jsx)(o.q,{xs:"3",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"text",children:"MATRICULA FUNCIONAL"}),Object(i.jsx)(o.M,{name:"matricula",id:"matricula",type:"number",inputMode:"number",placeholder:"Digite a matricula",onChange:V.handleChange,value:V.values.matricula}),V.errors.matricula?Object(i.jsx)("div",{children:V.errors.matricula}):null]})})]}),Object(i.jsxs)(o.E,{row:!0,className:"my-0",children:[Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"date",children:"DATA DA INCLUS\xc3O"}),Object(i.jsx)(o.M,{id:"inclusao",name:"inclusao",type:"date",placeholder:"digite a data",onChange:V.handleChange,value:V.values.inclusao}),V.errors.inclusao?Object(i.jsx)("div",{children:V.errors.inclusao}):null]})}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"date",children:"LOCAL ATUAL DE ATUA\xc7\xc3O"}),Object(i.jsx)(o.M,{id:"atuacao",name:"atuacao",type:"text",placeholder:"digite o local",onChange:V.handleChange,value:V.values.atuacao})," ",V.errors.atuacao?Object(i.jsx)("div",{children:V.errors.atuacao}):null]})}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{htmlFor:"name",children:"GR\xcaMIO"}),Object(i.jsxs)(o.rb,{custom:!0,name:"sede",id:"sede",onChange:V.handleChange,value:V.values.sede,children:[Object(i.jsx)("option",{value:"0",children:"Selecionar"}),Object(i.jsx)("option",{value:"BEL\xc9M",children:"BEL\xc9M"}),Object(i.jsx)("option",{value:"CASTANHAL",children:"CASTANHAL"}),Object(i.jsx)("option",{value:"CAPANEMA",children:"CAPANEMA"}),Object(i.jsx)("option",{value:"PARAGOMINAS",children:"PARAGOMINAS"}),Object(i.jsx)("option",{value:"MARAB\xc1",children:"MARAB\xc1"}),Object(i.jsx)("option",{value:"PARAUAPEBAS",children:"PARAUAPEBAS"}),Object(i.jsx)("option",{value:"CONCEI\xc7\xc3O DO ARAGUAIA",children:"CONCEI\xc7\xc3O DO ARAGUAIA"}),Object(i.jsx)("option",{value:"XINGUARA",children:"XINGUARA"}),Object(i.jsx)("option",{value:"REDEN\xc7\xc3O",children:"REDEN\xc7\xc3O"}),Object(i.jsx)("option",{value:"SOURE",children:"SOURE"}),Object(i.jsx)("option",{value:"TUCURU\xcd",children:"TUCURU\xcd"}),Object(i.jsx)("option",{value:"SANTAR\xc9M",children:"SANTAR\xc9M"}),Object(i.jsx)("option",{value:"MONTE ALEGRE",children:"MONTE ALEGRE"}),Object(i.jsx)("option",{value:"ORIXIMIN\xc1",children:"ORIXIMIN\xc1"}),Object(i.jsx)("option",{value:"ALTAMIRA",children:"ALTAMIRA"}),Object(i.jsx)("option",{value:"ITAITUBA",children:"ITAITUBA"})]}),V.errors.sede?Object(i.jsx)("div",{children:V.errors.sede}):null]})}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsxs)(o.W,{htmlFor:"date",children:[" ","NOME DO DEPENDENTE"]}),Object(i.jsx)(o.M,{id:"nomedep",name:"nomedep",type:"text",placeholder:"digite o nome do dependente",onChange:function(e){return T(e.target.value)},value:N})," "]})})," ",Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsxs)(o.W,{htmlFor:"date",children:[" ","CPF DO DEPENDENTE"]}),Object(i.jsx)(o.M,{id:"nomedep",name:"nomedep",type:"number",inputMode:"numeric",placeholder:"digite o CPF do dependente",onChange:function(e){return S(e.target.value)},value:M})," "]})}),Object(i.jsxs)(o.q,{xs:"4",children:[Object(i.jsxs)(o.d,{color:"success",style:{width:100,marginTop:10,marginLeft:10},onClick:function(){F([].concat(Object(l.a)(L),[{nome:N,cpf:M}]))},children:[" ","Adicionar"]})," "]}),0!==L.length?Object(i.jsxs)(o.q,{children:[Object(i.jsx)(o.W,{htmlFor:"date",children:" DEPENDENTES"}),L.map((function(e){var t=e;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.E,{children:Object(i.jsxs)("p",{children:["NOME: ",e.nome," CPF: ",e.cpf," "]})}),Object(i.jsx)(o.E,{children:Object(i.jsxs)(o.d,{color:"danger",style:{width:100},onClick:function(){W(t),k()},children:[" ","Remover"]})})]})}))]}):Object(i.jsx)(o.q,{xs:"4"}),Object(i.jsx)(o.q,{xs:"4"})," ",Object(i.jsx)(o.q,{xs:"4"}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{col:!0,htmlFor:"file-input",children:"CONTRACHEQUE"}),Object(i.jsx)(o.O,{id:"contracheque",name:"contracheque",type:"file",onChange:function(e){return B.apply(this,arguments)}}),null===A?Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("p",{style:{color:"red"},children:"Preencha esse campo"})]}):null]})}),null!==A?Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsx)(o.E,{children:Object(i.jsxs)(o.d,{color:"success",style:{width:200,marginTop:10},onClick:function(){window.open(A,"_blank")},children:[" ","Visualizar Contracheque"]})})}):Object(i.jsx)(o.q,{xs:"4"}),Object(i.jsx)(o.q,{xs:"4"}),Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsxs)(o.E,{children:[Object(i.jsx)(o.W,{col:!0,md:"6",htmlFor:"file-input",children:"RG MILITAR"}),Object(i.jsx)(o.O,{id:"rgMilitar",name:"rgMilitar",type:"file",onChange:function(e){return G.apply(this,arguments)}}),null===m?Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("p",{style:{color:"red"},children:"Preencha esse campo"})]}):null]})}),null!==m?Object(i.jsx)(o.q,{xs:"4",children:Object(i.jsx)(o.E,{children:Object(i.jsxs)(o.d,{color:"success",style:{width:200,marginTop:10},onClick:function(){window.open(m,"_blank")},children:[" ","Visualizar RG Militar"]})})}):null]}),Object(i.jsx)(o.E,{row:!0,className:"my-2",children:Object(i.jsx)(o.q,{className:"mb-6 mb-xl-0 text-center",children:Object(i.jsx)(o.d,{type:"submit",style:{marginTop:20,width:200},color:"primary",children:"Salvar formul\xe1rio"})})})]})})})})})})})})]})})}):Object(i.jsx)("div",{children:Object(i.jsx)(b.default,{})})})}}}]);
//# sourceMappingURL=7.0f44c1e1.chunk.js.map