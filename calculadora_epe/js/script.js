var usuario = document.getElementById("selectUsuario");
var zona = document.getElementById("selectZona");
var consumo = document.getElementById("consumo");
const costoServicio = 102;
var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado");


function calcularCosto (){

    if(usuario.value == 0) {
        let error = "seleccione un usuario valido";
        alert(error);
    } else if(zona.value == 0) {
        let error = "seleccione una zona valida";
        alert(error);
    } else if(consumo.value <= 0){
        let error = "ingrese un consumo mayor a 0";
        alert(error);
    } else {
        let resultado = costoServicio + (consumo.value * zona.value) * (usuario.value);

        document.getElementById("total").innerHTML = resultado;
    }
}

