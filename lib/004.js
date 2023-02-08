 function preloadFunc(){
  var htnm = window.location.hostname;
  var ccdiv = '<div id=\"ccm\" style=\"margin: 8rem auto;width: 100%; max-width: 60rem;font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\"><h1 style=\"line-height: 3.75rem; font-size: 2.5rem; font-weight: 500;\">'+htnm+'</h1><h2>Checking if the site connection is secure.</h2><div id=\"ccc\"><svg width=\"70\" height=\"70\" viewBox=\"0 0 150 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"ccsvg\"><animateTransform xlink:href=\"#ccsvg\"  attributeName=\"transform\"  attributeType=\"XML\"  type=\"rotate\"  from=\"0 50 50\"  to=\"360 50 50\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\" restart=\"always\"/><path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z\" fill=\"#66B1DC\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M100 50C100 22.3858 77.6142 0 50 0V10C72.0914 10 90 27.9086 90 50H100Z\" fill=\"#66B1DC\"/></g></svg><br/><span style=\"line-height: 2.25rem; font-size: 1.5rem; font-weight: 400;\"> '+htnm+' needs to review the security of your connection before proceeding.</span></div><div id=\"ccf\" style="display:none"><h2><img class=\"heading-icon\" alt=\"Success icon\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAANlBMVEUAAAAxMTEwMDAxMTExMTEwMDAwMDAwMDAxMTExMTExMTEwMDAwMDAxMTExMTEwMDAwMDAxMTHB9N+uAAAAEXRSTlMA3zDvfyBAEJC/n3BQz69gX7VMkcMAAAGySURBVEjHnZZbFoMgDEQJiDzVuv/NtgbtFGuQ4/zUKpeMIQbUhXSKE5l1XSn4pFWHRm/WShT1HRLWC01LGxFEVkCc30eYkLJ1Sjk9pvkw690VY6k8DWP9OM9yMG0Koi+mi8XA36NXmW0UXra4eJ3iwHfrfXVlgL0NqqGBHdqfeQhMmyJ48WDuKP81h3+SMPeRKkJcSXiLUK4XTHCjESOnz1VUXQoc6lgi2x4cI5aTQ201Mt8wHysI5fc05M5c81uZEtHcMKhxZ7iYEty1GfhLvGKpm+EYkdGxm1F5axmcB93DoORIbXfdN7f+hlFuyxtDP+sxtBnF43cIYwaZAWRgzxIoiXEMESoPlMhwLRDXeK772CAzXEdBRV7cmnoVBp0OSlyGidEzJTFq5hhcsA5388oSGM6b5p+qjpZrBlMS9xj4AwXmz108ukU1IomM3ceiW0CDwHCqp1NjAqXlFrbga+xuloQJ+tuyfbIBPNpqnmxqT7dPaOnZqBfhSBCteJAxWj58zLk2xgg+SPGYM6dRO6WczSnIxxwEExRaO+UyCUhbOp7CGQ+kxSUfNtLQFC+Po29vvy7jj4y0yAAAAABJRU5ErkJggg==\"> Connection is secure </h2><span style=\"line-height: 2.25rem; font-size: 1.5rem; font-weight: 400;\"> Proceeding...</span><div></div>';
    
  let cccd = document.createElement("div");
    cccd.setAttribute("id", "ccmain");
  cccd.setAttribute("style", "z-index:99999999999999999999999999999999999999;position:fixed; top:-10; background-color:white; width:100%; height:105%;");
  cccd.innerHTML = ccdiv; 
    document.body.insertAdjacentElement('afterbegin', cccd);  
 setTimeout(function () {
         document.getElementById('ccc').style.display = "none";
         document.getElementById('ccf').style.display = "block";
    setTimeout(function () {     
         document.getElementById("ccmain").remove();
     }, 2000);
     }, 8000);
   }
    window.onpaint = preloadFunc();

