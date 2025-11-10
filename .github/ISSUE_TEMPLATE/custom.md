name: 🧰 自定义反馈
description: 提交其他类型的反馈或沟通
title: "[Feedback] 简要描述你的反馈内容"
labels: ["feedback"]
body:
  - type: markdown
    attributes:
      value: |
        无论是疑问、想法还是鼓励，都可以在这里告诉我们。
  - type: dropdown
    id: category
    attributes:
      label: 📋 反馈类别
      options:
        - 其他问题
        - 网站外观
        - 内容建议
        - 合作咨询
  - type: textarea
    id: details
    attributes:
      label: 🧠 详细说明
      placeholder: 请输入具体内容...
    validations:
      required: true
  - type: textarea
    id: extra
    attributes:
      label: 📎 附加信息
      description: 如果有截图、链接或文件，请在此补充。
