const lista1 = [
    1,3,4,2,3,2,3,4,2,1,2,5,3,3,2,1,
];

const lista2 = [
    2,5,3,3,4,2,1,1,1,2,1,5,1,
]

function calcularModa(lista){
    //creamos un objeto para almacenar la cuenta
    const listaCount = {};
    //Contando la cantidad de veces que aparecen los numeros
    lista.map(
        function (elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        } 
    }
    );
    //ordenar de menor a mayor, para esto convertimos el objeto a un arrya de arrays
    //convertir el objeto a array de arrays
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor){
            //if(elementoA>elementoB)=+1; if(elementoA==elementoB)=0; if(elementoA<elementoB)=-1;
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    //igualamos moda = al ultimo elemento del array
    const moda = listaArray[(listaArray.length)-1];
    console.log(listaCount);
    console.log("La moda es: " +  moda[0] +", aparece un total de: " + moda[1] + " veces.");
    return moda;
}

calcularModa(lista2);