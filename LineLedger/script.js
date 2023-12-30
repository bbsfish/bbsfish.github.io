// window.addEventListener('load', function (){
// window.addEventListener('DOMContentLoaded', function () {
//     const w = document.body.clientWidth;
//     const h = document.body.clientHeight;
//     const scale = 980 / w;
//     const transX = (scale - 1) * w / 2 / scale;
//     const transY = (scale - 1) * h / 2 / scale;
//     document.body.style.webkitTransform = "scale(" + scale + ") translate(" + transX + "px, " + transY + "px)";
// });

function zeroPad(num, len = 2) {
    return (Array(len).join('0') + num).slice(-len);
}

function getprm(key, url) {
    if (!url) url = window.location.href;
    key = key.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const Appearance = {
    hideIt: (element) => {
        element.classList.remove("show");
        element.classList.add("hide");
    },
    showIt: (element) => {
        element.classList.remove("hide");
        element.classList.add("show");
    }
}