(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    console.log(response);
  })();