//your JS code here. If required.

const myForm = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  // validation
  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  // Promise with 4 sec delay
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});
