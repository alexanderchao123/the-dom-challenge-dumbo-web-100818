const decButton = document.getElementById("-");
const incButton = document.getElementById("+");
const likeButton = document.getElementById("<3");
const counter = document.querySelector("#counter");
let num = parseInt(counter.innerHTML);

let beginCounter = setInterval(increment, 1000);

function decrement() {
  counter.innerHTML = --num;
};

function increment() {
  counter.innerHTML = ++num;
};

function toggleButtons(boolean) {
  decButton.disabled = boolean;
  incButton.disabled = boolean;
  likeButton.disabled = boolean;
}

function pause() {
  if (event.target.innerText === "pause") {
    event.target.innerText = "resume"
    toggleButtons(true)
    clearInterval(beginCounter)
  } else {
    event.target.innerText = "pause"
    toggleButtons(false)
    beginCounter = setInterval(increment, 1000);
  }
}

const likesList = document.querySelector(".likes")
const likeTracker = {}

function like() {
  if (likeTracker.hasOwnProperty(num)) {
    let like = document.getElementById(`${num}`)
    ++likeTracker[num]
    like.innerHTML = `${num} : ${likeTracker[num]}`
  } else {
    let newLike = document.createElement("li")
    likeTracker[num] = 1
    newLike.id = num
    newLike.innerHTML = `${num} : 1`
    likesList.appendChild(newLike)
  }
}

const commentForm = document.querySelector("#comment-form");
const comments = document.querySelector(".comments")

commentForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let commentInput = document.querySelector("#comment-input").value;
  let comment = document.createElement("li");
  comment.innerHTML = commentInput;
  comments.appendChild(comment);
  commentForm.reset();
});
