const form = document.getElementById("form");
console.log(window.Location.origin);
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.getElementById("search-bar").value;
    if (!userInput) return;
    localStorage.setItem("input", userInput);
    //window.location.href = `${window.Location.origin}/search.html`;
  });
}
