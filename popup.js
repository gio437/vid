(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    console.log(response);
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    console.log(`Screen Width: ${screenWidth}`);
    console.log(`Screen Height: ${screenHeight}`);

    const gear = document.getElementsByClassName('ytp-button ytp-settings-button')[0];
    console.log('vid quality function active');
    gear.click();
    const qualityBtn = document.querySelectorAll('.ytp-menuitem')[2];
    qualityBtn.click();
    const quality = document.querySelector('.ytp-swatch-color-white');
    console.log(quality);
    // quality.click();
    // quality.click();
    // quality.click();
    // quality.forEach(item => {
    //     if (item.innerHTML === screenHeight) {
    //         quality.click();
    //         gear.click();
    //         console.log('found correct quality');
    //     }
    //     else {
    //         console.log('cant find quality');
    //     }
    // })
})();
