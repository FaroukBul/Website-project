
   let player = "Initial"
   let red_cells = document.getElementsByClassName("red")
   let blue_cells = document.getElementsByClassName("blue")
   console.log(blue_cells.length)
   if (blue_cells.length == 0 && red_cells.length == 0){
       let player = "red"
   }
    window.onclick = event => {
        if(red_cells.length < 5 && blue_cells.length < 5){
            if(player == "red" || player == "Initial"){
                element = event.target
                console.log(event)
                element.classList.add("red")
                player = "blue"
            }
            else {
                element = event.target
                console.log(event)
                element.classList.add("blue")
                player = "red"
            }
        }
    }

    winning_lines = {
        1: [1, 2, 3],
        2: [4, 5, 6],
        3: [7, 8, 9],
        4: [1, 4, 7],
        5: [2, 5, 8],
        6: [3, 6, 9],
        7: [1, 5, 9],
        8: [3, 5, 7]
    }
    function winner(){
        let red_positions = []
        let blue_positions = []
        for(i=0; i < red_cells.length; i++){
            red_positions.push(red_cells[i].id)
            blue_positions.push(blue_cells[i].id)
        }
        for(i=0; i < 3; i++){
            positions.push(red_cells[i].id)
        }
    }