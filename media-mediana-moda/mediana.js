const listaCalificaciones = [
    100,200,500,
]

function calcularMediana(listaMediana){
    listaMediana.sort();
    console.log("Tu lista es: " + listaMediana);
    const largoLista = listaMediana.length; 
    const posicionMedia = parseInt(largoLista/2);

    if(largoLista%2==0){
        let mediana = (listaMediana[posicionMedia-1]+listaMediana[posicionMedia])/2;
        console.log("La mediana es: " + mediana);

    }else{
        let mediana = listaMediana[posicionMedia];
        console.log("La mediana es: " + mediana);
    }
}

calcularMediana(listaCalificaciones);
