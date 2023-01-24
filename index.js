const ColorCard = document.getElementsByClassName("ColorCard"), btn = document.getElementById("btn");


function rgbToHex(rgb) {
  let hex = "#";
  hex += ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
  return hex;
}

function GetRandomColor() {
    return `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
}

function RGB_ToObject(element) {
    const color = element.style.background.match(/\d+/g);

    return {r: color[0], g: color[1], b: color[2]};
}

window.onload = () => {

    Array.from(ColorCard).forEach(ele => {
        ele.firstElementChild.style.background = GetRandomColor();
        console.log(rgbToHex(RGB_ToObject(ele.firstElementChild)));
        ele.lastElementChild.textContent = rgbToHex(RGB_ToObject(ele.firstElementChild));
    });
}