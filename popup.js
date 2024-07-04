const timer = document.getElementById("time")
const nameInt = document.getElementById("name")
const timerElement = document.getElementById("timer")
const startElement = document.getElementById("start")
const stopElement = document.getElementById("stop")
const resetElement = document.getElementById("reset")

startElement.addEventListener("click" , () => {
    chrome.storage.local.set({
        isRunning : true
    })
})

stopElement.addEventListener("click" , () => {
    chrome.storage.local.set({
        isRunning : false
    })
})

resetElement.addEventListener("click" , () => {
    chrome.storage.local.set({
        timer : 0,
        isRunning : false
    })
})


function updateTime() {
    chrome.storage.local.get(['timer'], (res) => {
        const time = res.timer ?? 0
        timerElement.textContent = `Your timer is at ${time} seconds`
    })
    
    const currentTime = new Date().toLocaleTimeString()
    timer.textContent = `The time is ${currentTime}`
}

updateTime()
setInterval(updateTime , 1000)

chrome.storage.sync.get(["name"] , (res) => {
    const nameGiven = res.name ?? "???"
    nameInt.textContent = `Your name is ${nameGiven}`  
})