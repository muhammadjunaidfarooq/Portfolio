// List of components (without .html extension)
const sections = ["about", "education", "skills", "projects", "services", "contact"];

async function loadSections() {
  let container = document.getElementById("content");

  for (let section of sections) {
    try {
      let res = await fetch(`components/${section}.html`);
      let html = await res.text();

      // Create a wrapper div for each component
      let div = document.createElement("div");
      div.innerHTML = html;
      container.appendChild(div);

    } catch (err) {
      console.error(`Error loading ${section}:`, err);
    }
  }
}

window.onload = loadSections;

// select all navbar links
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", function() {
    // remove 'active' from all links
    links.forEach(l => l.classList.remove("active"));

    // add 'active' to the clicked link
    this.classList.add("active");
  });
});
