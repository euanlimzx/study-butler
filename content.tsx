document.addEventListener("click", async function (e) {
   console.log("taking screenshot")
   chrome.runtime.sendMessage({ action: "takeScreenshot" });
})

export {}