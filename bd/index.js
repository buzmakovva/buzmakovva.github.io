let btn = document.getElementById('btn')

btn.addEventListener('click', surprised)

function surprised () {
    console.log('открыл')
    let hidden = document.getElementById('hidden')
    hidden.style.display = 'block'
}

