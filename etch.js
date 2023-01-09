const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const gridNum = document.querySelector('.gridNum')
const colorPicker = document.querySelector('#colorpicker')
const reset = document.querySelector('.reset')
const eraser = document.querySelector('#eraser')
const lines = document.querySelector('.lines')
const rainbow = document.querySelector('#rainbow')

resolution = slider.value;
gridNum.textContent = `${resolution} X ${resolution}`


function makeGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
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
        rainbowColorRemove()
        if (eraser.classList = 'erase') {
            eraser.classList.toggle('erase')
            } 
    })
}

function rainbowColor () {
    if (eraser.classList = 'erase') {
        eraser.classList.toggle('erase')
        } 
    allPixels = document.querySelectorAll('#pixel')
    allPixels.forEach (pixel => {
            pixel.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 255)
                let g = Math.floor(Math.random() * 255)
                let b = Math.floor(Math.random() * 255)
                color =  `rgb(${r},${g},${b})`
            })
    })
}
    
function rainbowColorRemove () {
    allPixels = document.querySelectorAll('#pixel')
    allPixels.forEach (pixel => {
        pixel.addEventListener('mouseover', () => {
            color = colorPicker.value
        })
    })
}

slider.addEventListener('mouseup', () => {
    resolution = slider.value
    gridNum.textContent = `${resolution} x ${resolution}`
    makeGrid()
})

eraser.addEventListener('click', () => {
    eraser.classList.toggle('erase')
    if (eraser.classList == 'erase') {
        allPixels = document.querySelectorAll('#pixel')
        allPixels.forEach (pixel => {
            pixel.addEventListener('mouseover', () => {
                color = '#FFFFFF'
        })
    })
    } else {   
        rainbowCoverRemove();
    }
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


let color = colorPicker.value
makeGrid()
colorChange()
rainbow.addEventListener('click', rainbowColor)



