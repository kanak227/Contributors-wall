# 🎨 GitHub PR Contributors Wall

A beautiful, interactive contributors wall built with vanilla JavaScript, HTML, and CSS. This project showcases all contributors who have added their profiles via pull requests, featuring a sleek black background with dynamic color-coded cards and glowing effects.

## ✨ Features

- 🌈 **Dynamic Color Themes** - Each contributor card displays with their chosen color (red, blue, green, purple, or orange)
- 💫 **Glowing Hover Effects** - Cards glow with their unique color on hover
- 🎯 **Responsive Grid Layout** - Adapts beautifully to all screen sizes
- 🖼️ **GitHub Avatar Integration** - Automatically fetches avatars from GitHub
- 🎪 **Transparent Card Design** - Subtle tinted backgrounds with glowing borders

## 🤝 How to Contribute

We welcome contributions! To add your profile to the Contributors Wall, please see our [Contribution Guide](CONTRIBUTING.md) for step-by-step instructions.

## 📋 Example Profile

Check out `contributors/sample.json` for a complete example:

```json
{
  "name": "Sample User",
  "username": "octocat",
  "domain": "Open Source",
  "color": "green"
}
```

## 🛠️ Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with CSS Grid, custom properties, and animations
- **Vanilla JavaScript** - Dynamic content loading and color management

## 📁 Project Structure

```
Contributors-wall/
├── .github/            # GitHub Actions workflows
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript for loading contributors
├── contributors.json   # Auto-generated manifest (DO NOT EDIT MANUALLY)
├── contributors/       # Contributor profile JSON files
│   ├── sample.json
│   └── [your-profile].json
├── CONTRIBUTING.md     # Contribution guide
└── README.md           # This file
```

## 🎨 Color Reference

Each color creates a unique visual theme for your card:

| Color    | Hex Code  | Effect                    |
|----------|-----------|---------------------------|
| Red      | #e74c3c   | Warm red glow            |
| Blue     | #3498db   | Cool blue glow           |
| Green    | #2ecc71   | Fresh green glow         |
| Purple   | #9b59b6   | Royal purple glow        |
| Orange   | #f39c12   | Vibrant orange glow      |

## 🐛 Issues & Suggestions

Found a bug or have a suggestion? Please [open an issue](https://github.com/kanak227/Contributors-wall/issues)!

---

**Made with ❤️ by Kanak**
