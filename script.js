window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    music.play();
  
    setTimeout(() => {
      document.getElementById('finalMessage').classList.remove('hidden');
    }, 3000);
  });
  