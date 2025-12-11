// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileNavBtn = document.querySelector('.mobile-nav-btn');
  const navList = document.querySelector('.main-nav-list');
  const navLinks = document.querySelectorAll('.main-nav-list a'); // Select all navigation links
  
  // Toggle mobile navigation
  mobileNavBtn.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
  
  // Hide navigation on link click
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
              navList.classList.remove('active');
          }
      });
  });
  
  // Handle window resize to fix mobile menu issues
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navList.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Get all team members that are not already featured
  const teamMembers = document.querySelectorAll('.team-member:not(.featured)');
  
  // Add hover effects for touch devices (optional)
  teamMembers.forEach(member => {
      // For touch devices
      member.addEventListener('touchstart', function() {
          // Remove active class from all other members
          teamMembers.forEach(item => {
              if (item !== member) {
                  item.classList.remove('touch-active');
              }
          });
          
          // Toggle active class on this member
          this.classList.toggle('touch-active');
      });
  });
  
  // Handle window resize to adjust layout if needed
  window.addEventListener('resize', function() {
      // You can add specific responsive adjustments here if needed
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
          // Mobile specific adjustments (if any)
      } else {
          // Desktop specific adjustments (if any)
      }
  });
  
  // Initialize any additional functionality here
});