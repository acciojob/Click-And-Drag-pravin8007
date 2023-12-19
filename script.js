// Your code here.
const itemsContainer = document.getElementById('items');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;

    itemsContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPosition = e.clientX - itemsContainer.offsetLeft;
      itemsContainer.classList.add('active');
    });

    itemsContainer.addEventListener('mouseup', () => {
      isDragging = false;
      itemsContainer.classList.remove('active');
    });

    itemsContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const currentPosition = e.clientX - itemsContainer.offsetLeft;
      const distance = currentPosition - startPosition;
      currentTranslate += distance;
      itemsContainer.style.transform = `translateX(${currentTranslate}px)`;
      startPosition = currentPosition;
    });

    itemsContainer.addEventListener('mouseleave', () => {
      isDragging = false;
      itemsContainer.classList.remove('active');