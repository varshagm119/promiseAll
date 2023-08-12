const posts = [];
let lastActivityTime = null;

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function createPost(postTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newPost = { title: postTitle };
            posts.push(newPost);
            resolve(newPost);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

createPost('POST1')
    .then(() => updateLastUserActivityTime())
    .then(() => createPost('POST2'))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost('POST3'))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log("All Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);

        return deletePost();
    })
    .then(deletedPost => {
        console.log("Deleted Post:", deletedPost.title);
        console.log("Remaining Posts:", posts);
    })
    .catch(error => console.log(error));
