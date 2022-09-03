chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    console.log("activated")
    const videoId = tab.url.split("?")[1]
    const urlParam = new URLSearchParams(videoId)
    chrome.tabs.sendMessage(tabId, {type: "NEW", videoId: urlParam.get("v")})
  }
})