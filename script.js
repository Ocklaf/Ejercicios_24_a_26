/* 24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá los 
numeros ordenados en forma ascendente y el segundo de forma 
descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

/* const arrayParesEImpares = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //necesitamos ver que todos los elementos sean números
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor de ${num} no es un número`)
    }

    let miObjeto = {
            ascendente: [],
            descendente: []
         }

     miObjeto.ascendente.push(arr.sort())
     //arr=arr.slice("").toString()
     console.info(arr)
     arr=arr.reverse()
     console.info(arr)

     miObjeto.descendente.push(arr)

    console.info(miObjeto)
}

arrayParesEImpares([7,5,7,8,6]) */


/*25) Programa una función que dado un arreglo de elementos,
elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
 devolverá ["x", 10, 2, "10", true].*/

 const arrayIncluye = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")
 
    let repetido = [],
        i = 0

    while(arr.includes(arr[i]) === -1){
        repetido.push(arr[i])
        i++
    }
    console.log(repetido)
}

/* var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices); */
// [0, 2, 4]

arrayIncluye(["x", 10, "x", 2, "10", 10, true, true])


/*26) Programa una función que dado un arreglo de 
números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0] devolverá 4.5. */