chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("welcome.html");
    let tab = await chrome.tabs.create({ url });
  });
  