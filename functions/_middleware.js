export async function onRequest(context) {
  const userAgent = context.request.headers.get('user-agent') || '';

  // 匹配微信内置浏览器 User-Agent
  if (userAgent.includes('MicroMessenger')) {
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOUDA+ - 请在浏览器中打开</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f4f4f6;
      --bg-card: #ffffff;
      --text-primary: #1a1a1f;
      --text-secondary: #5c5c66;
      --accent: #2563eb;
      --accent-light: rgba(37, 99, 235, 0.08);
      --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --shadow-float: 0 2px 4px rgba(0,0,0,0.03), 0 12px 32px rgba(0,0,0,0.06), 0 32px 72px rgba(0,0,0,0.04);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #121214;
        --bg-card: #1c1c21;
        --text-primary: #f4f4f6;
        --text-secondary: #9a9aa3;
        --accent: #3b82f6;
        --accent-light: rgba(59, 130, 246, 0.12);
        --shadow-float: 0 12px 32px rgba(0,0,0,0.4);
      }
    }

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: var(--font-main);
      background-color: var(--bg);
      color: var(--text-primary);
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      -webkit-font-smoothing: antialiased;
      position: relative;
      overflow: hidden;
    }

    /* 右上角箭头引导气泡 */
    .wechat-pointer {
      position: fixed;
      top: 14px;
      right: 18px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--accent);
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 700;
      box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
      animation: cueBob 2s infinite ease-in-out;
      z-index: 100;
    }

    @keyframes cueBob {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }

    /* Double-Bezel 嵌套卡片 (完全复刻 HOUDA+ 官网设计) */
    .card-shell {
      width: 100%;
      max-width: 380px;
      padding: 8px;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 2rem;
      box-shadow: var(--shadow-float);
    }

    @media (prefers-color-scheme: dark) {
      .card-shell {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(255, 255, 255, 0.08);
      }
    }

    .card-inner {
      background: var(--bg-card);
      border-radius: calc(2rem - 8px);
      padding: 2.25rem 1.75rem;
      text-align: center;
    }

    .brand-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: var(--accent);
      background: var(--accent-light);
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 1.25rem;
      text-transform: uppercase;
    }

    .icon-box {
      width: 56px;
      height: 56px;
      margin: 0 auto 1rem;
      background: var(--accent-light);
      border-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
    }

    .icon-box svg {
      width: 28px;
      height: 28px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    h1 {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    /* 步骤条 */
    .step-list {
      background: var(--bg);
      border-radius: 1.25rem;
      padding: 1rem 1.125rem;
      text-align: left;
    }

    .step-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .step-item + .step-item {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(0,0,0,0.05);
    }

    @media (prefers-color-scheme: dark) {
      .step-item + .step-item {
        border-top-color: rgba(255,255,255,0.06);
      }
    }

    .step-num {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--accent);
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
  </style>
</head>
<body>

  <div class="wechat-pointer">
    点击右上角「...」 ↗
  </div>

  <div class="card-shell">
    <div class="card-inner">
      <div class="brand-badge">HOUDA+</div>
      
      <div class="icon-box">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </div>

      <h1>请在浏览器中打开</h1>
      <p>为保障完整的交互与浏览体验，请脱离微信内置浏览器访问。</p>

      <div class="step-list">
        <div class="step-item">
          <span class="step-num">1</span>
          <span>点击右上角菜单 <strong>「 ... 」</strong></span>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <span>选择 <strong>「在默认浏览器中打开」</strong> 或 <strong>Safari</strong></span>
        </div>
      </div>
    </div>
  </div>

</body>
</html>`;

    return new Response(html, {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  // 非微信浏览器放行
  return await context.next();
}
