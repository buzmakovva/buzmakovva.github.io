
const floor = document.querySelector('.floor')
const walls = document.querySelector('.walls')
const meet = document.querySelector('.meet')
const calculate =  document.querySelector('.calculate')
calculate.onclick = () => {
	const valueMeet = (+floor.value) + (+walls.value)
	meet.textContent = valueMeet
	console.log(valueMeet) 
}

