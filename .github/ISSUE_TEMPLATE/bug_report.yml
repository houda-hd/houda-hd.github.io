name: 🐞 Bug 反馈
description: 提交网站或功能使用中的问题
title: "[Bug] 简要描述问题"
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: |
        感谢反馈问题！请尽量填写完整以下信息，方便我们定位和修复。
  - type: textarea
    id: description
    attributes:
      label: 🧩 问题描述
      description: 清晰描述你遇到的 Bug。
      placeholder: 例如：点击“通知”按钮后页面无响应。
    validations:
      required: true
  - type: checkboxes
    id: reproducibility
    attributes:
      label: 🔁 是否可复现
      options:
        - label: 总是出现
        - label: 偶尔出现
        - label: 仅特定设备出现
  - type: textarea
    id: steps
    attributes:
      label: 🧭 复现步骤
      description: 说明如何触发问题。
      placeholder: |
        1. 打开页面...
        2. 点击...
        3. 出现错误...
  - type: input
    id: browser
    attributes:
      label: 🌐 浏览器与设备
      placeholder: 例如：Safari iOS / Chrome Windows
  - type: textarea
    id: extra
    attributes:
      label: 📎 其他说明
      description: 可附上截图、录屏或补充信息。
