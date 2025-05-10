// Select the container element where student list items will be displayed
const studentListContainer = document.querySelector(".student-list");

// Define how many students to display per page for pagination
const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// function showPage
// - Parameters: studentList (array), page (requested page number)
function showPage(list, page) {
  // 1. Calculate startIndex and endIndex to determine which students to display
  //    startIndex = (page * itemsPerPage) - itemsPerPage
  //    endIndex = page * itemsPerPage
  let startIndex = page * studentsPerPage - studentsPerPage;
  let endIndex = page * studentsPerPage;

  // 2. Select the <ul class="student-list"> element and clear its content using innerHTML = ""
  studentListContainer.innerHTML = "";

  // 3. For each student at index i:
  for (let i = 0; i < studentList.length; i++) {
    //    - If i >= startIndex && i < endIndex:
    //      - Create an HTML block (template literal) with the student's info
    //      - Insert the HTML into the <ul> using insertAdjacentHTML("beforeend", ...)
    if (i >= startIndex && i < endIndex) {
      const studentListItem = `
       <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${studentList[i].picture.large}" alt="Profile Picture">
            <h3>${studentList[i].name.first} ${studentList[i].name.last}</h3>
            <span class="email">${studentList[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joinded since: ${studentList[i].registered.date}</span>
          </div>
        </li>
    `;
      studentListContainer.insertAdjacentHTML("beforeend", studentListItem);
    }
  }
}
// End of showPage function

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
showPage(studentList, 1);
