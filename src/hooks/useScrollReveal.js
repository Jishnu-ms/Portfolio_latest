import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        } else {
          // Optional: Remove active class if you want elements to hide again when scrolling up
          // reveal.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
};

export default useScrollReveal;
