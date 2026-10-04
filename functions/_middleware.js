export async function onRequest(context) {
  const userAgent = context.request.headers.get('user-agent') || '';

  // 检测 User-Agent 是否包含微信标识
  if (userAgent.includes('MicroMessenger')) {
    const html = `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>请在浏览器中打开</title>
        <style>
          body { font-family: -apple-system, sans-serif; text-align: center; padding: 50px 20px; background: #f7f7f7; color: #333; }
          .icon { font-size: 48px; margin-bottom: 20px; }
          h1 { font-size: 20px; margin-bottom: 10px; }
          p { font-size: 14px; color: #666; line-height: 1.6; }
        </style>
      </head>
      <body>
        <div class="icon">⚠️</div>
        <h1>暂不支持微信内访问</h1>
        <p>请点击右上角菜单 <strong>「...」</strong><br>选择 <strong>「在默认浏览器中打开」</strong> 或 <strong>「在 Safari 中打开」</strong></p>
      </body>
      </html>
    `;

    return new Response(html, {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  // 非微信浏览器放行
  return await context.next();
}
