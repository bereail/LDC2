function suma() {
    var n1,n2,total;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    total = parseInt(n1)+parseInt(n2);
    if( total < 0)
    {   
        total = total * -1
    }   
    document.getElementById("sumando").innerHTML = total;       
}      
