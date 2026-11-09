document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  const result = document.getElementById("result");

  function search() { /* Function to handle the search operation */
    const query = encodeURIComponent(input.value.trim());
    fetch(`superheroes.php?query=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        result.innerHTML = "<p class='error'>Something went wrong. Please try again.</p>";
        console.error(error);
      });
  }

  btn.addEventListener("click", search);
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      search();
    }
  });
});