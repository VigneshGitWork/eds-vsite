export default function decorate(block) {
  Array.from(block.children).forEach((row) => {
    row.classList.add('people-listing-item-wrapper');
    Array.from(row.children).forEach((col) => {
      col.classList.add('people-listing-item');
      // Add class to <picture>
      const picture = col.querySelector('picture');
      if (picture) picture.classList.add('people-listing-picture');
      // Add class to name field (2nd child)
      if (col.children[1]) col.children[1].classList.add('people-listing-name');
      // Add class to social media links (3rd child)
      if (col.children[2]) col.children[2].classList.add('people-listing-desc');
      if (col.children[3]) col.children[3].classList.add('people-listing-social');
    });
  });
}
