const allowedColors = {
  red: "#e74c3c",
  blue: "#3498db",
  green: "#2ecc71",
  purple: "#9b59b6",
  orange: "#f39c12"
};

async function loadContributors() {
  const container = document.getElementById("contributors");
  try {
    const response = await fetch(`contributors.json?t=${new Date().getTime()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch contributors.json (Status: ${response.status})`);
    }
    const files = await response.json();

    if (!files || !files.length) throw new Error("No JSON files found in contributors.json");

    for (let file of files) {
      try {
        const res = await fetch("contributors/" + file);
        if (!res.ok) {
          console.warn(`Skipping ${file}: Failed to fetch (Status: ${res.status})`);
          continue;
        }
        const data = await res.json();

        const borderColor = allowedColors[data.color.toLowerCase()] || "#ffffff";
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

        container.insertAdjacentHTML("beforeend", card);
      } catch (fileErr) {
        console.error(`Error loading contributor ${file}:`, fileErr);
      }
    }

    // After loading all (or some), apply styles
    document.querySelectorAll(".card").forEach(card => {
      const color = card.getAttribute("data-color");
      if (color) {
        card.style.setProperty("--card-color", color);

        const hex = color.replace("#", "");
        if (hex.length === 6 || hex.length === 3) {
          const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.substr(0, 2), 16);
          const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.substr(2, 2), 16);
          const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.substr(4, 2), 16);
          card.style.setProperty("--card-glow", `rgba(${r}, ${g}, ${b}, 0.15)`);
          card.style.setProperty("--card-bg", `rgba(${r}, ${g}, ${b}, 0.05)`);
        }
      }
    });

    if (container.children.length === 0) {
      throw new Error("No contributors could be loaded.");
    }

  } catch (err) {
    console.error("Failed to load contributors:", err);
    const msg = document.createElement("p");
    msg.className = "error-message";
    msg.textContent = "Unable to load profiles. Please ensure the contributors list is generated.";
    container.appendChild(msg);
  }
}

loadContributors();
