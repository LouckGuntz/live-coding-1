// Escribe tu código aquí.

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

const bigWords = (word, arr) =>{
    let letters = word.length;
    let arr2 = [];
    for (let index = 0; index < arr.length; index++) {
       
        if(letters < arr[index].length){
            arr2.push(arr[index]);
        }
    }
    console.log(arr2);
    
}

bigWords('bocina', myArray);


function imprimirLista(myArray){
    let luagr = document.getElementById("lista");

    let lista;

    for (let index = 0; index < myArray.length; index++) {
       
        lista = `<li>${myArray[index]}</li>` 
        luagr.innerHTML += lista;
    }

}

imprimirLista(myArray);


