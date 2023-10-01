(async () => {
    const gear = document.getElementsByClassName('ytp-button ytp-settings-button')[0];
    const qualityBtn = document.querySelectorAll('.ytp-menuitem')[2];
    const quality = document.querySelector('.ytp-swatch-color-white');
    if (quality !== null) {
        console.log('vid quality function active');
        gear.click();
        qualityBtn.click();
        quality.click();
    }
})();
