const riddle = document.querySelector("blockquote");
const answer = document.querySelector("span");
const showAns = document.querySelector(".showAns");
const newRiddle = document.querySelector(".newRiddle");

const apiUrl = "https://api.api-ninjas.com/v1/riddles";
const apiKey = "MxndGTzI79UKnb49H3nvig==czRRe2Wxul9SX5Jf";

const getRiddle = async () => {
  const response = await fetch(apiUrl, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  console.log(response); // to check
  const data = await response.json();
  console.log(data); // to check
  riddle.innerText = data[0]["question"];
  answer.innerText = data[0]["answer"];
};

showAns.addEventListener("click", () => {
  answer.style.visibility = "visible";
});

newRiddle.addEventListener("click", () => {
  getRiddle();
});

window.addEventListener("load", () => {
  getRiddle();
});
