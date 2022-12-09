// 1. Use fetch to request 12 random users from the API
//     - New random employee information displays on 12 individual cards each time the page refreshes

// 2. Modal window opens when user clicks on a card
// 3. Modal window closes when user clicks on x

// GLOBAL VARIABLES
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
let employees = [];
const gridContainer = document.querySelector(".grid-container");
const modalClose = document.querySelector(".modal-close");

// FETCH API REQUEST
fetch(urlAPI).then((response) =>
  response
    .json()
    .then((response) => response.results)
    .then(displayEmployees)
    .catch((err) => console.log(err))
);

function displayEmployees(employeeData) {
  employees = employeeData;

  let employeeHTML = "";

  employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;

    employeeHTML += `
      <div class="card">
        <img class="profile-image" src="${picture.large}" alt="Profile photo of ${name}" />
        <div>
          <h2 class="name">${name.first} ${name.last}</h2>
          <p class="email">${email}</p>
          <p class="address">${city}</p>
        </div>
      </div>
    `;
  });
  gridContainer.innerHTML = employeeHTML;
}
