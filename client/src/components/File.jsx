import React, { useEffect } from 'react';

// CSS for the Loader (You can also move this to an external CSS file)
const loaderStyles = `
#loader {
  height: 100%;
  width: 100%;
  background-color: #000;
  position: fixed;
  z-index: 999;
  top: 0; /* Start from the top */
  transition: all  ease 1s; /* Smooth transition for the top property */
  display: flex;
  align-items: center;
  justify-content: center;
}

#loader h1 {
  font-size: 6vw;
  color: transparent;
  background: linear-gradient(to right, purple, orange);
  -webkit-background-clip: text;
  position: absolute;
  opacity: 0;
  animation-name: load;
  animation-duration: 1s;
  animation-timing-function: linear;
}

#loader h1:nth-child(2) {
  animation-delay: 2s;
}

#loader h1:nth-child(3) {
  animation-delay: 3s;
}

@keyframes load {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}

@media (max-width: 600px) {
  #loader h1 { font-size: 9vw; }
}
`;

// Loader animation function
const loaderAnimation = () => {
  const loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%"; // Move loader off the screen after 4.2 seconds
  }, 4200);
};

const Loader = () => {
  useEffect(() => {
    loaderAnimation(); // Trigger loader animation on mount
  }, []);

  return (
    <div id="loader">
      <style>{loaderStyles}</style> {/* Inject CSS */}
      <h1>ENVIRONMENTS</h1>
      <h1>EXPERIENCES</h1>
      <h1>CONTENT</h1>
    </div>
  );
};

export default Loader;
