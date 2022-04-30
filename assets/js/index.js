/**********************************************
 **                  SETTINGS                **
 **********************************************/
const tablaDiv = document.querySelector('#tabla');
const factorialDiv = document.querySelector('#factorial');
const formDiv = document.querySelector('form');
const formEvent = formDiv.addEventListener('submit', valida);
let factorialInit = 1;


/**********************************************
 **           HANDLER DEL SUBMIT             **
 **********************************************/

function valida(e) {
  const value = (e.target[0].value);

  (/^\d{1,2}$/.test(value) && Number(value < 21))
    ? calculaPinta(Number(value))
    : console.log(`${value} es un valor inválido.`);
}

/**********************************************
 **          CALCULA Y PINTA VISTA           **
 **********************************************/
function calculaPinta(valor) {

  tablaDiv.innerHTML = '';
  factorialDiv.innerHTML = '';

  for (let i = 1; i < valor + 1; i++) {
    factorialInit *= i;
    tablaDiv.innerHTML += `<p>${i} x ${valor} = ${i * valor}</p>`;
    factorialDiv.innerHTML += `<p>${i}! = ${factorialInit} </p>`;
  };

  valor = 0;
  factorialInit = 1;
}


/**********************************************
 **           OTRAS VERSIONES DE:            **
 **********************************************/

//! VALIDACIÓN: 
// Number.isNaN(value) 
//   ? console.log('Valor no es número') 
//   : !(value >= 1 && value <= 20)  
//     ? console.log('Valor fuera de rango')  
//     : calculaPinta(value);

//! LOOP ANIDADO PARA MISMO RESULTADO:
//   for (let i = 1; i < num + 1; i++) {
//     let wtf = 1;
//     for (j = 1; j < i + 1; j++) {
//        wtf *= j; 
//     }
//     console.log(wtf);
//   }