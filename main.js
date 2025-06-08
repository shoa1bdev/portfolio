const hamburger = document.getElementById('hamburger');
  const navlinks = document.getElementById('navlinks');

  hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
  });

const backgroundShape = document.getElementById('second')
const aboutMe = document.getElementById('about-me')

// function matchHeight() {
//   const olHeight = aboutMe.offsetHeight * 1.3;
//     backgroundShape.style.height = `${olHeight}px`;
//     console.log(olHeight)
//   }

//   window.addEventListener('load', matchHeight);
//   window.addEventListener('resize', matchHeight);