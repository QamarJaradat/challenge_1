//mini app1 (Tic Toc Toe)
console.log('This is Tic Toc Toe, Do you want to play?')
var box
var playon = true
var playerO = 0
var playerX = 0
var count = 0
var stopplay = false
var pX = document.getElementById('playerx')
var pO = document.getElementById('playero')
pX.innerHTML = 'player X: 0'
pO.innerHTML = 'player O: 0'


var array = ['b11', 'b12', 'b13', 'b21', 'b22', 'b23', 'b31', 'b32', 'b33']
document.getElementById('reset').addEventListener('click', (e) => {
    playon = true
    stopplay = false
    resetBord()
    console.log('reset')
    playerO = 0;
    playerX = 0;
    count = 0;
    pX.innerHTML = 'player X: 0'
    pO.innerHTML = 'player O: 0'


})
document.getElementById('gamebord').addEventListener('click', (e) => {
    var string
    box = e.target
    var x = document.createTextNode("X")
    var o = document.createTextNode("O")

    if (box.classList.contains('x') || box.classList.contains('o')) {
        console.log('select another Square!!')
    }

    else {
        if (playon) {
            count++
            box.appendChild(x)
            box.classList.add('x')
            playon = !playon//switch the turn
            if (checkwhoWon('x')) {
                string = "X player won the match!!"
                stopplay = true
                playerX++
                pX.innerHTML = 'player X: ' + playerX
            }
        }
        else {
            count++
            box.appendChild(o)
            box.classList.add('o')
            playon = !playon //switch the turn
            if (checkwhoWon('o')) {
                string = "O player won the match!!"
                stopplay = true
                playerO++
                pO.innerHTML = 'player O: ' + playerO
            }
        }
        //check if one of the player won or no one won
        if (count === 9 || stopplay) {
            if (stopplay)
                alert(string)
            else alert("match ended")
            resetBord()
            stopplay = false
            playon = true //start with X player
            count = 0
        }
    }
})

var checkwhoWon = (player) => {
    //check horizontally
    //first row
    if (element('b11').contains(player) && element('b12').contains(player) && element('b13').contains(player))
        return true
    //second row
    else if (element('b21').contains(player) && element('b22').contains(player) && element('b23').contains(player))
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

//shorter way to access the table cells by class name (to not repete the long line)
var element = (name) => { return document.getElementsByClassName(name)[0].classList }

var resetBord = () => {
    console.log('clean')
    var table = document.getElementById("gamebord");
    //clear the table cells
    for (var i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            table.rows[i].cells[j].innerHTML = ''
        }
    }
    array.forEach(data => {
        //remving X and O classes
        var b = element(data)
        if (b.contains('x')) {
            b.remove('x')
        }
        else if (b.contains('o')) {
            b.remove('o')
        }
    })
}
