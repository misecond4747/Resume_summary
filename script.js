document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let lists = document.querySelector(".lists");

      data.forEach((item) => {
        let html = `
          <li class="list">
            <div class="listname">
              <img src="${item.icon}" alt="icon" /> ${item.category}
            </div>
            <div class="score">
              <span class="span">${item.score} / 100</span>
            </div>
          </li>`;

        lists.innerHTML += html;
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));
});
