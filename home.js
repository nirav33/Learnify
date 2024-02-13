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

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function showDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
}

function hideDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}