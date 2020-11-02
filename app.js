console.log('This is Tic Toc Toe, Do you want to play?')
var box
var playon = true
document.getElementById('gamebord').addEventListener('click', (e) => {
    box = e.target
    //console.log(e)
    var x = document.createTextNode("X")
    var o = document.createTextNode("O")

    if (playon) {
        box.appendChild(x)
        box.classList.add('x')
        if (checkwhoWon('x'))
            console.log("X player won the match!!")
        playon = !playon
    }
    else {
        box.appendChild(o)
        box.classList.add('o')
        checkwhoWon('o')

        playon = !playon
    }
})

var checkwhoWon = (player) => {
    //console.log(player, box)
    //check horizontally
    //first line
    console.log(box.classList.contains("b11"), (box.classList.contains(player)))
    if ((box.classList.contains(player) && box.classList.contains("b11")) && (box.classList.contains(player) && box.classList.contains("b12")) && (box.classList.contains(player) && box.classList.contains("b13")))
        return true

    // console.log('what happend')
}
