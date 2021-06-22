
   let player = "Initial"
   let red_cells = document.getElementsByClassName("red")
   let blue_cells = document.getElementsByClassName("blue")
   if (blue_cells.length == 0 && red_cells.length == 0){
       let player = "red"
   }



    window.onclick = event => {
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
        winner(element)
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

    function winner(element){
        let red_positions = []
        let blue_positions = []
        for(i=0; i < red_cells.length; i++){
            red_positions.push(red_cells[i].id)
        }
        for(i=0; i < blue_cells.length; i++){
            blue_positions.push(blue_cells[i].id)
        }
        for(i=0; i < 8; i++){
            if(winning_lines[`${i}`].every(position => red_positions.indexOf(position) > -1)){
                alert("Red WINS")
                location.reload()
            } else if(winning_lines[`${i}`].every(position => blue_positions.indexOf(position) > -1)) {
                alert("Blue WINS")
                location.reload()
            }
        }
    }

    