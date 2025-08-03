export default function decorate(block) {
  const url = '/asserts/d1.json?limit=10';
  fetch(url)
    .then((resp) => resp.json())
    .then(() => {
    }).catch(() => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load magazine articles. Please try again later.';
      block.append(errorMessage);
    });
}
