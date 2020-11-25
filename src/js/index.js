addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const menuItems = document.querySelectorAll('.menu-item');

  const functionObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemActual = Array.from(menuItems).find(
          (item) => item.dataset.url === entry.target.id
        );
        itemActual.classList.add('active');
        for (const item of menuItems) {
          if (item != itemActual) {
            item.classList.remove('active');
          }
        }
      }
    });
  };
  const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  sections.forEach((section) => observer.observe(section));

  const getData = () => {
    const sectionOne = document.querySelector('.section-one');
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        let items = data.data;
        let count = 0;
        let acum = '';
        items
          .forEach((item) => {
            const newItem = item.item;
            const sectionImg = item.sectionImage;
            newItem.forEach((obj) => {
              count++;
              let title = obj.title;
              let description = obj.description;
              let price = obj.price;
              return (acum += `
              <article class="item">
                <h6 class="item-title">${title}</h6>
                <p class="item-description">
                  ${description}
                </p>
                <p class="item-price">$${price}</p>
              </article>
            `);
            });
            sectionOne.innerHTML = acum;
          })
          .catch((error) => error);
      });
  };
  getData();
});
//FIXME: description word wrap
// TODO: image section
// TODO: insert other categories dinamic
// FIXME: why catch error
