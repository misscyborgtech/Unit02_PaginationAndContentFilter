// Select the element where student list items will be displayed
const studentListContainer = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");

// Define how many students to display per page for pagination
const studentsPerPage = 9;

// Create and insert the search bar inside the page header using JavaScript
const header = document.querySelector(".header");
const searchHTML = `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="studentSearch" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
`;
header.insertAdjacentHTML("beforeend", searchHTML);

// Select the input field of the search bar
const studentSearch = document.querySelector("#studentSearch");

// Listen for keyup events to filter the student list based on user input
studentSearch.addEventListener("keyup", () => {
  const userSearch = studentSearch.value.toLowerCase();
  const filteredStudents = [];

  // Loop through the full student list and match the input with student names
  for (let i = 0; i < studentList.length; i++) {
    const studentName =
      `${studentList[i].name.first} ${studentList[i].name.last}`.toLowerCase();
    if (studentName.includes(userSearch)) {
      filteredStudents.push(studentList[i]);
    }
  }
  // If matches found, display them with pagination
  if (filteredStudents.length > 0) {
    addPagination(filteredStudents);
    showPage(filteredStudents, 1);
    // Otherwise, display a "No results found" message
  } else {
    studentListContainer.innerHTML = `<li><h3 style="text-align:center;">No results found</h3></li>`;
    linkList.innerHTML = "";
  }
});

/*
  Function: showPage()
  Purpose: Display 9 students per page from the given list
  Parameters:
    - list: array of students (can be filtered or full)
    - page: the current page number to display
*/
function showPage(list, page) {
  let startIndex = page * studentsPerPage - studentsPerPage;
  let endIndex = page * studentsPerPage;
  studentListContainer.innerHTML = "";
  // Loop through the passed list and display students that fall in the page range
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const studentListItem = `
       <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joinded since: ${list[i].registered.date}</span>
          </div>
        </li>
      `;
      studentListContainer.insertAdjacentHTML("beforeend", studentListItem);
    }
  }
}

/*
  Function: addPagination()
  Purpose: Create and display pagination buttons based on the given student list
  Parameter:
    - studentList: array of students (filtered or full)
*/
function addPagination(studentList) {
  const numberOfButtonRequired = Math.ceil(
    studentList.length / studentsPerPage
  );
  linkList.innerHTML = "";
  // Create a button for each page
  for (let i = 1; i <= numberOfButtonRequired; i++) {
    const pageButtons = `<li><button>${i}</button></li>`;
    linkList.insertAdjacentHTML("beforeend", pageButtons);
  }

  // Automatically activate the first button
  linkList.querySelector("button").classList.add("active");

  // Add click event to handle pagination behavior
  linkList.addEventListener("click", (e) => {
    const activeButton = linkList.querySelector(".active");
    const clickedButton = e.target.closest("button");
    if (clickedButton) {
      activeButton.classList.remove("active");
      clickedButton.classList.add("active");
      showPage(studentList, Number(clickedButton.innerHTML));
    }
  });
}

// Show the first page and full pagination on initial page load
addPagination(studentList);
showPage(studentList, 1);
