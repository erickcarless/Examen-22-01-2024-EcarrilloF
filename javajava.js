/* usamos el prompt para que nos aparezca en el navegador */
let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));
let numero3 = parseInt(prompt("Ingrese el tercer número entero:"));
/* El Math.mi para ver el valor maximo , y el math.min para ver el valor mínimo. */
let menor = Math.min(numero1, numero2, numero3);
let mayor = Math.max(numero1, numero2, numero3);
/* y ponemos alert para que nos arroje los valores que pusieron en el prompt */
alert("El número menor es: " + menor);
alert("El número mayor es: " +  mayor);

/* para verificar si son iguales o distintos  */
const num1 = 1;
const num2 = 2;
const num3 = 3;

if(num1 === num2 && num1 === num3 && num2 === num3)
{ console.log('Todos iguales'); }
 else if(num1 !== num2 && num1 !== num3 && num2 !== num3)
 { console.log('Todos son diferentes.'); }
 /*suma de los 3 , y dividido en 3 */
 console.log((num1 + num2 + num3)/3);









/* SI SON DIFERENTES
function sonTodosDiferentes(num1, num2, num3) {
    if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
      return true;
    } else {
      return false;
    }
  }
     si son IGUALES
    if (num1 == num2 && num1 == num3 && num2 == num3
  */




















