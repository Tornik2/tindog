import {dogs} from '/data.js'
import {Dogs} from '/Dog.js'

const nopeBadge = document.getElementById('nope-badge')
const dogRex = new Dogs(dogs[0])
const dogBella = new Dogs(dogs[1])
const dogTeddy = new Dogs(dogs[2])

let dogsArray = [dogRex, dogBella, dogTeddy]
let currentDog = []

function getNewDog() {
currentDog = dogsArray.shift()
document.getElementById('dogs').innerHTML = currentDog.getDogsHtml()
return currentDog
}
getNewDog()

 document.getElementById('like').addEventListener('click', function () {
    if (dogsArray.length) {
            document.getElementById("like-badge").classList.add('appear')
            setTimeout(getNewDog, 500);} else {
            document.getElementById("like-badge").classList.add('appear')
            setTimeout(getEndMessage, 1500)
                }    
    })

  document.getElementById('dislike').addEventListener('click', function() {
        if (dogsArray.length) {
            document.getElementById("nope-badge").classList.add('appear')
            setTimeout(getNewDog, 600);} else {
            document.getElementById("nope-badge").classList.add('appear')
            setTimeout(getEndMessage, 700)       
                }
    })
function getEndMessage() {
    let message = `<div class="end">No More Doggies </div> `
    return document.getElementById('container').innerHTML = message
}