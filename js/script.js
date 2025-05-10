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
    //      - If i >= startIndex && i < endIndex:
    //      - Create an HTML block (template literal) with the student's info
    //      - Insert the HTML into the <ul> using insertAdjacentHTML
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
    // End of for loop
  }
}
// End of showPage function

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
// function addPagination
// - Parameters: studentList (array)
function addPagination(studentList) {
  // 1 - Calculate how many pagination buttons are needed
  //     - Use Math.ceil(list.length / studentsPerPage) to determine the total number of pages
  const numberOfButtonRequired = Math.ceil(
    studentList.length / studentsPerPage
  );
  // 2 - Select the <ul class="link-list"> element and store it in a variable
  //     - Clear its content using innerHTML = ""
  const linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  // 3 - Loop from 1 to the total number of pages
  for (let i = 1; i <= numberOfButtonRequired; i++) {
    //     - For each page:
    //         - Create a button element inside an <li> using a template literal
    //         - Insert the button into the <ul> using insertAdjacentHTML("beforeend", ...)
    const pageButtons = `<li><button>${i}</button></li>`;
    linkList.insertAdjacentHTML("beforeend", pageButtons);
  }
  // End of for loop

  // 4 - Add the "active" class to the first button by default
  linkList.querySelector("button").classList.add("active");

  // 5 - Create an event listener on the <ul class="link-list">
  linkList.addEventListener("click", (e) => {
    //     - Inside the listener:
    //         - Check if the clicked element is a <button>
    const activeButton = linkList.querySelector(".active");
    const clickedButton = e.target.closest("button");
    //         - If true:
    if (clickedButton) {
      activeButton.classList.remove("active");
      clickedButton.classList.add("active");
      showPage(studentList, Number(clickedButton.innerHTML));
    }
    //             - Remove the "active" class from the currently active button
    //             - Add the "active" class to the clicked button
    //             - Call the showPage() function with the list and the clicked page number
  });

  // End of addPagination function
}
// Call functions
showPage(studentList, 1);
addPagination(studentList);
