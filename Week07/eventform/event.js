const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const extraContainer = document.querySelector("#extraContainer");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const output = document.querySelector("#output");

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

function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosen = new Date(value);

    return chosen <= today;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = form.name.value.trim();
    const eventDate = form.eventDate.value;
    const ticketType = form.type.value;
    const extraValue = form.extraInput.value.trim();
    let errors = [];
    if (isPastDate(eventDate)) {
        errors.push("Please choose a future event date.");
    }
    if (ticketType === "student") {
        const studentPattern = /^\d{9}$/;
        if (!studentPattern.test(extraValue)) {
            errors.push(
                "Student I# must contain exactly 9 digits."
            );
        }
    }
    if (ticketType === "guest") {
        if (extraValue !== "EVENT131") {
            errors.push(
                "Access Code must be EVENT131."
            );
        }
    }
    if (errors.length > 0) {
        output.innerHTML = `
            <h2>Errors</h2>
            <p>${errors.join("<br>")}</p>
        `;
        return;
    }
    output.innerHTML = `
        <h2>Ticket Confirmed</h2>
        <p>Name: ${name}</p>
        <p>Date: ${eventDate}</p>
        <p>Type: ${ticketType}</p>
    `;
    form.reset();
    updateExtraField();
});