(this["webpackJsonplearnit-frontend"]=this["webpackJsonplearnit-frontend"]||[]).push([[0],{43:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(13),c=a.n(l),o=(a(48),a(49),a(50),a(14)),i=a(6),m=a(3),s=a(21),u=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return n.a.createElement(o.a,null,n.a.createElement(m.p,{color:"light-green lighten-1",dark:!0,expand:"md",className:"justify-content-center"},n.a.createElement(m.q,null,n.a.createElement(m.o,{to:"/"},n.a.createElement("strong",{className:"white-text"},"LearnIt"))),n.a.createElement(m.s,{onClick:function(){l(!a)}}),n.a.createElement(m.i,{id:"navbarCollapse3",isOpen:a,navbar:!0},n.a.createElement(m.r,{left:!0},n.a.createElement(m.n,null,n.a.createElement(m.o,{to:"/question"},"Add Question")),n.a.createElement(m.n,null,n.a.createElement(m.o,{to:"/department"},"Add Department")),n.a.createElement(m.n,null,n.a.createElement(m.o,{to:"/course"},"Add Course"))))))},p=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement(m.j,null,t))},g=function(){return Object(r.useEffect)((function(){document.title="LearnIt"}),[]),n.a.createElement(p,null,n.a.createElement(m.j,{fluid:!0},n.a.createElement(m.v,{center:!0},n.a.createElement(m.h,{md:"6"},n.a.createElement(m.c,{style:{marginTop:"5rem"}},n.a.createElement(m.e,{color:"light-green lighten-1",className:"text-center"},"LearnIt API"),n.a.createElement(m.d,null,n.a.createElement(m.g,{className:"text-center"},"GuideLines"),n.a.createElement(m.f,null,"This is a quick build for the LearnIt API, made to enable easy population of the LearnIt DB"),n.a.createElement("br",null),n.a.createElement(m.g,{className:"text-center"},"Usage"),n.a.createElement(m.f,null,"This is a quick build for the LearnIt API, made to enable easy population of the LearnIt DB")))))))},d=a(20),E=a(12),h=function(){var e=Object(r.useState)({question:"",answer:"",a:"",b:"",c:"",d:"",explanation:"",topic:"",course:"",level:"",error:"",loading:!1,success:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=a.question,o=a.answer,i=a.a,u=a.b,g=a.c,h=a.d,v=a.explanation,b=a.topic,y=a.course,f=a.level,x=a.error,w=a.loading,q=a.success,j=function(e){return function(t){l(Object(E.a)(Object(E.a)({},a),{},Object(d.a)({error:!1},e,t.target.value)))}},O=function(e){e.preventDefault(),l(Object(E.a)(Object(E.a)({},a),{},{error:"",loading:!0})),function(e){return fetch("".concat("https://learnit-v1.herokuapp.com/api","/question/create"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({question:c,answer:o,a:i,b:u,c:g,d:h,explanation:v,topic:b,course:y,level:f}).then((function(e){e.error?l(Object(E.a)(Object(E.a)({},a),{},{error:e.error,success:!1})):l(Object(E.a)(Object(E.a)({},a),{},{question:"",answer:"",a:"",b:"",c:"",d:"",explanation:"",topic:"",course:"",level:"",error:"",success:!0,loading:!1}))}))};return n.a.createElement(p,null,w&&n.a.createElement(m.v,null,n.a.createElement(m.h,null,n.a.createElement(m.k,{icon:"spinner",spin:!0}))),n.a.createElement("div",{className:"alert alert-success mt-5",style:{display:q?"":"none"}},"Question created successfully"),n.a.createElement("div",{className:"alert alert-danger mt-5",style:{display:x?"":"none"}},x),n.a.createElement(m.j,null,n.a.createElement(m.v,{center:!0},n.a.createElement(m.h,{md:"6"},n.a.createElement(m.c,{style:{marginTop:"5rem",marginBottom:"5rem"}},n.a.createElement(m.d,null,n.a.createElement("form",{onSubmit:O},n.a.createElement("p",{className:"h4 text-center py-4"},"Add Question"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(m.m,{label:"Question",icon:"question-circle",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("question"),value:c}),n.a.createElement(m.m,{label:"Answer",icon:"pen",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("answer"),value:o}),n.a.createElement(m.m,{label:"Option A",icon:"check-square",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("a"),value:i}),n.a.createElement(m.m,{label:"Option B",icon:"check-square",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("b"),value:u}),n.a.createElement(m.m,{label:"Option C",icon:"check-square",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("c"),value:g}),n.a.createElement(m.m,{label:"Option D",icon:"check-square",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("d"),value:h}),n.a.createElement(m.m,{label:"Explanation",icon:"paperclip",group:!0,type:"textarea",row:"2",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("explanation"),value:v}),n.a.createElement(m.m,{label:"Topic",icon:"info-circle",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("topic"),value:b}),n.a.createElement(m.m,{label:"Course",icon:"book-open",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("course"),value:y}),n.a.createElement(m.m,{label:"Level",icon:"user-tie",group:!0,type:"number",validate:!0,error:"wrong",success:"right",required:!0,onChange:j("level"),value:f})),n.a.createElement("div",{className:"text-center py-4 mt-3"},n.a.createElement(m.b,{color:"light-green lighten-1",type:"submit"},"Add",n.a.createElement(m.k,{icon:"plus",className:"ml-2"}))))))))))},v=function(){return n.a.createElement(p,null,n.a.createElement(m.j,null,n.a.createElement(m.v,{center:!0},n.a.createElement(m.h,{md:"6"},n.a.createElement(m.c,{style:{marginTop:"5rem",marginBottom:"5rem"}},n.a.createElement(m.d,null,n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center py-4"},"Add Course"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(m.m,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(m.m,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(m.m,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(m.m,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0})),n.a.createElement("div",{className:"text-center py-4 mt-3"},n.a.createElement(m.b,{color:"light-green lighten-1",type:"submit"},"Register")))))))))},b=function(){return n.a.createElement(p,null,n.a.createElement(m.j,null,n.a.createElement(m.v,{center:!0},n.a.createElement(m.h,{md:"6"},n.a.createElement(m.c,{style:{marginTop:"5rem",marginBottom:"5rem"}},n.a.createElement(m.d,null,n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center py-4"},"Add Department"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(m.m,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(m.m,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(m.m,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(m.m,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0})),n.a.createElement("div",{className:"text-center py-4 mt-3"},n.a.createElement(m.b,{color:"light-green lighten-1",type:"submit"},"Register")))))))))},y=function(){return n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",exact:!0,component:g}),n.a.createElement(i.a,{path:"/question",exact:!0,component:h}),n.a.createElement(i.a,{path:"/course",exact:!0,component:v}),n.a.createElement(i.a,{path:"/department",exact:!0,component:b})))};c.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.43289ed2.chunk.js.map