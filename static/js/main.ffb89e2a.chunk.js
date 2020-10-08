(this["webpackJsonpuser-dashboard"]=this["webpackJsonpuser-dashboard"]||[]).push([[0],{32:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),s=n(2),c=n(6),l=Object(c.a)(),u=n(13),i=n(26),m=n(27),d="USERS_LOGIN_REQUEST",f="USERS_LOGIN_SUCCESS",E="USERS_LOGIN_FAILURE",p="USERS_LOGOUT",g="USERS_GETALL_REQUEST",b="USERS_GETALL_SUCCESS",h="USERS_GETALL_FAILURE",v="USERS_DELETE_REQUEST",S="USERS_DELETE_SUCCESS",O="USERS_DELETE_FAILURE",j="GET_USERS_REQUEST",y="GET_USERS_SUCCESS",U="GET_USERS_FAILURE",T="GET_POSTS_REQUEST",_="GET_POSTS_SUCCESS",w="GET_POSTS_FAILURE",N=JSON.parse(localStorage.getItem("user")),R=N?{loggedIn:!0,user:N}:{};var L=n(31),I=n(4);var C=Object(u.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{users:t.users};case d:return{loggingIn:!0,user:t.user};case f:return{loggedIn:!0,user:t.user};case E:case p:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0};case y:return{users:t.users};case U:return{error:t.error};case v:return Object(I.a)(Object(I.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(I.a)(Object(I.a)({},e),{},{deleting:!0}):e}))});case S:return{users:e.users.filter((function(e){return e.id!==t.id}))};case O:return Object(I.a)(Object(I.a)({},e),{},{users:e.users.map((function(e){if(e.id===t.id){e.deleting;var n=Object(L.a)(e,["deleting"]);return Object(I.a)(Object(I.a)({},n),{},{deleteError:t.error})}return e}))});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case _:return{posts:t.posts};case w:return{error:t.error};default:return e}}}),G=Object(m.createLogger)(),P=Object(u.d)(C,Object(u.a)(i.a,G));function A(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var k=n(3),x={config:JSON.stringify({apiUrl:"http://localhost:4000"})},J={getUsers:function(){return fetch("https://jsonplaceholder.typicode.com/users",{method:"GET",headers:{"Content-Type":"application/json"}}).then(D)},logout:z,getPosts:function(){return fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET",headers:{"Content-Type":"application/json"}}).then(D)},getAll:function(){var e={method:"GET",headers:A()};return fetch("".concat(x.apiUrl,"/users"),e).then(D)},getById:function(e){var t={method:"GET",headers:A()};return fetch("".concat(x.apiUrl,"/users/").concat(e),t).then(D)},update:function(e){var t={method:"PUT",headers:Object(I.a)(Object(I.a)({},A()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(x.apiUrl,"/users/").concat(e.id),t).then(D)},delete:function(e){var t={method:"DELETE",headers:A()};return fetch("".concat(x.apiUrl,"/users/").concat(e),t).then(D)}};function z(){localStorage.removeItem("user")}function D(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&z();var r=n&&n.message||e.statusText;return Promise.reject(r)}return n}))}var F={getUsers:function(){return function(e){e({type:j}),J.getUsers().then((function(t){e(function(e){return{type:y,users:e}}(t))}),(function(t){console.log(t.toString()),e(function(e){return{type:U,error:e}}(t.toString()))}))}},login:function(e,t,n){return function(e){e(function(e){return{type:f,user:e}}(t)),l.push(n)}},getPosts:function(){return function(e){e({type:T}),J.getPosts().then((function(t){e(function(e){return{type:_,posts:e}}(t))}),(function(t){console.log(t.toString()),e(function(e){return{type:w,error:e}}(t.toString()))}))}},logout:function(){return J.logout(),{type:p}},getAll:function(){return function(e){e({type:g}),J.getAll().then((function(t){return e(function(e){return{type:b,users:e}}(t))}),(function(t){return e(function(e){return{type:h,error:e}}(t.toString()))}))}}};var Q=n(9),B=n(12),H=n.n(B);function q(){Object(s.c)((function(e){return e.users.users})),Object(s.c)((function(e){return e.posts.posts}));var e=Object(s.c)((function(e){return e.authentication.user}));console.log("user ",e);Object(s.b)();return a.a.createElement("div",{className:"col-lg-8 offset-lg-2"},a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement("h1",null,"Hi ",e.name,"!"),a.a.createElement("div",{style:{fontSize:26}},a.a.createElement(Q.a,{to:"/login"},"Logout"))),a.a.createElement("div",null,a.a.createElement(Q.a,{to:"/users"},"Users")),a.a.createElement("div",null,a.a.createElement(Q.a,{to:"/blogs"},"Blogs")))}var $=n(17),K=n(22);function M(){var e=Object(r.useState)({username:"",password:""}),t=Object(K.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),l=Object(K.a)(c,2),u=l[0],i=l[1],m=n.username,d=n.password,f=Object(s.c)((function(e){return e.authentication.loggingIn})),E=Object(s.c)((function(e){return e.users.users})),p=Object(s.b)(),g=Object(k.g)();function b(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(I.a)(Object(I.a)({},e),{},Object($.a)({},n,r))}))}return Object(r.useEffect)((function(){p(F.getUsers()),p(F.getPosts())}),[]),a.a.createElement("div",{className:"col-lg-8 offset-lg-2"},a.a.createElement("h2",null,"Login"),a.a.createElement("form",{name:"form",onSubmit:function(e){if(console.log("users ",E),e.preventDefault(),function(){if("undefined"!==typeof n.username){if(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(n.username))return!0}return!1}()){if(console.log("validation successful",m,d,m==d),i(!0),m&&d&&m==d){var t=(g.state||{from:{pathname:"/home"}}).from,r=E.findIndex((function(e){return e.email===m}));r>-1&&p(F.login(m,E[r],t))}}else console.log("Please enter valid email address.")}},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",null,"Username"),a.a.createElement("input",{type:"text",name:"username",value:m,onChange:b,className:"form-control"+(u&&!m?" is-invalid":"")}),u&&!m&&a.a.createElement("div",{className:"invalid-feedback"},"Username is required")),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",null,"Password"),a.a.createElement("input",{type:"password",name:"password",value:d,onChange:b,className:"form-control"+(u&&!d?" is-invalid":"")}),u&&!d&&a.a.createElement("div",{className:"invalid-feedback"},"Password is required")),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{className:"btn btn-primary"},f&&a.a.createElement("span",{className:"spinner-border spinner-border-sm mr-1"}),"Login"))))}function V(){var e=Object(s.c)((function(e){return e.users.users})),t=(Object(s.c)((function(e){return e.authentication.user})),Object(s.b)(),[{name:"id",selector:"id"},{name:"name",selector:"name",sortable:!0},{name:"username",selector:"username",sortable:!0},{name:"email",selector:"email",sortable:!0},{name:"address",selector:"address",sortable:!0,cell:function(e){return a.a.createElement("div",null,a.a.createElement("div",null,e.address.street),a.a.createElement("div",null,e.address.suite),a.a.createElement("div",null,e.address.city),a.a.createElement("div",null,e.address.zipcode))}},{name:"phone",selector:"phone",sortable:!0},{name:"website",selector:"website",sortable:!0},{name:"company",selector:"company",sortable:!0,cell:function(e){return a.a.createElement("div",null,a.a.createElement("div",null,e.company.name),a.a.createElement("div",null,e.company.catchPhrase),a.a.createElement("div",null,e.company.bs))}}]);return a.a.createElement("div",{className:"col-lg-8 offset-lg-2"},e.length>0?a.a.createElement(H.a,{title:"Users",columns:t,data:e,highlightOnHover:!0}):"No details")}function W(){var e=Object(s.c)((function(e){return e.posts.posts}));Object(s.c)((function(e){return e.authentication.user})),Object(s.b)();return a.a.createElement("div",{className:"col-lg-8 offset-lg-2"},e.length>0?a.a.createElement(H.a,{title:"Posts",highlightOnHover:!0,columns:[{name:"userId",selector:"userId"},{name:"id",selector:"id",sortable:!0},{name:"title",selector:"title",sortable:!0,wrap:!0},{name:"body",selector:"body",sortable:!0,wrap:!0}],data:e,pagination:!0,onRowClicked:function(e){console.log("on row click",e);var t={pathname:"/blogs/".concat(e.id)};l.push(t)}}):"No details")}function X(){var e=Object(s.c)((function(e){return e.posts.posts}));console.log("posts in home ",e);Object(s.c)((function(e){return e.authentication.user})),Object(s.b)();return a.a.createElement("div",{className:"col-lg-8 offset-lg-2"},e.length>0?a.a.createElement(H.a,{title:"Posts",highlightOnHover:!0,columns:[{name:"userId",selector:"userId"},{name:"id",selector:"id",sortable:!0},{name:"title",selector:"title",sortable:!0,wrap:!0},{name:"body",selector:"body",sortable:!0,wrap:!0}],data:e,pagination:!0}):"No details")}function Y(){Object(s.b)();return a.a.createElement("div",{className:"jumbotron"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"col-md-8 offset-md-2"},a.a.createElement(k.c,{history:l},a.a.createElement(k.d,null,a.a.createElement(k.b,{path:"/home",component:q}),a.a.createElement(k.b,{path:"/login",component:M}),a.a.createElement(k.b,{path:"/users",component:V}),a.a.createElement(k.b,{path:"/blogs",component:W}),a.a.createElement(k.b,{path:"/posts",component:X}),a.a.createElement(k.a,{from:"*",to:"/"}))))))}Object(o.render)(a.a.createElement(s.a,{store:P},a.a.createElement(Y,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ffb89e2a.chunk.js.map