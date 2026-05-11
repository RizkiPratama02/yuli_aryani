// Putar musik otomatis pada interaksi pertama
const music = document.getElementById("music");
function playMusicOnFirstInteraction() {
  music.play();
  document.removeEventListener("click", playMusicOnFirstInteraction);
  document.removeEventListener("touchstart", playMusicOnFirstInteraction);
}
document.addEventListener("click", playMusicOnFirstInteraction);
document.addEventListener("touchstart", playMusicOnFirstInteraction);

const images = document.querySelectorAll(".gallery img");
const scrollContainer = document.querySelector(".scroll-container");
const toggleButton = document.querySelector(".toggle-button");

images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)"; // Memperbesar gambar saat dihover
    img.style.transition = "transform 0.3s ease"; // Efek transisi halus
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)"; // Mengembalikan ukuran semula
  });
});

toggleButton.addEventListener("click", () => {
  scrollContainer.classList.toggle("open");
  if (scrollContainer.classList.contains("open")) {
    toggleButton.textContent = "Tutup Surat";
  } else {
    toggleButton.textContent = "Buka Surat";
  }
});
