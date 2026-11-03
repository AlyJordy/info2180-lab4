document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");
  
  btn.addEventListener("click", () => {
    fetch("superheroes.php")
      .then(res => res.text())
      .then(data => alert(data))
      .catch(err => console.error(err));
  });
});