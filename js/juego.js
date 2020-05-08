
var contarMascota = 0;


$('.toggle').click(function () {

    if (contarMascota > 0) {


        $('.formulario').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: 'toggle'
        }, "slow");



    } else {

        window.alert("DEBES CREAR UNA MASCOTA PARA PODER JUGAR");


    }

});

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var ñ = 0;
var o = 0;
var p = 0;
var tipo1;
var tipo2;
var tipo3;
var tipo4;
var tipo5;
var tipo6;
var tipo7;
var tipo8;
var tipo9;
var tipo10;
var tipo11;
var tipo12;
var tipo13;
var tipo14;
var tipo15;
var tipo16;
var ejecutar = 0;


function crear() {
    // document.getElementById("otro").innerHTML = "mañana";
    //document.getElementById("resultado").innerHTML = colocar;



    if (ejecutar < 16) {
        for (var i = 0; i < 16; i++) {
            switch (i) {
                case 0:
                    if (a == 0 && ejecutar < 16) {

                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;

                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet1" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m1">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud1" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad1" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene1" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer1()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar1()">Bañar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar1()">Jugar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';

                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet1" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m2">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud1" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad1" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene1" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer1()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar1()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar1()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m2").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet1" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m3">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud1" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad1" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene1" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer1()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar1()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar1()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m3").innerHTML = nomMascota;

                        }

                        document.getElementById("resultado").innerHTML = colocar;

                        if (ver1 > 0) {
                            document.getElementById("m1").innerHTML = nomMascota;
                            tipo1 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m2").innerHTML = nomMascota;
                            tipo1 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m3").innerHTML = nomMascota;
                            tipo1 = "loro";
                        }
                        i = 15;
                        ejecutar = 1;
                        window.alert("MASCOTA CREADA");
                        a = 1;
                        ++contarMascota;

                        Start1();

                    }
                    break;
                case 1:
                    if (b == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet2" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m4">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud2" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad2" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene2" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer2()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar2()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar2()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m4").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet2" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m5">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud2" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad2" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene2" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer2()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar2()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar2()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m5").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet2" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m6">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud2" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad2" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene2" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer2()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar2()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar2()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m6").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado1").innerHTML = colocar;

                        if (ver1 > 0) {
                            document.getElementById("m4").innerHTML = nomMascota;
                            tipo2 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m5").innerHTML = nomMascota;
                            tipo2 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m6").innerHTML = nomMascota;
                            tipo2 = "loro";
                        }

                        ejecutar = 2;
                        window.alert("MASCOTA CREADA");

                        b = 1;
                        i = 15;
                        ++contarMascota;
                        Start2();
                    }
                    break;
                case 2:
                    if (c == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet3" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m7">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud3" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad3" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene3" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer3()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar3()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar3()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //document.getElementById("m7").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato
                            ver2 = 1;

                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet3" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m8">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud3" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad3" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene3" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer3()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar3()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar3()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m8").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet3" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m9">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud3" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad3" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene3" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer3()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar3()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar3()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m9").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado2").innerHTML = colocar;



                        if (ver1 > 0) {
                            document.getElementById("m7").innerHTML = nomMascota;
                            tipo3 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m8").innerHTML = nomMascota;
                            tipo3 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m9").innerHTML = nomMascota;
                            tipo3 = "loro";
                        }
                        ejecutar = 3;
                        window.alert("MASCOTA CREADA");



                        c = 1;
                        i = 15;
                        ++contarMascota;
                        Start3();
                    }
                    break;
                case 3:
                    if (d == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet4" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m10">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud4" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad4" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene4" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer4()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar4()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar4()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m10").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet4" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m11">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud4" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad4" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene4" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer4()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar4()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar4()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m11").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet4" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m12">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud4" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad4" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene4" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer4()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar4()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar4()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m12").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado3").innerHTML = colocar;

                        if (ver1 > 0) {
                            document.getElementById("m10").innerHTML = nomMascota;
                            tipo4 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m11").innerHTML = nomMascota;
                            tipo4 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m12").innerHTML = nomMascota;
                            tipo4 = "loro";
                        }

                        ejecutar = 4;
                        window.alert("MASCOTA CREADA");



                        d = 1;
                        i = 15;
                        ++contarMascota;
                        Start4();
                    }
                    break;
                case 4:
                    if (e == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet5" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m13">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud5" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad5" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene5" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer5()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar5()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar5()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m13").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet5" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m14">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud5" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad5" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene5" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer5()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar5()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar5()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m14").innerHTML = nomMascota;

                        } else {    //significa que es loro
                            ver3 = 1;

                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet5" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m15">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud5" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad5" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene5" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer5()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar5()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar5()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m15").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado4").innerHTML = colocar;

                        if (ver1 > 0) {
                            document.getElementById("m13").innerHTML = nomMascota;
                            tipo5 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m14").innerHTML = nomMascota;
                            tipo5 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m15").innerHTML = nomMascota;
                            tipo5 = "loro";
                        }

                        ejecutar = 5;
                        window.alert("MASCOTA CREADA");



                        e = 1;
                        i = 15;
                        ++contarMascota;
                        Start5();
                    }
                    break;
                case 5:
                    if (f == 0 && ejecutar < 16) {

                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet6" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m16">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud6" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad6" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene6" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer6()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar6()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar6()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m16").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato
                            ver2 = 1;

                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet6" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m17">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud6" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad6" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene6" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer6()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar6()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar6()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m17").innerHTML = nomMascota;

                        } else {    //significa que es loro
                            ver3 = 1;

                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet6" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m18">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud6" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad6" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene6" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer6()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar6()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar6()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //    document.getElementById("m18").innerHTML = nomMascota;

                        }

                        document.getElementById("resultado5").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m16").innerHTML = nomMascota;
                            tipo6 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m17").innerHTML = nomMascota;
                            tipo6 = "gato";
                        } if (ver3 > 0) {
                            document.getElementById("m18").innerHTML = nomMascota;
                            tipo6 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 6;
                        f = 1;
                        i = 15;
                        ++contarMascota;
                        Start6();
                    }
                    break;
                case 6:
                    if (g == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet7" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m19">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud7" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad7" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene7" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer7()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar7()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar7()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m19").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet7" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m20">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud7" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad7" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene7" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer7()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar7()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="JUgar7()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m20").innerHTML = nomMascota;

                        } else {    //significa que es loro
                            ver3 = 1;

                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet7" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m21">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud7" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad7" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene7" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer7()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar7()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar7()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m21").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado6").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m19").innerHTML = nomMascota;
                            tipo7 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m20").innerHTML = nomMascota;
                            tipo7 = "gato";
                        } if (ver3 > 0) {
                            document.getElementById("m21").innerHTML = nomMascota;
                            tipo7 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 7;
                        g = 1;
                        i = 15;
                        ++contarMascota;
                        Start7();
                    }
                    break;
                case 7:
                    if (h == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet8" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m22">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud8" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad8" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene8" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer8()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar8()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar8()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m22").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet8" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m23">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud8" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad8" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene8" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer8()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar8()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar8()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m23").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet8" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m24">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud8" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad8" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene8" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer8()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar8()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar8()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m24").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado7").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m22").innerHTML = nomMascota;
                            tipo8 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m23").innerHTML = nomMascota;
                            tipo8 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m24").innerHTML = nomMascota;
                            tipo8 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 8;
                        h = 1;
                        i = 15;
                        ++contarMascota;
                        Start8();
                    }
                    break;
                case 8:
                    if (j == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet9" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m25">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud9" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad9" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene9" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer9()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar9()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar9()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m25").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet9" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m26">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud9" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad9" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene9" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer9()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar9()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar9()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m26").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet9" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m27">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud9" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad9" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene9" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer9()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar9()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar9()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m27").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado8").innerHTML = colocar;

                        if (ver1 > 0) {
                            document.getElementById("m25").innerHTML = nomMascota;
                            tipo9 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m26").innerHTML = nomMascota;
                            tipo9 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m27").innerHTML = nomMascota;
                            tipo9 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 9;
                        j = 1;
                        i = 15;
                        ++contarMascota;
                        Start9();
                    }
                    break;
                case 9:
                    if (k == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet10" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m28">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud10" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad10" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene10" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer10()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar10()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar10()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m28").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet10" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m29">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud10" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad10" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene10" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer10()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar10()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar10()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m29").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet10" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m30">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud10" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad10" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene10" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer10()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar10()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar10()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m30").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado9").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m28").innerHTML = nomMascota;
                            tipo10 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m29").innerHTML = nomMascota;
                            tipo10 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m30").innerHTML = nomMascota;
                            tipo10 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 10;
                        k = 1;
                        i = 15;
                        ++contarMascota;
                        Start10();
                    }
                    break;
                case 10:
                    if (l == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet11" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m31">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud11" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad11" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene11" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer11()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar11()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar11()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m31").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet11" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m32">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud11" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad11" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene11" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer11()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar11()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar11()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m32").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet11" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m33">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud11" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad11" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene11" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer11()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar11()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar11()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m33").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado10").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m31").innerHTML = nomMascota;
                            tipo11 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m32").innerHTML = nomMascota;
                            tipo11 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m33").innerHTML = nomMascota;
                            tipo11 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 11;
                        l = 1;
                        i = 15;
                        ++contarMascota;
                        Start11();
                    }
                    break;
                case 11:
                    if (m == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet12" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m34">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud12" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad12" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene12" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer12()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar12()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar12()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m34").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet12" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m35">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud12" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad12" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene12" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer12()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar12()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar12()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m35").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet12" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m36">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud12" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad12" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene12" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer12()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar12()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar12()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m36").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado11").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m34").innerHTML = nomMascota;
                            tipo12 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m35").innerHTML = nomMascota;
                            tipo12 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m36").innerHTML = nomMascota;
                            tipo12 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 12;
                        m = 1;
                        i = 15;
                        ++contarMascota;
                        Start12();
                    }
                    break;
                case 12:
                    if (n == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet13" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m37">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud13" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad13" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene13" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer13()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar13()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar13()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m37").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet13" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m38">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud13" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad13" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene13" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer13()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar13()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar13()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m38").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet13" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m39">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud13" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad13" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene13" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer13()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar13()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar13()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m39").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado12").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m37").innerHTML = nomMascota;
                            tipo13 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m38").innerHTML = nomMascota;
                            tipo13 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m39").innerHTML = nomMascota;
                            tipo13 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 13;
                        n = 1;
                        i = 15;
                        ++contarMascota;
                        Start13();
                    }
                    break;
                case 13:
                    if (ñ == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet14" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m40">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud14" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad14" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene14" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer14()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar14()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar14()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m40").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet14" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m41">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud14" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad14" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene14" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer14()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar14()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar14()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m41").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet14" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m42">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud14" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad14" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene14" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer14()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar14()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar14()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m42").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado13").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m40").innerHTML = nomMascota;
                            tipo14 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m41").innerHTML = nomMascota;
                            tipo14 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m42").innerHTML = nomMascota;
                            tipo14 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 14;
                        ñ = 1;
                        i = 15;
                        ++contarMascota;
                        Start14();
                    }
                    break;
                case 14:
                    if (o == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet15" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m43">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud15" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad15" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene15" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer15()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar15()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar15()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m43").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet15" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m44">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud15" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad15" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene15" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer15()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar15()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar15()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //    document.getElementById("m44").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet15" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m45">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud15" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad15" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene15" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer15()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar15()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar15()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //   document.getElementById("m45").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado14").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m43").innerHTML = nomMascota;
                            tipo15 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m44").innerHTML = nomMascota;
                            tipo15 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m45").innerHTML = nomMascota;
                            tipo15 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 15;
                        o = 1;
                        i = 15;
                        ++contarMascota;
                        Start15();
                    }
                    break;
                case 15:
                    if (p == 0 && ejecutar < 16) {
                        var ver1 = 0;
                        var ver2 = 0;
                        var ver3 = 0;
                        var nomMascota = document.getElementById('nameMas').value
                        var operation = document.getElementById("operaciones").value;
                        var colocar = '<center>';

                        if (operation == "perro") {
                            ver1 = 1;
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/perroFeliz.jpg" class="pet" id="pet16" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m46">Mascota 1</h2>';
                            colocar += 'Salud:<div  id="salud16" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad16" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene16" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer16()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar16()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar16()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m46").innerHTML = nomMascota;
                        } else if (operation == "gato") { //cuando es gato

                            ver2 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/gatoFeliz.jpg" class="pet" id="pet16" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m47">Mascota 2</h2>';
                            colocar += 'Salud:<div  id="salud16" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad16" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene16" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer16()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar16()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar16()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            // document.getElementById("m47").innerHTML = nomMascota;

                        } else {    //significa que es loro

                            ver3 = 1;
                            var colocar = '<center>';
                            colocar += '<div id="bloqueImagen" >';
                            colocar += '<img src="img/loroFeliz.jpg" class="pet" id="pet16" alt="imagen">';
                            colocar += '</div>';
                            colocar += '<div  class="lado"><h2 id="m48">Mascota 3</h2>';
                            colocar += 'Salud:<div  id="salud16" class="barra"> 100%</div>';
                            colocar += 'Felicidad:<div id="felicidad16" class="barra"> 100%</div>';
                            colocar += 'Higiene:<div  id="higiene16" class="barra"> 100%</div>';
                            colocar += '<br>';
                            colocar += '</div>';
                            colocar += '<div  id="bloqueBoton">';
                            colocar += '<p><span class="boton" onclick="Comer16()">Alimentar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Banar16()">Jugar</span></p>';
                            colocar += '<br>';
                            colocar += '<br>';
                            colocar += '<p><span class="boton" onclick="Jugar16()">Bañar</span></p>';
                            colocar += '</div>';
                            colocar += '</center>';
                            //  document.getElementById("m48").innerHTML = nomMascota;

                        }
                        document.getElementById("resultado15").innerHTML = colocar;
                        if (ver1 > 0) {
                            document.getElementById("m46").innerHTML = nomMascota;
                            tipo16 = "perro";
                        } else if (ver2 > 0) {
                            document.getElementById("m47").innerHTML = nomMascota;
                            tipo16 = "gato";
                        } else if (ver3 > 0) {
                            document.getElementById("m48").innerHTML = nomMascota;
                            tipo16 = "loro";
                        }
                        window.alert("MASCOTA CREADA");
                        ejecutar = 16;
                        p = 1;
                        i = 15;
                        ++contarMascota;
                        Start16();
                    }
                    break;

            }


        }
    } else {
        window.alert("NO PUEDES CREAR MÁS MASCOTAS");

    }




}

