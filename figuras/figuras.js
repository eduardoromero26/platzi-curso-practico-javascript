//Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
   return lado * lado;
}

//Funciones triangulo
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura)/2;
}

function areaTrianguloIsoleses(ladoA,ladoB, base){
    if(ladoA === ladoB){
        let altura = Math.sqrt((ladoA * ladoA) - ((ladoB*ladoB)/4))
        return (base * altura) / 2;
    } else {
        alert("No es un triangulo Isoceles");
    }
}
//Funciones Círculo
function perimetroCirculo(diametro){
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI; 
}

//Aqui interactuamos el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}