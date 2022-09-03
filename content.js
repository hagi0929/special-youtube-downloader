let youtubeTitleControls;
let currentVideo = "";
chrome.runtime.onMessage.addListener((obj, sender, response) => {
  console.log("nomu")
  console.log(obj)
  const {type, value, videoId} = obj;
  if (type === "NEW") {
    currentVideo = videoId
    newVideoLoaded();
  }
})
const newVideoLoaded = () => {
  const downloadBtnExists = document.getElementsByClassName("download-btn")[0]
  if (!downloadBtnExists) {
    const downloadBtn = document.createElement("div");
    downloadBtn.className = "ytp-button " + "download-btn";
    downloadBtn.title = "Click to bookmark current timestamp";
    downloadBtn.innerHTML = "download"

    youtubeTitleControls = document.getElementsByClassName("title ytd-video-primary-info-renderer")[0];
    console.log("youtubeTitleControls", youtubeTitleControls)
    youtubeTitleControls.appendChild(downloadBtn)
    console.log("downloadBtn", downloadBtn)
  }
}