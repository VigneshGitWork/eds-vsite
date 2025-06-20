export default function decorate(block) {
  const url = '/query-index.json?sheet=magazine&limit=10';
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      const items = json.data;
      const ul = document.createElement('ul');
      ul.classList.add('magazine-list');

      items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="${item.path}" class="magazine-item">
            <img src="${item.image}" alt="${item.title}" loading="lazy"/>
            <h3 class="magazine-title">${item.title}</h3>
            <p class="magazine-desc">${item.description}</p>
          </a>
        `;
        ul.append(li);
      });

      block.innerHTML = '';
      const title = document.createElement('h2');
      title.textContent = 'Magazine Articles';
      block.append(title);
      block.append(ul);
    });
}
