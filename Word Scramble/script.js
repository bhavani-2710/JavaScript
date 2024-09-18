const ques = document.getElementById("word");
const quesHint = document.querySelector(".hint");
let ans = document.querySelector(".ans");
const check = document.querySelector(".check");
const giveup = document.querySelector(".giveup");
const text = document.querySelector(".guess");

const words = [
  "apple",
  "banana",
  "strawberry",
  "cherry",
  "orange",
  "mango",
  "grapes",
];

const hints = ["fruit", "fruit", "fruit", "fruit", "fruit", "fruit", "fruit"];

// choose a random word from the array
let i = Math.floor(Math.random() * words.length);
const word = words[i];
const hint = hints[i];

// Convert the randomly chosen word into character's array.
const toChar = (word) => {
  let cArray = [];
  cArray = Array.from(word);
  return cArray;
};

// This function shuffles the array characters and returns a jumbled word string.
function shuffle(charArray) {
  let wArray = [];
  let j = 0;
  while (wArray.length != charArray.length) {
    for (let j of charArray) {
      let a = Math.floor(Math.random() * charArray.length);
      if (charArray[a] !== 0) {
        wArray.push(charArray[a]);
        charArray[a] = 0;
        j++;
      }
    }
  }

  const w = wArray.join("");
  return w;
}

ques.innerText = shuffle(toChar(word));
quesHint.innerText = `Hint : It is a ${hint}.`;

// To check a answer
check.addEventListener("click", () => {
  let guess = document.querySelector(".guess").value;
  if (guess.toLowerCase() == word) {
    giveup.click();
    ans.innerText = `You are correct!`;
  } else {
    ans.innerText = `You are incorrect. Try again.`;
    ans.style.visibility = "visible";
  }
});

// To give up
giveup.addEventListener("click", () => {
  ans.innerText = `Correct Answer : ${word}`;
  ans.style.visibility = "visible";
  check.disabled = true;
  text.disabled = true;
  text.classList.add("txtDisable");
  text.classList.remove("guess");
});
