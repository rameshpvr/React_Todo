(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),s=(n(18),n(6)),l=n(7),c=n(12),u=n(11),m=(n(19),n(20),n(8)),d=n(9);var f=function(e){var t=e.itemlist,n=e.deleteItem,a=e.OnEditChange;return i.a.createElement(d.a,{duration:300,easing:"ease-in-out"},t.map((function(e){return i.a.createElement("div",{key:e.key,className:"list"},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:e.key,value:e.text,onChange:function(t){return a(t.target.value,e.key)}}),i.a.createElement("span",null,i.a.createElement(m.a,{className:"faicons",icon:"trash",onClick:function(){return n(e.key)}}))))})))},h=n(3),p=n(10);h.b.add(p.a);var v=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState({item:{text:e.target.value,key:Date.now()}})},a.addItem=function(e){e.preventDefault(),""!==a.state.item.text&&a.setState((function(e){var t=[];return(t=Object.assign([],e.listOfItems)).push(a.state.item),{listOfItems:t}}))},a.deleteItem=function(e){console.log("On delete",e);var t=a.state.listOfItems.filter((function(t){return t.key!==e}));a.setState({listOfItems:t})},a.OnEditChange=function(e,t){var n=a.state.listOfItems;n.map((function(n){n.key===t&&(n.text=e)})),a.setState({listOfItems:n})},a.state={listOfItems:[],item:{key:"",text:""}},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("form",{id:"todoform",onSubmit:this.addItem},i.a.createElement("input",{type:"text",onChange:this.handleInputChange,value:this.state.item.text,placeholder:"Enter your Note Here!"}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement(f,{itemlist:this.state.listOfItems,deleteItem:this.deleteItem,OnEditChange:this.OnEditChange}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.6569fea4.chunk.js.map