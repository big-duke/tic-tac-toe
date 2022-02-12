let SIZE = 3 // grid dimension
let winCombo = []
var winDiagonal1 = [], winDiagonal2 = []
for (let i = 0; i < SIZE; i++) {
    let winColumn = [], winRow = []


    for (let j = 0; j < SIZE; j++) {
        // win by column
        let numColumn = i + SIZE * j
        winColumn.push(numColumn)
        // win by row
        let numRow = i * SIZE + j
        winRow.push(numRow)
    }

    winCombo.push(winColumn)
    winCombo.push(winRow)

    let numDiagonal1 = i * (SIZE + 1)
    winDiagonal1.push(numDiagonal1)

    let numDiagonal2 = (SIZE - 1) * (i + 1)
    winDiagonal2.push(numDiagonal2)


    if (i === SIZE - 1) {
        winCombo.push(winDiagonal1)
        winCombo.push(winDiagonal2)
    }
    // 
    // win
    // for (let j = 0; j < SIZE; j++) {
    //     let number = i * SIZE + j
    //     winCombo.push(number)
    // }
    // console.log(winCombo);

    // diagonal

}
console.log(winCombo);