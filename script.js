// Optional: Add animations or interactive elements
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded!');
    // Example: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  // Project Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
  
        const filter = button.getAttribute('data-filter');
  
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {// Blog Filtering
            document.addEventListener('DOMContentLoaded', function() {
              const blogFilterButtons = document.querySelectorAll('.blog-filters .filter-btn');
              const blogCards = document.querySelectorAll('.blog-card');
            
              blogFilterButtons.forEach(button => {
                button.addEventListener('click', () => {
                  // Remove active class from all buttons
                  blogFilterButtons.forEach(btn => btn.classList.remove('active'));
                  // Add active class to clicked button
                  button.classList.add('active');
            
                  const filter = button.getAttribute('data-filter');
            
                  blogCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                      card.style.display = 'block';
                    } else {
                      card.style.display = 'none';
                    }
                  });
                });
              });
            
              // Simple Search Functionality (optional)
              const searchInput = document.querySelector('.search-box input');
              searchInput.addEventListener('keyup', function() {
                const searchTerm = this.value.toLowerCase();
                
                blogCards.forEach(card => {
                  const title = card.querySelector('h2').textContent.toLowerCase();
                  const excerpt = card.querySelector('p').textContent.toLowerCase();
                  
                  if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.style.display = 'block';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
            });
            card.style.display = 'none';
          }
        });
      });
    });
  });
