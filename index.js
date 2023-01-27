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

    return {r: parseInt(color[0]), g: parseInt(color[1]), b: parseInt(color[2])};
}

async function copyText(Element) {

    const ELementColor = Element.textContent

    try {
        await navigator.clipboard.writeText(Element.textContent);

        Element.textContent = "Copy";

        setTimeout(() => {
            Element.textContent = ELementColor;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}


window.onload = () => {

    Array.from(ColorCard).forEach(ele => {
        ele.firstElementChild.style.background = GetRandomColor();
        ele.lastElementChild.textContent = rgbToHex(RGB_ToObject(ele.firstElementChild));
    });
}




btn.onclick = () => {
    window.location.reload();
}

Array.from(ColorCard).forEach(ele => {
    ele.onclick = () => {
        copyText(ele.lastElementChild);
    }
});