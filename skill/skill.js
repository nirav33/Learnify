
let btn = document.getElementById("menu-btn");
btn.onclick = () => {
  document.getElementById("nav-menu-mobile").style.display = "flex";
};
document.getElementById("menu-close-btn").onclick = () => {
  document.getElementById("nav-menu-mobile").style.display = "none";
};

function showLoginPopup() {
  window.location.href='../Registrastion Form/Login.html';        
}