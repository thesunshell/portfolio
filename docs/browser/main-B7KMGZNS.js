import{a as y,b as l,c as k,d as E,e as L}from"./chunk-LGVMPUS7.js";import{Da as C,Ea as v,Fa as g,Ga as b,Ha as r,Ia as i,Ja as m,La as s,Na as x,Oa as a,W as n,qa as d}from"./chunk-LGJ7LFG4.js";function R(e,t){if(e&1&&(r(0,"li",5),s(1),i()),e&2){let h=t.$implicit;C("routerLink",h.routerLink),d(),x(" ",h.label," ")}}var M=(()=>{let t=class t{constructor(){this.navItems=[{label:"home",routerLink:"/home"},{label:"services",routerLink:"/services"},{label:"projects",routerLink:"/projects"},{label:"about me",routerLink:"/aboutme"},{label:"contact me",routerLink:"/contactme"},{label:"let's collaborate",routerLink:"/collaborate"}]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n({type:t,selectors:[["app-header"]],standalone:!0,features:[a],decls:13,vars:0,consts:[[1,"w-full","overflow-hidden","py-2"],[1,"container-xl","mx-auto","flex","justify-between","items-center","px-4"],[1,"left-logo","uppercase","font-bold","text-2xl","font-mono","text-black"],[1,"right-nav"],[1,"flex","items-center","capitalize"],[1,"px-3","py-1.5","bg-cardBg","hover:bg-cardBtn","rounded-sm","hover:cursor-pointer",3,"routerLink"],[1,"btns","flex","gap-2"],[1,"px-4","py-1.5","rounded","bg-cardBg","hover:bg-cardBtn","transition-all","duration-300","ease-in-out"],[1,"px-4","py-1.5","rounded","bg-black","text-white","hover:bg-black","transition-all","duration-300","ease-in-out"]],template:function(o,c){o&1&&(r(0,"header",0)(1,"nav",1)(2,"div",2),s(3," portfolio "),i(),r(4,"div",3)(5,"ul",4),g(6,R,2,2,"li",5,v),r(8,"li",6)(9,"button",7),s(10," Login "),i(),r(11,"button",8),s(12," Register "),i()()()()()()),o&2&&(d(6),b(c.navItems))},dependencies:[L,k]});let e=t;return e})();var w=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n({type:t,selectors:[["app-header-page"]],standalone:!0,features:[a],decls:3,vars:0,consts:[[1,"w-full"]],template:function(o,c){o&1&&(m(0,"app-header"),r(1,"main",0),m(2,"router-outlet"),i())},dependencies:[l,M]});let e=t;return e})();var f=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n({type:t,selectors:[["app-full-page"]],standalone:!0,features:[a],decls:1,vars:0,template:function(o,c){o&1&&m(0,"router-outlet")},dependencies:[l]});let e=t;return e})();var F=[{path:"",component:w,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-KCXFTYNE.js").then(e=>e.HomeComponent)},{path:"services",loadComponent:()=>import("./chunk-HKWVYEJV.js").then(e=>e.ServicesComponent)},{path:"projects",loadComponent:()=>import("./chunk-ZFDKOTWX.js").then(e=>e.ProjectsComponent)},{path:"aboutme",loadComponent:()=>import("./chunk-YWSXWACP.js").then(e=>e.AboutMeComponent)},{path:"contactme",loadComponent:()=>import("./chunk-X326YMLU.js").then(e=>e.ContactMeComponent)},{path:"collaborate",loadComponent:()=>import("./chunk-NFNUBZET.js").then(e=>e.CollaborateComponent)}]},{path:"error",component:f,children:[{path:"400",loadComponent:()=>import("./chunk-CZEMHITZ.js").then(e=>e.Error400Component)},{path:"401",loadComponent:()=>import("./chunk-77FRB63B.js").then(e=>e.Error401Component)},{path:"403",loadComponent:()=>import("./chunk-KSEJKKVI.js").then(e=>e.Error403Component)},{path:"404",loadComponent:()=>import("./chunk-HJU4ED45.js").then(e=>e.Error404Component)},{path:"500",loadComponent:()=>import("./chunk-5ZLRV2ZU.js").then(e=>e.Error500Component)},{path:"502",loadComponent:()=>import("./chunk-WJOUGMXM.js").then(e=>e.Error502Component)},{path:"503",loadComponent:()=>import("./chunk-JHSWMBAX.js").then(e=>e.Error503Component)},{path:"504",loadComponent:()=>import("./chunk-HGZ44R4J.js").then(e=>e.Error504Component)}]},{path:"auth",component:f,children:[{path:"login",loadComponent:()=>import("./chunk-AQOASCXW.js").then(e=>e.LoginComponent)},{path:"register",loadComponent:()=>import("./chunk-JNKSKEXJ.js").then(e=>e.RegisterComponent)},{path:"forget-password",loadComponent:()=>import("./chunk-7PPT6ZX2.js").then(e=>e.ForgetPasswordComponent)}]}];var S={providers:[E(F)]};var D=(()=>{let t=class t{constructor(){this.title="portfolio"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n({type:t,selectors:[["app-root"]],standalone:!0,features:[a],decls:1,vars:0,template:function(o,c){o&1&&m(0,"router-outlet")},dependencies:[l]});let e=t;return e})();y(D,S).catch(e=>console.error(e));
