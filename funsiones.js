
    //  iteracion1

    //  var numbermax = function ( numberone ,  numbertwo ) {
        
    //      if (numberone > numbertwo) {
    //        return numberone;
    //      }
    //        return numbertwo;
    //      }
       
    //     numbermax = (1,5);
    //      console.log(numbermax);

    // iteracion2
    // Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que 
    // dos strings tenga la misma longitud deberá devolver el primero.Puedes usar este array para probar tu función:
    
    // const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
    // function findLongestWord(param) { 
    //   let longestWord = param[0];
    //   for (let i = 1; i < param.length; i++) {
    //     if (param[i].length > longestWord.length) {
    //       longestWord = param[i];
    //     }
    //   }
    //   return console.log(longestWord);
    // }
    // findLongestWord(avengers);

//     Iteración 3: Calcular la suma

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la
//  suma de todos los números de la matriz.

// const numbers = [1, 2, 3, 5, 45, 37, 58];

// function sumAll(param){
//   let allnumbers = 0 ;
//   for( let i = 1 ; i < param.length ; i++){
//     allnumbers += param [i];
//   }
//   return console.log(allnumbers);
//   }
//   sumAll(numbers)

// Iteración4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

// const numbers = [12, 21, 38, 5, 45, 37, 6];
// function promedio(param){
//    let sum = 0;
//   for (let i = 0; i < param.length; i++) {
//       sum += param[i];
//    }
//     return console.log(sum / param.length);
//   }
//   promedio(numbers);
  
// Iteration 8: Contador de repeticiones

// Crea una función que nos devuelva el número de veces que se repite 
// cada una de las palabras que lo conforma.  Puedes usar este array 
// para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let counter ={};
  for (let i = 0; i < param.length; i++) {
    if (param[i] in counter) {
      counter[param[i]]++;
    } else {
      counter[param[i]] = 1;
    }
  }
  return console.log(counter);
}

repeatCounter(counterWords);