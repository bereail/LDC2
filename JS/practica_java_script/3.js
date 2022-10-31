function valor(){
let num = document.getElementById("num").value;

if (num < 0){
    alert("num negativo");
}else if (num.value === 0) {
    alert("num nulo");
}else{
    alert("num positivo")
}
}