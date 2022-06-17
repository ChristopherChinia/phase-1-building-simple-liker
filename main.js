// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');

const articleHearts = document.querySelectorAll(".like-glyph");
// console.log(articleHearts);


    for (const glyph of articleHearts) {
      glyph.addEventListener("click", ()=>{
        mimicServerCall("http://mimicServer.example.com")
        .then(()=>{
        if (glyph.innerHTML === EMPTY_HEART){
           glyph.innerHTML = FULL_HEART
           glyph.className = "activated-heart"
        }else {
          glyph.innerHTML = EMPTY_HEART
          glyph.className = "activated-heart"
        }   
        })
        .catch((params) => {
          modal.className = " "
          modal.innerHTML = params
          setTimeout(() => {
            return modal.className = "hidden"
          }, 2000)

        })
      });
    }
    
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
