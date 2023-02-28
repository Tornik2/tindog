import {dogs} from '/data.js'

class Dogs {
    constructor(data) {
        Object.assign(this, data)
        this.getDogsHtml = function() {
        const {name, avatar, age, bio} = this
        return `<div
          class="dog-description-container"
          style="background-image: url(${avatar})"
        >
          <div class="dog-description">
            <img class="like-badge" id="like-badge" src="images/badge-like.png" alt="like" />
            <img class="nope-badge" id="nope-badge" src="images/badge-nope.png" alt="dislike" />
      
            <div class="name-age">
              <div class="name">${name},</div>
              <div class="age">${age}</div>
            </div>
            <div class="bio">${bio}</div>
          </div>
        </div>`
    }
    }
    
}


export {Dogs}
