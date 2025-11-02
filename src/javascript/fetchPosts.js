document.addEventListener("DOMContentLoaded", () => {
    async function loadData() { 
        let data = await fetchPostsFromWeb("https://jsonkeeper.com/b/GI31V");
        renderPosts(data);
    }

    async function fetchPostsFromWeb(uri) {
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${uri}`);
        }
        return await response.json();
    }

    function renderPosts(data) {
        const postsContainer = document.querySelector('.main');
        
        postsContainer.innerHTML = '';

        if (data && data.posts) {
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const postHeader = document.createElement('div');
                postHeader.classList.add('post-header');
                postHeader.innerHTML = `
                    <img src="${post.authorAvatar}" alt="User Pic">
                    <span>${new Date(post.date).toLocaleDateString()}</span>
                `;

                const postContent = document.createElement('div');
                if (post.image) {
                    postContent.innerHTML = `
                        <img class="post-image" src="${post.image}" alt="Post Image">
                        <p>${post.content}</p>
                    `;
                } else {
                    postContent.innerHTML = `<p>${post.content}</p>`;
                }

                const likeButton = document.createElement('div');
                likeButton.classList.add('like-button');
                likeButton.textContent = '👍';

                postElement.appendChild(postHeader);
                postElement.appendChild(postContent);
                postElement.appendChild(likeButton);

                postsContainer.appendChild(postElement);
            });
        } else {
            postsContainer.innerHTML = '<p>No posts available</p>';
        }
    }

    loadData();
});
