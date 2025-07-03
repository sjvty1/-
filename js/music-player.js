// 获取音乐元素和控制按钮
const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const volumeControl = document.getElementById('volumeControl');

// 页面加载时恢复播放状态和音量
window.addEventListener('load', function() {
    const savedTime = localStorage.getItem('musicTime');
    const savedVolume = localStorage.getItem('musicVolume');

    if (savedTime) {
        backgroundMusic.currentTime = parseFloat(savedTime);
    }

    if (savedVolume) {
        backgroundMusic.volume = parseFloat(savedVolume);
    }

    // 恢复播放状态
    if (localStorage.getItem('isPlaying') === 'true') {
        backgroundMusic.play();
        playPauseButton.textContent = '暂停';
    } else {
        backgroundMusic.pause();
        playPauseButton.textContent = '播放';
    }
});

// 页面卸载时保存播放状态和当前时间
window.addEventListener('beforeunload', function() {
    localStorage.setItem('musicTime', backgroundMusic.currentTime);
    localStorage.setItem('musicVolume', backgroundMusic.volume);
    localStorage.setItem('isPlaying',!backgroundMusic.paused);
});

// 音量控制、暂停与开始功能示例
playPauseButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseButton.textContent = '暂停';
    } else {
        backgroundMusic.pause();
        playPauseButton.textContent = '播放';
    }
});

volumeControl.addEventListener('input', function() {
    backgroundMusic.volume = parseFloat(this.value);
});