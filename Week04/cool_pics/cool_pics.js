const gallery = document.querySelector(".gallery");

const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {

    if (event.target.tagName !== "IMG") {
        return;
    }

    const fullImage = event.target.src.replace("-sm", "-full");
    modalImage.src = fullImage;
    modal.showModal();
});

closeButton.addEventListener("click", () => {
    modal.close();
});