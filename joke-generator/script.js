const jokeEl = document.querySelector(".joke");

async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?type=single");
    const data = await response.json();
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    console.log(error);
  }
}

document.querySelector(".joke-btn").addEventListener("click", getJoke);

getJoke();
