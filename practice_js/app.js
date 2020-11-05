/*const person = {
	name: 'Nasty',
	age: 25,
	lang:['ru','en'],
	husband: false,
	greet(){
		console.log('my name is', this.name)
	},
}

const myPerson = {
	keys() {
		Object.keys(this).forEach((key)=>{
			console.log( `'${key}:' ${this[key]}`)
			
		})
	},
}
myPerson.keys.call(myPerson)*/
const floor = document.querySelector('.floor')
const walls = document.querySelector('.walls')
const meet = document.querySelector('.meet')
const calculate =  document.querySelector('.calculate')
calculate.onclick = () => {
	const valueMeet = (+floor.value) + (+walls.value)
	meet.textContent = valueMeet
	console.log(valueMeet) 
}


/*const floorR = document.getElementById('floorRoom')
console.dir(floorR)
*/