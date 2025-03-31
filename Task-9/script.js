const postContainer = document.querySelector('.post-container')
const loading = document.querySelector('.loader')

let limit = 10
let page = 1
let isLoading = false; 

async function getPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const data = await response.json()
        return data
    } catch (error) {
        return new Error(error)
    }
}

async function showPosts() {
    const posts = await getPosts()

    posts.forEach(post => {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h1 class="post-title">${post.title}</h1>
                <p class="post-body">${post.body}</p>
            </div>`
        postContainer.appendChild(postDiv)
    })
}

async function showLoading() {
    if (isLoading) return;
    isLoading = true;

    loading.classList.add('show');

    setTimeout(() => {
        loading.classList.remove('show');
        setTimeout(() => {
            page++;
            showPosts().then(() => {
                isLoading = false;
            });
        }, 300);
    }, 1000);
}


window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5) {
            showLoading();
        }
    }, 200)

document.addEventListener('DOMContentLoaded', showPosts)