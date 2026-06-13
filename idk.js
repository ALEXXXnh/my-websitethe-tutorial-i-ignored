const cursor = document.querySelector('.custom-cursor');

      window.addEventListener('mousemove', (e) =>
      {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

      });
