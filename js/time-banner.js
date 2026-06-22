(function() {
    function updateBannerByTime() {
        var now = new Date();
        var hour = now.getHours();
        var imgPath = '';

        // 6点到18点为白天
        if (hour >= 6 && hour < 18) {
            imgPath = '/assets/images/wallpaper1.jpg';
        } else {
            imgPath = '/assets/images/wallpaper2.png';
        }

        // Meow 主题的 Banner 元素类名通常是 .banner
        // 我们尝试抓取 id 为 banner 的元素或 class 为 banner 的元素
        var bannerElement = document.getElementById('banner') || document.querySelector('.banner');
        
        if (bannerElement) {
            // 使用 style.setProperty 确保覆盖
            bannerElement.style.setProperty('background-image', 'url("' + imgPath + '")', 'important');
            // 有些主题会用 background 简写，我们也强制改一下
            bannerElement.style.backgroundSize = 'cover';
            console.log('Banner updated to: ' + imgPath);
        }
    }

    // 立即执行
    updateBannerByTime();
    
    // 监听加载完成事件
    window.addEventListener('load', updateBannerByTime);
    // 针对可能存在的 Pjax 刷新
    document.addEventListener('pjax:complete', updateBannerByTime);
})();