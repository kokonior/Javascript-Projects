const wrapper = document.querySelector(".wrapper"),
  textInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-img img");

let preValue;
const btnDownload = document.querySelector(".btn-download");
generateBtn.addEventListener("click", () => {
  let qrValue = textInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  btnDownload.setAttribute("href", `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`);
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});
