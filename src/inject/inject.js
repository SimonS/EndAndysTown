if (self == top) {
    var iframe = document.createElement('iframe')

    iframe.src = "http://www.bbc.co.uk/radio/player/bbc_radio_five_live"
    iframe.id = "EndAndysTown"

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action == "play" && !document.getElementById('EndAndysTown')) {
            document.body.appendChild(iframe)
        }
        if (request.action == "pause" && document.getElementById('EndAndysTown')) {
            document.body.removeChild(iframe)
        }
    });
}