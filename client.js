let body =document.querySelector("body");
let main =document.querySelector("main");
var x = 0;
let max_screen =window.innerWidth;
let arrow =document.querySelector("#span");
let downloadbtn = document.getElementById("downloadbtn");
var agent = 0;
var url = ["https://0ai2.github.io/Apps/acm.apk", "https://0ai2.github.io/Apps/acm.apk"];
       

body.onscroll = function(){
    if (body.scrollTop >64) {
        main.style.overflow="scroll";
    }else
    {
        main.style.overflow="hidden";
    }
    if(body.scrollTop >30){
     document.querySelector("#spanx").style.transform="scale(0)";
       document.querySelector("#spany").style.transform="scale(0)";
    }
    else{
document.querySelector("#spanx").style.transform="scale(1)";
       document.querySelector("#spany").style.transform="scale(1)";
    }
}
if (max_screen >395) {
    alert("This device screen width format is not support by my Website")
}
  function next(){
      x+=-370;
      document.querySelector(".film").style.left=x;
      if(x==-740){
          return x =370;
      }
     else if(x==-1110){
         document.querySelector(".film").style.left=0;
         x=0;
     }
  }
  function back(){
      x+=370;
      if(x==370){
          x=-740;
     }
      document.querySelector(".film").style.left=x;
  }
   function download() {
            agent += 1;
            open(url[agent]);

            downloadbtn.style.display = "none";

            setTimeout(function() {
                downloadbtn.style.display = "block";
            }, 15000);
            alert()
        }
