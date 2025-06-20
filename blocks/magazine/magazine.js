export default function decorate(block) {
  const url = '/query-index.json?sheet=magazine&limit=10';
  fetch(url)
    .then(resp => resp.json())
    .then((json) => {
      const items = json.data;
      const ul = document.createElement('ul');
      ul.classList.add('magazine-list');

      items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="${item.path}">
            <img src="${item.image}" alt="${item.title}" loading="lazy"/>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </a>
        `;
        ul.append(li);
      });

      block.innerHTML = '';
      block.append(ul);
    });
}
