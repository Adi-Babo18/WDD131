const hikeContainer = document.querySelector("#hike-container");
const search = document.querySelector("#search");
const button = document.querySelector("#searchBtn");
const people = [{name: "James", age: 33},
                {name: "Bob", age: 12},
                {name: "Josh", age: 45}];

console.log(people.sort(sortPeople));

function sortPeople(a, b) {
    if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1; 'You can also switch them. ex: return 1;'
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1; 'You can also switch them. ex: return -1;'
    }
    return 0;
}

function displayHike(hike) {
    let boots = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= hike.difficulty) {
            boots += "🥾";
        }
        else {
            boots += "▫️";
        }
    }

    let tags = "";
    hike.tags.forEach(function(tag) {
        tags += `<button>${tag}</button>`;
    });

    hikeContainer.innerHTML += `
        <div class="hike-card">
            <img src="${hike.imgSrc}" alt="${hike.imgAlt}">
            <div class="hike-content">
                <h2>${hike.name}</h2>
                <div class="hike-tags">
                    ${tags}
                </div>
                <p>${hike.description}</p>
                <p><strong>Distance:</strong> ${hike.distance}</p>
                <p class="rating">
                    Difficulty: ${boots}
                </p>
            </div>
        </div>
    `;

}
function sortHikes(a, b) {
    let distanceA = parseFloat(a.distance);
    let distanceB = parseFloat(b.distance);

    if (distanceA < distanceB) {
        return -1;
    }
    else if (distanceA > distanceB) {
        return 1;
    }
    return 0;
}

function searchHikes() {
    let userSearch = search.value.toLowerCase();
    let filteredHikes = hikes.filter(function(hike) {
        return (
            hike.name.toLowerCase().includes(userSearch)
            ||
            hike.description.toLowerCase().includes(userSearch)
            ||
            hike.tags.find(function(tag) {
                return tag.toLowerCase().includes(userSearch);
            })
        );
    });

    filteredHikes.sort(sortHikes);
    hikeContainer.innerHTML = "";
    filteredHikes.forEach(function(hike) {
        displayHike(hike);
    });
}

button.addEventListener("click", searchHikes);
search.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchHikes();
    }
});

function randomHike() {
    hikeContainer.innerHTML = "";
    let randomNumber = Math.floor(Math.random() * hikes.length);
    displayHike(hikes[randomNumber]);
}
randomHike();