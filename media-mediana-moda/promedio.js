const lista1 = [
    100,
    200,
    300,
    500,
    800,
];

function calcularMediaAritmetica(lista){
    let sumaLista = 0;

    //calcular la media aritmetica de lista || metodo sencillo
    /*
    for(let i=0; i<lista.length; i++){
        sumaLista += lista[i];
    }*/
    //Opcion PRO - utilizando el metodo reduce... 
    const sumaLista= lista.reduce(
        //nuevoElemento se refiere a la iteración del elemento en la lista
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    //-----------------------------------------------
    //Calculando el promedio
    const promedioLista = sumaLista / lista.length;
    console.log("La media es: " + promedioLista);
    return promedioLista;
}

calcularMediaAritmetica(lista1);
