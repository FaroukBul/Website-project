
window.onclick = event => {
    cell_num = event.target.id
    input = document.getElementById(`input${cell_num}`)
    input.value = cell_num
    input.submit
    
    console.log(input)
}
