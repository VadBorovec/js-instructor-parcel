/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form >
    
1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
Для доступу до елементів форми використовуй властивість elements.
5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

// ==========================================================================================================

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  form.reset();
}

// // ==========================================================================================================
// // ChatGPT

// const loginForm = document.querySelector("form.login-form");

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // prevent page reload on form submission

//   const emailInput = loginForm.elements.email;
//   const passwordInput = loginForm.elements.password;

//   if (!emailInput.value || !passwordInput.value) {
//     alert("All fields must be filled in.");
//     return;
//   }

//   const formData = {
//     email: emailInput.value,
//     password: passwordInput.value,
//   };

//   console.log(formData);
//   loginForm.reset(); // clear form values
// });
