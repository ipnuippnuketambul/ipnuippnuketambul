document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownItems = document.querySelectorAll('.dropdown__item');

    // Toggle nav menu
    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        toggleButton.classList.toggle('show-icon');
    });

    // Toggle dropdown menu
    dropdownItems.forEach(item => {
        const dropdownLink = item.querySelector('.nav__link');
        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = item.querySelector('.dropdown__menu');

            if (dropdownMenu.style.display === "block") {
                dropdownMenu.style.display = "none";
            } else {
                // Close all other dropdowns
                dropdownItems.forEach(otherItem => {
                    const otherDropdownMenu = otherItem.querySelector('.dropdown__menu');
                    if (otherDropdownMenu) {
                        otherDropdownMenu.style.display = "none";
                    }
                });

                dropdownMenu.style.display = "block";
            }
        });
    });
});


// Menggunakan JavaScript untuk mengecek apakah href bukan #
document.querySelectorAll('.pagination a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});