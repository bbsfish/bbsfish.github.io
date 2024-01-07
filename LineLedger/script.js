// window.addEventListener('load', function (){
// window.addEventListener('DOMContentLoaded', function () {
//     const w = document.body.clientWidth;
//     const h = document.body.clientHeight;
//     const scale = 980 / w;
//     const transX = (scale - 1) * w / 2 / scale;
//     const transY = (scale - 1) * h / 2 / scale;
//     document.body.style.webkitTransform = "scale(" + scale + ") translate(" + transX + "px, " + transY + "px)";
// });

const TOLCLSTR_LOCALES = "ja-JP"
const TOLCLSTR_OPTIONS = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }

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

async function loadHeader (){
    const hd = document.querySelector("header");
    const id = (function (){
        const arr = hd.id.split("-");
        return arr[arr.length-1];
    })();

    try {
        const response = await fetch("./_header.html");
        const text = await response.text();
        hd.innerHTML = text;
        const list = hd.querySelectorAll(".js-header-activate-list");
        list[id].id = "hd-memu-active";
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadHeader();

    const form = document.getElementsByTagName("form")[0];

    const list = [...form.elements].map(element => {
        return element.name;
    });

    console.log("list of form parts", list);
});