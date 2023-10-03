(async () => {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
              if (mutation.addedNodes.length) {
                  if (mutation.type == 'childList') {
                    const gear = document.getElementsByClassName('ytp-button ytp-settings-button')[0];
                    console.log('vid quality function active');
                    gear.click();
                    const qualityBtn = document.querySelectorAll('.ytp-menuitem')[3];
                    qualityBtn.click();
                    const quality = document.querySelector('.ytp-swatch-color-white');
                    quality.click();
                  }
              }
        })
    })
    function checkNode() {
        const targetNode = document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer");
        if (!targetNode) {
            window.setTimeout(checkNode, 500);
            return;
        }
        const config = {
            childList: true,
            subtree:true
        }
        observer.observe(targetNode, config)
    }
    checkNode();
})();
