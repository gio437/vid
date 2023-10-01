    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.greeting === "hello") {
                sendResponse({farewell: "goodbye"});
                // createNotification();
            }
        }
    );

const createNotification = () => {
    chrome.notifications.create(
        {
            title: 'Quality Checker',
            message: 'Check Video Quality!',
            iconUrl: "youtube-play-button-logo.png",
            type: 'basic',
            silent: false
        }
    );
}