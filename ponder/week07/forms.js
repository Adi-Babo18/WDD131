const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
  if (value === "many") {
    notesContainer.hidden = false;
    notes.required = true;
  } else {
    notesContainer.hidden = true;
    notes.required = false;
    notes.value = "";
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

// Helper function to return checked campuses
function getCheckedCampuses(campuses) {
    return Array.from(campuses)
                .filter(campus => campus.checked)
                .map(campus => campus.value);

}

// Helper function to return if date is valid
function isDateValid() {
    const date = document.getElementById("availableDate").value;
    const todayDate = new Date();
    return date > todayDate;
}

const type = document.querySelector("#type");
const extraContainer = document.querySelector("#extraContainer");
const extraLabel = document.querySelector("#extraLabel");

function updateExtraField() {

    const value = type.value;

    if (value === "student") {
        extraContainer.hidden = false;
        extraLabel.textContent = "Student I#";
    }
    else if (value === "guest") {
        extraContainer.hidden = false;
        extraLabel.textContent = "Access Code";
    }
    else {
        extraContainer.hidden = true;
    }
}

type.addEventListener("change", updateExtraField);
updateExtraField();

// Add event listener to the form to detect submit
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(form.firstName.value);

  if(!isDateValid()) {
        document.getElementById("output")
                    .textContent = "Please choose a future date";
    }

  const numberOfCampuses = form.travelRange.value;
  if (
    numberOfCampuses === "one" &&
    getCheckedCampuses(campusBoxes).length === 0
  ) {
    output.textContent = "Please select one campus";
    return;
  }

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
  // Let the user know to select at least one campus
  if (selectedCampuses.length === 0) {
    output.textContent = "Please select at least one campus.";
    return;
  }

  // Let the user know if they choose many campuses but didn't put a note that they need to add a note
  if (type === "many" && note === "") {
    output.textContent =
        "Please enter notes when multiple campuses.";
    return;
  }
  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  if (type === "many" && selectedCampuses.length < 2) {
    output.textContent = 
        "Please select at least two campuses.";
    return;
  }

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});