let ListaNumeros=[];
let valor;


function Agregar(){

    let longitud = document.getElementById('cantidad').value;
    Repetir(longitud);




}

function Repetir(numero){
    for(let i=0;i < numero; i++){
        valor = prompt('Escriba el número a agregar');

        ListaNumeros.push(valor);

        
        valor=0;
    }

    document.write('<br> ESCRIBA EL NOMBRE LA OPERACIONA REALIZAR');
    document.write('<br> A) suma');
    document.write('<br> E) resta');
    document.write('<br> C) multiplicaion');
    document.write('<br> D) divicion');

    let respuesta = prompt('ESCRIBA EL NOMBRE LA OPERACIONA REALIZAR: A) suma, E) resta, C) multiplicaion, D) divicion');
    switch (respuesta) {
        case 'suma':
            console.log(respuesta);
            document.write('<br> Escriba las posiciones de sus numeros a sumar')

            
            for(let arreglo in ListaNumeros){
                document.write(`<br> ${arreglo}) ${ListaNumeros[arreglo]}`);
            }
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          break;
        case 'resta':
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          break;
        case 'multiplicacion':
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          break;
        case 'divicion':
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
            break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }


}

function sumar(){
    let Uno = document.getElementById('numUno').value;
    let Dos = document.getElementById('numDOs').value;
    let a = ListaNumeros[Uno]+ListaNumeros[Dos];


    document.write('<h3> El resultado es: </h3>' + a);
}