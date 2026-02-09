document.addEventListener("DOMContentLoaded", () => {

const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

    let getMode = localStorage.getItem("mode"); 
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }


// dark mode    
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark-mode");
    }else{
        localStorage.setItem("mode", "light-mode"); 
    }
});

// search toggle
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// sidebar toggle
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", (e) => {
    let clickedElm = e.target;
    
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

      const analyseData = {
BBE: {
"Semester 1": ["Microeconomics","Accounting for Managers","Mathematics for Business Economics"],
"Semester 2": ["Stats","Macroeconomics 1","Financial Institutions & Markets"],
"Semester 3": ["Microeconomics - II","Mathematics - II","Corporate finance"],
"Semester 4": ["Stats - II","Marketing Management","Macroeconomics - II"],
"Semester 5": ["Organisational Behaviour","Industrial Economics","DSE IAPO","Basic Econometrics"],
"Semester 6": ["Operation Research","Environmental Economics","DSE","Business Legislation"],
"Semester 7": ["Understanding consumer","International Economics","Data Science"],
"Semester 8": ["Time Series Econometrics","Business tax planning","Strategic Management","Marketing Analytics"]
},

"Other courses": {
info: "Content for other courses will be added here."
}
};

const cSel = document.getElementById("courseSel");
const sSel = document.getElementById("semSel");
const subSel = document.getElementById("subSel");
const panel = document.getElementById("analyseContent");

/* course list */
cSel.innerHTML = '<option value="">Select Course</option>';
Object.keys(analyseData).forEach(k => cSel.add(new Option(k,k)));

const subjectContent = {
  "Microeconomics": "<p>Microeconomics syllabus + notes + links here wasdwasd</p>",
  "Accounting for Managers": "<p>Accounting resources here</p>",
  "Mathematics for Business Economics": "<p>Math content here</p>",
  "Stats": "<p>Statistics material here wwwwwwwww</p>"
};

/* course change */
cSel.onchange = () => {
sSel.innerHTML = '<option value="">Select Semester</option>';
subSel.innerHTML = '<option value="">Select Subject</option>';
panel.innerHTML = "Select a subject to view content.";

if (!cSel.value) return;

if (cSel.value === "Other courses") {
panel.innerHTML = analyseData["Other courses"].info;
return;
}

Object.keys(analyseData[cSel.value]).forEach(sem =>
sSel.add(new Option(sem,sem))
);
};

/* semester change */
sSel.onchange = () => {
subSel.innerHTML = '<option value="">Select Subject</option>';
if (!sSel.value) return;

analyseData[cSel.value][sSel.value].forEach(sub =>
subSel.add(new Option(sub,sub))
);
};

/* subject change */
subSel.onchange = () => {
  if (!subSel.value) return;

  const content = subjectContent[subSel.value] || "<p>No content added yet.</p>";

  panel.innerHTML =
    "<h3>" + subSel.value + "</h3>" + content;
};

});