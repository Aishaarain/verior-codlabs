

let count = 0;

const countDisplay = document.getElementById("count");
const title = document.getElementById("pageTitle");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const darkModeToggle = document.getElementById("darkModeToggle");
const icon=document.getElementById("icon");

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  title.textContent = "You clicked Increment!";
});

decrementBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
  title.textContent = "You clicked Decrement!";
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
   if (document.body.classList.contains('dark')) {
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
});



