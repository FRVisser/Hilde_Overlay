console.log('init');

document.onkeydown = checkKey;
document.onkeyup = fade_out;

var div = document.createElement("div");
div.id = "showdiv";
//css styling
div.style.width = "100vw";
div.style.height = "100vh";
// div.style.background = "blue";
div.style.position = "fixed";
div.style.zIndex = "999";
div.style.margin = "0";
div.style.top = "0";
div.style.left = "0";
//hier de inhoud van de div
 div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask-2.png' style='height: 100%; width: 100%;'>";
 div.style.display = "none";



//hoi x 1000
// for(var i = 0; i < 1000; i++){
//      div.innerHTML += "hoi";
// }

document.body.appendChild(div);


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' | e.keyCode == '40') {
        //maak een nieuwe div


                // if (e.onkeydown) {
                $('#showdiv').fadeIn(80);
              // }

                $('*').on('click', function(){
                  // $('#underlay').stop(true, true).show().fadeOut(100);

                });


    }
    else if (e.keyCode == '40') {
        console.log("down")
    }
    else if (e.keyCode == '37') {
       console.log("left")
    }
    else if (e.keyCode == '39') {
       console.log("right")
    }

}

function fade_out(e) {

    $('#showdiv').fadeOut(80);
  }
