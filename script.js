const allowedColors = {
  red: "#e74c3c",
  blue: "#3498db",
  green: "#2ecc71",
  purple: "#9b59b6",
  orange: "#f39c12"
};

async function loadContributors() {
  try {
    const response = await fetch(`contributors.json?t=${new Date().getTime()}`);
    const files = await response.json();

    if (!files || !files.length) throw new Error("No JSON files found in contributors.json");

    for (let file of files) {
      try {
        const res = await fetch("contributors/" + file);
        if (!res.ok) throw new Error(`Could not fetch ${file}`);
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
      } catch (innerErr) {
        console.warn(`Failed to load individual contributor ${file}:`, innerErr);
        // Continue to next contributor instead of breaking
      }
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

    if (document.querySelectorAll(".card").length === 0) {
      throw new Error("No valid profiles could be loaded.");
    }

  } catch (err) {
    console.error("Failed to load contributors:", err);
    document.getElementById("contributors").innerHTML = `<p>Unable to load profiles. Please ensure the contributors list is generated.</p>`;
  }
}

loadContributors();
