const buttons = document.querySelectorAll('.button-container button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const nextIndex = (index + 1) % buttons.length;
      buttons[index].classList.remove(`button-${index + 1}`);
      buttons[nextIndex].classList.add(`button-${nextIndex + 1}`);
    });
  });