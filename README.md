# 🎨 GitHub PR Contributors Wall

A beautiful, interactive contributors wall built with vanilla JavaScript, HTML, and CSS. This project showcases all contributors who have added their profiles via pull requests, featuring a sleek black background with dynamic color-coded cards and glowing effects.

## ✨ Features

- 🌈 **Dynamic Color Themes** - Each contributor card displays with their chosen color (red, blue, green, purple, or orange)
- 💫 **Glowing Hover Effects** - Cards glow with their unique color on hover
- 🎯 **Responsive Grid Layout** - Adapts beautifully to all screen sizes
- 🖼️ **GitHub Avatar Integration** - Automatically fetches avatars from GitHub
- 🎪 **Transparent Card Design** - Subtle tinted backgrounds with glowing borders

## 🤝 How to Contribute

We welcome contributions! Follow these steps to add your profile to the Contributors Wall:

### Step 1: Fork the Repository

Click the **Fork** button at the top right of this repository to create your own copy.

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/Contributors-wall.git
cd Contributors-wall
```

### Step 3: Create Your Profile

1. Navigate to the `contributors/` folder
2. Create a new JSON file named `yourname.json` (use your actual name or username)
3. Use this template:

```json
{
  "name": "Your Full Name",
  "username": "your-github-username",
  "domain": "Your Domain/Interest (e.g., Web Development, AI/ML, etc.)",
  "color": "blue"
}
```

**Available colors:** `red`, `blue`, `green`, `purple`, `orange`

### Step 4: Commit Your Changes

```bash
git add contributors/yourname.json
git commit -m "Add [Your Name] to contributors wall"
```

### Step 5: Push to Your Fork

```bash
git push origin main
```

### Step 6: Create a Pull Request

1. Go to your forked repository on GitHub
2. Click **"Compare & pull request"**
3. Add a title: `Add [Your Name] to Contributors Wall`
4. Add a description explaining your contribution
5. Click **"Create pull request"**

### Step 7: Wait for Review

Your PR will be reviewed and merged. Once merged, your profile will appear on the Contributors Wall! 🎉

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
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript for loading contributors
├── contributors/       # Contributor profile JSON files
│   ├── sample.json
│   └── [your-profile].json
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
