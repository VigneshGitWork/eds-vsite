export default async function decorate(block) {
    // add classes to teaser block
    console.log('decorate teaser block', block);

    // Ensure block has at least one child (the wrapper div)
    const wrapper = block.children[0];
    if (!wrapper) return;

    // Add class to the wrapper
    wrapper.classList.add('teaser-wrapper');

    // Expecting two children: image and content
    const [imageDiv, contentDiv] = wrapper.children;

    if (imageDiv) {
        imageDiv.classList.add('teaser-image');
    }
    if (contentDiv) {
        contentDiv.classList.add('teaser-content');

        // Add classes to content children
        Array.from(contentDiv.children).forEach((child) => {
            if (child.tagName === 'P' && child.querySelector('strong')) {
                child.classList.add('teaser-label');
            } else if (child.tagName === 'H2') {
                child.classList.add('teaser-title');
            } else if (child.tagName === 'P' && child.querySelector('a')) {
                child.classList.add('button-container');
                const a = child.querySelector('a');
                if (a) a.classList.add('teaser-button');
            } else if (child.tagName === 'P') {
                child.classList.add('teaser-text');
            }
        });
    }
}