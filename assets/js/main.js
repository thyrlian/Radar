document.addEventListener('DOMContentLoaded', () => {
  const radar = document.querySelector('.radar');
  const numberOfBlips = 6;

  for (let i = 0; i < numberOfBlips; i++) {
    const blip = document.createElement('div');
    blip.className = 'blip';

    // Random position within the radar circle
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 20 + 20;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);

    // Ensure the blip is within the circle
    blip.style.left = `calc(${x}% - 4px)`; // Center the blip
    blip.style.top = `calc(${y}% - 4px)`; // Center the blip

    radar.appendChild(blip);
  }
});
