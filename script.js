// Se accede al elemento div para mostrar el factorial del número

let div_factorial = document.getElementById("factorial");

// Se pide al usuario que ingrese un número positivo

let numero;

do {
	numero = prompt("Ingresa un número positivo: ");
	// Si lo ingresado no es un numero muestra la alerta y vuelve a pedir al usuario que ingrese el número
	if(isNaN(numero) || parseInt(numero)<0){
		alert("Lo que escribiste no es un numero valido, ingresa un número positivo")
	}
} while(isNaN(numero) || parseInt(numero)<0);

numero = parseInt(numero);

let factorial=1;

// Calculo del factorial

// Si el número es mayor o igual a 1 se usa la formula del factorial, si es 0 entonces por defecto el valor es 1

if(numero>=1){
	for(i=1;i<=numero;i++){
		factorial*=i;
	}
}

// Se muestra en el html el calculo del factorial

div_factorial.innerHTML=`El factorial de ${numero} es: ${factorial}`;