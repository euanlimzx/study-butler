chrome.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "takeScreenshot") {
      console.log("message received. taking screenshot now");
      chrome.tabs.captureVisibleTab({ format: "png" }, function (dataUrl) {
        console.log(dataUrl);
        sendResponse({ screenshot: "taken" });
      });
    }
  });