(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(48)},34:function(e,a,t){},36:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(34),t(5)),s=t(6),m=t(9),i=t(7),u=t(8),p=(t(36),t(3)),d=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},e.logo),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{to:"/releases",className:"nav-link"},"Releases ",r.a.createElement("span",{className:"sr-only"},"(current)")," ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/backlog",className:"nav-link"},"Backlog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/sprints",className:"nav-link"},"Sprints")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},b=function(e){return r.a.createElement("div",{className:"col-12 col-sm-4",style:{paddingTop:"10px"}},r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{className:"card-img-top rounded mx-auto d-block",style:{paddingTop:"3px",width:"100px",height:"100px"},src:"https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png?w=256",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},e.text),r.a.createElement("button",{href:"#",className:"btn btn-primary",onClick:e.action},e.button))))},h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).homeCardRelease={title:"Releases",text:"Manage Releases",button:"Click Me",action:function(){return p.e.push("/releases")}},t.homeCardBacklog={title:"Backlog",text:"Manage Backlog",button:"Click Me",action:function(){return p.e.push("/backlog")}},t.homeCardSprints={title:"Sprints",text:"Manage Sprints",button:"Click Me",action:function(){return p.e.push("/sprints")}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},r.a.createElement(b,{title:this.homeCardRelease.title,text:this.homeCardRelease.text,button:this.homeCardRelease.button,action:this.homeCardRelease.action}),r.a.createElement(b,this.homeCardBacklog),r.a.createElement(b,this.homeCardSprints)))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(d,{logo:"Rebeca Andrade"}),this.props.children)}}]),a}(n.Component),v=t(14),N=function(e){var a,t,n=e.submitHandler,l=function(){a.value="",t.value=""};return r.a.createElement("form",{onSubmit:function(e){n(e,{name:a.value,date:t.value}),l()},className:"form-inline"},r.a.createElement("label",{className:"sr-only",for:"inlineFormInputName2"},"Release Name"),r.a.createElement("input",{type:"text",ref:function(e){return a=e},className:"form-control mb-2 mr-sm-2",id:"inlineFormInputName2",placeholder:"Set the Name"}),r.a.createElement("label",{className:"sr-only",for:"inlineFormInputGroupUsername2"},"Release Date"),r.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},r.a.createElement("div",{className:"input-group-prepend"}),r.a.createElement("input",{type:"text",ref:function(e){return t=e},className:"form-control",id:"inlineFormInputGroupUsername2",placeholder:"Set the Date"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Save"))},f=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(i.a)(a).call(this))).handleSubmit=e.handleSubmit.bind(Object(v.a)(Object(v.a)(e))),e.state={releases:[{id:1,releaseName:"Release 01",releaseDate:"01/01/2019"},{id:2,releaseName:"Release 02",releaseDate:"01/01/2020"},{id:3,releaseName:"Release 03",releaseDate:"01/01/2021"},{id:4,releaseName:"Release 04",releaseDate:"01/01/2022"}]},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleSubmit",value:function(e,a){var t=a.name,n=a.date;e.preventDefault();var r=this.state,l={id:r.releases.length+1,releaseName:t,releaseDate:n};this.setState({releases:r.releases.concat(l)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{paddingTop:"25px"}},r.a.createElement(N,{submitHandler:this.handleSubmit}),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Release Name"),r.a.createElement("th",{scope:"col"},"Release Date"))),r.a.createElement("tbody",null,this.state.releases.map(function(e,a){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},e.id," "),r.a.createElement("td",null,e.releaseName),r.a.createElement("td",null,e.releaseDate),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm"},"Remover")))}))))}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Backlog")}}]),a}(n.Component),y=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Sprints")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p.d,{history:p.e},r.a.createElement(p.c,{path:"/",component:E},r.a.createElement(p.a,{component:h}),r.a.createElement(p.c,{path:"/releases",component:f}),r.a.createElement(p.c,{path:"/backlog",component:g}),r.a.createElement(p.c,{path:"/sprints",component:y})),r.a.createElement(p.c,{path:"/releases",component:f}),r.a.createElement(p.c,{path:"/backlog",component:g}),r.a.createElement(p.c,{path:"/sprints",component:y})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.67ea9189.chunk.js.map