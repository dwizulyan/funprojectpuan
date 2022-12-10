const buttonAnimate = document.querySelector("[data-button-animate]");
const buttonAnimateOff = document.querySelector("[data-button-animate-off]");
const cube = document.querySelector("[data-cube]");
alert("Pastikan tydack ada kang baso di depan rumah!!!!");
buttonAnimate.addEventListener("click", () => {
  if (cube.classList.contains("animate")) {
    alert("Beliau sudah berputar");
  }
  cube.classList.add("animate");
  return 0;
});

buttonAnimateOff.addEventListener("click", () => {
  if (!cube.classList.contains("animate")) {
    alert("Beliau sedang tidak berputar");
  }
  cube.classList.remove("animate");
  return 0;
});
