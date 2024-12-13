let posts = [];

function postMessage(message) {
    posts.push(message);
    renderPosts();
}

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerText = post;
        postsContainer.appendChild(postElement);
    });
}

document.querySelector('button').addEventListener('click', function () {
    const message = prompt('Nhập bài thảo luận:');
    if (message) {
        postMessage(message);
    }
});
