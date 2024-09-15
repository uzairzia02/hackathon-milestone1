
// personal information section interactivity
const personalInfoSection = document.getElementById(
    "personalInfoSection"
  ) as HTMLElement;
  const togglePersonalInformation = document.getElementById(
    "togglePersonalInformation"
  ) as HTMLElement;
  
  let isPersonalInformationSectionVisible = true;
  
  togglePersonalInformation.addEventListener("click", () => {
    if (isPersonalInformationSectionVisible) {
      personalInfoSection.style.display = "none";
      togglePersonalInformation.textContent = "Show Personal Information";
    } else {
      personalInfoSection.style.display = "block";
      togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
  });
  


// personal Education section interactivity

  const educationSection = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const toggleEducationButton = document.getElementById(
    "toggleEducationButton"
  ) as HTMLButtonElement;
  
  toggleEducationButton.addEventListener("click", () => {
    if (educationSection.style.display === "none") {
      educationSection.style.display = "block";
      toggleEducationButton.textContent = "Hide Education";
    } else {
      educationSection.style.display = "none";
      toggleEducationButton.textContent = "Show Education";
    }
  });




// summary section interactivity

  const professionalSummarySection = document.getElementById(
    "professionalSummary"
  ) as HTMLTextAreaElement;
  const toggleProfessionalSummary = document.getElementById(
    "toggleProfessionalSummary"
  ) as HTMLButtonElement;
  
  toggleProfessionalSummary.addEventListener("click", () => {
    if (professionalSummarySection.style.display === "none") {
      professionalSummarySection.style.display = "block";
      toggleProfessionalSummary.textContent = "Hide Professional Summary";
    } else {
      professionalSummarySection.style.display = "none";
      toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
  });





 // Experience section interactivity 
const experienceSection = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const toggleExperienceButton = document.getElementById(
    "toggleExperienceButton"
  ) as HTMLButtonElement;
  
  toggleExperienceButton.addEventListener("click", () => {
    if (experienceSection.style.display === "none") {
      experienceSection.style.display = "block";
      toggleExperienceButton.textContent = "Hide Experience";
    } else {
      experienceSection.style.display = "none";
      toggleExperienceButton.textContent = "Show Experience";
    }
  });
  
  

 // Skils section interactivity

const skillSection = document.getElementById("skills") as HTMLTextAreaElement;
const toggleSkillsButton = document.getElementById(
  "toggleSkillsButton"
) as HTMLButtonElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillSection.style.display === "none") {
    skillSection.style.display = "block";
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillSection.style.display = "none";
    toggleSkillsButton.textContent = "Show Skills";
  }
});

