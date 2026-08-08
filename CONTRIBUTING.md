## 🤝 如何提交 Pull Request

欢迎对 **HOUDA+** 项目提出改进或修复！

---

### 🧩 提交流程

1. **Fork 本仓库**  
   点击右上角 **Fork** 按钮，将 `houda-hd/houda-hd.github.io` 复制到你的 GitHub 账号下。

2. **创建新分支**
   ```bash
   git checkout -b feature/your-change
   ```

3. **进行修改并提交**
   ```bash
   git add .
   git commit -m "简述本次改动"
   ```

4. **推送分支到你的仓库**
   ```bash
   git push origin feature/your-change
   ```

5. **发起 Pull Request**  
   打开你仓库页面，点击 **Compare & pull request**；  
   填写修改说明；  
   提交后等待审核与合并。

---

📋 **注意事项**
- 保持代码风格与项目一致：**HOUDA+ 设计体系**（浅色主题、Phosphor 图标、Plus Jakarta Sans 字体），新增页面请参考 `index.html` 基准。
- 站点为纯静态页面（Cloudflare Pages 部署），无后端；表单类功能请沿用金数据等第三方托管，勿引入服务端代码。
- 若修复了已存在的 Issue，请在说明中附上编号：`Fixes #12`。
- 不要直接在 `main` 分支提交修改。
- 建议使用分支命名规则：
  - 功能：`feature/xxx`
  - 修复：`fix/xxx`
  - 文档：`docs/xxx`
