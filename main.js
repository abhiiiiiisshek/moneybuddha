document.querySelector('.hero-container').addEventListener('mousemove', function(e) {
  // Get all layers to be animated
  const layers = this.querySelectorAll('.layer');
  
  // Calculate movement strength based on mouse position from the center
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  // Apply the movement to each layer
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const moveX = x * speed;
    const moveY = y * speed;
    layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
  });
});