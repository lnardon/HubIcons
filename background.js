chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  chrome.tabs.sendMessage(details.tabId, { type: "githubPageLoaded" });
});
