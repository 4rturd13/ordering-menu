addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section')
  const menuItems = document.querySelectorAll('.menu-item')

  const functionObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemActual = Array.from(menuItems).find(
          (item) => item.dataset.url === entry.target.id
        )
        itemActual.classList.add('active')
        for (const item of menuItems) {
          if (item != itemActual) {
            item.classList.remove('active')
          }
        }
      }
    })
  }
  const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })

  sections.forEach((section) => observer.observe(section))
})

// const getData = () => {
//   fetch('data.json')
//     .then((res) => res.json())
//     .then((data) => {
//       let sections = data.data
//       let count = 0
//       let acum = ''
//       let content = ''

//       sections
//         .forEach((section) => {
//           const sectionOne = document.querySelector('.main-content')
//           content += `<img
//             class="image-section"
//             src="${section.sectionImage}"
//             alt="${section.name}"
//           />`

//           section.item.forEach((obj) => {
//             count++
//             let title = obj.title
//             let description = obj.description
//             let price = obj.price
//             return (acum += `
//             <article class="item">
//               <h6 class="item-title">${title}</h6>
//               <p class="item-description">
//                 ${description}
//               </p>
//               <p class="item-price">$${price}</p>
//             </article>
//           `)
//           })
//           console.log(content)
//           content += acum
//           sectionOne.innerHTML = content
//         })
//         .catch((error) => error)
//     })
// }
// getData()
