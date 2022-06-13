const shown = document.getElementById("shown");
const hidden = document.getElementById("hidden");
const cancel = document.getElementById("cancel");

shown.addEventListener("click", async (e) => {
  e.preventDefault();
  //   console.log("I was clicked");
  shown.style.display = "none";
  hidden.style.display = "flex";
  cancel.style.display = "flex";
  return;
});

cancel.addEventListener("click", async (e) => {
  e.preventDefault();
  shown.style.display = "flex";
  hidden.style.display = "none";
  cancel.style.display = "none";
  return;
});
