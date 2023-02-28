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
    if (currentDog.hasBeenLiked === false) { if (dogsArray.length) {
            currentDog.hasBeenLiked = true
            document.getElementById("like-badge").classList.add('appear')
            setTimeout(getNewDog, 700);} else {            
            currentDog.hasBeenLiked = true
            document.getElementById("like-badge").classList.add('appear')
            setTimeout(getEndMessage, 900)
                }    
            }
    })

  document.getElementById('dislike').addEventListener('click', function() {
        if (currentDog.hasBeenLiked === false) {if (dogsArray.length) {
            currentDog.hasBeenLiked = true
            document.getElementById("nope-badge").classList.add('appear')
            setTimeout(getNewDog, 700);} else {
            currentDog.hasBeenLiked = true
            document.getElementById("nope-badge").classList.add('appear')
            setTimeout(getEndMessage, 900)       
                }
            }
    })

function getEndMessage() {
    let message = `<div class="end">No More Doggies </div> `
    document.getElementById('container').style.padding = '300px 0'
    document.getElementById('container').innerHTML = message
}
