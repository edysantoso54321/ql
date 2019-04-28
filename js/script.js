var alpa=0.01; var beta=13;var reword=[];var qsa=[]; var start=210; var finish=14; var episode=1500; var act=0; var now=0;
function n2c(a){return a%15;}
function n2b(a){return Math.floor(a/15);}
function n2r(a){return parseInt(reword[n2b(a)][n2c(a)]);}
function istop(a){return n2b(a)==0;}
function isleft(a){return n2c(a)==0;}
function isbot(a){return n2b(a)==14;}
function isright(a){return n2c(a)==14;}
function istopright(a){return (istop(a)) && (isright(a));}
function istopleft(a){return (istop(a)) && (isleft(a));}
function isbotright(a){return (isbot(a)) && (isright(a));}
function isbotleft(a){return (isbot(a))&&(isleft(a));}
function next(a,b){if (b==0){return a-15;}else if(b==1){return a+1;}else if(b==2){return a+15;}else{return a-1;}}
function upd(a,b){return alpa*(n2r(next(a,b)) + beta*Math.max(...qsa[next(a,b)]) + qsa[a][b]);}
function getact(a){
	if (istopleft(a)){var x=[qsa[a][1],qsa[a][2]];return 1+x.indexOf(Math.max(...x));}
	else if (istop(a)){var x=[qsa[a][1],qsa[a][2],qsa[a][3]];return 1+x.indexOf(Math.max(...x));}
	else if (isbotleft(a)){var x=[qsa[a][0],qsa[a][1]];return x.indexOf(Math.max(...x));}
	else if (isbotright(a)){var x=[qsa[a][3],qsa[a][0]];return (3+x.indexOf(Math.max(...x)))%4;}
	else if (isbot(a)){var x=[qsa[a][3],qsa[a][0],qsa[a][1]];return (3+x.indexOf(Math.max(...x)))%4;}
	else if (isleft(a)){var x=[qsa[a][0],qsa[a][1],qsa[a][2]];return (0+x.indexOf(Math.max(...x)))%4;}
	else if (isright(a)){var x=[qsa[a][2],qsa[a][3],qsa[a][0]];return (2+x.indexOf(Math.max(...x)))%4;}
	else {return qsa[a].indexOf(Math.max(...qsa[a]));}
}
function preproses(cell){reword.push(cell);}