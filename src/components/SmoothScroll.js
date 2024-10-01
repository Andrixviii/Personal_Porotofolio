import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest('a[href^="#"]');
      if (!target) return;

      event.preventDefault();
      const targetId = target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;