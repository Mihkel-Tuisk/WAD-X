document.addEventListener('DOMContentLoaded', function() {
    const profileToggle = document.getElementById('profileToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (profileToggle && dropdownMenu) {
        // Toggle pfp click
        profileToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        // Close when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.profile-dropdown')) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
});