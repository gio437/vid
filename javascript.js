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

// chrome.runtime.onInstalled.addListener(() => {
//     console.log('hello');
// });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('worked');
        if (request.greeting === "hello") {
            sendResponse({farewell: "goodbye"});
            // chrome.notifications.create(
            //     {
            //         title: 'qualityChecker',
            //         message: 'video quality too low!',
            //         // iconUrl: 'assets/32.png',
            //         type: 'basic',
            //         silent: false
            //     }
            // );
        }
    }
);

const getQuality = () => {
    // let videoElem = document.querySelector('video');
    // let quality = videoElem.getVideoPlaybackQuality();
    // let screenHeight = window.screen.availHeight;
    // let screenWidth = window.screen.availWidth;

    // if (quality !== screenHeight || quality !== screenWidth) {
    //    createNotification();
    // }
}

// const createMessage = () => {
//     const response = chrome.runtime.sendMessage({greeting: "hello"});
//     getQuality();
//     console.log(response);
// }
// createMessage();
