// personal information section interactivity
var personalInfoSection = document.getElementById("personalInfoSection");
var togglePersonalInformation = document.getElementById("togglePersonalInformation");
var isPersonalInformationSectionVisible = true;
togglePersonalInformation.addEventListener("click", function () {
    if (isPersonalInformationSectionVisible) {
        personalInfoSection.style.display = "none";
        togglePersonalInformation.textContent = "Show Personal Information";
    }
    else {
        personalInfoSection.style.display = "block";
        togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});
// personal Education section interactivity
var educationSection = document.getElementById("education");
var toggleEducationButton = document.getElementById("toggleEducationButton");
toggleEducationButton.addEventListener("click", function () {
    if (educationSection.style.display === "none") {
        educationSection.style.display = "block";
        toggleEducationButton.textContent = "Hide Education";
    }
    else {
        educationSection.style.display = "none";
        toggleEducationButton.textContent = "Show Education";
    }
});
// summary section interactivity
var professionalSummarySection = document.getElementById("professionalSummary");
var toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary");
toggleProfessionalSummary.addEventListener("click", function () {
    if (professionalSummarySection.style.display === "none") {
        professionalSummarySection.style.display = "block";
        toggleProfessionalSummary.textContent = "Hide Professional Summary";
    }
    else {
        professionalSummarySection.style.display = "none";
        toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
});
// Experience section interactivity 
var experienceSection = document.getElementById("experience");
var toggleExperienceButton = document.getElementById("toggleExperienceButton");
toggleExperienceButton.addEventListener("click", function () {
    if (experienceSection.style.display === "none") {
        experienceSection.style.display = "block";
        toggleExperienceButton.textContent = "Hide Experience";
    }
    else {
        experienceSection.style.display = "none";
        toggleExperienceButton.textContent = "Show Experience";
    }
});
// Skils section interactivity
var skillSection = document.getElementById("skills");
var toggleSkillsButton = document.getElementById("toggleSkillsButton");
toggleSkillsButton.addEventListener("click", function () {
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
});
