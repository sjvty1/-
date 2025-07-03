// theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // 查找主题切换按钮
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 如果按钮不存在，直接返回
    if (!themeToggle) {
        console.error("未找到 #theme-toggle 按钮！");
        return;
    }

    // 初始化主题（从 localStorage 读取）
    if (localStorage.getItem('theme') === 'dark-theme') {
        body.classList.add('dark-theme');
    }

    // 绑定点击事件
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : '');
        console.log("主题已切换"); // 调试用
    });
});