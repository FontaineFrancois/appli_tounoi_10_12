var arr = ["equipe 1","equipe 2","equipe 3","equipe 4","equipe 5","equipe 6"];
var numeroTire1;
var numerotire2;
var numeroTire3;
var numerotire4;
var numeroTire5;
var numerotire6;


function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function tirage_terrain1() {
           numeroTire1 = getRandom(0,arr.length);
           numeroTire2 = getRandom(0,arr.length);
              while (numeroTire2 == numeroTire1) {
                numeroTire2 = getRandom(0,arr.length);
              }
          document.getElementById("equipe1").innerHTML = arr[numeroTire1];
          document.getElementById("equipe2").innerHTML = arr[numeroTire2];
}

function tirage_terrain2() {
           numeroTire3 = getRandom(0,arr.length);
           numeroTire4 = getRandom(0,arr.length);
              while (numeroTire4 == numeroTire3) {
                numeroTire4 = getRandom(0,arr.length);
              }
          document.getElementById("equipe3").innerHTML = arr[numeroTire3];
          document.getElementById("equipe4").innerHTML = arr[numeroTire4];
}

function tirage_terrain3() {
          numeroTire5 = getRandom(0,arr.length);
          numeroTire6 = getRandom(0,arr.length);
          while (numeroTire6 == numeroTire5) {
            numeroTire6 = getRandom(0,arr.length);
          }
          document.getElementById("equipe5").innerHTML = arr[numeroTire5];
          document.getElementById("equipe6").innerHTML = arr[numeroTire6];
}
