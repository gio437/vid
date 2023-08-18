// const checkIfPlaying = () => {
//     let vid = $('video').get(0);

//     vid.addEventListener('playing', function(e) {
//         console.log('vid started!');
//         getQuality();
//     });
// }
// checkIfPlaying();

// chrome.runtime.sendMessage({ time: '1'});

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         if (request.time) {
//             getQuality();
//         }
//     }
// )

const createNotification = () => {
    chrome.notifications.create(
        {
            title: 'qualityChecker',
            message: 'video quality too low!',
            // iconUrl: 'assets/32.png',
            type: 'basic',
            silent: false
        }
    )
}

const getQuality = () => {
    let videoElem = document.querySelector('video');
    let quality = videoElem.getVideoPlaybackQuality();
    let screenHeight = window.screen.availHeight;
    let screenWidth = window.screen.availWidth;

    if (quality !== screenHeight || quality !== screenWidth) {
       createNotification();
    }
}
getQuality();