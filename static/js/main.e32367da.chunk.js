(this.webpackJsonpvalidator=this.webpackJsonpvalidator||[]).push([[0],{421:function(e,t,n){},422:function(e,t,n){"use strict";n.r(t);var c=n(6),l=n.n(c),a=n(117),r=n.n(a),i=n(49),s=n(46),o=(n(123),function(e,t){return l.a.Children.map(e,(function(e){return l.a.cloneElement(e,t)}))}),d=n(1),j=function(e){var t=e.children,n=e.level,l=Object(s.a)(e,["children","level"]),a=Object(c.useState)(!1),r=Object(i.a)(a,2),j=r[0],u=r[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),O=h[0],f=h[1],v=Object(c.useState)(!1),m=Object(i.a)(v,2),x=m[0],p=m[1];Object(c.useEffect)((function(){l.callFromParent&&C()}));var C=function(){if(!l.callFromParent)return p(!0),f("Validate was executed at ".concat(n," level parent element")),setTimeout((function(){p(!1),f("")}),2e3),void u(!0);l.refreshParentCall&&l.refreshParentCall(),f("Validate was called from parent method at ".concat(n," level child")),setTimeout((function(){f("")}),2e3)},P=o(t,{callFromParent:j,refreshParentCall:function(){setTimeout((function(){u(!1)}),10)}});return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[n," Level Validate Component"]}),O&&Object(d.jsx)("p",{className:x?"info dang":"info",children:O}),Object(d.jsx)("button",{className:"btn",onClick:C,children:"Validate"}),Object(d.jsx)("div",{className:"nested",children:P})]})},u=function(e){var t=e.children,n=Object(s.a)(e,["children"]),c=o(t,n);return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"SomeComponent content"}),Object(d.jsx)("div",{className:"nested",children:c})]})};var b=function(){return Object(d.jsxs)(j,{level:"First",children:[Object(d.jsx)(j,{level:"Second",children:Object(d.jsx)(u,{children:Object(d.jsx)(u,{children:Object(d.jsx)(j,{level:"Third"})})})}),Object(d.jsx)(j,{level:"Second"})]})};n(421);r.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[422,1,2]]]);
//# sourceMappingURL=main.e32367da.chunk.js.map