(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{17:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(10),i=t.n(r),c=t(6),s=t(11),o=t(12),u=t(2),v=t(3),l=t(5),f=t(4),b=(t(17),t(0)),k=function(e){Object(l.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={blink:!1},e.onBlockedClick=function(){e.setState({blink:!0}),e.timerID=setInterval((function(){return e.blinkSquare()}),50)},e}return Object(v.a)(t,[{key:"blinkSquare",value:function(){this.setState({blink:!1}),clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.props,n=e.key,t=e.sign,a=e.onMakeMove,r=e.canMove,i=e.paintWinner,c=this.state.blink?"square square-invalid-move ":"square";i&&(c+=" square-win");var s,o,u=10005,v=9711,l=8203;switch(t){case"X":s=u;break;case"O":s=v;break;case"":s=l;break;default:s=l}return o=r?Object(b.jsxs)("div",{className:c,onClick:a,children:[String.fromCharCode(s)," "]},n):Object(b.jsxs)("div",{className:c,onClick:this.onBlockedClick,children:[String.fromCharCode(s)," "]},n),Object(b.jsx)(b.Fragment,{children:o})}}]),t}(a.Component),j=(t(19),function(e){Object(l.a)(t,e);var n=Object(f.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props,n=e.gridData,t=e.onMakeMove,a=e.status,r=e.winnerCombo,i=n.map((function(e){var n=Object.assign({},e);a.endsWith("winner")&&(n.canMove=!1);var i="undefined"!==typeof r.find((function(n){return n===e.key}));return Object(b.jsx)(k,Object(c.a)(Object(c.a)({},n),{},{paintWinner:i,onMakeMove:function(){return t(e.key)}}))}));return Object(b.jsx)("div",{className:"grid",children:i})}}]),t}(a.Component)),d=(t(20),function(e){var n=e.status;return Object(b.jsxs)("div",{className:"status",children:["Status : ",Object(b.jsx)(b.Fragment,{children:n})]})}),h=(t(21),{gridData:[{key:0,sign:"",canMove:!0},{key:1,sign:"",canMove:!0},{key:2,sign:"",canMove:!0},{key:3,sign:"",canMove:!0},{key:4,sign:"",canMove:!0},{key:5,sign:"",canMove:!0},{key:6,sign:"",canMove:!0},{key:7,sign:"",canMove:!0},{key:8,sign:"",canMove:!0}],currentMove:"X",status:"Next move is X",winnerCombo:[]}),g=function(e){Object(l.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state=h,e.checkWin=function(){var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];e.setState((function(e){for(var t=e.gridData,a=(e.currentMove,0);a<n.length;a++){var r=Object(o.a)(n[a],3),i=r[0],c=r[1],s=r[2];if(console.log(i,c,s),t[i].sign===t[c].sign&&t[c].sign===t[s].sign&&""!==t[i].sign)return{status:"".concat(t[i].sign," is winner"),winnerCombo:[i,c,s]}}}))},e.checkDraw=function(){e.setState((function(e){if("undefined"==typeof e.gridData.find((function(e){return""===e.sign})))return{status:"Draw"}}))},e.makeMove=function(n){e.setState((function(e){var t=e.gridData,a=e.currentMove,r=t.findIndex((function(e){return e.key===n})),i=Object(s.a)(t),c="X"===a?"O":"X";return i[r]={key:n,sign:a,canMove:!1},{gridData:i,currentMove:c,status:"Next move is ".concat(c)}}))},e.onMakeMove=function(n){e.makeMove(n),e.checkDraw(),e.checkWin()},e.restartGame=function(){e.setState((function(){return h}))},e}return Object(v.a)(t,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,Object(c.a)(Object(c.a)({},this.state),{},{onMakeMove:this.onMakeMove})),Object(b.jsx)(d,{status:this.state.status}),Object(b.jsx)("button",{className:"btn btn-outline-info flex-container",onClick:this.restartGame,children:"Restart"})]})}}]),t}(a.Component);i.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cc19f4bc.chunk.js.map