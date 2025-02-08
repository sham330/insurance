 // Toggle mobile menu
 const menuBtn = document.getElementById("menu-btn");
 const closeBtn = document.getElementById("close-btn");
 const mobileMenu = document.getElementById("mobile-menu");
 
 menuBtn.addEventListener("click", () => {
   mobileMenu.style.display = "block";
 });
 
 closeBtn.addEventListener("click", () => {
   mobileMenu.style.display = "none";
 });
 
 // Toggle outer dropdown menu in mobile view
 const outerDropdown = document.querySelector(
   ".mobile-dropdown .dropdown-toggle"
 );
 const outerDropdownContent = document.querySelector(
   ".mobile-dropdown .mobile-dropdown-content"
 );
 
 outerDropdown.addEventListener("click", (event) => {
   event.stopPropagation(); // Prevents the menu from closing if clicking on the toggle
   // Close the inner dropdown if it's open
   const innerDropdownContent = document.querySelector(
     ".mobile-dropdown .inner-dropdown-content"
   );
   innerDropdownContent.style.display = "none";
 
   // Toggle the outer dropdown
   outerDropdownContent.style.display =
     outerDropdownContent.style.display === "block" ? "none" : "block";
 });
 
 // Toggle inner dropdown menu in mobile view
 const innerDropdown = document.querySelector(
   ".mobile-dropdown .inner-dropdown .dropdown-toggle"
 );
 const innerDropdownContent = document.querySelector(
   ".mobile-dropdown .inner-dropdown-content"
 );
 
 innerDropdown.addEventListener("click", (event) => {
   event.stopPropagation(); // Prevents the outer dropdown from closing when inner dropdown is clicked
   // Toggle the inner dropdown
   innerDropdownContent.style.display =
     innerDropdownContent.style.display === "block" ? "none" : "block";
 });


 document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});