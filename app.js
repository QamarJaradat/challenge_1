console.log('This is Tic Toc Toe, Do you want to play?')
var box
var playon = true
var playerO = 0
var playerX = 0
document.getElementById('gamebord').addEventListener('click', (e) => {
    box = e.target
    //console.log(e)
    var x = document.createTextNode("X")
    var o = document.createTextNode("O")

    if (box.classList.contains('x') || box.classList.contains('o')) {
        console.log('select another Square!!')

    }
    else if (playon) {
        box.appendChild(x)
        box.classList.add('x')
        playon = !playon
        if (checkwhoWon('x')) {
            // console.log("X player won the match!!")
            alert("X player won the match!!")
        }

    }
    else {
        box.appendChild(o)
        box.classList.add('o')
        playon = !playon
        if (checkwhoWon('o')) {
            // console.log("O player won the match!!")
            alert("O player won the match!!")
        }
    }
})

var checkwhoWon = (player) => {
    console.log(player, box)
    //check horizontally
    //first row
    if (element('b11').contains(player) && element('b12').contains(player) && element('b13').contains(player))
        return true
    //second row
    else if (element('b21').contains(player) && element('b22').contains(player) && element('b33').contains(player))
        return true
    //third row
    else if (element('b31').contains(player) && element('b32').contains(player) && element('b33').contains(player))
        return true
    //check vertically
    //first column
    else if (element('b11').contains(player) && element('b21').contains(player) && element('b31').contains(player))
        return true
    //second column
    else if (element('b12').contains(player) && element('b22').contains(player) && element('b32').contains(player))
        return true
    //third column
    else if (element('b13').contains(player) && element('b23').contains(player) && element('b33').contains(player))
        return true
    //diagonally
    else if (element('b11').contains(player) && element('b22').contains(player) && element('b33').contains(player))
        return true
    else if (element('b13').contains(player) && element('b22').contains(player) && element('b31').contains(player))
        return true
    else
        return false
}

var element = (name) => { return document.getElementsByClassName(name)[0].classList }
