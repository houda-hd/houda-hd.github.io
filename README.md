<p align="center">
  <img src="assets/houda.jpeg" alt="HOUDA+ Logo" width="180">
</p>

<h1 align="center">HOUDA+ 官网</h1>

<p align="center">
  为侯明昊与霉粉而建的数字据点 · 公告 · 工具 · 招新<br>
  长沙霉粉联盟六群分支 · 侯明昊碗慧通讯录互吃大学
</p>

<p align="center">
  <a href="./README.md"><img src="https://img.shields.io/badge/简体中文-当前-blue?style=for-the-badge" alt="简体中文"></a>
  <a href="./README.en.md"><img src="https://img.shields.io/badge/English-切换-blue?style=for-the-badge" alt="English"></a>
</p>

<p align="center">
  <a href="https://houda.pages.dev/"><img src="https://img.shields.io/badge/Visit-houda.pages.dev-blue?style=flat-square" alt="Website"></a>
  <a href="https://github.com/houda-hd/houda-hd.github.io/stargazers"><img src="https://img.shields.io/github/stars/houda-hd/houda-hd.github.io?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/houda-hd/houda-hd.github.io/commits/main"><img src="https://img.shields.io/github/last-commit/houda-hd/houda-hd.github.io?style=flat-square" alt="Last commit"></a>
</p>

---

## ✨ 这是什么

HOUDA+ 是一个面向侯明昊粉丝（霉粉）的社区站点：公告动态、趣味小工具、粉丝留言墙与入群招新，一站搞定。全站基于自研的 **HOUDA+ 设计体系**，轻量、无构建、纯静态。

> 源码托管于 GitHub，由 **Cloudflare Pages** 自动部署。  
> 线上地址：**https://houda.pages.dev/**

---

## 🧭 页面导览

| 页面 | 简介 |
|:--|:--|
| [`index.html`](./index.html) | 主站首页，HOUDA+ 设计体系基准 |
| [`search.html`](./search.html) | 站内搜索，全站内容检索 |
| [`guestbook.html`](./guestbook.html) | 粉丝留言墙（基于 Giscus） |
| [`join.html`](./join.html) | 加入我们 · 入群招新表单 |
| [`privacy.html`](./privacy.html) | 隐私政策 · 数据处理说明 |
| [`sitemap.html`](./sitemap.html) | 网站地图 / 导航中枢 |
| [`lover-name.html`](./lover-name.html) | 情侣盘点 |
| [`houda-id-generator.html`](./houda-id-generator.html) | 侯大身份证生成器（含正反面 3D 翻转） |
| [`404.html`](./404.html) | 404 错误页 |

### 🛠️ 小工具（`tools/`）

| 工具 | 简介 |
|:--|:--|
| [`anniversary.html`](./tools/anniversary.html) | 侯大纪念日 |
| [`hdti-test.html`](./tools/hdti-test.html) | HDTI 测试 · 侯大人格实验室 |
| [`ippure.html`](./tools/ippure.html) | IP 检测与纯净度分析 |
| [`mianshui.html`](./tools/mianshui.html) | 美国免税州地址生成器 |

---

## 🧱 技术栈

- **HTML5 / CSS3** —— 页面结构与样式，主站为自研 HOUDA+ 设计体系（非框架）
- **JavaScript (Vanilla)** —— 前端交互逻辑，无构建步骤
- **Phosphor Icons** —— 图标系统（替代 Font Awesome）
- **Plus Jakarta Sans** —— 主站字体（Google Fonts）
- **Cloudflare Pages** —— 托管与自动部署（源码托管于 GitHub）

---

## 🚀 本地预览

无需构建，直接用浏览器打开 `index.html` 即可。若需本地服务器（推荐，可避免个别浏览器对本地文件的限制）：

```bash
# 在项目根目录执行
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

---

## 🤝 参与与协作

- 反馈 Bug、建议或想法：请在 [Issues](https://github.com/houda-hd/houda-hd.github.io/issues) 提出。
- 成为维护者或长期协作：请私信项目维护者。
- 协作规范详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

---

## 📜 更新日志与安全

- 完整更新记录见 [CHANGELOG.md](./CHANGELOG.md)。
- 安全与数据处理说明见 [SECURITY.md](./SECURITY.md)。

---

## 🧾 许可证

本项目遵循 [MIT License](LICENSE)。可自由使用、修改与分发，但需保留原作者信息。
