const table = document.querySelector("#tblbingo")
const letter = document.querySelectorAll(".letters-bingo")
const clean = document.querySelector("#clean")
// const fill = document.querySelector("#fill")

const letterB = document.querySelector("#letter-b")
const letterI = document.querySelector("#letter-i")
const letterN = document.querySelector("#letter-n")
const letterG = document.querySelector("#letter-g")
const letterO = document.querySelector("#letter-o")


const winningPositions = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24]
   ]

let arr = Array.apply(null, { length: 25 }).map(Number.call, Number);

console.log('arr >>> ', arr);

let iterator = 0;

for (let i = 0;i < 5;++i) {
    let tr = document.createElement("tr")
    table.appendChild(tr)

    for (let j = 0;j < 5;++j) {
        let td = document.createElement("td")
        td.id = arr[iterator].toString()
        td.style.height = "20%"
        td.style.width = "20%"
        td.classList.add("main-table-cell")

        let div = document.createElement("div")
        div.id = 'div'+arr[iterator].toString()
        
        // div.classList.add("cell-format")
        // div.textContent = arr[iterator].toString()
    
        if( i === 2 && j === 2) {
            // td.classList.add("cell-bingo-background")
            td.classList.add("bingo-card-number")
            // div.textContent = arr[iterator].toString()
        } else {
            div.classList.add("cell-format")
            div.textContent = arr[iterator].toString()
        }
    
        // if( i === 2 && j === 2) {
        //     // td.classList.add("cell-bingo-background")
        //     div.classList.add("cell-format")
        //     div.textContent = arr[iterator].toString()
        // } else {
        //     div.classList.add("cell-format")
        //     div.textContent = arr[iterator].toString()
        // }

        td.appendChild(div)
        tr.appendChild(td)
        iterator++;
    }
}

if (localStorage.getItem('B')) fillColumns(localStorage.getItem('B').split(','), 0)
if (localStorage.getItem('I')) fillColumns(localStorage.getItem('I').split(','), 1)
if (localStorage.getItem('N')) fillColumns(localStorage.getItem('N').split(','), 2)
if (localStorage.getItem('G')) fillColumns(localStorage.getItem('G').split(','), 3)
if (localStorage.getItem('O')) fillColumns(localStorage.getItem('O').split(','), 4)

const cell = document.querySelectorAll(".main-table-cell");

// let winningIterator = 0
let hasCellChecked = false;
cell.forEach(e => {
    e.addEventListener("click", () => {
        console.log(e.classList)
        if(e.classList.contains("strickout")) {
            e.classList.remove("strickout");
            hasCellChecked = false;
        } else {
            e.classList.add("strickout");
            hasCellChecked = true;
        }
        console.log(e.classList)
        if(e.classList.contains("cell-format-background")) {
            e.classList.remove("cell-format-background");
        } else {
            e.classList.add("cell-format-background");
        }
        console.log(e.classList)

        if(e.classList.contains("bingo-card-number") && e.classList.contains("strickout")) {
            startConfetti()
            // e.classList.remove("cell-format-background");
        } else {
            stopConfetti()
            // e.classList.add("cell-format-background");
        }

        // if(mathcWin()) {
        //     console.log('letter >>> ', letter)
        //     console.log('winningIterator >>> ', winningIterator)
        //     console.log('letter[winningIterator] >>> ', letter[winningIterator])
        //     letter[winningIterator].classList.add("show-bingo");

        //     winningIterator++;
        //     if(winningIterator === 5) {
        //         alert('B I N G O');
        //     }
        // }
    })
})

clean.addEventListener("click", () => {
    console.log('clicked!!!')
    cell.forEach(e => {
        e.classList.remove("strickout");
        e.classList.remove("cell-format-background");
        hasCellChecked = false;
    })
})

letterB.addEventListener("click", () => {
    console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "B", 1, 15);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    const placeholderMsg = (localStorage.getItem('B')) ? localStorage.getItem('B') : "1,2,3,4,5";
    let columnB = prompt(promptMessage, placeholderMsg);
    console.log('columnB >>> ', columnB);
    const arrayColumnB = columnB.split(',');
    console.log('arrayColumnB >>> ', arrayColumnB);
    const inputValidatedMessage = validateInputValues(arrayColumnB, 1, 15);
    console.log('inputValidatedMessage >>> ', inputValidatedMessage);
    if (inputValidatedMessage) {
        return alert(inputValidatedMessage)
    }

    let startIndexColumnB = 0;
    window.localStorage.setItem('B', arrayColumnB);
    fillColumns(arrayColumnB, startIndexColumnB);
})

