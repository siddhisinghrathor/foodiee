
const orderBtn = document.querySelector("#orderBtn");

orderBtn.addEventListener("click", () => {
  alert("Thanks for choosing Foodie! We'll serve you soon 😋");
});

const subscribeBtn = document.querySelector("#subscribeBtn");

subscribeBtn.addEventListener("click", () => {
  const emailInput = document.querySelector("#emailInput");
  const email = emailInput.value;

  if (email.trim() === "") {
    alert("Please enter a valid email!");
  } else {
    alert(`Thanks for subscribing, ${email}! 🎉`);
    emailInput.value = "";
  }
});
