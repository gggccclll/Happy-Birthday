// 页面加载后立即播放音乐
window.addEventListener('load', function() {
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.5;
    
    // 自动播放音乐
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // 自动播放被阻止时显示提示
            const playHint = document.createElement('div');
            playHint.textContent = '';
            playHint.style.position = 'fixed';
            playHint.style.bottom = '60px';
            playHint.style.right = '20px';
            playHint.style.color = '#fff';
            playHint.style.fontSize = '14px';
            document.body.appendChild(playHint);
            
            // 添加点击播放功能
            document.body.addEventListener('click', function() {
                if (bgMusic.paused) {
                    bgMusic.play();
                    playHint.remove();
                }
            }, { once: true });
        });
    }
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // 自动播放被阻止时显示提示
            const playHint = document.createElement('div');
            playHint.textContent = '宝贝~有音乐哦~Click这里哟~';
            playHint.style.position = 'fixed';
            playHint.style.bottom = '60px';
            playHint.style.right = '20px';
            playHint.style.color = '#fff';
            playHint.style.fontSize = '14px';
            document.body.appendChild(playHint);
            
            // 添加点击播放功能
            document.body.addEventListener('click', function() {
                if (bgMusic.paused) {
                    bgMusic.play();
                    playHint.remove();
                }
            }, { once: true });
        });
    }

    // 消息框入场动画
    const messageBox = document.querySelector('.message-box');
    messageBox.style.opacity = 0;
    messageBox.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        messageBox.style.transition = 'all 1s ease';
        messageBox.style.opacity = 1;
        messageBox.style.transform = 'translateY(0)';
    }, 500);
})();

// 背景音乐切换
let currentMusicIndex = 1;
const musicFiles = [
    './music/1.MP3',
    './music/2.MP3',
    './music/3.MP3',
    './music/4.MP3',
    './music/5.MP3'
];

function changeMusic() {
    const bgMusic = document.getElementById('bg-music');
    currentMusicIndex = (currentMusicIndex + 1) % musicFiles.length;
    bgMusic.src = musicFiles[currentMusicIndex];
    bgMusic.play();
}

// 添加音乐切换按钮
const musicButton = document.createElement('button');
musicButton.textContent = '切换音乐';
musicButton.style.position = 'fixed';
musicButton.style.bottom = '20px';
musicButton.style.right = '20px';
musicButton.onclick = changeMusic;
document.body.appendChild(musicButton);