//inicia las funciones del animal

var salud1 = 100;
var felicidad1 = 100;
var higiene1 = 100;


function Loop1(time = 1) {
    var total1 = salud1 + higiene1 + felicidad1;

    if (salud1 <= 0 || higiene1 <= 0 || felicidad1 <= 0) {
        document.getElementById("resultado").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo1 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (salud1 <= 0 || higiene1 <= 0 || felicidad1 <= 0) {
                document.getElementById("resultado").innerHTML = "Su mascota falleció.";
            }
            /*
            * poner imagen segun salud
            */
            else if (total1 > 250) {
                document.getElementById("pet1").src = "img/perroFeliz.jpg";
            }
            else if (total1 > 145) {
                document.getElementById("pet1").src = "img/perroMedio.jpg";
            } else if (total1 > 50) {
                document.getElementById("pet1").src = "img/perroTriste.jpg";
            }
        } else if (tipo1 == "gato") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (salud1 <= 0 || higiene1 <= 0 || felicidad1 <= 0) {
                document.getElementById("resultado").innerHTML = "Su mascota falleció.";
            }
            /*
            * poner imagen segun salud
            */
            else if (total1 > 250) {
                document.getElementById("pet1").src = "img/gatoFeliz.jpg";
            }
            else if (total1 > 145) {
                document.getElementById("pet1").src = "img/gatoMedio.jpg";
            } else if (total1 > 50) {
                document.getElementById("pet1").src = "img/gatoTriste.jpg";
            }
        } else {

            /*
                    si algún atributo llega a cero, la mascota muere
                */
            if (salud1 <= 0 || higiene1 <= 0 || felicidad1 <= 0) {
                document.getElementById("resultado").innerHTML = "Su mascota falleció.";
            }
            /*
            * poner imagen segun salud
            */
            else if (total1 > 250) {
                document.getElementById("pet1").src = "img/loroFeliz.jpg";
            }
            else if (total1 > 145) {
                document.getElementById("pet1").src = "img/loroMedio.jpg";
            } else if (total1 > 50) {
                document.getElementById("pet1").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud1 = salud1 - time;
        felicidad1 = felicidad1 - time;
        higiene1 = higiene1 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud1 < 0) { salud1 = 0; }
        if (felicidad1 < 0) { felicidad1 = 0; }
        if (higiene1 < 0) { higiene1 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud1").style.width = salud1 + "px";
        document.getElementById("felicidad1").style.width = felicidad1 + "px";
        document.getElementById("higiene1").style.width = higiene1 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud1").innerHTML = salud1 + "%";
        document.getElementById("felicidad1").innerHTML = felicidad1 + "%";
        document.getElementById("higiene1").innerHTML = higiene1 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start1() {
    var temporizador = setInterval(Loop1, 500);
}

/*
* recupera la barra de salud
*/
function Comer1() {


    if (tipo1 == "perro") {

        salud1 = salud1 + 5;
        document.getElementById("salud1").innerHTML = salud1 + "%";
        document.getElementById("salud1").style.width = salud1 + "px";
    } else if (tipo1 == "gato") {
        salud1 = salud1 + 6;
        document.getElementById("salud1").innerHTML = salud1 + "%";
        document.getElementById("salud1").style.width = salud1 + "px";

    } else {
        salud1 = salud1 + 5;
        document.getElementById("salud1").innerHTML = salud1 + "%";
        document.getElementById("salud1").style.width = salud1 + "px";


    }
}

/*
* recupera la barra de Higiene
*/
function Banar1() {
    if (tipo1 == "perro") {
        higiene1 = higiene1 + 5;
        document.getElementById("higiene1").innerHTML = higiene1 + "%";
        document.getElementById("higiene1").style.width = higiene1 + "px";

    } else if (tipo1 == "gato") {
        higiene1 = higiene1 + 1;
        document.getElementById("higiene1").innerHTML = higiene1 + "%";
        document.getElementById("higiene1").style.width = higiene1 + "px";

    } else {

        higiene1 = higiene1 + 3;
        document.getElementById("higiene1").innerHTML = higiene1 + "%";
        document.getElementById("higiene1").style.width = higiene1 + "px";

    }

}
/*
* recupera la barra de Felicidad
*/
function Jugar1() {
    if (tipo1 == "perro") {
        felicidad1 = felicidad1 + 5;
        document.getElementById("felicidad1").innerHTML = felicidad1 + "%";
        document.getElementById("felicidad1").style.width = felicidad1 + "px";

    } else if (tipo1 == "gato") {
        felicidad1 = felicidad1 + 2;
        document.getElementById("felicidad1").innerHTML = felicidad1 + "%";
        document.getElementById("felicidad1").style.width = felicidad1 + "px";

    } else {
        felicidad1 = felicidad1 + 4;
        document.getElementById("felicidad1").innerHTML = felicidad1 + "%";
        document.getElementById("felicidad1").style.width = felicidad1 + "px";


    }

}








//2

//inicia las funciones del animal

var salud2 = 100;
var felicidad2 = 100;
var higiene2 = 100;


function Loop2(time = 1) {
    var total2 = salud2 + higiene2 + felicidad2;

    if (salud2 <= 0 || higiene2 <= 0 || felicidad2 <= 0) {
        document.getElementById("resultado1").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo2 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total2 > 250) {
                document.getElementById("pet2").src = "img/perroFeliz.jpg";
            }
            else if (total2 > 145) {
                document.getElementById("pet2").src = "img/perroMedio.jpg";
            } else if (total2 > 50) {
                document.getElementById("pet2").src = "img/perroTriste.jpg";
            }
        } else if (tipo2 == "gato") {
            if (total2 > 250) {
                document.getElementById("pet2").src = "img/gatoFeliz.jpg";
            }
            else if (total2 > 145) {
                document.getElementById("pet2").src = "img/gatoMedio.jpg";
            } else if (total2 > 50) {
                document.getElementById("pet2").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total2 > 250) {
                document.getElementById("pet2").src = "img/loroFeliz.jpg";
            }
            else if (total2 > 145) {
                document.getElementById("pet2").src = "img/loroMedio.jpg";
            } else if (total2 > 50) {
                document.getElementById("pet2").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud2 = salud2 - time;
        felicidad2 = felicidad2 - time;
        higiene2 = higiene2 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud2 < 0) { salud2 = 0; }
        if (felicidad2 < 0) { felicidad2 = 0; }
        if (higiene2 < 0) { higiene2 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud2").style.width = salud2 + "px";
        document.getElementById("felicidad2").style.width = felicidad2 + "px";
        document.getElementById("higiene2").style.width = higiene2 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud2").innerHTML = salud2 + "%";
        document.getElementById("felicidad2").innerHTML = felicidad2 + "%";
        document.getElementById("higiene2").innerHTML = higiene2 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start2() {
    var temporizador = setInterval(Loop2, 500);
}

/*
* recupera la barra de salud
*/
function Comer2() {


    if (tipo2 == "perro") {
        salud2 = salud2 + 5;
        document.getElementById("salud2").innerHTML = salud2 + "%";
        document.getElementById("salud2").style.width = salud2 + "px";
    } else if (tipo2 == "gato") {
        salud2 = salud2 + 6;
        document.getElementById("salud2").innerHTML = salud2 + "%";
        document.getElementById("salud2").style.width = salud2 + "px";
    } else {
        salud2 = salud2 + 5;
        document.getElementById("salud2").innerHTML = salud2 + "%";
        document.getElementById("salud2").style.width = salud2 + "px";
    }

}

/*
* recupera la barra de Higiene
*/
function Banar2() {


    if (tipo2 == "perro") {
        higiene2 = higiene2 + 5;
        document.getElementById("higiene2").innerHTML = higiene2 + "%";
        document.getElementById("higiene2").style.width = higiene2 + "px";
    } else if (tipo2 == "gato") {
        higiene2 = higiene2 + 2;
        document.getElementById("higiene2").innerHTML = higiene2 + "%";
        document.getElementById("higiene2").style.width = higiene2 + "px";
    } else {
        higiene2 = higiene2 + 3;
        document.getElementById("higiene2").innerHTML = higiene2 + "%";
        document.getElementById("higiene2").style.width = higiene2 + "px";
    }

}
/*
* recupera la barra de Felicidad
*/
function Jugar2() {


    if (tipo2 == "perro") {
        felicidad2 = felicidad2 + 5;
        document.getElementById("felicidad2").innerHTML = felicidad2 + "%";
        document.getElementById("felicidad2").style.width = felicidad2 + "px";
    } else if (tipo2 == "gato") {
        felicidad2 = felicidad2 + 2;
        document.getElementById("felicidad2").innerHTML = felicidad2 + "%";
        document.getElementById("felicidad2").style.width = felicidad2 + "px";
    } else {
        felicidad2 = felicidad2 + 4;
        document.getElementById("felicidad2").innerHTML = felicidad2 + "%";
        document.getElementById("felicidad2").style.width = felicidad2 + "px";
    }

}


//3

//inicia las funciones del animal

var salud3 = 100;
var felicidad3 = 100;
var higiene3 = 100;


function Loop3(time = 1) {
    var total3 = salud3 + higiene3 + felicidad3;

    if (salud3 <= 0 || higiene3 <= 0 || felicidad3 <= 0) {
        document.getElementById("resultado2").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo3 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total3 > 250) {
                document.getElementById("pet3").src = "img/perroFeliz.jpg";
            }
            else if (total3 > 145) {
                document.getElementById("pet3").src = "img/perroMedio.jpg";
            } else if (total3 > 50) {
                document.getElementById("pet3").src = "img/perroTriste.jpg";
            }
        } else if (tipo3 == "gato") {
            if (total3 > 250) {
                document.getElementById("pet3").src = "img/gatoFeliz.jpg";
            }
            else if (total3 > 145) {
                document.getElementById("pet3").src = "img/gatoMedio.jpg";
            } else if (total3 > 50) {
                document.getElementById("pet3").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total3 > 250) {
                document.getElementById("pet3").src = "img/loroFeliz.jpg";
            }
            else if (total3 > 145) {
                document.getElementById("pet3").src = "img/loroMedio.jpg";
            } else if (total3 > 50) {
                document.getElementById("pet3").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud3 = salud3 - time;
        felicidad3 = felicidad3 - time;
        higiene3 = higiene3 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud3 < 0) { salud3 = 0; }
        if (felicidad3 < 0) { felicidad3 = 0; }
        if (higiene3 < 0) { higiene3 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud3").style.width = salud3 + "px";
        document.getElementById("felicidad3").style.width = felicidad3 + "px";
        document.getElementById("higiene3").style.width = higiene3 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud3").innerHTML = salud3 + "%";
        document.getElementById("felicidad3").innerHTML = felicidad3 + "%";
        document.getElementById("higiene3").innerHTML = higiene3 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start3() {
    var temporizador = setInterval(Loop3, 500);
}

/*
* recupera la barra de salud
*/
function Comer3() {
    if (tipo3 == "perro") {
        salud3 = salud3 + 5;
        document.getElementById("salud3").innerHTML = salud3 + "%";
        document.getElementById("salud3").style.width = salud3 + "px";
    } else if (tipo3 == "gato") {
        salud3 = salud3 + 6;
        document.getElementById("salud3").innerHTML = salud3 + "%";
        document.getElementById("salud3").style.width = salud3 + "px";
    } else {
        salud3 = salud3 + 5;
        document.getElementById("salud3").innerHTML = salud3 + "%";
        document.getElementById("salud3").style.width = salud3 + "px";
    }

}

/*
* recupera la barra de Higiene
*/
function Banar3() {
    if (tipo3 == "perro") {
        higiene3 = higiene3 + 5;
        document.getElementById("higiene3").innerHTML = higiene3 + "%";
        document.getElementById("higiene3").style.width = higiene3 + "px";
    } else if (tipo3 == "gato") {
        higiene3 = higiene3 + 1;
        document.getElementById("higiene3").innerHTML = higiene3 + "%";
        document.getElementById("higiene3").style.width = higiene3 + "px";
    } else {
        higiene3 = higiene3 + 3;
        document.getElementById("higiene3").innerHTML = higiene3 + "%";
        document.getElementById("higiene3").style.width = higiene3 + "px";
    }

}
/*
* recupera la barra de Felicidad
*/
function Jugar3() {
    if (tipo3 == "perro") {
        felicidad3 = felicidad3 + 5;
        document.getElementById("felicidad3").innerHTML = felicidad3 + "%";
        document.getElementById("felicidad3").style.width = felicidad3 + "px";
    } else if (tipo3 == "gato") {
        felicidad3 = felicidad3 + 2;
        document.getElementById("felicidad3").innerHTML = felicidad3 + "%";
        document.getElementById("felicidad3").style.width = felicidad3 + "px";
    } else {
        felicidad3 = felicidad3 + 4;
        document.getElementById("felicidad3").innerHTML = felicidad3 + "%";
        document.getElementById("felicidad3").style.width = felicidad3 + "px";
    }

}



//4

//inicia las funciones del animal

var salud4 = 100;
var felicidad4 = 100;
var higiene4 = 100;


function Loop4(time = 1) {
    var total4 = salud4 + higiene4 + felicidad4;

    if (salud4 <= 0 || higiene4 <= 0 || felicidad4 <= 0) {
        document.getElementById("resultado3").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo4 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total4 > 250) {
                document.getElementById("pet4").src = "img/perroFeliz.jpg";
            }
            else if (total4 > 145) {
                document.getElementById("pet4").src = "img/perroMedio.jpg";
            } else if (total4 > 50) {
                document.getElementById("pet4").src = "img/perroTriste.jpg";
            }
        } else if (tipo4 == "gato") {
            if (total4 > 250) {
                document.getElementById("pet4").src = "img/gatoFeliz.jpg";
            }
            else if (total4 > 145) {
                document.getElementById("pet4").src = "img/gatoMedio.jpg";
            } else if (total4 > 50) {
                document.getElementById("pet4").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total4 > 250) {
                document.getElementById("pet4").src = "img/loroFeliz.jpg";
            }
            else if (total4 > 145) {
                document.getElementById("pet4").src = "img/loroMedio.jpg";
            } else if (total4 > 50) {
                document.getElementById("pet4").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud4 = salud4 - time;
        felicidad4 = felicidad4 - time;
        higiene4 = higiene4 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud4 < 0) { salud4 = 0; }
        if (felicidad4 < 0) { felicidad4 = 0; }
        if (higiene4 < 0) { higiene4 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud4").style.width = salud4 + "px";
        document.getElementById("felicidad4").style.width = felicidad4 + "px";
        document.getElementById("higiene4").style.width = higiene4 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud4").innerHTML = salud4 + "%";
        document.getElementById("felicidad4").innerHTML = felicidad4 + "%";
        document.getElementById("higiene4").innerHTML = higiene4 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start4() {
    var temporizador = setInterval(Loop4, 500);
}

/*
* recupera la barra de salud
*/
function Comer4() {
    if (tipo4 == "perro") {
        salud4 = salud4 + 5;
        document.getElementById("salud4").innerHTML = salud4 + "%";
        document.getElementById("salud4").style.width = salud4 + "px";
    } else if (tipo4 == "gato") {
        salud4 = salud4 + 6;
        document.getElementById("salud4").innerHTML = salud4 + "%";
        document.getElementById("salud4").style.width = salud4 + "px";
    } else {
        salud4 = salud4 + 5;
        document.getElementById("salud4").innerHTML = salud4 + "%";
        document.getElementById("salud4").style.width = salud4 + "px";
    }

}

/*
* recupera la barra de Higiene
*/
function Banar4() {
    if (tipo4 == "perro") {
        higiene4 = higiene4 + 5;
        document.getElementById("higiene4").innerHTML = higiene4 + "%";
        document.getElementById("higiene4").style.width = higiene4 + "px";
    } else if (tipo4 == "gato") {
        higiene4 = higiene4 + 1;
        document.getElementById("higiene4").innerHTML = higiene4 + "%";
        document.getElementById("higiene4").style.width = higiene4 + "px";
    } else {
        higiene4 = higiene4 + 3;
        document.getElementById("higiene4").innerHTML = higiene4 + "%";
        document.getElementById("higiene4").style.width = higiene4 + "px";
    }

}
/*
* recupera la barra de Felicidad
*/
function Jugar4() {
    if (tipo4 == "perro") {
        felicidad4 =felicidad4 + 5;
        document.getElementById("felicidad4").innerHTML = felicidad4 + "%";
        document.getElementById("felicidad4").style.width = felicidad4 + "px";
    } else if (tipo4 == "gato") {
        felicidad4 =felicidad4 +  2;
        document.getElementById("felicidad4").innerHTML = felicidad4 + "%";
        document.getElementById("felicidad4").style.width = felicidad4 + "px";
    } else {
        felicidad4 = felicidad4 + 4;
        document.getElementById("felicidad4").innerHTML = felicidad4 + "%";
        document.getElementById("felicidad4").style.width = felicidad4 + "px";
    }

}


//5

//inicia las funciones del animal

var salud5 = 100;
var felicidad5 = 100;
var higiene5 = 100;


function Loop5(time = 1) {
    var total5 = salud5 + higiene5 + felicidad5;

    if (salud5 <= 0 || higiene5 <= 0 || felicidad5 <= 0) {
        document.getElementById("resultado4").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo5 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total5 > 250) {
                document.getElementById("pet5").src = "img/perroFeliz.jpg";
            }
            else if (total5 > 145) {
                document.getElementById("pet5").src = "img/perroMedio.jpg";
            } else if (total5 > 50) {
                document.getElementById("pet5").src = "img/perroTriste.jpg";
            }
        } else if (tipo5 == "gato") {
            if (total5 > 250) {
                document.getElementById("pet5").src = "img/gatoFeliz.jpg";
            }
            else if (total5 > 145) {
                document.getElementById("pet5").src = "img/gatoMedio.jpg";
            } else if (total5 > 50) {
                document.getElementById("pet5").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total5 > 250) {
                document.getElementById("pet5").src = "img/loroFeliz.jpg";
            }
            else if (total5 > 145) {
                document.getElementById("pet5").src = "img/loroMedio.jpg";
            } else if (total5 > 50) {
                document.getElementById("pet5").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud5 = salud5 - time;
        felicidad5 = felicidad5 - time;
        higiene5 = higiene5 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud5 < 0) { salud5 = 0; }
        if (felicidad5 < 0) { felicidad5 = 0; }
        if (higiene5 < 0) { higiene5 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud5").style.width = salud5 + "px";
        document.getElementById("felicidad5").style.width = felicidad5 + "px";
        document.getElementById("higiene5").style.width = higiene5 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud5").innerHTML = salud5 + "%";
        document.getElementById("felicidad5").innerHTML = felicidad5 + "%";
        document.getElementById("higiene5").innerHTML = higiene5 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start5() {
    var temporizador = setInterval(Loop5, 500);
}

/*
* recupera la barra de salud
*/
function Comer5() {
    if (tipo5=="perro") {
        salud5 = salud5 + 5;
        document.getElementById("salud5").innerHTML = salud5 + "%";
        document.getElementById("salud5").style.width = salud5 + "px";
    } else if (tipo5=="gato") {
        salud5 = salud5 + 6;
        document.getElementById("salud5").innerHTML = salud5 + "%";
        document.getElementById("salud5").style.width = salud5 + "px";
    }else{
        salud5 = salud5 + 5;
        document.getElementById("salud5").innerHTML = salud5 + "%";
        document.getElementById("salud5").style.width = salud5 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar5() {
    if (tipo5=="perro") {
        higiene5 =higiene5 + 5;
        document.getElementById("higiene5").innerHTML = higiene5 + "%";
        document.getElementById("higiene5").style.width = higiene5 + "px";
    } else if (tipo5=="gato") {
        higiene5 = higiene5 + 1;
        document.getElementById("higiene5").innerHTML = higiene5 + "%";
        document.getElementById("higiene5").style.width = higiene5 + "px";
    }else{
        higiene5 = higiene5 + 3;
        document.getElementById("higiene5").innerHTML = higiene5 + "%";
        document.getElementById("higiene5").style.width = higiene5 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar5() {
    if (tipo5=="perro") {
        felicidad5 =felicidad5 + 5;
        document.getElementById("felicidad5").innerHTML = felicidad5 + "%";
        document.getElementById("felicidad5").style.width = felicidad5 + "px";
    } else if (tipo5=="gato") {
        felicidad5 =felicidad5 + 2;
        document.getElementById("felicidad5").innerHTML = felicidad5 + "%";
        document.getElementById("felicidad5").style.width = felicidad5 + "px";
    }else{
        felicidad5 = felicidad5 +4;
        document.getElementById("felicidad5").innerHTML = felicidad5 + "%";
        document.getElementById("felicidad5").style.width = felicidad5 + "px";
    }
    
}


//6

//inicia las funciones del animal

var salud6 = 100;
var felicidad6 = 100;
var higiene6 = 100;


function Loop6(time = 1) {
    var total6 = salud6 + higiene6 + felicidad6;

    if (salud6 <= 0 || higiene6 <= 0 || felicidad6 <= 0) {
        document.getElementById("resultado5").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo6 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total6 > 250) {
                document.getElementById("pet6").src = "img/perroFeliz.jpg";
            }
            else if (total6 > 145) {
                document.getElementById("pet6").src = "img/perroMedio.jpg";
            } else if (total6 > 50) {
                document.getElementById("pet6").src = "img/perroTriste.jpg";
            }
        } else if (tipo6 == "gato") {
            if (total6 > 250) {
                document.getElementById("pet6").src = "img/gatoFeliz.jpg";
            }
            else if (total6 > 145) {
                document.getElementById("pet6").src = "img/gatoMedio.jpg";
            } else if (total6 > 50) {
                document.getElementById("pet6").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total6 > 250) {
                document.getElementById("pet6").src = "img/loroFeliz.jpg";
            }
            else if (total6 > 145) {
                document.getElementById("pet6").src = "img/loroMedio.jpg";
            } else if (total6 > 50) {
                document.getElementById("pet6").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud6 = salud6 - time;
        felicidad6 = felicidad6 - time;
        higiene6 = higiene6 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud6 < 0) { salud6 = 0; }
        if (felicidad6 < 0) { felicidad6 = 0; }
        if (higiene6 < 0) { higiene6 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud6").style.width = salud6 + "px";
        document.getElementById("felicidad6").style.width = felicidad6 + "px";
        document.getElementById("higiene6").style.width = higiene6 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud6").innerHTML = salud6 + "%";
        document.getElementById("felicidad6").innerHTML = felicidad6 + "%";
        document.getElementById("higiene6").innerHTML = higiene6 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start6() {
    var temporizador = setInterval(Loop6, 500);
}

/*
* recupera la barra de salud
*/
function Comer6() {
    if (tipo6=="perro") {
        salud6 =salud6 + 5;
        document.getElementById("salud6").innerHTML = salud6 + "%";
        document.getElementById("salud6").style.width = salud6 + "px";
    } else if (tipo6=="gato") {
        salud6 = salud6 + 6;
        document.getElementById("salud6").innerHTML = salud6 + "%";
        document.getElementById("salud6").style.width = salud6 + "px";
    }else{
        salud6 = salud6 + 5;
        document.getElementById("salud6").innerHTML = salud6 + "%";
        document.getElementById("salud6").style.width = salud6 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar6() {
    if (tipo6=="perro") {
        higiene6 =higiene6 + 5;
        document.getElementById("higiene6").innerHTML = higiene6 + "%";
        document.getElementById("higiene6").style.width = higiene6 + "px";
    } else if (tipo6=="gato") {
        higiene6 = higiene6 + 1;
        document.getElementById("higiene6").innerHTML = higiene6 + "%";
        document.getElementById("higiene6").style.width = higiene6 + "px";
    }else{
        higiene6 =higiene6 +  3;
        document.getElementById("higiene6").innerHTML = higiene6 + "%";
        document.getElementById("higiene6").style.width = higiene6 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar6() {
    if (tipo6=="perro") {
        felicidad6 =felicidad6 +  5;
        document.getElementById("felicidad6").innerHTML = felicidad6 + "%";
        document.getElementById("felicidad6").style.width = felicidad6 + "px";
    } else if (tipo6=="gato") {
        felicidad6 =felicidad6 +  2;
        document.getElementById("felicidad6").innerHTML = felicidad6 + "%";
        document.getElementById("felicidad6").style.width = felicidad6 + "px";
    }else{
        felicidad6 =felicidad6 + 4;
        document.getElementById("felicidad6").innerHTML = felicidad6 + "%";
        document.getElementById("felicidad6").style.width = felicidad6 + "px";
    }
    
}



//6

//inicia las funciones del animal

var salud7 = 100;
var felicidad7 = 100;
var higiene7 = 100;


function Loop7(time = 1) {
    var total7 = salud7 + higiene7 + felicidad7;

    if (salud7 <= 0 || higiene7 <= 0 || felicidad7 <= 0) {
        document.getElementById("resultado6").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo7 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total7 > 250) {
                document.getElementById("pet7").src = "img/perroFeliz.jpg";
            }
            else if (total7 > 145) {
                document.getElementById("pet7").src = "img/perroMedio.jpg";
            } else if (total7 > 50) {
                document.getElementById("pet7").src = "img/perroTriste.jpg";
            }
        } else if (tipo7 == "gato") {
            if (total7 > 250) {
                document.getElementById("pet7").src = "img/gatoFeliz.jpg";
            }
            else if (total7 > 145) {
                document.getElementById("pet7").src = "img/gatoMedio.jpg";
            } else if (total7 > 50) {
                document.getElementById("pet7").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total7 > 250) {
                document.getElementById("pet7").src = "img/loroFeliz.jpg";
            }
            else if (total7 > 145) {
                document.getElementById("pet7").src = "img/loroMedio.jpg";
            } else if (total7 > 50) {
                document.getElementById("pet7").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud7 = salud7 - time;
        felicidad7 = felicidad7 - time;
        higiene7 = higiene7 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud7 < 0) { salud7 = 0; }
        if (felicidad7 < 0) { felicidad7 = 0; }
        if (higiene7 < 0) { higiene7 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud7").style.width = salud7 + "px";
        document.getElementById("felicidad7").style.width = felicidad7 + "px";
        document.getElementById("higiene7").style.width = higiene7 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud7").innerHTML = salud7 + "%";
        document.getElementById("felicidad7").innerHTML = felicidad7 + "%";
        document.getElementById("higiene7").innerHTML = higiene7 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start7() {
    var temporizador = setInterval(Loop7, 500);
}

/*
* recupera la barra de salud
*/
function Comer7() {
    if (tipo7=="perro") {
        salud7 = salud7 + 5;
        document.getElementById("salud7").innerHTML = salud7 + "%";
        document.getElementById("salud7").style.width = salud7 + "px";
    } else if (tipo7=="gato") {
        salud7 = salud7 + 6;
        document.getElementById("salud7").innerHTML = salud7 + "%";
        document.getElementById("salud7").style.width = salud7 + "px";
    }else{
        salud7 = salud7 + 5;
        document.getElementById("salud7").innerHTML = salud7 + "%";
        document.getElementById("salud7").style.width = salud7 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar7() {
    if (tipo7=="perro") {
        higiene7 =higiene7 + 5;
        document.getElementById("higiene7").innerHTML = higiene7 + "%";
        document.getElementById("higiene7").style.width = higiene7 + "px";
    } else if (tipo7=="gato") {
        higiene7 =higiene7 +  1;
        document.getElementById("higiene7").innerHTML = higiene7 + "%";
        document.getElementById("higiene7").style.width = higiene7 + "px";
    }else{
        higiene7 =higiene7 +  3;
        document.getElementById("higiene7").innerHTML = higiene7 + "%";
        document.getElementById("higiene7").style.width = higiene7 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar7() {
    if (tipo7=="perro") {
        felicidad7 =felicidad7 + 5;
        document.getElementById("felicidad7").innerHTML = felicidad7 + "%";
        document.getElementById("felicidad7").style.width = felicidad7 + "px";
    } else if (tipo7=="gato") {
        felicidad7 =felicidad7 +  2;
        document.getElementById("felicidad7").innerHTML = felicidad7 + "%";
        document.getElementById("felicidad7").style.width = felicidad7 + "px";
    }else{
        felicidad7 =felicidad7 +  4;
        document.getElementById("felicidad7").innerHTML = felicidad7 + "%";
        document.getElementById("felicidad7").style.width = felicidad7 + "px";
    }
    
}


//8

//inicia las funciones del animal

var salud8 = 100;
var felicidad8 = 100;
var higiene8 = 100;


function Loop8(time = 1) {
    var total8 = salud8 + higiene8 + felicidad8;

    if (salud8 <= 0 || higiene8 <= 0 || felicidad8 <= 0) {
        document.getElementById("resultado7").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo8 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total8 > 250) {
                document.getElementById("pet8").src = "img/perroFeliz.jpg";
            }
            else if (total8 > 145) {
                document.getElementById("pet8").src = "img/perroMedio.jpg";
            } else if (total8 > 50) {
                document.getElementById("pet8").src = "img/perroTriste.jpg";
            }
        } else if (tipo8 == "gato") {
            if (total8 > 250) {
                document.getElementById("pet8").src = "img/gatoFeliz.jpg";
            }
            else if (total8 > 145) {
                document.getElementById("pet8").src = "img/gatoMedio.jpg";
            } else if (total8 > 50) {
                document.getElementById("pet8").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total8 > 250) {
                document.getElementById("pet8").src = "img/loroFeliz.jpg";
            }
            else if (total8 > 145) {
                document.getElementById("pet8").src = "img/loroMedio.jpg";
            } else if (total8 > 50) {
                document.getElementById("pet8").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud8 = salud8 - time;
        felicidad8 = felicidad8 - time;
        higiene8 = higiene8 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud8 < 0) { salud8 = 0; }
        if (felicidad8 < 0) { felicidad8 = 0; }
        if (higiene8 < 0) { higiene8 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud8").style.width = salud8 + "px";
        document.getElementById("felicidad8").style.width = felicidad8 + "px";
        document.getElementById("higiene8").style.width = higiene8 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud8").innerHTML = salud8 + "%";
        document.getElementById("felicidad8").innerHTML = felicidad8 + "%";
        document.getElementById("higiene8").innerHTML = higiene8 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start8() {
    var temporizador = setInterval(Loop8, 500);
}

/*
* recupera la barra de salud
*/
function Comer8() {
    if (tipo8=="perro") {
        salud8 =salud8 +  5;
        document.getElementById("salud8").innerHTML = salud8 + "%";
        document.getElementById("salud8").style.width = salud8 + "px";
    } else if (tipo8=="gato") {
        salud8 =salud8 +  6;
        document.getElementById("salud8").innerHTML = salud8 + "%";
        document.getElementById("salud8").style.width = salud8 + "px";
    }else{
        salud8 =salud8 + 5;
        document.getElementById("salud8").innerHTML = salud8 + "%";
        document.getElementById("salud8").style.width = salud8 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar8() {
    if (tipo8=="perro") {
        higiene8 =higiene8 +  5;
        document.getElementById("higiene8").innerHTML = higiene8 + "%";
        document.getElementById("higiene8").style.width = higiene8 + "px";
    } else if (tipo8=="gato") {
        higiene8 =higiene8 +  1;
        document.getElementById("higiene8").innerHTML = higiene8 + "%";
        document.getElementById("higiene8").style.width = higiene8 + "px";
    }else{
        higiene8 =higiene8 + 3;
        document.getElementById("higiene8").innerHTML = higiene8 + "%";
        document.getElementById("higiene8").style.width = higiene8 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar8() {
    if (tipo8=="perro") {
        felicidad8 =felicidad8 +  5;
        document.getElementById("felicidad8").innerHTML = felicidad8 + "%";
        document.getElementById("felicidad8").style.width = felicidad8 + "px";
    } else if (tipo8=="gato") {
        felicidad8 =felicidad8 +  2;
        document.getElementById("felicidad8").innerHTML = felicidad8 + "%";
        document.getElementById("felicidad8").style.width = felicidad8 + "px";
    }else{
        felicidad8 =felicidad8 + 4;
        document.getElementById("felicidad8").innerHTML = felicidad8 + "%";
        document.getElementById("felicidad8").style.width = felicidad8 + "px";
    }
    
}



//9

//inicia las funciones del animal

var salud9 = 100;
var felicidad9 = 100;
var higiene9 = 100;


function Loop9(time = 1) {
    var total9 = salud9 + higiene9 + felicidad9;

    if (salud9 <= 0 || higiene9 <= 0 || felicidad9 <= 0) {
        document.getElementById("resultado8").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo9 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total9 > 250) {
                document.getElementById("pet9").src = "img/perroFeliz.jpg";
            }
            else if (total9 > 145) {
                document.getElementById("pet9").src = "img/perroMedio.jpg";
            } else if (total9 > 50) {
                document.getElementById("pet9").src = "img/perroTriste.jpg";
            }
        } else if (tipo9 == "gato") {
            if (total9 > 250) {
                document.getElementById("pet9").src = "img/gatoFeliz.jpg";
            }
            else if (total9 > 145) {
                document.getElementById("pet9").src = "img/gatoMedio.jpg";
            } else if (total9 > 50) {
                document.getElementById("pet9").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total9 > 250) {
                document.getElementById("pet9").src = "img/loroFeliz.jpg";
            }
            else if (total9 > 145) {
                document.getElementById("pet9").src = "img/loroMedio.jpg";
            } else if (total9 > 50) {
                document.getElementById("pet9").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud9 = salud9 - time;
        felicidad9 = felicidad9 - time;
        higiene9 = higiene9 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud9 < 0) { salud9 = 0; }
        if (felicidad9 < 0) { felicidad9 = 0; }
        if (higiene9 < 0) { higiene9 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud9").style.width = salud9 + "px";
        document.getElementById("felicidad9").style.width = felicidad9 + "px";
        document.getElementById("higiene9").style.width = higiene9 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud9").innerHTML = salud9 + "%";
        document.getElementById("felicidad9").innerHTML = felicidad9 + "%";
        document.getElementById("higiene9").innerHTML = higiene9 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start9() {
    var temporizador = setInterval(Loop9, 500);
}

/*
* recupera la barra de salud
*/
function Comer9() {
    if (tipo9=="perro") {
        salud9 =salud9 + 5;
        document.getElementById("salud9").innerHTML = salud9 + "%";
        document.getElementById("salud9").style.width = salud9 + "px";
    } else if (tipo9=="gato") {
        salud9 =salud9 +  6;
        document.getElementById("salud9").innerHTML = salud9 + "%";
        document.getElementById("salud9").style.width = salud9 + "px";
    }else{
        salud9 =salud9 +  5;
        document.getElementById("salud9").innerHTML = salud9 + "%";
        document.getElementById("salud9").style.width = salud9 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar9() {
    if (tipo9=="perro") {
        higiene9 =higiene9 + 5;
        document.getElementById("higiene9").innerHTML = higiene9 + "%";
        document.getElementById("higiene9").style.width = higiene9 + "px";
    } else if (tipo9=="gato") {
        higiene9 =higiene9 +  1;
        document.getElementById("higiene9").innerHTML = higiene9 + "%";
        document.getElementById("higiene9").style.width = higiene9 + "px";
    }else{
        higiene9 =higiene9 +  3;
        document.getElementById("higiene9").innerHTML = higiene9 + "%";
        document.getElementById("higiene9").style.width = higiene9 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar9() {
    if (tipo9=="perro") {
        felicidad9 =felicidad9 + 5;
        document.getElementById("felicidad9").innerHTML = felicidad9 + "%";
        document.getElementById("felicidad9").style.width = felicidad9 + "px";
    } else if (tipo9=="gato") {
        felicidad9 =felicidad9 +  2;
        document.getElementById("felicidad9").innerHTML = felicidad9 + "%";
        document.getElementById("felicidad9").style.width = felicidad9 + "px";
    }else{
        felicidad9 = felicidad9 + 4;
        document.getElementById("felicidad9").innerHTML = felicidad9 + "%";
        document.getElementById("felicidad9").style.width = felicidad9 + "px";
    }
    
}



//10

//inicia las funciones del animal

var salud10 = 100;
var felicidad10 = 100;
var higiene10 = 100;


function Loop10(time = 1) {
    var total10 = salud10 + higiene10 + felicidad10;

    if (salud10 <= 0 || higiene10 <= 0 || felicidad10 <= 0) {
        document.getElementById("resultado9").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo10 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total10 > 250) {
                document.getElementById("pet10").src = "img/perroFeliz.jpg";
            }
            else if (total10 > 145) {
                document.getElementById("pet10").src = "img/perroMedio.jpg";
            } else if (total10 > 50) {
                document.getElementById("pet10").src = "img/perroTriste.jpg";
            }
        } else if (tipo10 == "gato") {
            if (total10 > 250) {
                document.getElementById("pet10").src = "img/gatoFeliz.jpg";
            }
            else if (total10 > 145) {
                document.getElementById("pet10").src = "img/gatoMedio.jpg";
            } else if (total10 > 50) {
                document.getElementById("pet10").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total10 > 250) {
                document.getElementById("pet10").src = "img/loroFeliz.jpg";
            }
            else if (total10 > 145) {
                document.getElementById("pet10").src = "img/loroMedio.jpg";
            } else if (total10 > 50) {
                document.getElementById("pet10").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud10 = salud10 - time;
        felicidad10 = felicidad10 - time;
        higiene10 = higiene10 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud10 < 0) { salud10 = 0; }
        if (felicidad10 < 0) { felicidad10 = 0; }
        if (higiene10 < 0) { higiene10 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud10").style.width = salud10 + "px";
        document.getElementById("felicidad10").style.width = felicidad10 + "px";
        document.getElementById("higiene10").style.width = higiene10 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud10").innerHTML = salud10 + "%";
        document.getElementById("felicidad10").innerHTML = felicidad10 + "%";
        document.getElementById("higiene10").innerHTML = higiene10 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start10() {
    var temporizador = setInterval(Loop10, 500);
}

/*
* recupera la barra de salud
*/
function Comer10() {
    if (tipo10=="perro") {
        salud10 =salud10 +  5;
        document.getElementById("salud10").innerHTML = salud10 + "%";
        document.getElementById("salud10").style.width = salud10 + "px";
    } else if (tipo10=="gato") {
        salud10 =salud10 +  6;
        document.getElementById("salud10").innerHTML = salud10 + "%";
        document.getElementById("salud10").style.width = salud10 + "px";
    }else{
        salud10 =salud10 + 5;
        document.getElementById("salud10").innerHTML = salud10 + "%";
        document.getElementById("salud10").style.width = salud10 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar10() {
    if (tipo10=="perro") {
        higiene10 =higiene10 + 5;
        document.getElementById("higiene10").innerHTML = higiene10 + "%";
        document.getElementById("higiene10").style.width = higiene10 + "px";
    } else if (tipo10=="gato") {
        higiene10 =higiene10 +  1;
        document.getElementById("higiene10").innerHTML = higiene10 + "%";
        document.getElementById("higiene10").style.width = higiene10 + "px";
    }else{
        higiene10 =higiene10 +  3;
        document.getElementById("higiene10").innerHTML = higiene10 + "%";
        document.getElementById("higiene10").style.width = higiene10 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar10() {
    if (tipo10=="perro") {
        felicidad10 =felicidad10 + 5;
        document.getElementById("felicidad10").innerHTML = felicidad10 + "%";
        document.getElementById("felicidad10").style.width = felicidad10 + "px";
    } else if (tipo10=="gato") {
        felicidad10 =felicidad10 +  2;
        document.getElementById("felicidad10").innerHTML = felicidad10 + "%";
        document.getElementById("felicidad10").style.width = felicidad10 + "px";
    }else{
        felicidad10 =felicidad10 +  4;
        document.getElementById("felicidad10").innerHTML = felicidad10 + "%";
        document.getElementById("felicidad10").style.width = felicidad10 + "px";
    }
    
}


//11

//inicia las funciones del animal

var salud11 = 100;
var felicidad11 = 100;
var higiene11 = 100;


function Loop11(time = 1) {
    var total11 = salud11 + higiene11 + felicidad11;

    if (salud11 <= 0 || higiene11 <= 0 || felicidad11 <= 0) {
        document.getElementById("resultado10").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo11 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total11 > 250) {
                document.getElementById("pet11").src = "img/perroFeliz.jpg";
            }
            else if (total11 > 145) {
                document.getElementById("pet11").src = "img/perroMedio.jpg";
            } else if (total11 > 50) {
                document.getElementById("pet11").src = "img/perroTriste.jpg";
            }
        } else if (tipo11 == "gato") {
            if (total11 > 250) {
                document.getElementById("pet11").src = "img/gatoFeliz.jpg";
            }
            else if (total11 > 145) {
                document.getElementById("pet11").src = "img/gatoMedio.jpg";
            } else if (total11 > 50) {
                document.getElementById("pet11").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total11 > 250) {
                document.getElementById("pet11").src = "img/loroFeliz.jpg";
            }
            else if (total11 > 145) {
                document.getElementById("pet11").src = "img/loroMedio.jpg";
            } else if (total11 > 50) {
                document.getElementById("pet11").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud11 = salud11 - time;
        felicidad11 = felicidad11 - time;
        higiene11 = higiene11 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud11 < 0) { salud11 = 0; }
        if (felicidad11 < 0) { felicidad11 = 0; }
        if (higiene11 < 0) { higiene11 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud11").style.width = salud11 + "px";
        document.getElementById("felicidad11").style.width = felicidad11 + "px";
        document.getElementById("higiene11").style.width = higiene11 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud11").innerHTML = salud11 + "%";
        document.getElementById("felicidad11").innerHTML = felicidad11 + "%";
        document.getElementById("higiene11").innerHTML = higiene11 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start11() {
    var temporizador = setInterval(Loop11, 500);
}

/*
* recupera la barra de salud
*/
function Comer11() {
    if (tipo11=="perro") {
        salud11 =salud11 + 5;
        document.getElementById("salud11").innerHTML = salud11 + "%";
        document.getElementById("salud11").style.width = salud11 + "px";
    } else if (tipo11=="gato") {
        salud11 =salud11 +  6;
        document.getElementById("salud11").innerHTML = salud11 + "%";
        document.getElementById("salud11").style.width = salud11 + "px";
    }else{
        salud11 = salud11 + 5;
        document.getElementById("salud11").innerHTML = salud11 + "%";
        document.getElementById("salud11").style.width = salud11 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar11() {
    if (tipo11=="perro") {
        higiene11 =higiene11 +  5;
        document.getElementById("higiene11").innerHTML = higiene11 + "%";
        document.getElementById("higiene11").style.width = higiene11 + "px";
    } else if (tipo11=="gato") {
        higiene11 =higiene11 +  1;
        document.getElementById("higiene11").innerHTML = higiene11 + "%";
        document.getElementById("higiene11").style.width = higiene11 + "px";
    }else{
        higiene11 =higiene11 + 3;
        document.getElementById("higiene11").innerHTML = higiene11 + "%";
        document.getElementById("higiene11").style.width = higiene11 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar11() {
    if (tipo11=="perro") {
        felicidad11 = felicidad11 + 5;
        document.getElementById("felicidad11").innerHTML = felicidad11 + "%";
        document.getElementById("felicidad11").style.width = felicidad11 + "px";
    } else if (tipo11=="gato") {
        felicidad11 =felicidad11 +  2;
        document.getElementById("felicidad11").innerHTML = felicidad11 + "%";
        document.getElementById("felicidad11").style.width = felicidad11 + "px";
    }else{
        felicidad11 =felicidad11 + 4;
        document.getElementById("felicidad11").innerHTML = felicidad11 + "%";
        document.getElementById("felicidad11").style.width = felicidad11 + "px";
    }
    
}



//12

//inicia las funciones del animal

var salud12 = 100;
var felicidad12 = 100;
var higiene12 = 100;


function Loop12(time = 1) {
    var total12 = salud12 + higiene12 + felicidad12;

    if (salud12 <= 0 || higiene12 <= 0 || felicidad12 <= 0) {
        document.getElementById("resultado11").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo12 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total12 > 250) {
                document.getElementById("pet12").src = "img/perroFeliz.jpg";
            }
            else if (total12 > 145) {
                document.getElementById("pet12").src = "img/perroMedio.jpg";
            } else if (total12 > 50) {
                document.getElementById("pet12").src = "img/perroTriste.jpg";
            }
        } else if (tipo12 == "gato") {
            if (total12 > 250) {
                document.getElementById("pet12").src = "img/gatoFeliz.jpg";
            }
            else if (total12 > 145) {
                document.getElementById("pet12").src = "img/gatoMedio.jpg";
            } else if (total12 > 50) {
                document.getElementById("pet12").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total12 > 250) {
                document.getElementById("pet12").src = "img/loroFeliz.jpg";
            }
            else if (total12 > 145) {
                document.getElementById("pet12").src = "img/loroMedio.jpg";
            } else if (total12 > 50) {
                document.getElementById("pet12").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud12 = salud12 - time;
        felicidad12 = felicidad12 - time;
        higiene12 = higiene12 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud12 < 0) { salud12 = 0; }
        if (felicidad12 < 0) { felicidad12 = 0; }
        if (higiene12 < 0) { higiene12 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud12").style.width = salud12 + "px";
        document.getElementById("felicidad12").style.width = felicidad12 + "px";
        document.getElementById("higiene12").style.width = higiene12 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud12").innerHTML = salud12 + "%";
        document.getElementById("felicidad12").innerHTML = felicidad12 + "%";
        document.getElementById("higiene12").innerHTML = higiene12 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start12() {
    var temporizador = setInterval(Loop12, 500);
}

/*
* recupera la barra de salud
*/
function Comer12() {
    if (tipo12=="perro") {
        salud12 =salud12 + 5;
        document.getElementById("salud12").innerHTML = salud12 + "%";
        document.getElementById("salud12").style.width = salud12 + "px";
    } else if (tipo12=="gato") {
        salud12 =salud12 +  6;
        document.getElementById("salud12").innerHTML = salud12 + "%";
        document.getElementById("salud12").style.width = salud12 + "px";
    }else{
        salud12 = salud12 + 5;
        document.getElementById("salud12").innerHTML = salud12 + "%";
        document.getElementById("salud12").style.width = salud12 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar12() {
    if (tipo12=="perro") {
        higiene12 =higiene12 + 5;
        document.getElementById("higiene12").innerHTML = higiene12 + "%";
        document.getElementById("higiene12").style.width = higiene12 + "px";
    } else if (tipo12=="gato") {
        higiene12 =higiene12 +  1;
        document.getElementById("higiene12").innerHTML = higiene12 + "%";
        document.getElementById("higiene12").style.width = higiene12 + "px";
    }else{
        higiene12 =higiene12 +  3;
        document.getElementById("higiene12").innerHTML = higiene12 + "%";
        document.getElementById("higiene12").style.width = higiene12 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar12() {
    if (tipo12=="perro") {
        felicidad12 =felicidad12 + 5;
        document.getElementById("felicidad12").innerHTML = felicidad12 + "%";
        document.getElementById("felicidad12").style.width = felicidad12 + "px";
    } else if (tipo12=="gato") {
        felicidad12 =felicidad12 +  2;
        document.getElementById("felicidad12").innerHTML = felicidad12 + "%";
        document.getElementById("felicidad12").style.width = felicidad12 + "px";
    }else{
        felicidad12 =felicidad12 +  4;
        document.getElementById("felicidad12").innerHTML = felicidad12 + "%";
        document.getElementById("felicidad12").style.width = felicidad12 + "px";
    }
    
}


//13

//inicia las funciones del animal

var salud13 = 100;
var felicidad13 = 100;
var higiene13 = 100;


function Loop13(time = 1) {
    var total13 = salud13 + higiene13 + felicidad13;

    if (salud13 <= 0 || higiene13 <= 0 || felicidad13 <= 0) {
        document.getElementById("resultado12").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo13 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total13 > 250) {
                document.getElementById("pet13").src = "img/perroFeliz.jpg";
            }
            else if (total13 > 145) {
                document.getElementById("pet13").src = "img/perroMedio.jpg";
            } else if (total13 > 50) {
                document.getElementById("pet13").src = "img/perroTriste.jpg";
            }
        } else if (tipo13 == "gato") {
            if (total13 > 250) {
                document.getElementById("pet13").src = "img/gatoFeliz.jpg";
            }
            else if (total13 > 145) {
                document.getElementById("pet13").src = "img/gatoMedio.jpg";
            } else if (total13 > 50) {
                document.getElementById("pet13").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total13 > 250) {
                document.getElementById("pet13").src = "img/loroFeliz.jpg";
            }
            else if (total13 > 145) {
                document.getElementById("pet13").src = "img/loroMedio.jpg";
            } else if (total13 > 50) {
                document.getElementById("pet13").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud13 = salud13 - time;
        felicidad13 = felicidad13 - time;
        higiene13 = higiene13 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud13 < 0) { salud13 = 0; }
        if (felicidad13 < 0) { felicidad13 = 0; }
        if (higiene13 < 0) { higiene13 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud13").style.width = salud13 + "px";
        document.getElementById("felicidad13").style.width = felicidad13 + "px";
        document.getElementById("higiene13").style.width = higiene13 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud13").innerHTML = salud13 + "%";
        document.getElementById("felicidad13").innerHTML = felicidad13 + "%";
        document.getElementById("higiene13").innerHTML = higiene13 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start13() {
    var temporizador = setInterval(Loop13, 500);
}

/*
* recupera la barra de salud
*/
function Comer13() {
    if (tipo13=="perro") {
        salud13 =salud13 + 5;
        document.getElementById("salud13").innerHTML = salud13 + "%";
        document.getElementById("salud13").style.width = salud13 + "px";
    } else if (tipo13=="gato") {
        salud13 = salud13 + 6;
        document.getElementById("salud13").innerHTML = salud13 + "%";
        document.getElementById("salud13").style.width = salud13 + "px";
    }else{
        salud13 = salud13 + 5;
        document.getElementById("salud13").innerHTML = salud13 + "%";
        document.getElementById("salud13").style.width = salud13 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar13() {
    if (tipo13=="perro") {
        higiene13 =higiene13 + 5;
        document.getElementById("higiene13").innerHTML = higiene13 + "%";
        document.getElementById("higiene13").style.width = higiene13 + "px";
    } else if (tipo13=="gato") {
        higiene13 = higiene13 + 1;
        document.getElementById("higiene13").innerHTML = higiene13 + "%";
        document.getElementById("higiene13").style.width = higiene13 + "px";
    }else{
        higiene13 = higiene13 + 3;
        document.getElementById("higiene13").innerHTML = higiene13 + "%";
        document.getElementById("higiene13").style.width = higiene13 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar13() {
    if (tipo13=="perro") {
        felicidad13 =felicidad13 + 5;
        document.getElementById("felicidad13").innerHTML = felicidad13 + "%";
        document.getElementById("felicidad13").style.width = felicidad13 + "px";
    } else if (tipo13=="gato") {
        felicidad13 =felicidad13 +  2;
        document.getElementById("felicidad13").innerHTML = felicidad13 + "%";
        document.getElementById("felicidad13").style.width = felicidad13 + "px";
    }else{
        felicidad13 =felicidad13 +  4;
        document.getElementById("felicidad13").innerHTML = felicidad13 + "%";
        document.getElementById("felicidad13").style.width = felicidad13 + "px";
    }
    
}



//14

//inicia las funciones del animal

var salud14 = 100;
var felicidad14 = 100;
var higiene14 = 100;


function Loop14(time = 1) {
    var total14 = salud14 + higiene14 + felicidad14;

    if (salud14 <= 0 || higiene14 <= 0 || felicidad14 <= 0) {
        document.getElementById("resultado13").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo14 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total14 > 250) {
                document.getElementById("pet14").src = "img/perroFeliz.jpg";
            }
            else if (total14 > 145) {
                document.getElementById("pet14").src = "img/perroMedio.jpg";
            } else if (total14 > 50) {
                document.getElementById("pet14").src = "img/perroTriste.jpg";
            }
        } else if (tipo14 == "gato") {
            if (total14 > 250) {
                document.getElementById("pet14").src = "img/gatoFeliz.jpg";
            }
            else if (total14 > 145) {
                document.getElementById("pet14").src = "img/gatoMedio.jpg";
            } else if (total14 > 50) {
                document.getElementById("pet14").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total14 > 250) {
                document.getElementById("pet14").src = "img/loroFeliz.jpg";
            }
            else if (total14 > 145) {
                document.getElementById("pet14").src = "img/loroMedio.jpg";
            } else if (total14 > 50) {
                document.getElementById("pet14").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud14 = salud14 - time;
        felicidad14 = felicidad14 - time;
        higiene14 = higiene14 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud14 < 0) { salud14 = 0; }
        if (felicidad14 < 0) { felicidad14 = 0; }
        if (higiene14 < 0) { higiene14 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud14").style.width = salud14 + "px";
        document.getElementById("felicidad14").style.width = felicidad14 + "px";
        document.getElementById("higiene14").style.width = higiene14 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud14").innerHTML = salud14 + "%";
        document.getElementById("felicidad14").innerHTML = felicidad14 + "%";
        document.getElementById("higiene14").innerHTML = higiene14 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start14() {
    var temporizador = setInterval(Loop14, 500);
}

/*
* recupera la barra de salud
*/
function Comer14() {
    if (tipo14=="perro") {
        salud14 =salud14 +  5;
        document.getElementById("salud14").innerHTML = salud14 + "%";
        document.getElementById("salud14").style.width = salud14 + "px";
    } else if (tipo14=="gato") {
        salud14 =salud14 +  6;
        document.getElementById("salud14").innerHTML = salud14 + "%";
        document.getElementById("salud14").style.width = salud14 + "px";
    }else{
        salud14 =salud14 + 5;
        document.getElementById("salud14").innerHTML = salud14 + "%";
        document.getElementById("salud14").style.width = salud14 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar14() {
    if (tipo14=="perro") {
        higiene14 =higiene14 + 5;
        document.getElementById("higiene14").innerHTML = higiene14 + "%";
        document.getElementById("higiene14").style.width = higiene14 + "px";
    } else if (tipo14=="gato") {
        higiene14 = higiene14 + 1;
        document.getElementById("higiene14").innerHTML = higiene14 + "%";
        document.getElementById("higiene14").style.width = higiene14 + "px";
    }else{
        higiene14 = higiene14 + 3;
        document.getElementById("higiene14").innerHTML = higiene14 + "%";
        document.getElementById("higiene14").style.width = higiene14 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar14() {
    if (tipo14=="perro") {
        felicidad14 =felicidad14 + 5;
        document.getElementById("felicidad14").innerHTML = felicidad14 + "%";
        document.getElementById("felicidad14").style.width = felicidad14 + "px";
    } else if (tipo14=="gato") {
        felicidad14 = felicidad14 + 2;
        document.getElementById("felicidad14").innerHTML = felicidad14 + "%";
        document.getElementById("felicidad14").style.width = felicidad14 + "px";
    }else{
        felicidad14 = felicidad14 + 4;
        document.getElementById("felicidad14").innerHTML = felicidad14 + "%";
        document.getElementById("felicidad14").style.width = felicidad14 + "px";
    }
    
}


//15

//inicia las funciones del animal

var salud15 = 100;
var felicidad15 = 100;
var higiene15 = 100;


function Loop15(time = 1) {
    var total15 = salud15 + higiene15 + felicidad15;

    if (salud15 <= 0 || higiene15 <= 0 || felicidad15 <= 0) {
        document.getElementById("resultado14").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo15 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total15 > 250) {
                document.getElementById("pet15").src = "img/perroFeliz.jpg";
            }
            else if (total15 > 145) {
                document.getElementById("pet15").src = "img/perroMedio.jpg";
            } else if (total15 > 50) {
                document.getElementById("pet15").src = "img/perroTriste.jpg";
            }
        } else if (tipo15 == "gato") {
            if (total15 > 250) {
                document.getElementById("pet15").src = "img/gatoFeliz.jpg";
            }
            else if (total15 > 145) {
                document.getElementById("pet15").src = "img/gatoMedio.jpg";
            } else if (total15 > 50) {
                document.getElementById("pet15").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total15 > 250) {
                document.getElementById("pet15").src = "img/loroFeliz.jpg";
            }
            else if (total15 > 145) {
                document.getElementById("pet15").src = "img/loroMedio.jpg";
            } else if (total15 > 50) {
                document.getElementById("pet15").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud15 = salud15 - time;
        felicidad15 = felicidad15 - time;
        higiene15 = higiene15 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud15 < 0) { salud15 = 0; }
        if (felicidad15 < 0) { felicidad15 = 0; }
        if (higiene15 < 0) { higiene15 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud15").style.width = salud15 + "px";
        document.getElementById("felicidad15").style.width = felicidad15 + "px";
        document.getElementById("higiene15").style.width = higiene15 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud15").innerHTML = salud15 + "%";
        document.getElementById("felicidad15").innerHTML = felicidad15 + "%";
        document.getElementById("higiene15").innerHTML = higiene15 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start15() {
    var temporizador = setInterval(Loop15, 500);
}

/*
* recupera la barra de salud
*/
function Comer15() {
    if (tipo15=="perro") {
        salud15 =salud15 + 5;
        document.getElementById("salud15").innerHTML = salud15 + "%";
        document.getElementById("salud15").style.width = salud15 + "px";
    } else if (tipo15=="gato") {
        salud15 = salud15 + 6;
        document.getElementById("salud15").innerHTML = salud15 + "%";
        document.getElementById("salud15").style.width = salud15 + "px";
    }else{
        salud15 =salud15 +  5;
        document.getElementById("salud15").innerHTML = salud15 + "%";
        document.getElementById("salud15").style.width = salud15 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar15() {
    if (tipo15=="perro") {
        higiene15 =higiene15 + 5;
        document.getElementById("higiene15").innerHTML = higiene15 + "%";
        document.getElementById("higiene15").style.width = higiene15 + "px";
    } else if (tipo15=="gato") {
        higiene15 =higiene15 +  1;
        document.getElementById("higiene15").innerHTML = higiene15 + "%";
        document.getElementById("higiene15").style.width = higiene15 + "px";
    }else{
        higiene15 = higiene15 + 3;
        document.getElementById("higiene15").innerHTML = higiene15 + "%";
        document.getElementById("higiene15").style.width = higiene15 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar15() {
    if (tipo15=="perro") {
        felicidad15 =felicidad15 + 5;
        document.getElementById("felicidad15").innerHTML = felicidad15 + "%";
        document.getElementById("felicidad15").style.width = felicidad15 + "px";
    } else if (tipo15=="gato") {
        felicidad15 = felicidad15 + 2;
        document.getElementById("felicidad15").innerHTML = felicidad15 + "%";
        document.getElementById("felicidad15").style.width = felicidad15 + "px";
    }else{
        felicidad15 =felicidad15 +  4;
        document.getElementById("felicidad15").innerHTML = felicidad15 + "%";
        document.getElementById("felicidad15").style.width = felicidad15 + "px";
    }
    
}


//16

//inicia las funciones del animal

var salud16 = 100;
var felicidad16 = 100;
var higiene16 = 100;


function Loop16(time = 1) {
    var total16 = salud16 + higiene16 + felicidad16;

    if (salud16 <= 0 || higiene16 <= 0 || felicidad16 <= 0) {
        document.getElementById("resultado15").innerHTML = "Su mascota falleció.";
    } else {



        if (tipo16 == "perro") {
            /*
                si algún atributo llega a cero, la mascota muere
            */
            if (total16 > 250) {
                document.getElementById("pet16").src = "img/perroFeliz.jpg";
            }
            else if (total16 > 145) {
                document.getElementById("pet16").src = "img/perroMedio.jpg";
            } else if (total16 > 50) {
                document.getElementById("pet16").src = "img/perroTriste.jpg";
            }
        } else if (tipo16 == "gato") {
            if (total16 > 250) {
                document.getElementById("pet16").src = "img/gatoFeliz.jpg";
            }
            else if (total16 > 145) {
                document.getElementById("pet16").src = "img/gatoMedio.jpg";
            } else if (total16 > 50) {
                document.getElementById("pet16").src = "img/gatoTriste.jpg";
            }
        } else {
            if (total16 > 250) {
                document.getElementById("pet16").src = "img/loroFeliz.jpg";
            }
            else if (total16 > 145) {
                document.getElementById("pet16").src = "img/loroMedio.jpg";
            } else if (total16 > 50) {
                document.getElementById("pet16").src = "img/loroTriste.jpg";
            }

        }




        /*
        * Restar a parametros
        */


        salud16 = salud16 - time;
        felicidad16 = felicidad16 - time;
        higiene16 = higiene16 - time;

        /*
        * si es menor que cero que lo haga cero
        */
        if (salud16 < 0) { salud16 = 0; }
        if (felicidad16 < 0) { felicidad16 = 0; }
        if (higiene16 < 0) { higiene16 = 0; }

        /*
        * Actualizar barras de status
        */
        document.getElementById("salud16").style.width = salud16 + "px";
        document.getElementById("felicidad16").style.width = felicidad16 + "px";
        document.getElementById("higiene16").style.width = higiene16 + "px";

        /*
        * Actualizar porcentajes
        */

        document.getElementById("salud16").innerHTML = salud16 + "%";
        document.getElementById("felicidad16").innerHTML = felicidad16 + "%";
        document.getElementById("higiene16").innerHTML = higiene16 + "%";
    }
}


/*
 * Hacer el ciclo de la funcion loop
*/

function Start16() {
    var temporizador = setInterval(Loop16, 500);
}

/*
* recupera la barra de salud
*/
function Comer16() {
    if (tipo16=="perro") {
        salud16 =salud16 + 5;
        document.getElementById("salud16").innerHTML = salud16 + "%";
        document.getElementById("salud16").style.width = salud16 + "px";
    } else if (tipo16=="gato") {
        salud16 =salud16 +  6;
        document.getElementById("salud16").innerHTML = salud16 + "%";
        document.getElementById("salud16").style.width = salud16 + "px";
    }else{
        salud16 = salud16 + 5;
        document.getElementById("salud16").innerHTML = salud16 + "%";
        document.getElementById("salud16").style.width = salud16 + "px";
    }
    
}

/*
* recupera la barra de Higiene
*/
function Banar16() {
    if (tipo16=="perro") {
        higiene16 =higiene16 + 5;
        document.getElementById("higiene16").innerHTML = higiene16 + "%";
        document.getElementById("higiene16").style.width = higiene16 + "px";
    } else if (tipo16=="gato") {
        higiene16 = higiene16 + 1;
        document.getElementById("higiene16").innerHTML = higiene16 + "%";
        document.getElementById("higiene16").style.width = higiene16 + "px";
    }else{
        higiene16 = higiene16 + 3;
        document.getElementById("higiene16").innerHTML = higiene16 + "%";
        document.getElementById("higiene16").style.width = higiene16 + "px";
    }
    
}
/*
* recupera la barra de Felicidad
*/
function Jugar16() {
    if (tipo16=="perro") {
        felicidad16 =felicidad16 + 5;
        document.getElementById("felicidad16").innerHTML = felicidad16 + "%";
        document.getElementById("felicidad16").style.width = felicidad16 + "px";
    } else if (tipo16=="gato") {
        felicidad16 =felicidad16 +  2;
        document.getElementById("felicidad16").innerHTML = felicidad16 + "%";
        document.getElementById("felicidad16").style.width = felicidad16 + "px";
    }else{
        felicidad16 = felicidad16 + 4;
        document.getElementById("felicidad16").innerHTML = felicidad16 + "%";
        document.getElementById("felicidad16").style.width = felicidad16 + "px";
    }
    
}