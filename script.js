const profileSectionEl = document.getElementById("profile-section");
const formSectionEl = document.getElementById("form-section");

const editBtnEl = document.getElementById("edit-btn");
const submitBtnEl = document.getElementById("submit-btn");

const inputNameEl = document.getElementById("inputName");
const inputRoleEl = document.getElementById("inputRole");
const inputAvailabilityEl = document.getElementById("inputAvailability");
const inputAgeEl = document.getElementById("inputAge");
const inputLocationEl = document.getElementById("inputLocation");
const inputExperienceEl = document.getElementById("inputExperience");
const inputEmailEl = document.getElementById("inputEmail");

const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const availabilityEl = document.getElementById("availability");
const ageEl = document.getElementById("age");
const locationEl = document.getElementById("location");
const experienceEl = document.getElementById("experience");
const emailEl = document.getElementById("email");

formSectionEl.style.display ="none";

editBtnEl.addEventListener('click', function () {
    profileSectionEl.style.display = "none";
    formSectionEl.style.display = "block";
});

submitBtnEl.addEventListener('click', function () {
    profileSectionEl.style.display = "block";
    formSectionEl.style.display = "none";

    nameEl.textContent = inputNameEl.value;
    roleEl.textContent = inputRoleEl.value;
    availabilityEl.textContent = inputAvailabilityEl.value;
    ageEl.textContent = inputAgeEl.value;
    locationEl.textContent = inputLocationEl.value;
    experienceEl.textContent = inputExperienceEl.value;
    emailEl.textContent = inputEmailEl.value;
});