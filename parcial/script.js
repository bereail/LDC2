function calculatePrice(){
    const color = document.getElementById("selected_color").value;
    const gb = document.getElementById("selected_gb").value;
    const cant = document.getElementById("selected_cant").value;
    const result = document.getElementById("result")
    const total = gb * cant

if(color === 0 || gb === 0 || cant <= 0 || cant > 10){
    result.innerHTML = "Error: complete todo los campos";
    document.getElementById("result").style.backgroundColor = "#FF0000";    
    }else{
    result.innerHTML = total;
    document.getElementById("result").style.backgroundColor = "#008000";
}

}

function changeProductImage() {

var color = document.getElementById("selected_color");
var imagen = document.getElementById('product_img');

    if (color.value == 'graphite') {
                imagen.innerHTML = ` 
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Graphite
                <ul>• Memoria interna: 128 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 128 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 
                6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China`;

                } else if (color.value == 'silver') {
                imagen.innerHTML= `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Silver
                <ul>• Memoria interna: 512 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 512 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China`;

                } else if(color.value == 'sierra') {
                imagen.innerHTML= `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Sierra Blue
                <ul>• Memoria interna: 128 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 128 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 
                6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China `;
            
            } else if (color.value == 'gold') {
                imagen.innerHTML= `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Gold
                <ul>• Memoria interna: 128 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 128 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 
                6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China`;         
            }
}

function ocultar(result){
    result.setAttribute("style", "display: none;");
    result.classList.remove("error","success");
}

function mostrar(result){    
    result.setAttribute("style", "display: block;");
    img.src = 'img'
}

