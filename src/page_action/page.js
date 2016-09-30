var play = document.querySelector('#eat-play'),
    pause = document.querySelector('#eat-pause')

play.addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "play"})
    })
    play.classList.add('hidden')
    pause.classList.remove('hidden')
})

pause.addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "pause"})
    })
    pause.classList.add('hidden')
    play.classList.remove('hidden')
})
