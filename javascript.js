const checkIfPlaying = () => {
    let vid = $('video').get(0);

    vid.addEventListener('loadstart', function(e) {
        console.log('vid started!');
        getQuality();
    });
}
checkIfPlaying();

const getQuality = () => {
    let quality = getVideoPlaybackQuality();
    let screenHeight = window.screen.availHeight;
    let screenWidth = window.screen.availWidth;

    if (quality !== screenHeight || quality !== screenWidth) {
       createNotification();
    }
}

const createNotification = () => {
    chrome.notifications.create(
        {
            title: 'qualityChecker',
            message: 'video quality too low!',
            iconUrl: 'assets/32.png',
            type: 'basic'
        }
    )
}