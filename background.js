chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  chrome.tabs.sendMessage(details.tabId, { type: "githubPageLoaded" });
  chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.sendMessage(details.tabId, { type: "githubPageLoaded" });
  });
});
