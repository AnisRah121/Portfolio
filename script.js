
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');      
    }
    
  });

const activeFunction = (index) => {
   // Remove the "active" class from the previously active element
    var activeElement = document.querySelector('.navbar a.active');
    if (activeElement) {
        activeElement.classList.remove('active');
       
    }
    // Add the "active" class to the clicked element based on the index
    var newId = document.getElementById(`newId${index}`);
    if (newId) {
        newId.classList.add('active');
    
    }
   
    menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
}

