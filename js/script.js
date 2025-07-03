document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 不检查用户名和密码，直接跳转到指定页面
    window.location.href = 'index.html'; // 替换为你指定的页面URL
});