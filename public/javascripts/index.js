// console.log("hi");

const shown = document.getElementById("shown");
const hidden = document.getElementById("hidden");

shown.addEventListener("click", async (e) => {
  e.preventDefault();
  //   console.log("I was clicked");
  shown.style.display = "none";
  hidden.style.display = "flex";
  return;
});
