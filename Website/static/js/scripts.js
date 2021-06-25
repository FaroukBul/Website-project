let player = "Initial"
let red_cells = document.getElementsByClassName("red")
let blue_cells = document.getElementsByClassName("blue")


window.onclick = event => {
    display_color(event)
    setTimeout(() => {get_winner()}, 300)
}


function get_winner() {
    if(check_for_winner() == "Red"){
        alert("Red Wins")
        location.reload()
    } else if(check_for_winner() == "Blue"){
        alert("Blue Wins")
        location.reload()
    } else if(red_cells.length >= 5){
        alert('Both Loose')
    }
}


function display_color(event){
    let red_cells = document.getElementsByClassName("red")
    let blue_cells = document.getElementsByClassName("blue")
    if(red_cells.length < 5 && blue_cells.length < 5){
        if(player == "red" || player == "Initial"){
            element = event.target
            element.classList.add("red")
            player = "blue"
        }
        else {
            element = event.target
            element.classList.add("blue")
            player = "red"
        }
    }
}


function winner_diagonals(positions){
    
}


function check_for_winner(){
    let red_positions = []
    let blue_positions = []
    for(i=0; i < red_cells.length; i++){
        red_positions.push(parseInt(red_cells[i].id))
    }
    for(i=0; i < blue_cells.length; i++){
        blue_positions.push(parseInt(blue_cells[i].id))
    }
    return determine_winner(red_positions, blue_positions) 
}


function determine_winner(red_positions, blue_positions) {
    if(winning_lines([red_positions, blue_positions]) == 0){
        return "Red"
    } if(winning_lines([red_positions, blue_positions]) == 1){
        return "Blue"
    }
    return null 
}


function winning_lines(positions){
    winner = winner_column(positions)
    if (winner == null){
        winner = winner_row(positions)
    }
    
    return winner
}


function winner_column(positions){
    winner = null
    for(i=0; i < 2; i++){
        positions[i].forEach(position => {
            if(positions[i].includes(position + 3) &&
                positions[i].includes(position + 6)){
                winner = i
            }
        })
    }

    return winner
}


function winner_row(positions){
    winner = null
    for(i=0; i < 2; i++){
        positions[i].forEach(position => {
            if(positions[i].includes(position + 1) &&
                positions[i].includes(position + 2)){
                winner = i
            }
        })
    }

    return winner
}