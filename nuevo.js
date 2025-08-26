function obtenerPrimerElemnto(lista) {
    return lista[0] // acceso constante
}


function imprimirTodos(lista) {
    for (let elemento of lista) {
        let x = elemento * 2 // simulamos trabajo
    }
}
function imprimirPares(lista) {
    for (let i of lista) {
        for (let j of lista) {
            let x = i + j; // simulamos trabajo
        }
    }
}

// pruebas de tiempo

// Creamos listas de diferentes tamaños
let listaPequeña = Array.from({ length: 100 }, (_, i) => i);
let listaMediana = Array.from({ length: 1000 }, (_, i) => i);
let listaGrande = Array.from({ length: 5000 }, (_, i) => i);


console.time("O(1)");
obtenerPrimerElemnto(listaGrande);
console.timeEnd("O(1)");


console.time("O(n) con lista de 1000");
imprimirTodos(listaMediana);
console.timeEnd("O(n) con lista de 1000");

console.time("O(n) con lista de 5000");
imprimirTodos(listaGrande);
console.timeEnd("O(n) con lista de 5000");


console.time("O(n²) con lista de 100");
imprimirPares(listaPequeña);
console.timeEnd("O(n²) con lista de 100");

console.time("O(n²) con lista de 1000");
imprimirPares(listaMediana);
console.timeEnd("O(n²) con lista de 1000");


//¿Cómo varía el tiempo de ejecución a medida que crece la lista?

//El tiempo de ejecución generalmente aumenta con el tamaño de la lista; su complejidad temporal describe este crecimiento, siendo O(n)(lineal) una de las más comunes, lo que significa que el tiempo es directamente proporcional al número de elementos, y en este caso un algoritmo sería ineficiente para millones de registros debido a la escalada de tiempo.La complejidad también puede ser O(1)(constante, muy eficiente), O(log n)(logarítmica, eficiente) o O(n ^ 2)(cuadrática, ineficiente) y otras, según la naturaleza de las operaciones realizadas. 

//¿Cuál crees que es la complejidad temporal de tu algoritmo? ¿Cómo la justificas?

//Si el algoritmo itera sobre cada elemento de la lista una vez (ej. buscar un elemento en una lista no ordenada): Su complejidad sería O(n). 
//Si el algoritmo realiza una operación constante sin importar el tamaño de la lista (ej. acceder a un elemento por su índice en un arreglo): Su complejidad sería O(1). 
//Si el algoritmo necesita realizar una operación para cada par de elementos (ej. algunos algoritmos de ordenamiento con comparaciones directas): Su complejidad podría ser O(n^2). 

//¿Tu algoritmo sería eficiente si la lista tuviera millones de registros?

//No (para la mayoría de las complejidades):
//Un algoritmo eficiente para millones de registros debe tener una complejidad de tiempo rápida, como O(1) o O(log n). 
//Sí (si la complejidad es O(1) o O(log n)):
//Si el algoritmo tiene complejidad logarítmica (O(log n)) o constante (O(1)), sería muy eficiente, ya que incluso con millones de elementos, el tiempo de ejecución seguiría siendo muy bajo o aumentaría muy poco. 
//No (si la complejidad es O(n) o peor):
//Si el algoritmo tiene una complejidad lineal (O(n)), como recorrer todos los elementos, o peor (O(n^2), O(2^n)), el tiempo de ejecución se volvería prohibitivamente largo con millones de registros. 