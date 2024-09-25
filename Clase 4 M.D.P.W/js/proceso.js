

function calcular(params) {
let v_objeto = document.getElementById("txtobjeto").value
let v_base = document.getElementById('txtbase').value
let v_altura = document.getElementById('txtaltura').value

let P = parseFloat(v_base)*2 + parseFloat(v_altura)*2
let A = parseFloat(v_base)*parseFloat(v_altura)
let nuevo={
    objeto:v_objeto,
    base:v_base,
    altura:v_altura,
    perimetro:P,
    area:A
}
localStorage.getItem("nuevaFigura",JSON.stringify(nuevo))
}

function mostrar(){
    let datos = JSON.parse(localStorage.getItem("nuevafigura"))
    document.getElementById('info').innerHTML= "figura "+ datos.objeto
}












/*
let estudiante={
    nombre: "Abraham",
    apellido: "pacheco",
    edad:20,
    genero:'M',
    casado:false,
    direccion:"calle 53A #9b"
}
/*


localStorage.setItem("nuevosestudiante",JSON.stringify(estudiante))

let datos = JSON.parse(localStorage.getItem("nuevosestudiante"))

alert(datos.nombre+" "+datos.apellido+" "+datos.edad+" "+datos.genero+" "+datos.casado+" "+datos.direccion)







/*
localStorage.setItem("nombre","Abraham")
localStorage.setItem("no_carreras",1)
localStorage.setItem("carro",false)

let nombre=localStorage.getItem("nombre")

document.getElementById('info').innerHTML="<b>nombre del estudiante"+nombre+ " </b>"
*/
