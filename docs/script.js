const shareButton = document.querySelector(".js-share-button");
const shareTooltip = document.querySelector(".share-tooltip")
const mediaQuerySmall = window.matchMedia("(max-width: 800px)");

shareButton.addEventListener("click", () => {
    if (shareTooltip.style.opacity == 0) {
        shareTooltip.style.opacity = 100;
    }

    else {
        shareTooltip.style.opacity = 0;
    }
});