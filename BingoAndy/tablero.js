
var jugarNumero = [0];

var cont = 0;

var tableros = document.getElementById('container');

var mostarNumeros = document.getElementById('number');

var tablas = {

        filas: 3,
        columnas: 15,
        crear: function() {
            
            for (let i = 1; i < 91; i++) {
                var celda = document.createElement('div');
                celda.className = 'celdas';
                celda.id = i;
                celda.appendChild(document.createTextNode(i));
                tableros.appendChild(celda);
            }

        },

        jugar: function() {
            cont++;
            var numero = Math.floor(Math.random() * 90) + 1;
            var marcar = document.getElementById(numero);
            var verificar;
            jugarNumero.forEach(function(element, index) {
                if (numero == element) {
                    verificar = element
                }
            });
            console.log(verificar);
            if (cont < 91) {
                if (verificar == undefined) {

                    marcar.style = "background-color : orange";
                    jugarNumero.push(numero);

                    mostarNumeros.innerHTML = numero;

                } else {
                    cont--;
                    this.jugar();
                }
            } else {
                
                document.getElementById("id_button").disabled = true;
            }
           
        }
    }
    
