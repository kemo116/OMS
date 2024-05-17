function scrolll(imageContainerId){
    var left=document.getElementById(imageContainerId);
    left.scrollBy(-450,0)
    
}
function scrollr(imageContainerId){
    var right=document.getElementById(imageContainerId);
    right.scrollBy(450,0)
    
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const iframe = modal.querySelector("iframe");

    // Check if an iframe exists
    if (iframe) {
        // Store the original source URL in a data attribute
        iframe.dataset.originalSrc = iframe.src;
        iframe.src = ''; // Set the src attribute to an empty string to pause the video
    }

    modal.style.display = "none";
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const iframe = modal.querySelector("iframe");

    // Check if an iframe exists and restore the original source URL
    if (iframe && iframe.dataset.originalSrc) {
        iframe.src = iframe.dataset.originalSrc;
    }

    modal.style.display = "block";
}

function toggleCategory(categoryId, ScrollDivId,arrowId) {
    const categoryContainer = document.getElementById(categoryId);
    const mainScrollDiv = document.getElementById(ScrollDivId);
    const categoryArrow = document.getElementById(arrowId);

    if (categoryContainer.style.display === 'none' || categoryContainer.style.display === '') {
        categoryContainer.style.display = 'block';
        // Rotate the arrow down when opening
        categoryArrow.style.transform = 'rotate(90deg)';
        // Set a small timeout to allow the display change before transitioning
        setTimeout(() => {
            mainScrollDiv.style.transform = 'translateY(0)';
            mainScrollDiv.style.opacity = '1';
        }, 10);
    } else {
        mainScrollDiv.style.transform = 'translateY(-100%)';
        mainScrollDiv.style.opacity = '0';
        // Rotate the arrow back to the initial position when closing
        categoryArrow.style.transform = 'rotate(0deg)';
        // Set a small timeout to allow the transition before hiding the container
        setTimeout(() => {
            categoryContainer.style.display = 'none';
        }, 700);
    }
}
window.addEventListener('load', function() {
    const containers = document.querySelectorAll('.category-container');
    containers.forEach(function(container) {
        container.classList.add('show');
    });
    
});

  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('nav');
    const menuIcon = document.getElementById('menu-button'); // Get the menu button element
    let isMenuOpen = false;

    // Add a click event listener to the menu button
        menuIcon.addEventListener('click', function(event) {
            if (isMenuOpen) {
            mobileMenu.style.display = 'none';
            } else {
            mobileMenu.style.display = 'block';
        }
            isMenuOpen = !isMenuOpen;
        });

    // Prevent the menu from closing when clicking anywhere else on the page
    document.addEventListener('click', function(event) {
        if (isMenuOpen && event.target !== menuIcon && !menuIcon.contains(event.target)) {
            mobileMenu.style.display = 'none';
            isMenuOpen = false;
            }
        });
    });









