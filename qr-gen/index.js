const wrap = document.querySelector(".wrapper"),
qrin = wrap.querySelector(".form input"),
imag = wrap.querySelector(".qr img"),
btn = wrap.querySelector(".form button");
let prev;
btn.addEventListener("click", ()=>{
    let txt= qrin.value.trim();
    if(!txt || prev === txt) return;
    preValue = txt;
    btn.innerText = "Generating QR Code...";
    imag.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${txt}`;
    imag.addEventListener("load", () => {
        wrap.classList.add("active");
        btn.innerText = "Generate QR Code";
    });
});
qrin.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrap.classList.remove("active");
        prev = "";
    }
});