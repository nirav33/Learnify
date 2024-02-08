let btn = document.getElementById("menu-btn");
btn.onclick = () => {
  document.getElementById("nav-menu-mobile").style.display = "flex";
};
document.getElementById("menu-close-btn").onclick = () => {
  document.getElementById("nav-menu-mobile").style.display = "none";
};



function initMap() {
  // Replace these coordinates with the actual coordinates of SVNIT Surat
  var svnitSuratLocation = { lat: 21.1642, lng: 72.7856 };

  // Create the map
  var map = new google.maps.Map(document.getElementById("map"), {
    center: svnitSuratLocation,
    zoom: 15, // You can adjust the zoom level as needed
  });

  // Create a marker for SVNIT Surat
  var marker = new google.maps.Marker({
    position: svnitSuratLocation,
    map: map,
    title: "SVNIT Surat",
  });
}
