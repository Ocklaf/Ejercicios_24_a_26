/* 24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá los 
numeros ordenados en forma ascendente y el segundo de forma 
descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

/* const ordenarArray = (arr = undefined) => { 

    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //necesitamos ver que todos los elementos sean números
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor de ${num} no es un número`)
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    })
}

ordenarArray()
ordenarArray("hola")
ordenarArray({})
ordenarArray([])
ordenarArray([7, 5,7,8,6]) */




/*25) Programa una función que dado un arreglo de elementos,
elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
 devolverá ["x", 10, 2, "10", true].*/

/* const quitarDuplicados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //comprobamos que tenta mínimo 2 elementos, de lo contrario no tiene sentido hacer una comparación
    if(arr.length === 1) return console.error("El Array está vacío")

    //    return console.info({ //como se haría de ENMAScript 5 hacia atrás
    //    original: arr,
    //    //Sirve para explicar filter() e indexOf()
    //    sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    // }) 

    return console.info({ //como se haría de ENMAScript 6 en adelante
        original: arr,
        //nuevo tipo de dato ENMAScript 6, NO permite elementos/datos duplicados
        sinDuplicados: [...new Set(arr)]
    }) 
}

quitarDuplicados()
quitarDuplicados({})
quitarDuplicados([])
quitarDuplicados([2])
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]) */


/*26) Programa una función que dado un arreglo de 
números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0] devolverá 4.5. */

const promedio = (arr = undefined) => { 

    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //necesitamos ver que todos los elementos sean números
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor de ${num} no es un número`)
    }

    return console.info(
        arr.reduce((total, num, index, arr) =>{
            total += num
            if(index === arr.length - 1){
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
            }else return total
        })
    )
}

promedio()
promedio({})
promedio([])
promedio(2, true)
promedio([1,2,3,4,5,6,7,8,9,0])