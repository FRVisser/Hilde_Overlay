console.log('init');

document.onkeydown = checkKey;

var div = document.createElement("div");
div.id = "showdiv";
//css styling
div.style.width = "100vw";
div.style.height = "100vh";
div.style.background = "blue";
div.style.position = "fixed";
div.style.zIndex = "999";
div.style.margin = "0";
div.style.top = "0";
div.style.left = "0";
//hier de inhoud van de div
 div.innerHTML = "<img src='https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/18671079_1532982446746113_366739055548157275_n.jpg?oh=3c6d8358379e4ee849dfd183cee06c14&oe=59A29C37'/>";
 div.style.display = "none";


//hoi x 1000
// for(var i = 0; i < 1000; i++){
//      div.innerHTML += "hoi";
// }

document.body.appendChild(div);


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        //maak een nieuwe div



                $('#showdiv').fadeIn(100).fadeOut(100);

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
