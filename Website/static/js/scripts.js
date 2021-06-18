
   let player = "Initial"
   let red_cells = document.getElementsByClassName("red")
   let blue_cells = document.getElementsByClassName("blue")
   console.log(blue_cells.length)
   if (blue_cells.length == 0 && red_cells.length == 0){
       let player = "red"
   }

    function gato() {
        window.onclick = event => {
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


