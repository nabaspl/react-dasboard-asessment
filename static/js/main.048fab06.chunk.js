(this["webpackJsonpreact-dasboard-asessment"]=this["webpackJsonpreact-dasboard-asessment"]||[]).push([[0],Array(28).concat([function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(15),i=a.n(s),r=(a(36),a(37),a(10)),l=(a(38),a.p+"static/media/logo.8863ed33.svg"),j=(a(39),a(16)),o=a(0);function d(e){return Object(o.jsx)("ul",{className:"nav-menu",children:e.menuItems.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)(j.b,{to:"".concat(e.route,"?name=").concat(e.menuName),children:e.menuName})},t)}))})}function u(e){var t=Object(r.a)(e.menuLists,2),a=t[0],n=t[1];return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"header-wrapper",children:[Object(o.jsxs)("div",{className:"float-left",children:[Object(o.jsx)("img",{src:l,className:"logo"}),Object(o.jsx)(d,{menuItems:a},0)]}),Object(o.jsx)("div",{className:"float-right",children:Object(o.jsx)(d,{menuItems:n},0)})]})})}a(45);function b(e){return Object(o.jsx)("main",{className:"main-body",children:e.children})}a(46);function f(e){return Object(o.jsx)("div",{className:"main-wrapper",children:e.children})}a(47);function m(e){return Object(o.jsx)("article",{className:"side-nav",children:e.children})}a(48);function O(e){return Object(o.jsx)("section",{className:"main-contents",children:e.children})}a(49);function h(e){return Object(o.jsx)("div",{className:"side-nav-top",children:e.children})}a(50);function p(e){return Object(o.jsx)("div",{className:"side-nav-body",children:e.children})}a(51),a(52);var x=function(e){return Object(o.jsxs)("div",{className:"input-group",children:[e.icon&&Object(o.jsx)("img",{className:"input-icon",src:e.icon}),Object(o.jsx)("input",{type:e.type,name:e.name,id:e.id,value:e.value,onChange:e.onChange,className:"icon-input",placeholder:e.placeHolder})]})},v=a.p+"static/media/searchIcon.a09929bf.svg",N=a.p+"static/media/plusBtnImage.be276fc8.svg",g=a.p+"static/media/computerImage.9e39c7aa.svg";a(53);function y(e){return Object(o.jsx)("button",{type:e.type,name:e.name,id:e.id,onClick:e.onClickHandler,className:e.classLists,children:e.children})}function C(e){return Object(o.jsx)("img",{src:e.src,id:e.id,onClick:e.onClickHandler,className:"img-button"})}var S=a.p+"static/media/safeIcon.f55db50d.svg",I=(a(54),a.p+"static/media/icon_delete_inactive.2079621e.svg"),w=a.p+"static/media/icon_edit_active.580259f4.svg",D=a.p+"static/media/icon_folder.67131354.svg";function k(e){var t=Object(n.useState)(0),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(o.jsx)("div",{className:"list-group",children:Object(o.jsx)("ul",{id:e.id,className:"list-ul",children:e.items.map((function(t,a){return Object(o.jsx)("li",{className:"".concat(c==t.safeId?"active":""),onClick:function(){return a=t.safeId,s(a),void e.LiClickHandler(a);var a},children:Object(o.jsxs)("div",{className:"item-wrapper",children:[Object(o.jsx)("img",{src:e.itemIcon}),Object(o.jsxs)("div",{className:"about-item",children:[Object(o.jsx)("span",{className:"safe-name",children:t.safeName}),Object(o.jsx)("span",{className:"safe-last-updated-info",children:"Last updated: 2 days ago \u2022 USER SAFE"})]}),Object(o.jsxs)("div",{className:"actions",children:[Object(o.jsx)("span",{className:"action-icon-container",children:Object(o.jsx)("img",{src:w,onClick:function(){return a=t.safeId,void e.handelOnEdit(a);var a}})}),Object(o.jsx)("span",{className:"action-icon-container",children:Object(o.jsx)("img",{src:I,onClick:function(){return a=t.safeId,void e.handelOnDelete(a);var a}})})]})]})},a)}))})})}function L(e){return Object(o.jsx)("div",{className:"list-group",children:Object(o.jsx)("ul",{id:e.id,className:"list-ul",children:e.items.map((function(t,a){return Object(o.jsx)("li",{className:"".concat(e.isSelected),children:Object(o.jsxs)("div",{className:"item-wrapper",children:[Object(o.jsx)("img",{src:D}),Object(o.jsx)("div",{className:"about-item",children:Object(o.jsx)("span",{className:"safe-name",children:t})}),Object(o.jsx)("div",{className:"actions",children:Object(o.jsx)("span",{className:"action-icon-container",children:Object(o.jsx)("img",{src:I,onClick:function(){return function(t){e.handelOnDelete(t)}(a)}})})})]})},a)}))})})}var _=a(11),E=a(12),R=a(14),A=a(13),T=(a(55),document.getElementById("modal")),V=function(e){Object(R.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).element=document.createElement("div"),n.element.classList.add("modal"),n.element.id="myModal",n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){T.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){T.removeChild(this.element)}},{key:"render",value:function(){return Object(s.createPortal)(Object(o.jsx)("div",{className:"modal-content",children:this.props.children}),this.element)}}]),a}(n.Component),F=a(18),H=a(3),U=(a(56),function(e){return Object(o.jsxs)("div",{className:"form-group",children:[e.label&&Object(o.jsx)("label",{className:"label",htmlFor:"input-field",children:e.label}),Object(o.jsx)("input",{type:e.type,name:e.name,id:e.id,value:e.value,onChange:e.onChange,className:e.classLists,placeholder:e.placeHolder})]})}),P=(a(57),function(e){return Object(o.jsxs)("div",{className:"form-group",children:[e.label&&Object(o.jsx)("label",{className:"label",htmlFor:"input-field",children:e.label}),Object(o.jsx)("select",{name:e.name,id:e.id,value:e.value,onChange:e.onChange,className:e.classLists,children:e.options.map((function(e,t){return Object(o.jsx)("option",{value:e.value,children:e.text},t)}))})]})}),M=(a(58),function(e){return Object(o.jsxs)("div",{className:"form-group",children:[e.label&&Object(o.jsx)("label",{className:"label",htmlFor:"input-field",children:e.label}),Object(o.jsx)("textarea",{name:e.name,id:e.id,onChange:e.onChange,className:e.classLists,rows:e.rows,value:e.value}),Object(o.jsx)("p",{className:"info",children:e.info})]})}),B=(a(28),a(7));function X(e){e.CurrentValue.safeId,e.CurrentValue.safeName,e.CurrentValue.ownerName,e.CurrentValue.safeType,e.CurrentValue.safeDescription;var t=Object(n.useState)(e.CurrentValue),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(B.b)((function(e){return e.SafeReducer.editSafes})),l=function(e){var t=e.target,a=t.name,n=t.value;s(Object(H.a)(Object(H.a)({},c),{},Object(F.a)({},a,n)))};return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.handleOnSubmit(c)},children:[Object(o.jsx)(U,{type:"hidden",name:"safeId",id:"safeId",value:c.safeId||0,onChange:l}),Object(o.jsxs)("div",{className:"form-header",children:[Object(o.jsx)("h1",{className:"h1",children:"Create Safe"}),Object(o.jsxs)("div",{className:"safe-details-group",children:[Object(o.jsx)("img",{className:"safe-image",src:S}),Object(o.jsx)("p",{className:"create-safe-desc",children:"A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe."})]})]}),Object(o.jsx)(U,{type:"text",id:"safeName",name:"safeName",value:c.safeName||"",onChange:l,label:"Safe Name"}),Object(o.jsx)(U,{type:"text",id:"ownerName",name:"ownerName",value:c.ownerName||"",onChange:l,label:"Owner Name"}),Object(o.jsx)(P,{id:"safeType",name:"safeType",options:[{value:"personal",text:"Personal"},{value:"public",text:"Public"}],value:c.safeType||"",onChange:l,label:"Type"}),Object(o.jsx)(M,{type:"text",id:"safeDescription",name:"safeDescription",value:c.safeDescription||"",rows:"5",onChange:l,label:"Description",info:"Please add a minimum of 10 characters"}),Object(o.jsxs)("div",{className:"button-group",children:[Object(o.jsx)("span",{className:"cancel-btn",onClick:e.CloseModal,children:"Cancel"}),i?Object(o.jsx)(y,{children:"+ Update"}):Object(o.jsx)(y,{children:"+ Create"})]})]})}var z=a(23),Y=a(31),J="safeCreate",W="safeDeleted",q="safeEdit",G="createSecret",K="setActiveSafe",Q="filterSafe",Z="deleteSecret",$=0,ee={safes:[],editSafes:!1,activeSafe:0,filter:""};var te=Object(z.a)({SafeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:if(t.payload.safeId){var a=e.safes.map((function(e){return e.safeId===t.payload.safeId?Object(H.a)(Object(H.a)({},e),t.payload):e}));return Object(H.a)(Object(H.a)({},e),{},{safes:a})}return Object(H.a)(Object(H.a)({},e),{},{safes:[].concat(Object(Y.a)(e.safes),[{safeId:++$,safeName:t.payload.safeName,ownerName:t.payload.ownerName,safeType:t.payload.safeType,safeDescription:t.payload.safeDescription,isSelected:!1,secrets:[]}])});case W:return{safes:e.safes.filter((function(e,a){return e.safeId!==t.payload}))};case q:return t.payload?Object(H.a)(Object(H.a)({},e),{},{editSafes:!0,editSafeData:e.safes.filter((function(e,a){return e.safeId===t.payload}))}):Object(H.a)(Object(H.a)({},e),{},{editSafes:!1,editSafeData:[]});case G:var n=e.safes.map((function(e){if(e.safeId===t.payload.safeId){var a=Object.assign({},e);return a.secrets.push(t.payload.secret),a}return e}));return Object(H.a)(Object(H.a)({},e),{},{safes:n});case K:return Object(H.a)(Object(H.a)({},e),{},{activeSafe:t.payload});case Q:return Object(H.a)(Object(H.a)({},e),{},{filter:t.payload});case Z:var c=e.safes.map((function(e){if(e.safeId===t.payload.safeId){var a=Object.assign({},e);return a.secrets.splice(t.payload.index,1),a}return e}));return Object(H.a)(Object(H.a)({},e),{},{safes:c});default:return e}}}),ae=te,ne=Object(z.b)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function ce(e){return{type:q,payload:e}}var se=a(30);a(60);function ie(e){var t=Object(se.debounce)((function(e){return ne.dispatch({type:Q,payload:e})}),500),a=Object(B.b)((function(e){return e.SafeReducer.safes}));return Object(o.jsxs)("div",{className:"sidebar-top-wrapper",children:[Object(o.jsx)("ul",{className:"safe-types",children:Object(o.jsxs)("li",{children:["All Safe ",Object(o.jsxs)("span",{className:"safe-count",children:["(",a.length,")"]})]})}),Object(o.jsx)(x,{icon:v,onChange:function(e){t(e.target.value)}})]})}function re(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),c=a[0],s=a[1],i=function(){s(!0)},l=function(){s(!1)},j=function(e){ne.dispatch({type:J,payload:e}),ne.dispatch(ce(0)),s(!1)},d={},u=Object(B.b)((function(e){return e.SafeReducer.safes})),b=Object(B.b)((function(e){return e.SafeReducer.filter}));b&&(u=u.filter((function(e,t){return e.safeName.toUpperCase().indexOf(b.toUpperCase())>-1})));var f=Object(B.b)((function(e){return e.SafeReducer.editSafes})),m=Object(B.b)((function(e){return e.SafeReducer.editSafeData}));return f&&(d=m[0]),u&&u.length?Object(o.jsxs)("div",{className:"sidebar-body-wrapper with-list",children:[Object(o.jsx)(k,{items:u,itemIcon:S,handelOnEdit:function(e){ne.dispatch(ce(e)),s(!0)},handelOnDelete:function(e){ne.dispatch({type:W,payload:e})},LiClickHandler:function(e){ne.dispatch({type:K,payload:e})}}),Object(o.jsx)(C,{src:N,onClickHandler:i}),c&&Object(o.jsx)(V,{children:Object(o.jsx)(X,{handleOnSubmit:j,CurrentValue:d,CloseModal:l})})]}):Object(o.jsxs)("div",{className:"sidebar-body-wrapper",children:[Object(o.jsxs)("div",{className:"list-empty-div",children:[Object(o.jsx)("img",{src:g}),Object(o.jsx)("span",{children:"Create a Safe to get started!"})]}),Object(o.jsx)(C,{src:N,onClickHandler:i}),c&&Object(o.jsx)(V,{children:Object(o.jsx)(X,{handleOnSubmit:j,CurrentValue:d,CloseModal:l})})]})}var le=a.p+"static/media/bannerImage.9f99e499.svg",je=a.p+"static/media/addFolderIcon.38580348.svg",oe=a.p+"static/media/secretsLockerImage.2ce52f81.svg";a(61);function de(e){var t={safeId:e.safeId,secret:e.secret},a=Object(n.useState)(t),c=Object(r.a)(a,2),s=c[0],i=c[1],l=function(e){var t=e.target,a=t.name,n=t.value;i(Object(H.a)(Object(H.a)({},s),{},Object(F.a)({},a,n)))};return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.handleOnSubmit(s)},children:[Object(o.jsx)(U,{type:"hidden",name:"safeId",id:"safeId",value:s.safeId||0,onChange:l}),Object(o.jsx)(U,{type:"text",id:"secret",name:"secret",value:s.secret||"",onChange:l,label:"Secret"}),Object(o.jsxs)("div",{className:"button-group",children:[Object(o.jsx)("span",{className:"cancel-btn",onClick:e.CloseModal,children:"Cancel"}),Object(o.jsx)(y,{children:"+ Create"})]})]})}function ue(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),c=a[0],s=a[1],i=function(){e.safe&&s(!0)};return Object(o.jsxs)("div",{className:"panel",children:[Object(o.jsxs)("div",{className:"panel-head",children:[Object(o.jsx)("span",{children:"Secrets"}),Object(o.jsx)("span",{children:Object(o.jsx)("img",{src:je,onClick:i})})]}),Object(o.jsxs)("div",{className:"panel-body",children:[e.secrets&&Object(o.jsx)(L,{items:e.secrets,itemIcon:je,handelOnDelete:function(t){var a={safeId:e.safe.safeId,index:t};ne.dispatch(function(e){return{type:W,payload:e}}(a))}}),!e.secrets&&Object(o.jsxs)("div",{className:"create-new-safe-wrapper",children:[Object(o.jsxs)("div",{className:"create-new-sec-info",children:[Object(o.jsx)("img",{src:oe}),Object(o.jsx)("p",{className:"about-sec",children:"You do not have acess to this Safe and cannot view it\u2019s contents"})]}),Object(o.jsx)(y,{onClickHandler:i,children:"+ ADD"})]})]}),c&&Object(o.jsx)(V,{children:Object(o.jsx)(de,{safeId:e.safe.safeId,secret:"",handleOnSubmit:function(e){ne.dispatch(function(e){return{type:G,payload:e}}(e)),s(!1)}})})]})}function be(e){return e.safe?Object(o.jsxs)("div",{className:"main-header",children:[Object(o.jsx)("img",{src:le}),Object(o.jsxs)("div",{className:"banner-safe-info",children:[Object(o.jsx)("h1",{children:e.safe.safeName}),Object(o.jsx)("p",{children:e.safe.safeDescription})]})]}):Object(o.jsxs)("div",{className:"main-header",children:[Object(o.jsx)("img",{src:le}),Object(o.jsxs)("div",{className:"banner-safe-info",children:[Object(o.jsx)("h1",{children:"No Safes Created Yet"}),Object(o.jsx)("p",{children:"Create a Safe to see your secrets, folders and permissions here"})]})]})}var fe=function(){var e,t,a,n=Object(B.b)((function(e){return e.SafeReducer.safes})),c=Object(B.b)((function(e){return e.SafeReducer.activeSafe}));return c&&(t=n.filter((function(e){return e.safeId==c})),e=(a=t.length?t[0]:[])?a.secrets:[]),Object(o.jsxs)(f,{children:[Object(o.jsxs)(m,{children:[Object(o.jsx)(h,{children:Object(o.jsx)(ie,{safesCount:n.lenght})}),Object(o.jsx)(p,{children:Object(o.jsx)(re,{})})]}),Object(o.jsxs)(O,{children:[Object(o.jsx)(be,{safe:a}),Object(o.jsx)(ue,{safe:a,secrets:e})]})]})},me=a(4);var Oe=function(){var e=new URLSearchParams(Object(me.g)().search).get("name");return Object(o.jsxs)(f,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(O,{children:Object(o.jsx)("h1",{children:e})})]})},he=function(e){Object(R.a)(a,e);var t=Object(A.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(f,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(O,{})]})}}]),a}(c.a.Component),pe=he;var xe=function(){var e=new URLSearchParams(Object(me.g)().search).get("name");return Object(o.jsxs)(f,{children:[Object(o.jsx)(m,{children:Object(o.jsx)("p",{children:e})}),Object(o.jsx)(O,{})]})},ve=function(e){Object(R.a)(a,e);var t=Object(A.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(f,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(O,{})]})}}]),a}(c.a.Component),Ne=ve,ge=function(e){Object(R.a)(a,e);var t=Object(A.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(f,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(O,{})]})}}]),a}(c.a.Component),ye=ge,Ce=function(e){Object(R.a)(a,e);var t=Object(A.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(f,{children:[Object(o.jsx)(m,{children:"this side nav  one"}),Object(o.jsx)(O,{})]})}}]),a}(c.a.Component),Se=Ce,Ie=[[{menuName:"safe",route:"/safe"},{menuName:"Vault AppRoles",route:"/vault"},{menuName:"Service Accounts",route:"/service"},{menuName:"IAM Service Accounts",route:"/iam"},{menuName:"Azure Active Directory",route:"/azure"}],[{menuName:"Documentation",route:"/documentation"},{menuName:"(Admin) Davis R.",route:"/user"}]];var we=function(){return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(u,{menuLists:Ie}),Object(o.jsx)(b,{children:Object(o.jsxs)(me.d,{children:[Object(o.jsx)(me.b,{exact:!0,path:"/",render:function(){return Object(o.jsx)(me.a,{to:"/safe"})}}),Object(o.jsx)(me.b,{path:"/safe",component:fe}),Object(o.jsx)(me.b,{path:"/vault",component:Oe}),Object(o.jsx)(me.b,{path:"/service",component:xe}),Object(o.jsx)(me.b,{path:"/iam",component:pe}),Object(o.jsx)(me.b,{path:"/azure",component:Se}),Object(o.jsx)(me.b,{path:"/documentation",component:ye}),Object(o.jsx)(me.b,{path:"/user",component:Ne})]})})]})},De=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(B.a,{store:ne,children:Object(o.jsx)(we,{})}),document.getElementById("root")),De()}]),[[62,1,2]]]);
//# sourceMappingURL=main.048fab06.chunk.js.map