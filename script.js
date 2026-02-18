const allowedColors = {
  red: "#e74c3c",
  blue: "#3498db",
  green: "#2ecc71",
  purple: "#9b59b6",
  orange: "#f39c12"
};

async function loadContributors() {
  try {
    const response = await fetch("contributors.json");
    const files = await response.json();

    if (!files || !files.length) throw new Error("No JSON files found in contributors.json");

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

    document.querySelectorAll(".card").forEach(card => {
      const color = card.getAttribute("data-color");
      if (color) {
        card.style.setProperty("--card-color", color);

        const hex = color.replace("#", "");
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        card.style.setProperty("--card-glow", `rgba(${r}, ${g}, ${b}, 0.15)`);
        card.style.setProperty("--card-bg", `rgba(${r}, ${g}, ${b}, 0.05)`);
      }
    });
  } catch (err) {
    console.error("Failed to load contributors:", err);
    const msg = document.createElement("p");
    msg.textContent = "Unable to load profiles. Please ensure the contributors list is generated.";
    document.getElementById("contributors").appendChild(msg);
  }
}

loadContributors();
