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
        
        if( i === 2 && j === 2) {
            td.classList.add("cell-bingo-background")
        } else {
            div.classList.add("cell-format")
            div.textContent = arr[iterator].toString()
        }
        td.appendChild(div)
        tr.appendChild(td)
        iterator++;
    }
}
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
    let columnB = prompt(promptMessage, "1,2,3,4,5");
    console.log(columnB);
    const arrayColumnB = columnB.split(',');
    console.log(arrayColumnB);
    const inputValidatedMessage = validateInputValues(arrayColumnB, 1, 15);
    console.log(inputValidatedMessage);
    if (inputValidatedMessage) {
        return alert(inputValidatedMessage)
    }

    let startIndexColumnB = 0;
    fillColumns(arrayColumnB, startIndexColumnB);
})

letterI.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "I", 16, 30);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    let columnI = prompt(promptMessage, "16,17,18,19,20");
    console.log(columnI);
    const arrayColumnI = columnI.split(',');
    console.log(arrayColumnI);
    const inputValidatedMessage = validateInputValues(arrayColumnI, 16, 30);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }
    
    let startIndexColumnI = 1;
    fillColumns(arrayColumnI, startIndexColumnI);
})

letterN.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "N", 31, 45);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    let columnN = prompt(promptMessage, "31,32,33,34,35");
    console.log(columnN);
    const arrayColumnN = columnN.split(',');
    console.log(arrayColumnN);
    const inputValidatedMessage = validateInputValues(arrayColumnN, 31, 45);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }

    let startIndexColumnN = 2;
    fillColumns(arrayColumnN, startIndexColumnN);
})

letterG.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "G", 46, 60);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    let columnG = prompt(promptMessage, "46,47,48,49,50");
    console.log(columnG);
    const arrayColumnG = columnG.split(',');
    console.log(arrayColumnG);
    const inputValidatedMessage = validateInputValues(arrayColumnG, 46, 60);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }

    let startIndexColumnG = 3;
    fillColumns(arrayColumnG, startIndexColumnG);
})

letterO.addEventListener("click", () => {
console.log(hasCellChecked);
    const promptMessage = getPromptInputMessage(hasCellChecked, "O", 61, 75);
    if (hasCellChecked) {
        return alert(promptMessage);
    }
    let columnO = prompt(promptMessage, "61,62,63,64,65");
    console.log(columnO);
    const arrayColumnO = columnO.split(',');
    console.log(arrayColumnO);
    const inputValidatedMessage = validateInputValues(arrayColumnO, 61, 75);
    if (inputValidatedMessage) {
        alert(inputValidatedMessage)
    }

    let startIndexColumnO = 4;
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
        rowColumn.textContent = (startIndexColumn === 17) ? '' : inputValue.toString();
    }
}

function mathcWin() {
    const cell = document.querySelectorAll(".main-table-cell");

    console.log('cell #2 >>> ', cell)
    console.log('winningPositions >>> ', winningPositions)

    return winningPositions.some(combination => {
        console.log('combination >>> ', combination)
        let ite = 0;
        combination.forEach(index => {
            console.log('cell[index] >>> ', cell[index])
            if(cell[index].classList.contains("strickout")) {
                ite++;
            }
        })

        if(ite === 5) {
            let indexWin = winningPositions.indexOf(combination);
            winningPositions.splice(indexWin, 1)
        }
        return combination.every(index => {
            return cell[index].classList.contains("strickout")
        })
    })
}