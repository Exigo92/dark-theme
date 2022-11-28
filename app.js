//Eseménykezeléssel megvizsgáljuk a checkbox állpotzát. Ha váltrozik az állapota (be van pipálva) akkor a body-hoz adjunk egy class-t, ami megváltoztatja a hátteret sötétre, a betűszínt pedig világosra

document.getElementById("checkbox").addEventListener("change", function(){

    document.body.classList.toggle("dark");
})