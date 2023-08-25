document.addEventListener("DOMContentLoaded", function () {
  const hideButton = document.getElementById("hideButton");
  hideButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: hideElement,
      });
    });
  });
});

function hideElement() {
  elements = document.querySelectorAll(".NC-VideoMediaObjectWrapper");
  elements.forEach((element) => {
    if (element) {
      const childDivs = element.querySelectorAll("div");
      const videoId = childDivs[0].getAttribute("data-video-id");
      localStorage.setItem(videoId, "hide");
      element.style.display = "none";
      window.scrollTo({
        top: 0,
      });
    }
  });
}
