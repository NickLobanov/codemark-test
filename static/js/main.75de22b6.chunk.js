(this.webpackJsonpcodemark=this.webpackJsonpcodemark||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),r=n(7),s=n.n(r),o=(n(13),n(6)),u=n(2);n(14),n(15);var l=function(t){var e=t.handleInput,n=t.handleSubmit,c=t.isDisable,i=t.isSort,r=t.handleClearBtn,s=t.tag,o=t.handleSort;return Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("form",{className:"header__form",onSubmit:n,children:[Object(a.jsx)("input",{value:s,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433",className:"header__input",onChange:e}),Object(a.jsx)("button",{disable:c,type:"submit",className:"header__button header__button_submit ".concat(c&&"header__disable"),children:c?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(a.jsx)("button",{type:"button",className:"header__button header__button_reset",onClick:r,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),Object(a.jsx)("button",{type:"button",className:"header__button header__button_unite",onClick:o,children:i?"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})})};n(16),n(17);var d=function(t){var e=t.img,n=t.alt,c=t.cardClick;return Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("img",{src:e,alt:n,className:"card__image",onClick:function(){c(n)}})})};n(18);var b=function(t){var e=t.cards,n=t.tag,c=t.cardClick,i=e.filter((function(t){return t.keyword===n}));return Object(a.jsxs)("section",{className:"sort",children:[Object(a.jsx)("h2",{className:"sort__title",children:n}),Object(a.jsx)("div",{className:"sort__wrap",children:i.map((function(t){return Object(a.jsx)(d,{img:t.img,alt:t.keyword,cardClick:c},t.keyword)}))})]})};var j=function(t){var e=t.cards,n=t.isSort,c=t.keywords,i=t.cardClick;return Object(a.jsx)("section",{className:"main",children:n?c.map((function(t){return Object(a.jsx)(b,{cards:e,tag:t,cardClick:i},t)})):Object(a.jsx)("div",{className:"main__cards ".concat(!n&&"main__cards_open"),children:e.map((function(t){return Object(a.jsx)(d,{img:t.img,alt:t.keyword,cardClick:i},t.keyword)}))})})};n(19);var h=function(t){var e=t.popupText,n=t.isVisible,c=t.onClose;return Object(a.jsxs)("div",{className:"popup ".concat(n&&"popup__visibility"),children:[Object(a.jsx)("p",{className:"popup__text",children:e}),Object(a.jsx)("button",{className:"popup__close",onClick:c,children:"\xd7"})]})};var p=function(){var t=i.a.useState(""),e=Object(u.a)(t,2),n=e[0],c=e[1],r=i.a.useState([]),s=Object(u.a)(r,2),d=s[0],b=s[1],p=i.a.useState([]),f=Object(u.a)(p,2),m=f[0],_=f[1],O=i.a.useState(!1),v=Object(u.a)(O,2),x=v[0],g=v[1],k=i.a.useState(!1),C=Object(u.a)(k,2),S=C[0],N=C[1],y=i.a.useState(""),w=Object(u.a)(y,2),D=w[0],B=w[1],I=i.a.useState(!1),T=Object(u.a)(I,2),F=T[0],A=T[1],z=i.a.useState([]),E=Object(u.a)(z,2),G=E[0],J=E[1],L=i.a.useState(!1),M=Object(u.a)(L,2),P=M[0],V=M[1],Z=function(){N(!1)},q=function(){(function(t,e){return fetch("https://api.giphy.com/v1/gifs/random?api_key=".concat(t,"&tag=").concat(e),{method:"GET",headers:{Accept:"application/json"}}).then((function(t){return t.json()}))})("i25iMmapAhnCyZ4sKNBzce6vrGfqI6hX",n).then((function(t){0===t.data.length?(console.log("null"),N(!0),B("\u041f\u043e \u0442\u0435\u0433\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")):b([].concat(Object(o.a)(d),[{keyword:"".concat(n),img:"".concat(t.data.image_url)}]))})).catch((function(){N(!0),B("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 http \u043e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){g(!1)}))};return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(l,{handleInput:function(t){c(t.target.value);V(/[a-zA-Z](,)?/g.test(t.target.value))},handleSubmit:function(t){t.preventDefault(),!0===P?(Z(),g(!0),_([].concat(Object(o.a)(m),[n])),q()):(N(!0),B("\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b"))},isDisable:x,handleClearBtn:function(t){t.preventDefault(),b([]),c(""),J([]),_([])},tag:n,handleSort:function(t){F?function(t){t.preventDefault(),J([]),A(!1)}(t):function(t){t.preventDefault();var e=m.filter((function(t,e,n){return n.indexOf(t)===e}));J(e),A(!0)}(t)},isSort:F}),Object(a.jsx)(j,{cards:d,isSort:F,keywords:G,cardClick:function(t){c(t)}}),Object(a.jsx)(h,{popupText:D,isVisible:S,onClose:Z})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.75de22b6.chunk.js.map