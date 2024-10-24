document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('#img');
  const items = document.querySelectorAll('#img .Categorias');
  const totalItems = items.length;
  const itemWidth = 200; // Largura de cada item (incluindo margens)
  let visibleItems = Math.floor(window.innerWidth / itemWidth); // Itens que cabem na tela
  let currentIndex = 0;

  function updateItemsPosition() {
    // Atualiza a posição do container
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    container.style.transition = 'transform 0.5s ease';
  }

  document.querySelector('.SetasDireita').addEventListener('click', function () {
    if (currentIndex + visibleItems < totalItems) {
      currentIndex++; // Avança um item
      updateItemsPosition();
    }
  });

  document.querySelector('.SetasEsquerda').addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--; // Retorna um item
      updateItemsPosition();
    }
  });

  window.addEventListener('resize', function () {
    visibleItems = Math.floor(window.innerWidth / itemWidth);
    // Recalcula o índice atual para garantir que ele não exceda o número total de itens
    currentIndex = Math.min(currentIndex, totalItems - visibleItems);
    updateItemsPosition();
  });

  // Inicializa a posição dos itens
  updateItemsPosition();
});

console.log('Visible Items:', visibleItems);
console.log('Current Index:', currentIndex);
console.log('Total Items:', totalItems);
