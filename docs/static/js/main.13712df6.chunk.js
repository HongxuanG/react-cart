(this["webpackJsonpreact-cart"]=this["webpackJsonpreact-cart"]||[]).push([[0],{107:function(e,t,n){e.exports=n(179)},112:function(e,t,n){},168:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),i=(n(112),n(181));var l=c.a.memo((function(e){console.log("cart item rerender");var t=e.item,n=e.checked,a=e.onCheckedChange,r=t.name,o=t.price;return c.a.createElement("div",{className:"item-card"},c.a.createElement("div",{className:"checkbox-wrap"},c.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){var n=e.target.checked;a(t,n)}})),c.a.createElement("p",{className:"item-info"},r," ",c.a.createElement(i.a.Text,{mark:!0},"$",o)))}),(function(e,t){return e.checked===t.checked})),d=n(180),u=n(54),h=n(99),m=n(74),f=(n(168),Array(5).fill(void 0).map((function(e,t){return{id:t,name:"\u5546\u54c1".concat(t),price:Math.round(100*Math.random())}})));function s(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.key,c=void 0===n?"id":n,r=Object(a.useReducer)((function(t,n){switch(n.type){case"CHECKED_CHANGE":var a=n.payload,r=a.dataItem,o=a.checked,i=r[c];return Object(h.a)({},t,Object(u.a)({},i,o));case"CHECKED_ALL_CHANGE":var l=n.payload,d={};return l&&e.forEach((function(e){d[e.id]=!0})),d;case"SET_CHECKED_MAP":return n.payload;default:return t}}),{}),o=Object(m.a)(r,2),i=o[0],l=o[1],d=Object(a.useCallback)((function(e,t){l({type:"CHECKED_CHANGE",payload:{dataItem:e,checked:t}})}),[]),f=Object(a.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!0};return Object.entries(i).filter((function(e){return Boolean(e[1])})).map((function(t){var n=Object(m.a)(t,1)[0];return e.find((function(e){return e[c]===Number(n)}))})).filter(Boolean).filter(t)}),[i,e,c]),s=0!==e.length&&f().length===e.length,E=function(e){l({type:"CHECKED_ALL_CHANGE",payload:e})};return Object(a.useEffect)((function(){f().forEach((function(t){var n=!1;e.find((function(e){return t.id===e.id}))||(delete i[t.id],n=!0),n&&l({type:"SET_CHECKED_MAP",payload:Object.assign({},i)})}))}),[e]),{checkedMap:i,dispatch:l,onCheckedChange:d,filterChecked:f,onCheckedAllChange:E,checkedAll:s}}(f),t=e.checkedAll,n=e.checkedMap,r=e.onCheckedAllChange,o=e.onCheckedChange,s=e.filterChecked,E=s().reduce((function(e,t){return e+t.price}),0),k=c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"check-all"},c.a.createElement("input",{checked:t,onChange:function(e){var t=e.target.checked;r(t)},type:"checkbox"}),"\u5168\u9009"),c.a.createElement("div",null,"\u4ef7\u683c\u603b\u8ba1 ",c.a.createElement(i.a.Text,{mark:!0},"$",E)));return c.a.createElement("div",{className:"cart"},c.a.createElement(d.a,{header:c.a.createElement("div",null,"\u8d2d\u7269\u8f66"),footer:k,bordered:!0,dataSource:f,renderItem:function(e){var t=n[e.id]||!1;return c.a.createElement(d.a.Item,null,c.a.createElement(l,{item:e,checked:t,onCheckedChange:o}))}}))}n(177),n(178);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.13712df6.chunk.js.map