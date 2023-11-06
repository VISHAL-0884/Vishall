const accoridians = document.querySelectorAll('.accordian');
accoridians.forEach(accorian => {
      const icon = accorian.querySelector('.icon');
      const answer = accorian.querySelector('.answer');

      accorian.addEventListener('click',() => {
            icon.classList.toggle('active');
            answer.classList.toggle('active');
      })
});

