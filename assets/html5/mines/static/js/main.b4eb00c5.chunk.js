(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},21:function(e,t,a){},23:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=(a(21),a(1)),r=a(2),o=a(4),l=a(3),c=a(5),h=(a(23),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={height:8,width:8,mines:10},a.handleGameStart=function(){var e=document.querySelector("#level_select");"beginner"===e.value&&(a.state={height:8,width:8,mines:10}),"intermediate"===e.value&&(a.state={height:12,width:12,mines:20}),"expert"===e.value&&(a.state={height:16,width:16,mines:40}),console.log("selected level "+e.value+" state data as "+JSON.stringify(a.state)),a.props.handleClick("GameScreen",a.state)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"gameStart"},i.a.createElement("div",{className:"game-info"},i.a.createElement("div",{className:"instructions"},i.a.createElement("h4",null,"Rules"),i.a.createElement("p",null,"You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) or flag all the mines, you win."),i.a.createElement("p",null,"Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs."),i.a.createElement("p",null,"To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click.")),i.a.createElement("h4",null,'Select a level and click "start"'),i.a.createElement("span",{className:"info"},"Level:",i.a.createElement("select",{id:"level_select"},i.a.createElement("option",{value:"beginner"}," Beginner "),i.a.createElement("option",{value:"intermediate"}," Intermediate "),i.a.createElement("option",{value:"expert"}," Expert "))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"screen-button",onClick:this.handleGameStart},"Start")))}}]),t}(n.Component)),u=a(8),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).ref=function(e){return e&&a.setState({clientRect:e.getBoundingClientRect()})},a.state={clientRect:{}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"getValue",value:function(){return this.props.value.isRevealed?this.props.value.isMine?"\ud83d\udea9":0===this.props.value.neighbour?null:this.props.value.neighbour:this.props.value.isFlagged?"\ud83d\udea9":null}},{key:"getCellWH",value:function(){return console.log(this.props.screenWidth+"this.props.screenWidth"),this.props.screenWidth>700?8===this.props.value.width?this.s={width:"12%",height:"10vh"}:12===this.props.value.width?this.s={width:"8%",height:"7vh"}:16===this.props.value.width&&(this.s={width:"6%",height:"5vh"}):8===this.props.value.width?this.s={width:"11%",height:"9vh"}:12===this.props.value.width?this.s={width:"7%",height:"6vh"}:16===this.props.value.width&&(this.s={width:"5%",height:"4vh"}),this.s}},{key:"render",value:function(){var e="cell"+(this.props.value.isRevealed?"":" hidden")+(this.props.value.isMine?" is-mine":"")+(this.props.value.isFlagged?" is-flag":""),t=this.getCellWH();return i.a.createElement("div",Object(u.a)({style:t,ref:"cell",onClick:this.props.onClick,className:e,onContextMenu:this.props.cMenu},"ref",this.ref),this.getValue())}}]),t}(n.Component),m=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={boardData:a.initBoardData(a.props.height,a.props.width,a.props.mines),gameWon:!1,mineCount:a.props.mines,clientRect:{}},a.ref=function(e){return e&&a.setState({clientRect:e.getBoundingClientRect()})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"getMines",value:function(e){var t=[];return e.map(function(e){e.map(function(e){e.isMine&&t.push(e)})}),t}},{key:"getFlags",value:function(e){var t=[];return e.map(function(e){e.map(function(e){e.isFlagged&&t.push(e)})}),t}},{key:"getHidden",value:function(e){var t=[];return e.map(function(e){e.map(function(e){e.isRevealed||t.push(e)})}),t}},{key:"getRandomNumber",value:function(e){return Math.floor(1e3*Math.random()+1)%e}},{key:"initBoardData",value:function(e,t,a){for(var n=[],i=0;i<e;i++){n.push([]);for(var s=0;s<t;s++)n[i][s]={x:i,y:s,isMine:!1,neighbour:0,isRevealed:!1,isEmpty:!1,isFlagged:!1,width:this.props.width,height:this.props.height}}return n=this.plantMines(n,e,t,a),n=this.getNeighbours(n,e,t),console.log(n),n}},{key:"plantMines",value:function(e,t,a,n){for(var i,s,r=0;r<n;)i=this.getRandomNumber(a),s=this.getRandomNumber(t),e[i][s].isMine||(e[i][s].isMine=!0,r++);return e}},{key:"getNeighbours",value:function(e,t,a){for(var n=this,i=e,s=0;s<t;s++)for(var r=0;r<a;r++)!0!==e[s][r].isMine&&function(){var t=0;n.traverseBoard(e[s][r].x,e[s][r].y,e).map(function(e){e.isMine&&t++}),0===t&&(i[s][r].isEmpty=!0),i[s][r].neighbour=t}();return i}},{key:"traverseBoard",value:function(e,t,a){var n=[];return e>0&&n.push(a[e-1][t]),e<this.props.height-1&&n.push(a[e+1][t]),t>0&&n.push(a[e][t-1]),t<this.props.width-1&&n.push(a[e][t+1]),e>0&&t>0&&n.push(a[e-1][t-1]),e>0&&t<this.props.width-1&&n.push(a[e-1][t+1]),e<this.props.height-1&&t<this.props.width-1&&n.push(a[e+1][t+1]),e<this.props.height-1&&t>0&&n.push(a[e+1][t-1]),n}},{key:"revealBoard",value:function(){var e=this.state.boardData;e.map(function(e){e.map(function(e){e.isRevealed=!0})}),this.setState({boardData:e})}},{key:"revealEmpty",value:function(e,t,a){var n=this;return this.traverseBoard(e,t,a).map(function(e){e.isRevealed||!e.isEmpty&&e.isMine||(a[e.x][e.y].isRevealed=!0,e.isEmpty&&n.revealEmpty(e.x,e.y,a))}),a}},{key:"handleCellClick",value:function(e,t){var a=!1;if(this.state.boardData[e][t].isRevealed)return null;this.state.boardData[e][t].isMine&&(this.revealBoard(),alert("game over"));var n=this.state.boardData;n[e][t].isFlagged=!1,n[e][t].isRevealed=!0,n[e][t].isEmpty&&(n=this.revealEmpty(e,t,n)),this.getHidden(n).length===this.props.mines&&(a=!0,this.revealBoard(),this.props.gameWin(!0),alert("You Win")),this.setState({boardData:n,mineCount:this.props.mines-this.getFlags(n).length,gameWon:a})}},{key:"_handleContextMenu",value:function(e,t,a){e.preventDefault();var n=this.state.boardData,i=this.state.mineCount,s=!1;if(!n[t][a].isRevealed){if(n[t][a].isFlagged?(n[t][a].isFlagged=!1,i++):(n[t][a].isFlagged=!0,i--),0===i){var r=this.getMines(n),o=this.getFlags(n);(s=JSON.stringify(r)===JSON.stringify(o))&&(this.revealBoard(),this.props.gameWin(!0),alert("You Win"))}this.setState({boardData:n,mineCount:i,gameWon:s})}}},{key:"renderBoard",value:function(e){var t=this;return e.map(function(e){return e.map(function(a){return i.a.createElement("div",{key:a.x*e.length+a.y},i.a.createElement(d,{onClick:function(){return t.handleCellClick(a.x,a.y)},cMenu:function(e){return t._handleContextMenu(e,a.x,a.y)},value:a,screenWidth:t.state.clientRect.width}),e[e.length-1]===a?i.a.createElement("div",{className:"clear"}):"")})})}},{key:"componentWillReceiveProps",value:function(e){JSON.stringify(this.props)!==JSON.stringify(e)&&this.setState({boardData:this.initBoardData(e.height,e.width,e.mines),gameWon:!1,mineCount:e.mines})}},{key:"getstyle",value:function(){return{minWidth:"150px"}}},{key:"render",value:function(){var e=this.getstyle();return i.a.createElement("div",{className:"board",ref:this.ref},i.a.createElement("div",{className:"start",width:this.state.clientRect.width/10+"px"}),i.a.createElement("div",{className:"board",style:e,width:8*this.state.clientRect.width/10+"px"},this.renderBoard(this.state.boardData)),i.a.createElement("div",{className:"end",width:this.state.clientRect.width/10+"px"}))}}]),t}(i.a.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={height:8,width:8,mines:10,wongame:!1},a.wongame=function(e){a.state.wongame=e},a.handleGameEnd=function(){a.props.handleClick("EndScreen",a.state)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("data from parane"+JSON.stringify(e)),JSON.stringify(this.props)!==JSON.stringify(e)&&this.setState({height:e.height,width:e.width,mines:e.mines})}},{key:"render",value:function(){var e=this.props.data?this.props.data:this.state,t=e.height,a=e.width,n=e.mines;return console.log("data from parent is "+JSON.stringify(this.props.data)),i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-info"},i.a.createElement(m,{height:t,width:a,mines:n,gameWin:this.wongame.bind(this)}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"screen-button",onClick:this.handleGameEnd},"End")))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).handleGameReStart=function(){a.props.handleClick("StartScreen")},a.playNextGame=function(){a.props.handleClick("GameScreen")},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.data.wongame?"Congratulations You win":"OOOps you loos";return i.a.createElement("div",{className:"gameEnd"},i.a.createElement("div",{className:"game-info"},i.a.createElement("div",{className:"instructions"},i.a.createElement("h4",null,e),i.a.createElement("p",null,"Click on Play Next to try Again. Or Restart and select the game level and continue again.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"screen-button",onClick:this.playNextGame},"Play Next"),i.a.createElement("button",{className:"screen-button",onClick:this.handleGameReStart},"Restart")))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={screen:h,data:{}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"changeState",value:function(e,t){switch(console.log("data "+JSON.stringify(t)),e){case"StartScreen":this.state.screen=h,this.state.data=t;break;case"EndScreen":this.state.screen=v,this.state.data=t;break;case"GameScreen":this.state.screen=p,this.state.data=t}this.setState(this.state)}},{key:"render",value:function(){return i.a.createElement("center",null,i.a.createElement(this.state.screen,{handleClick:this.changeState.bind(this),data:this.state.data}))}}]),t}(n.Component),f=a(16),b=a.n(f),y=a(18),w=a(9),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var O=a(12),S="LEADERBOARD_LOADED",N="LOGGED_IN",C="MOVE_OBJECTS",j="START_GAME",R="SHOOT",D={angle:45,gameState:{started:!1,kills:0,lives:3,flyingObjects:[],lastObjectCreatedAt:new Date,currentPlayer:null,players:null,cannonBalls:[]}};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(O.a)({},e,{players:t.players});case N:return Object(O.a)({},e,{currentPlayer:t.player});case C:case j:case R:default:return e}},x=Object(w.b)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());b.a.render(i.a.createElement(y.a,{store:x},i.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/assets/html5/mines",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/assets/html5/mines","/service-worker.js");E?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.b4eb00c5.chunk.js.map