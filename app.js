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
    box = e.target
    // console.log(box)
    //console.log(e)
    var x = document.createTextNode("X")
    var o = document.createTextNode("O")

    if (box.classList.contains('x') || box.classList.contains('o')) {
        console.log('select another Square!!')

    }
    if (stopplay || count === 9) {
        alert("match ended")
        resetBord()
        stopplay = false
        playon = true
        count = 0



    }
    else {
        if (playon) {
            count++
            box.appendChild(x)
            box.classList.add('x')
            playon = !playon
            if (checkwhoWon('x')) {
                // console.log("X player won the match!!")
                alert("X player won the match!!")
                stopplay = true
                playerX++
                pX.innerHTML = 'player X: ' + playerX
            }

        }
        else {
            count++
            box.appendChild(o)
            box.classList.add('o')
            playon = !playon
            if (checkwhoWon('o')) {
                // console.log("O player won the match!!")
                alert("O player won the match!!")
                stopplay = true
                playerO++
                pO.innerHTML = 'player O: ' + playerO



            }
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

var element = (name) => { return document.getElementsByClassName(name)[0].classList }

var resetBord = () => {
    console.log('clean')
    var table = document.getElementById("gamebord");
    for (var i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            table.rows[i].cells[j].innerHTML = ''
        }
    }
    array.forEach(data => {
        // var squer = document.getElementsByClassName(data)
        // if
        var b = element(data)
        if (b.contains('x')) {
            b.remove('x')
        }
        else if (b.contains('o')) {
            b.remove('o')
        }
    })

}
