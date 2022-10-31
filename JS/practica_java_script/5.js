function enviar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(num1>num2){
        alert("El número 1 es mayor");
    }else if(num1 === num2){
        alert("ambos números son iguales");
    }else{
        alert("El número 2 es mayor");
    }
}