document.addEventListener('DOMContentLoaded', () => {
  // ✅ Handle Hamburger toggle if present
  const hamburger = document.getElementById('hamburger');
  const navlinks = document.getElementById('navlinks');

  if (hamburger && navlinks) {
    hamburger.addEventListener('click', () => {
      navlinks.classList.toggle('active');
    });
  }

  // ✅ Handle Logo click if present
  const logoImgs = document.querySelectorAll('.logoImg');
  if (logoImgs.length > 0) {
    logoImgs.forEach(img => {
      img.addEventListener('click', () => {
        window.location.href = '/#home';
      });
    });
  }
});