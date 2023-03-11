//-------------------- Créer le plateau de jeu

document.body.onload = createBoard;

function createBoard(){
    
    let board = document.createElement("table")
    board.setAttribute('id', "plateau")
    document.getElementById('newGame').appendChild(board);

    let line = 6
    let column = 7
    let newBoard = new Array(line) //tableau de 6 éléments/lignes

    for (let i=0; i<line; i++){
        newBoard[i] = new Array(column) //chaque ligne contient désormais 7 colonnes
        let newLine = document.createElement("tr")
        newLine.setAttribute('class', "ligne")
        board.appendChild(newLine);

        for (let j=0; j<column; j++){
            let newColumn = document.createElement("td")
            newColumn.setAttribute('class', "colonne")
            newLine.appendChild(newColumn);
            newBoard[i][j] = newColumn;
        }
    }

}


//-------------------- Placer des jetons

/*
function play(){
    //prend en entrée des numéros de ligne et de colonne et un code représentant le joueur 1 ou 2
    //place un jeton de la couleur correspondante dans la case désignée
    let player1 = document.querySelector('#player1').className = 'player1';
    let player2 = document.querySelector('#player2').className = 'player2';

    let player1 = document.createElement("table")
    board.setAttribute('id', "player1")
    document.getElementById('newGame').appendChild(board);

}
function play()
*/
