let Actividades=[]
 let fila;
function submit(){
    fila="";
     let variableUno=document.getElementById("nombre").value;
    console.log(variableUno);
    agregar(variableUno);
};

console.log(Actividades);

function agregar(nombre){
    Actividades.push(nombre)
    console.log(Actividades);

    for(var i=0;i<Actividades.length; i++){
        fila +=`<li> ${Actividades[i]} </li>`;
        document.getElementById("elementos").innerHTML= fila;
    }
}



 