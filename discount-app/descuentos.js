//Calcular el precio con descuento
//cupones de descuento
const coupons = [
    'CODE10',
    'CODE20',
    'CODE50',
];

//Funcion para calcular el descuento
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

//Funcion principal
function onClickButtonPriceDiscount(){
    //get element InputPrice
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    //get element InputCoupon
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;
    
    //ERROR FIRST
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
    } else if (couponValue === "CODE10") {
        descuento = 10;
    } else if (couponValue === "CODE20") {
        descuento = 20;
    } else if (couponValue === "CODE50") {
        descuento = 50;
    }
    
    //obtenemos el precio con descuento y el ahorro final
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const finalSavings = priceValue - precioConDescuento;

    //AHORRO en pantalla
    const saving = document.getElementById('Savings');
    saving.innerText = "Ahorro:    $" + finalSavings;
    //PRECIO FINAL en pantalla
    const resultP = document.getElementById('ResultP');
    resultP.innerText = "PRECIO FINAL:   $" + precioConDescuento;
    
    
    
    /* CODIGO FANCY ....no funciona
    // creamos una variable isUserCouponValueValid con una función que valide si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro a nuestra función array.find().
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    /*
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + " no es válido");
    } else {
    
        //obtenemos el precio con descuento
        const precioConDescuento = calcularPrecioConDescuento(priceValue, );
        const finalSavings = priceValue - precioConDescuento;
        //PRECIO FINAL en pantalla
        const resultP = document.getElementById('ResultP');
        resultP.innerText = "FINAL PRICE:   $" + precioConDescuento;
    } */
}
