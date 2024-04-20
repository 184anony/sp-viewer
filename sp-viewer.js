const form = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const urlFrame = document.getElementById("urlFrame");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = urlInput.value;
    loadURLInIframe(url);
});

function loadURLInIframe(url) {
    urlFrame.src = url;
}

const changeUserAgent = (ua) => {
    const originalNavigator = navigator;

    try {
        Object.defineProperty(navigator, "userAgent", {
            get: function () {
                return ua;
            },
            configurable: true,
        });
    } catch (e) {
        console.error("Navigator userAgent could not be overridden.");
    }
};

changeUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
);
