function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateFloatingItems() {
    const floatingItems = document.querySelectorAll('.floating-item');
    floatingItems.forEach(item => {
      if (isElementInViewport(item)) {
        item.classList.add('show'); 
      }
    });
  }
  
 
  window.addEventListener('scroll', animateFloatingItems);
  