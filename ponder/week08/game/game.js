const dieImages = document.querySelectorAll("#gameboard img");

document.getElementById("rollButton").addEventListener("click", (event) => {
    dieImages.foreach((image) => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    setTimeout{() => {
        
    }}
})

function isDieUnlocked(die) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array
}