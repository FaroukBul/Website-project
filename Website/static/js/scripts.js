   let player = "Initial"
   let red_cells = document.getElementsByClassName("red")
   let blue_cells = document.getElementsByClassName("blue")

    window.onclick = event => {
        display_color(event)
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

    var winning_lines = {
        0: ['1', '2', '3'],
        1: ['4', '5', '6'],
        2: ['7', '8', '9'],
        3: ['1', '4', '7'],
        4: ['2', '5', '8'],
        5: ['3', '6', '9'],
        6: ['1', '5', '9'],
        7: ['3', '5', '7']
    }

    function winning_positions = {
        
    }

    function check_for_winner(){
        let red_positions = []
        let blue_positions = []
        for(i=0; i < red_cells.length; i++){
            red_positions.push(red_cells[i].id)
        }
        for(i=0; i < blue_cells.length; i++){
            blue_positions.push(blue_cells[i].id)
        }
        return determine_winner(red_positions, blue_positions) 
    }

    function determine_winner(red_positions, blue_positions) {
        for(i=0; i < 8; i++){
            if(winning_lines[`${i}`]
            .every(position => red_positions.indexOf(position) > -1)){
                return "Red"
            } else if(winning_lines[`${i}`]
            .every(position => blue_positions.indexOf(position) > -1)) {
                return "Blue"
            }
        }
        return null 
    }

