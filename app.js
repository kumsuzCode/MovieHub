const form = document.getElementById("form");
console.log(window.location.origin);
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.getElementById("search-bar").value;
    if (!userInput) return;
    localStorage.setItem("input", userInput);

    // This conditional ensures correct routing based off whether or not
    // the app is being run on GH pages or not.
    if (window.location.origin === "https://kumsuzcode.github.io") {
      window.location.href = `${window.location.origin}/movie-hub/search.html`;
    } else {
      window.location.href = `${window.location.origin}/search.html`;
    }
  });
}
