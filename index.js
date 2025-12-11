// function calculate(){
//     return 2+3;
// }

// setTimeout(() => {
//     console.log("Hello from setTimeout");
// }, 2000)

// console.log("Hello #1");
// console.log("Hello #2");
// console.log("Hello #3");

// Promise - მიზანი - მართოს გადადებული შედეგები. ობიექტი რომელიც ხელმისაწვდომი იქნება მოგვიანებით და ან წარმატებით დასრულდება ან წარუმატებლად.
// 3 მდგომარეობა - pending, resolved(fullfilled), reject

// const fetchUser = () => {
//   return new Promise((resolved, reject) => {
//     setTimeout(() => {
//       const isSuccess = false;
//       if (isSuccess) {
//         resolved({ name: "Nick", age: 20 });
//       } else {
//         reject("Server Error!");
//       }
//     }, 3000);
//   });
// };

// fetchUser()
// .then((data) => {
//     // გაეშვება მხოლოდ მაშინ თუ Promise წარმატებით დასრულდა, ანუ არის resolved
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos") // fetch() აბრუნებს პრომისს
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Connection error, status: ${response.status}`);
//     }
//     return response.json(); // ხდება json text-ის კოვერტირება JS ობიექტად
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log("in Catch Block:", err));

// function displayList(data) {
//   const list = document.querySelector(".todo-list");

//   data.forEach((item) => {
//     const { title, completed } = item;
//     const li = document.createElement("li");
//     const isCompletedStyle = completed ? "color: green" : "color: red";
//     li.innerHTML = `
//         <h3>${title}</h3>
//         <p style='${isCompletedStyle}'>Completed - ${completed}</p>
//     `;
//     list.append(li);
//   });
// }

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     displayList(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos"),
  fetch("https://jsonplaceholder.typicode.com/pots"),
])
  .then(([todosRes, postsRes]) => {
    return Promise.all([todosRes.json(), postsRes.json()]);
  })
  .then(([todosData, postsData]) => {
    console.log("Todos:", todosData);
    console.log("Posts:", postsData);
  });
