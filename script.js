const allowedColors = {
  red: "#e74c3c",
  blue: "#3498db",
  green: "#2ecc71",
  purple: "#9b59b6",
  orange: "#f39c12"
};

async function loadContributors() {
  try {
    const response = await fetch("contributors/");
    const text = await response.text();

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, "text/html");

    const files = [...htmlDoc.querySelectorAll("a")]
      .map(link => link.getAttribute("href") || "")
      .filter(href => href.toLowerCase().includes(".json"))
      .map(href => {
        const parts = href.split("/");
        const last = parts[parts.length - 1];
        return last.trim();
      })
      .filter(name => name.endsWith(".json"))
      .filter(name => name !== "sample.json");

    if (!files.length) throw new Error("No JSON files discovered in directory listing.");

    for (let file of files) {
      const res = await fetch("contributors/" + file);
      const data = await res.json();

      const borderColor = allowedColors[data.color] || "#ffffff";
      const username = (data.username || "").trim();
      const avatarUrl = username
        ? `https://avatars.githubusercontent.com/${username}?s=120`
        : `https://avatars.githubusercontent.com/u/0?s=120`;

      const card = `
        <div class="card" data-color="${borderColor}">
          <img src="${avatarUrl}" alt="${data.name || username}'s avatar"
               style="border: 4px solid ${borderColor};">
          <h3>${data.name || username || "Unknown"}</h3>
          <p>Domain: ${data.domain || "N/A"}</p>
        </div>
      `;

      document.getElementById("contributors").insertAdjacentHTML("beforeend", card);
    }

    // Apply dynamic hover colors based on each card's border color
    document.querySelectorAll(".card").forEach(card => {
      const color = card.getAttribute("data-color");
      if (color) {
        card.style.setProperty("--card-color", color);
        
        // Convert hex to rgba for glow effect
        const hex = color.replace("#", "");
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        card.style.setProperty("--card-glow", `rgba(${r}, ${g}, ${b}, 0.15)`);
        card.style.setProperty("--card-bg", `rgba(${r}, ${g}, ${b}, 0.05)`);
      }
    });
  } catch (err) {
    console.error("Failed to load via directory listing:", err);
    const msg = document.createElement("p");
    msg.textContent = "Profiles couldn’t be discovered. Serve the site with a simple HTTP server that lists directories (e.g., python -m http.server).";
    document.getElementById("contributors").appendChild(msg);
  }
}

loadContributors();
