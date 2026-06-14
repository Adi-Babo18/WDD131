const character = {
    name: "Swamp Beast Diplomat",
    class: "Diplomat",
    level: 1,
    health: 100,
    image: "images/character.jpg",
    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }
        displayCharacter();
    },
    levelUp() {
        this.level += 1;
        displayCharacter();
    }
};

function displayCharacter() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.class;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
    document.getElementById("characterImage").src = character.image;
}
document.getElementById("attackBtn").addEventListener("click", function () {
    character.attacked();
});
document.getElementById("levelBtn").addEventListener("click", function () {
    character.levelUp();
});
displayCharacter();