letterI.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "I", 16, 30);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    const placeholderMsg = (localStorage.getItem('I')) ? localStorage.getItem('I') : "16,17,18,19,20";
    let columnI = prompt(promptMessage, placeholderMsg);
    console.log(columnI);
    const arrayColumnI = columnI.split(',');
    console.log(arrayColumnI);
    const inputValidatedMessage = validateInputValues(arrayColumnI, 16, 30);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }
    
    let startIndexColumnI = 1;
    window.localStorage.setItem('I', arrayColumnI);
    fillColumns(arrayColumnI, startIndexColumnI);
})

letterN.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "N", 31, 45);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    const placeholderMsg = (localStorage.getItem('N')) ? localStorage.getItem('N') : "31,32,33,34,35";
    let columnN = prompt(promptMessage, placeholderMsg);
    console.log(columnN);
    const arrayColumnN = columnN.split(',');
    console.log(arrayColumnN);
    const inputValidatedMessage = validateInputValues(arrayColumnN, 31, 45);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }

    let startIndexColumnN = 2;
    window.localStorage.setItem('N', arrayColumnN);
    fillColumns(arrayColumnN, startIndexColumnN);
})

letterG.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "G", 46, 60);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    const placeholderMsg = (localStorage.getItem('G')) ? localStorage.getItem('G') : "46,47,48,49,50";
    let columnG = prompt(promptMessage, placeholderMsg);
    console.log(columnG);
    const arrayColumnG = columnG.split(',');
    console.log(arrayColumnG);
    const inputValidatedMessage = validateInputValues(arrayColumnG, 46, 60);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }

    let startIndexColumnG = 3;
    window.localStorage.setItem('G', arrayColumnG);
    fillColumns(arrayColumnG, startIndexColumnG);
})

letterO.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "O", 61, 75);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    const placeholderMsg = (localStorage.getItem('O')) ? localStorage.getItem('O') : "61,62,63,64,65";
    let columnO = prompt(promptMessage, placeholderMsg);
    console.log(columnO);
    const arrayColumnO = columnO.split(',');
    console.log(arrayColumnO);
    const inputValidatedMessage = validateInputValues(arrayColumnO, 61, 75);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }

    let startIndexColumnO = 4;
    window.localStorage.setItem('O', arrayColumnO);
    fillColumns(arrayColumnO, startIndexColumnO);
})

function getPromptInputMessage(hasCellChecked, column, startRange, endRange) {
    if (hasCellChecked) {
        return 'El carton esta en juego no puedes cambiar sus valores.';
    } 
    return `Digite numeros de la columna ${column} dentro del rango de numeros ${startRange} al ${endRange}, separados por coma.`;
}

function validateInputValues(arrayInput, startRange, endRange) {
    for (const number of arrayInput) {
        if(number < startRange || number > endRange) {
            return `Por favor cambiar el valor ${number}, e ingrese un valor dentro del rango de numeros ${startRange} al ${endRange}`;
        }
    }
    return '';
}

function fillColumns(arrayColumn, startIndexColumn) {
    for (const inputValue of arrayColumn) {
        const rowColumn = document.getElementById(`div${startIndexColumn}`);
        startIndexColumn += 5;
        // rowColumn.textContent = (startIndexColumn === 17) ? '' : inputValue.toString();
        rowColumn.textContent = inputValue.toString();
    }
}

// function mathcWin() {
//     const cell = document.querySelectorAll(".main-table-cell");

//     console.log('cell #2 >>> ', cell)
//     console.log('winningPositions >>> ', winningPositions)

//     return winningPositions.some(combination => {
//         console.log('combination >>> ', combination)
//         let ite = 0;
//         combination.forEach(index => {
//             console.log('cell[index] >>> ', cell[index])
//             if(cell[index].classList.contains("strickout")) {
//                 ite++;
//             }
//         })

//         if(ite === 5) {
//             let indexWin = winningPositions.indexOf(combination);
//             winningPositions.splice(indexWin, 1)
//         }
//         return combination.every(index => {
//             return cell[index].classList.contains("strickout")
//         })
//     })
// }