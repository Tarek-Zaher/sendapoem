function copyPoem() {
  var copyText = document.getElementById("poem");
  copyText.select();
  document.execCommand("copy");

  var alert = document.createElement("div");
   alert.setAttribute("style","position:fixed;width:50%;height:auto;top:calc(75% / 2);left:25%;background-color:#3D3D3D;color:white;border-radius:25px");
   alert.innerHTML = "<h2 class='copied'>Copied! 🙂</h1>";
   setTimeout(function(){
    alert.parentNode.removeChild(alert);
  }, 1000);
   document.body.appendChild(alert);
}
