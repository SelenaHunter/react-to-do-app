(window["webpackJsonpto-do-app"]=window["webpackJsonpto-do-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(1),r=a(2),i=a(4),l=a(3),s=a(5),o=a(0),m=a.n(o),u=a(7),b=a.n(u),d=(a(15),function(){return m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"2"},m.a.createElement("h1",null,"To-Do App"))),m.a.createElement("tr",null,m.a.createElement("th",{className:"taskColumn"},"Task"),m.a.createElement("th",{className:"deleteColumn"},"Delete")))}),p=function(e){var t=e.itemData.map(function(t,a){return m.a.createElement("tr",{key:a},m.a.createElement("td",{className:"taskColumn"},a+1+". ",t.item),m.a.createElement("td",{className:"deleteColumn"},m.a.createElement("button",{"aria-label":"Delete ".concat(t.item),type:"button",onClick:function(){e.removeItem(a)}},"\u2716")))});return m.a.createElement("tbody",null,t)},h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.itemData,a=e.removeItem;return m.a.createElement("table",null,m.a.createElement(d,null),m.a.createElement(p,{itemData:t,removeItem:a}))}}]),t}(o.Component),f=a(8),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(f.a)({},n,c))},a.submitTask=function(){a.state.item&&(a.props.handleSubmitTask(a.state),a.setState(a.initialState))},a.initialState={item:"",announcementMessage:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.item;return m.a.createElement("form",null,m.a.createElement("label",null,"Add task:"),m.a.createElement("input",{"aria-label":"add task",type:"text",name:"item",value:t,autoFocus:!0,onChange:this.handleChange,onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.submitTask())}}),m.a.createElement("button",{type:"button",onClick:this.submitTask},"Add Task"))}}]),t}(o.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"visuallyHidden","aria-live":"polite","aria-atomic":"true"},this.props.message)}}]),t}(o.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={items:[],announcementMessage:""},a.removeItem=function(e){var t=a.state.items;a.setState({items:t.filter(function(t,a){return a!==e}),announcementMessage:"".concat(a.state.items[e].item," deleted")})},a.handleSubmitTask=function(e){a.setState({items:[].concat(Object(n.a)(a.state.items),[e]),announcementMessage:"".concat(e.item," added")})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.title="To-Do App"}},{key:"render",value:function(){var e=this.state.items;return m.a.createElement("div",{className:"container"},m.a.createElement(h,{itemData:e,removeItem:this.removeItem}),m.a.createElement(v,{handleSubmitTask:this.handleSubmitTask}),m.a.createElement(E,{message:this.state.announcementMessage}))}}]),t}(o.Component);b.a.render(m.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9df309a0.chunk.js.map