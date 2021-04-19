// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { ipcRenderer } = require("electron")




console.log("hi")
document.getElementById('startAndStop').addEventListener("click", () => {
    
    ipcRenderer.send("startCamera")
})

ipcRenderer.on("image", (e,arg) => {
    console.log(e, arg)
    document.getElementById("video-flow").innerHTML=`<img src="${arg}">)`
})

