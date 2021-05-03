(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{183:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(13),c=s.n(r),l=(s(80),s(8)),i=s(49),o=s.n(i),d=s(25),u=s.n(d),b=s(50),j=s(20),x=s.n(j),m="/api/tasks",f={getAll:function(){return x.a.get(m).then((function(e){return e.data}))},getTask:function(e){return x.a.get("".concat(m,"/").concat(e)).then((function(e){return e.data}))},create:function(){var e=Object(b.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(m,t);case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("".concat(m,"/").concat(t));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return x.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))}},h=s(35),p=s(74),O=s.n(p),g=(s(110),s(3));o.a.setAppElement("#root");var v=function(e){var t=e.formType,s=e.job,n=e.updateJobList,r=e.closeForm,c=e.teamMembers,i=Object(a.useState)(s.jobNumber),o=Object(l.a)(i,2),d=o[0],u=o[1],b=Object(a.useState)(s.jobLink),j=Object(l.a)(b,2),x=j[0],m=j[1],p=Object(a.useState)(s.dueDate),v=Object(l.a)(p,2),y=v[0],N=v[1],w=Object(a.useState)(s.maxHours),k=Object(l.a)(w,2),L=k[0],C=k[1],S=Object(a.useState)(s.assignee?c.filter((function(e){return s.assignee.includes(" ".concat(e.label))})):null),M=Object(l.a)(S,2),D=M[0],J=M[1],A=Object(a.useState)(s.description),H=Object(l.a)(A,2),V=H[0],B=H[1],F=Object(a.useState)(s.status),I=Object(l.a)(F,2),T=I[0],W=I[1],E=function(){return u(""),N(""),C(""),J(""),B(""),null};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"job-form-container",children:Object(g.jsx)("div",{className:"job-form-backdrop",children:Object(g.jsx)("div",{className:"job-form-content",children:Object(g.jsx)("div",{className:"bg-white flex flex-col justify-center",children:Object(g.jsx)("div",{className:"relative sm:max-w-xl sm:mx-auto",children:Object(g.jsx)("div",{className:"relative bg-gray-200 px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10",children:Object(g.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(g.jsxs)("div",{className:"flex items-center space-x-5",children:[Object(g.jsx)("div",{className:"h-14 w-14 bg-gray-900 rounded-md flex flex-shrink-0 justify-center items-center text-white text-2xl",children:"JL"}),Object(g.jsx)("div",{className:"block pl-2 pt-2 font-semibold text-xl self-start text-gray-700",children:Object(g.jsx)("h2",{className:"leading-relaxed",children:"Job"})})]}),Object(g.jsxs)("div",{className:"divide-y divide-gray-200",children:[Object(g.jsxs)("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:[Object(g.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Job Number"}),Object(g.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)},className:"px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"})]}),Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Job Link"}),Object(g.jsx)("input",{type:"text",value:x,placeholder:"https://...",onChange:function(e){return m(e.target.value)},className:"px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"})]})]}),Object(g.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Due Date"}),Object(g.jsxs)("div",{className:"relative focus-within:text-gray-600 text-gray-400",children:[Object(g.jsx)(O.a,{dateFormat:"yyyy-MM-dd",selected:y?new Date(y):null,onChange:function(e){return N(e)},className:"pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"}),Object(g.jsx)("div",{className:"absolute left-3 top-2",children:Object(g.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})})]})]}),Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Max Hours"}),Object(g.jsx)("input",{type:"text",value:L,onChange:function(e){return C(e.target.value)},className:"px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"})]})]}),Object(g.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(g.jsxs)("div",{className:"flex flex-col w-1/2",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Assignee"}),Object(g.jsx)(h.a,{options:c,defaultValue:D,onChange:J,isMulti:!0,isSearchable:!0})]}),Object(g.jsxs)("div",{className:"flex flex-col w-1/2",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Status"}),Object(g.jsx)(h.a,{options:[{value:"toStart",label:"To Start"},{value:"inProgress",label:"In Progress"},{value:"blocked",label:"Blocked"},{value:"completed",label:"Completed"}],defaultValue:T,onChange:W,isSearchable:!0})]})]}),Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsx)("label",{className:"leading-loose",children:"Description"}),Object(g.jsx)("input",{type:"text",value:V,onChange:function(e){return B(e.target.value)},className:"px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"})]})]}),Object(g.jsxs)("div",{className:"pt-4 flex items-center space-x-4",children:[Object(g.jsxs)("button",{onClick:function(){return r()},className:"flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none",children:[Object(g.jsx)("svg",{className:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})," Cancel"]}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault();var a=[];a=T instanceof Array?T:new Array(T);var c={jobNumber:d,jobLink:x,dueDate:y,maxHours:L,assignee:D,description:V,status:a};"add"===t?f.create(c).then((function(e){E(),n(),r()})):"edit"===t&&f.update(s.id,c).then((function(e){E(),n(),r()}))},className:"bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none",children:"Submit"})]})]})]})})})})})})})})},y=function(e){var t=e.jobNumber,s=e.jobLink,a=e.dueDate,n=e.maxHours,r=e.assignee,c=e.description,l=e.status,i=e.editJob,o=e.deleteJob;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:s?Object(g.jsx)("a",{className:"text-blue-600 hover:text-blue-900",href:s,target:"_blank",rel:"noreferrer",children:t}):t}),Object(g.jsx)("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.slice(0,10)}),Object(g.jsx)("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:n}),Object(g.jsx)("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:r}),Object(g.jsx)("td",{className:"py-3 px-6 text-left break-normal max-w-sm",children:c}),Object(g.jsx)("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:l}),Object(g.jsx)("td",{className:"border-b hover:bg-gray-100",children:Object(g.jsxs)("div",{className:"flex item-center justify-center",children:[Object(g.jsx)("div",{className:"w-4 mr-2 transform hover:text-blue-600 hover:scale-110",onClick:i,children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})})}),Object(g.jsx)("div",{className:"w-4 mr-2 transform hover:text-blue-600 hover:scale-110",onClick:o,children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})})]})},N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(null),c=Object(l.a)(r,2),i=c[0],d=c[1],u=Object(a.useState)(!1),b=Object(l.a)(u,2),j=b[0],x=b[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),O=p[0],N=p[1],w=Object(a.useState)([{label:"All"}]),k=Object(l.a)(w,2),L=k[0],C=k[1],S=[{value:"all",label:"All"},{value:"cedric",label:"C\xe9dric"},{value:"dora",label:"Dora"},{value:"kelly",label:"Kelly"},{value:"luke",label:"Luke"},{value:"mihir",label:"Mihir"},{value:"vera",label:"Vera"}],M=function(){f.getAll().then((function(e){var t=e.map((function(e){return{id:e.id,jobNumber:e.jobNumber,jobLink:e.jobLink,dueDate:e.dueDate,maxHours:e.maxHours,assignee:e.assignee.map((function(e){return" ".concat(e.label)})),description:e.description,status:e.status}}));n(t)}))};Object(a.useEffect)((function(){M()}),[]);var D=function(){M()},J=function(){x(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("nav",{className:"bg-gray-200 shadow",children:Object(g.jsxs)("div",{className:"mx-auto px-6 py-3 md:flex md:justify-between md:items-center",children:[Object(g.jsx)("div",{className:"flex justify-between items-center",children:Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700",children:"HBK Job List"})})}),Object(g.jsx)("div",{className:"md:flex items-center",children:Object(g.jsx)("div",{className:"flex flex-col md:flex-row md:mx-6",children:Object(g.jsx)("button",{className:"my-1 text-sm text-gray-700 font-medium hover:text-blue-600 md:mx-4 md:my-0",onClick:function(){return N("add"),d({}),void x(!0)},children:"Add Job"})})})]})}),Object(g.jsx)(o.a,{isOpen:j,onRequestClose:function(){return x(!1)},style:{overlay:{display:"flex",justifyContent:"center",alignItems:"center"},content:{inset:"unset",padding:0,border:"none"}},children:Object(g.jsx)(v,{formType:O,job:i,updateJobList:D,closeForm:J,teamMembers:S})}),Object(g.jsx)("div",{className:"min-w-screen bg-white pt-12 flex items-center justify-center font-sans",children:Object(g.jsx)("div",{className:"w-full pb-12 lg:w-5/6 overflow-x-auto",children:Object(g.jsxs)("table",{className:"min-w-max w-full table-auto",children:[Object(g.jsx)("thead",{className:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Job Number"}),Object(g.jsx)("th",{children:"Due Date"}),Object(g.jsx)("th",{children:"Max Hours"}),Object(g.jsx)(h.a,{defaultValue:S[0],options:S,onChange:C,placeholder:"Assignee",isMulti:!0,isSearchable:!0}),Object(g.jsx)("th",{children:"Description"}),Object(g.jsx)("th",{children:"Status"}),Object(g.jsx)("th",{children:"Actions"})]})}),Object(g.jsx)("tbody",{className:"ext-gray-600 text-sm font-light",children:function(){var e=L.map((function(e){return" ".concat(e.label)}));return e.includes(" All")?s:s.filter((function(t){return t.assignee.some((function(t){return e.includes(t)}))}))}().map((function(e){return Object(g.jsx)(y,{jobId:e.id,jobNumber:e.jobNumber,jobLink:e.jobLink,dueDate:e.dueDate,maxHours:e.maxHours,assignee:"".concat(e.assignee),description:e.description,status:e.status[0].label,deleteJob:function(){return t=e.id,void f.remove(t).then((function(e){n(s.filter((function(e){return e.id!==t})))}));var t},editJob:function(){return function(e){N("edit"),d(e),x(!0)}(e)}},e.id)}))})]})})})]})};c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))},80:function(e,t,s){}},[[183,1,2]]]);
//# sourceMappingURL=main.a0516c3a.chunk.js.map