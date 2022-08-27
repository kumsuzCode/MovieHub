async function searchMovies() {
  const results = document.querySelector(".results__movies");
  results.classList += " movies__loading";
  console.log(results.classList);
  const userInput = localStorage.getItem("input");
  console.log(userInput);
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=2bb078d&s=${userInput}`
  );
  results.classList.remove("movies__loading");
  console.log(results.classList);
  const processedData = await data.json();
  const htmlData = processedData.Search.map((m) => hmtlMovie(m)).join("");
  console.log(results);
  results.innerHTML = htmlData;
}

function hmtlMovie(movie) {
  return `<div class="result__movie">
      <figure class="movie__img--wrapper">
				<img
					src="${movie.Poster}"
					alt=""
					class="movie__img"
				/>
      </figure>
      <h3 class="movie__name">${movie.Title}</h3>
      <h4 class="movie__year">${movie.Year}</h4>
  </div>`;
}

searchMovies();
