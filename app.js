const slider = document.createElement('input')
slider.type = 'range'
slider.max = 10
slider.value = 0
slider.style.width = '200px'
document.body.appendChild(slider)

const div = document.createElement('div')
document.body.appendChild(div)

slider.oninput = addStrars

function addStrars () {
    div.innerText = ''
    for (let i = 0; i < this.value; i++) {
        div.append('----')
    }
}


