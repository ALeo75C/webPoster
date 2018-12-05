function changeF1(fon) {
  document.body.style.background = 'url(fon/F1.gif)';
}
function changeF2(fon) {
  document.body.style.background = 'url(fon/F2.gif)';
}
function changeF3(fon) {
  document.body.style.background = 'url(fon/F3.gif)';
}
function changeF4(fon) {
  document.body.style.background = 'url(fon/F4.gif)';
}

// function show(none) {
//   document.getElementsByClassName('none').style.opacity = '1';
// }
function setOpacity() {
     var el = document.getElementsByClassName("none")[0];
     var op = 0;
     setTimeout(function func() {
         if (op > 0.3)
             return;
         el.style.opacity = op;
         op += 0.1;
         setTimeout (func, 0);
     }, );
     // document.h1.style.color = "#FFFFFF";
   }
function colorH1() {
  if document.getElementsByClassName("none").style.opasity == "0.3" {
    document.h1.style.color = "fff";
  }
}
