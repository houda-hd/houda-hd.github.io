/* ═══════════════════════════════════════════════════════════
   HOUDA+ 主题切换 (Light / Dark)
   · data-theme 已由 <head> 内联脚本在首屏前设置（防闪烁）
   · 本脚本负责：绘制切换按钮、点击切换并持久化、同步 Giscus、更新 theme-color
   · 存储键：localStorage['houda-theme'] = 'light' | 'dark'
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var root = document.documentElement;
  var STORAGE_KEY = 'houda-theme';
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function getTheme() {
    var t = root.getAttribute('data-theme');
    return (t === 'dark' || t === 'light') ? t : 'light';
  }

  /* 把当前主题同步给所有已加载的 Giscus iframe */
  function syncGiscus(theme) {
    var g = theme === 'dark' ? 'dark' : 'light';
    var frames = document.querySelectorAll('iframe.giscus-frame');
    for (var i = 0; i < frames.length; i++) {
      try {
        frames[i].contentWindow.postMessage(
          { giscus: { setConfig: { theme: g } } },
          'https://giscus.app'
        );
      } catch (e) { /* 跨域或尚未就绪，忽略 */ }
    }
  }

  /* 绘制按钮图标 / aria / theme-color（不改动 data-theme 本身） */
  function paintUI(theme) {
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0e0e12' : '#f4f4f6');
    var btn = document.getElementById('themeToggle');
    var icon = document.getElementById('themeIcon');
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    if (icon) icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
  }

  /* 首屏后立刻按已设置的 data-theme 画一次 UI */
  paintUI(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = getTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
        paintUI(next);
        syncGiscus(next);
        document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
      });
    }

    /* Giscus 加载完成后，确保主题与站点一致 */
    window.addEventListener('message', function (e) {
      if (e.data && e.data.giscus && e.data.giscus.discussion) {
        syncGiscus(getTheme());
      }
    });
  });

  /* 用户未手动选择时，跟随系统主题变化 */
  try {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (err) {}
      if (saved !== 'light' && saved !== 'dark') {
        var next = e.matches ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        paintUI(next);
        syncGiscus(next);
        document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
      }
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  } catch (e) {}
})();
