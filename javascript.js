const getQuality = () => {
    let quality = getVideoPlaybackQuality();
    let screenHeight = window.screen.availHeight;
    let screenWidth = window.screen.availWidth;

    if (quality !== screenHeight && quality !== screenWidth) {
        const html = document.querySelector('.banner');
        const bannerDiv = document.createElement('h1');
        const bannerClass = document.classList.add();
    }
}