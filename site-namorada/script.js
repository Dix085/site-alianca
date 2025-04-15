const btn = document.getElementById("playPauseBtn");
const audio = document.getElementById("musica");

window.addEventListener("load", () => {
  btn.textContent = "▶️ Tocar música";
});

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸ Pausar música";
  } else {
    audio.pause();
    btn.textContent = "▶️ Tocar música";
  }
});


  