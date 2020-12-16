// NAVBAR

function show() {
  document.getElementById("navbarDropdown").classList.toggle("show");
}
window.click = (e) => {
  if (!e.target.matches("navbar_right_items_item_resources")) {
    var dropDowns = document.getElementsByClassName("navbar_dropdown");
    for (let i = 0; i < dropDowns.length; i++) {
      var openDropDown = dropDowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};

// NAVBAR
