(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    console.log(response);
})();

// to work on click
// chrome.webNavigation.onHistoryStateUpdated.addListener( () => {
//         chrome.runtime.sendMessage({greeting: "hello"});
//     });