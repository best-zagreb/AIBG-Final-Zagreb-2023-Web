const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;

  lightbox.classList.remove("active");
});

const images = document.querySelectorAll("img");

images.forEach((image) => {
  if (!image.getAttribute("data-disable-lightbox")) {
    // console.log(image.getAttribute("data-disable-lightbox"));

    image.addEventListener("click", () => {
      lightbox.classList.add("active");

      const img = document.createElement("img");
      img.src = image.src;

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }

      lightbox.appendChild(img);
    });
  }
});
