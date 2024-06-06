const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");
const animeLinkEl = document.querySelector(".anime-link");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    amineNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";

    const response = await fetch("https://api.jikan.moe/v4/random/anime");
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainerEl.style.display = "block";


    animeImgEl.src = data.data.images.jpg.image_url; 
    amineNameEl.innerText = data.data.title;
    animeLinkEl.innerText = data.data.popularity;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = "An error happened, please try again";
  }
});
