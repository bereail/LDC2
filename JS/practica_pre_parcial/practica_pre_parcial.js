function calcular_venta()
    {
        const variable_pesos = document.getElementById('pesos').value;
        const moneda_extj = document.getElementById('select_moneda').value;
        console.log(variable_pesos,moneda_extj)
            
        
        if(variable_pesos <= 0){
                alert("Ingrese un número valido.")
            }else{
                let resultado = variable_pesos * moneda_extj
                document.getElementById("result").innerHTML = resultado;
            }
    }


       