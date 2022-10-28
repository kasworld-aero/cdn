 function loadkjs(kjs) {  for (var i = 0, l = kjs.length; i < l; i++) {
    document.getElementsByTagName("head")[0].innerHTML += ("<script src=\"//kasworld-aero.github.io/cdn/lib/" + kjs[i] + ".js\"></scr" + "ipt>");
  }
  }
    loadkjs(kjs);
