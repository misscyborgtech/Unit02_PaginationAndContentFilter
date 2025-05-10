// Select the container element where student list items will be displayed
const studentListContainer = document.querySelector(".student-list");

// Define how many students to display per page for pagination
const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// function showPage
// - paramètres : studentList (tableau), page (numéro de page demandé)
function showPage(list, page) {
  // 1. Calculer le startIndex et endIndex pour les étudiants à afficher
  //    startIndex = (page * itemsPerPage) - itemsPerPage
  //    endIndex = page * itemsPerPage
  let startIndex = page * studentsPerPage - studentsPerPage;
  let endIndex = page * studentsPerPage;

  // 2. Sélectionner la balise <ul class="student-list"> et la vider avec innerHTML = ""
  studentListContainer.innerHTML = "";

  // 3. Boucler sur le tableau studentList
  for (let i = 0; i < studentList.length; i++) {
    //    Pour chaque étudiant à l’index i :
    //    - Si i >= startIndex && i < endIndex
    //      - Créer un bloc HTML (template literal) avec l'info de l’étudiant
    //      - Injecter ce HTML dans la <ul> avec insertAdjacentHTML("beforeend", ...)
    if (i >= startIndex && i < endIndex) {
      const studentListItem = `
       <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${studentList[i].picture.thumbnail}" alt="Profile Picture">
            <h3>${studentList[i].name.first} ${studentList[i].name.last}</h3>
            <span class="email">${studentList[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${studentList[i].registered.date}</span>
          </div>
        </li>
    `;
      studentListContainer.insertAdjacentHTML("beforeend", studentListItem);
    }
  }
}
// Fin de la fonction

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
showPage(studentList, 1);
