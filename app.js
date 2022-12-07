// 1. Use fetch to request 12 random users from the API
//     - New random employee information displays each time the page refreshes

// 2. Modal window opens when user clicks on a card
// 3. Modal window closes when user clicks on x

fetch("https://randomuser.me/api/?results=12&format=json").then((response) =>
  console.log(response)
);
