const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const gridNum = document.querySelector('.gridNum')
const colorPicker = document.querySelector('#colorpicker')
const reset = document.querySelector('.reset')
const onClick = document.querySelector('.onclick')
const onHover = document.querySelector('.onhover')
const eraser = document.querySelector('#eraser')
const lines = document.querySelector('.lines')
let innerContainer = document.createElement('span')

resolution = slider.value;
gridNum.textContent = `${resolution} X ${resolution}`


function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function makeGrid() {

    clearGrid()
    //creates divs inside of divs eqaul to resolution
    for (let i = 0; i < resolution; i++){
        innerContainer = document.createElement('span')
        for (let i = 0; i < resolution; i++){
            pixel = document.createElement('div')
            pixel.id = 'pixel'
            pixel.classList.add('blacklines')
            lines.checked = true
            pixel.style = `width:calc(700px/${resolution}); height:calc(700px/${resolution});`
            innerContainer.appendChild(pixel)
        }
        container.appendChild(innerContainer)
    }  
    let allPixels = document.querySelectorAll('#pixel')
    allPixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            resolution = slider.value;
                pixel.style = `width:calc(700px/${resolution}); height:calc(700px/${resolution}); background-color: ${color}`
        })
    })
    return allPixels
}

function colorChange () {
    colorPicker.addEventListener('change', () => {
        color = colorPicker.value

        if (eraser.classList = 'erase') {
            eraser.classList.toggle('erase')
        }
    })
}


let color = colorPicker.value
colorChange()
makeGrid()

eraser.addEventListener('click', () => {
    
    eraser.classList.toggle('erase')
    if (eraser.classList == 'erase') {
        console.log(eraser.classList)
        color = '#ffffff';
    } else {   
        color = colorPicker.value;
    }
})

slider.addEventListener('mouseup', () => {
    resolution = slider.value
    gridNum.textContent = `${resolution} x ${resolution}`
    makeGrid()
})

reset.addEventListener('click', () => {
    lines.checked = false;
    makeGrid()
})

lines.addEventListener('change', () => {
    allPixels = document.querySelectorAll('#pixel')
    allPixels.forEach (pixel => {
        pixel.classList.toggle('blacklines')
    })
})




