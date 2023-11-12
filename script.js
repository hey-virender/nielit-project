var crsr = document.querySelector("#cursor");
document.addEventListener('mousemove',function(dets) {
  crsr.style.left = dets.x - 20 + "px";
  crsr.style.top = dets.y - 20 + "px";
}) ;