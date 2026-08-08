<p align="center">
  <a href="./README.md"><img src="https://img.shields.io/badge/简体中文-切换-blue?style=for-the-badge" alt="简体中文"></a>
  <a href="./README.en.md"><img src="https://img.shields.io/badge/English-当前-blue?style=for-the-badge" alt="English"></a>
</p>

<p align="center">
  <img src="assets/houda.jpeg" alt="HOUDA+ Logo" width="180">
</p>

<h1 align="center">HOUDA+ Official Website</h1>

<p align="center">
  A digital hub for Hou Minghao (Hou Da) and his fans (Meifen) · Announcements · Tools · Recruitment<br>
  Changsha Meifen Alliance, Group 6 branch · Hou Da "Wan Hui" Mutual-Contacts University
</p>

<p align="center">
  <a href="https://houda.pages.dev/"><img src="https://img.shields.io/badge/Visit-houda.pages.dev-blue?style=flat-square" alt="Website"></a>
  <a href="https://github.com/houda-hd/houda-hd.github.io/stargazers"><img src="https://img.shields.io/github/stars/houda-hd/houda-hd.github.io?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/houda-hd/houda-hd.github.io/commits/main"><img src="https://img.shields.io/github/last-commit/houda-hd/houda-hd.github.io?style=flat-square" alt="Last commit"></a>
</p>

---

## ✨ What is this

HOUDA+ is a community site for the fans (Meifen) of Hou Minghao (Hou Da): announcements, fun little tools, a fan message wall, and community recruitment, all in one place. The entire site is built on our in-house **HOUDA+ Design System**: lightweight, build-free, and fully static.

> Source code is hosted on GitHub and automatically deployed via **Cloudflare Pages**.  
> Live site: **https://houda.pages.dev/**

---

## 🧭 Pages

| Page | Description |
|:--|:--|
| [`index.html`](./index.html) | Main homepage, the baseline of the HOUDA+ Design System |
| [`search.html`](./search.html) | On-site search across all content |
| [`guestbook.html`](./guestbook.html) | Fan message wall (powered by Giscus) |
| [`join.html`](./join.html) | Join us · community recruitment form |
| [`privacy.html`](./privacy.html) | Privacy policy · data handling disclosure |
| [`sitemap.html`](./sitemap.html) | Sitemap / navigation hub |
| [`lover-name.html`](./lover-name.html) | Couple name matcher |
| [`houda-id-generator.html`](./houda-id-generator.html) | Hou Da ID generator (with 3D front/back flip) |
| [`404.html`](./404.html) | 404 error page |

### 🛠️ Tools (`tools/`)

| Tool | Description |
|:--|:--|
| [`anniversary.html`](./tools/anniversary.html) | Hou Da anniversary tracker |
| [`hdti-test.html`](./tools/hdti-test.html) | HDTI test · Hou Da personality lab |
| [`ippure.html`](./tools/ippure.html) | IP check & purity analysis |
| [`mianshui.html`](./tools/mianshui.html) | US tax-free state address generator |

---

## 🧱 Tech Stack

- **HTML5 / CSS3** — page structure and styling; the main site uses the in-house HOUDA+ Design System (no framework)
- **JavaScript (Vanilla)** — front-end interaction logic, no build step
- **Phosphor Icons** — icon system (replacing Font Awesome)
- **Plus Jakarta Sans** — primary site font (Google Fonts)
- **Cloudflare Pages** — hosting and automatic deployment (source hosted on GitHub)

---

## 🚀 Local Preview

No build needed, just open `index.html` in your browser. For a local server (recommended, to avoid browser restrictions on local files):

```bash
# Run in the project root
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## 🤝 Contributing & Collaboration

- To report a bug, suggest an idea, or share feedback: open an [Issue](https://github.com/houda-hd/houda-hd.github.io/issues).
- To become a maintainer or collaborate long-term: message the project maintainer privately.
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for collaboration guidelines.

---

## 📜 Changelog & Security

- Full release history: [CHANGELOG.md](./CHANGELOG.md).
- Security and data-handling disclosure: [SECURITY.md](./SECURITY.md).

---

## 🧾 License

This project is released under the [MIT License](LICENSE). Free to use, modify, and distribute, provided the original authorship is retained.
