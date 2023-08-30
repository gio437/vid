chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "hello") {
            sendResponse({farewell: "goodbye"});
            getQuality();
        }
    }
);

const getQuality = () => {
    const vidHeight = HTMLVideoElement.height;
    const vidWidth = HTMLVideoElement.width;
    const screenHeight = window.screen.availHeight;
    const screenWidth = window.screen.availWidth;

    if (vidHeight !== screenHeight || vidWidth !== screenWidth) {
       createNotification();
    }
}

const createNotification = () => {
    chrome.notifications.create(
        {
            title: 'Quality Checker',
            message: 'Video Quality Too Low!',
            iconUrl: "youtube-play-button-logo.png",
            type: 'basic',
            silent: false
        }
    );
}