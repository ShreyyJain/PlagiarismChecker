const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function Login()
{
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "insert.php?user= "+ document.getElementById("user").value + "pass= "+ document.getElementById("pass").value,false);
  xmlhttp.send(null);
}
