/*
    Aplicación para calcular la diferencia salarial entre un grupo de personas:
    1.- Crear un objeto array con nombres y salarios. x
    2.- Calcular total, ingresos mensuales.
    3.- Calcular el promedio de ingresos.
    4.- Calcular la mediana de ingresos:
        4.1.- Calcular la mediana general.
        4.2.- Calcular la mediana del top 10%.
    --------------------------------------------------------------------------- */
//helpers
//funcionar para revisar si un numero es par
function esPar(numero){
    return (numero % 2 === 0);
}

//calcular mediana de salarios
function medianaSalarios(lista){ 
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const mediana = (lista[mitad-1]+lista[mitad])/2;
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    }
}

//Usamos el metodo .map() para crear un nuevo array unicamente con el salario de la lista salarios.js.
const listaSueldosMexico = salariosMexico.map(
    function (persona){
        return persona.salary;
    }
);

//Ordenamos el array listaSueldosMexico con el método .sort()
const salariosMexSorted = listaSueldosMexico.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//calculadora de mediana general
const medianaGeneralMex = medianaSalarios(salariosMexSorted);

//caluladora de mediana 10% con el metodo .splice()
//creamos un array con el 90% de salariosMexSorted
const spliceStart = ((salariosMexSorted.length * 90) / 100);
//creamos una constante con el valor del top 10%
const spliceCount = salariosMexSorted.length - spliceStart;
//utilizamos el 
const salariosMexTop10 = salariosMexSorted.splice(
    spliceStart, 
    spliceCount
);

//Calculamos la mediana del top 10%
const medianaTop10Mex = medianaSalarios(salariosMexTop10);

//imprimir la mediana general de mex y el top 10%
console.log(
    medianaGeneralMex,
    medianaTop10Mex,
);


