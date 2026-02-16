let pages = [];

fetch("/search.json")
  .then(r => r.json())
  .then(data => pages = data);

document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("searchBox");

  box.addEventListener("input", () => {
    const q = box.value.toLowerCase();
    const results = pages.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q)
    );

    let html = "<ul>";
    results.slice(0, 10).forEach(r => {
      html += `<li><a href="${r.url}">${r.title}</a></li>`;
    });
    html += "</ul>";

    document.getElementById("searchResults").innerHTML = html;
  });
});
