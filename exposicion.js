// Clase Producto

class Producto {
    constructor(id, nombre, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}


// Función para generar productos aleatorios

function generarProductos(n) {
    const productos = [];
    for (let i = 0; i < n; i++) {
        const id = Math.floor(Math.random() * 1000); // ID aleatorio
        const nombre = "Producto" + (i + 1);        // Nombre secuencial
        const cantidad = Math.floor(Math.random() * 100); // Cantidad aleatoria
        productos.push(new Producto(id, nombre, cantidad));
    }
    return productos;
}


// Algoritmos de Ordenamiento


// 1. Bubble Sort
function bubbleSort(arr, criterio) {
    let n = arr.length;
    let copia = [...arr]; // Copiamos para no alterar el original
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (copia[j][criterio] > copia[j + 1][criterio]) {
                [copia[j], copia[j + 1]] = [copia[j + 1], copia[j]];
            }
        }
    }
    return copia;
}

// 2. Selection Sort
function selectionSort(arr, criterio) {
    let n = arr.length;
    let copia = [...arr];
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (copia[j][criterio] < copia[minIndex][criterio]) {
                minIndex = j;
            }
        }
        [copia[i], copia[minIndex]] = [copia[minIndex], copia[i]];
    }
    return copia;
}

// 3. Insertion Sort
function insertionSort(arr, criterio) {
    let copia = [...arr];
    for (let i = 1; i < copia.length; i++) {
        let key = copia[i];
        let j = i - 1;
        while (j >= 0 && copia[j][criterio] > key[criterio]) {
            copia[j + 1] = copia[j];
            j--;
        }
        copia[j + 1] = key;
    }
    return copia;
}


// Medición de Tiempos

function medirTiempo(algoritmo, arr, criterio) {
    const inicio = performance.now();
    const resultado = algoritmo(arr, criterio);
    const fin = performance.now();
    return { tiempo: (fin - inicio).toFixed(4), resultado };
}


// Ejecución del Programa

const inventario = generarProductos(10); // Cambia a 100 o 1000 para probar
console.log("Inventario original:");
console.table(inventario);

// Probamos con criterio "id"
console.log("\n--- Ordenando por ID ---");

let burbuja = medirTiempo(bubbleSort, inventario, "id");
console.log("Bubble Sort:", burbuja.tiempo, "ms");
console.table(burbuja.resultado);

let seleccion = medirTiempo(selectionSort, inventario, "id");
console.log("Selection Sort:", seleccion.tiempo, "ms");
console.table(seleccion.resultado);

let insercion = medirTiempo(insertionSort, inventario, "id");
console.log("Insertion Sort:", insercion.tiempo, "ms");
console.table(insercion.resultado);
