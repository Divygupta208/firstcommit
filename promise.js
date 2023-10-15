const user = {
    lastUserActivity: new Date(),
    posts: [],
}

function createPost(postTitle) {
    return new Promise(async (resolve, reject) => {
        const post = {
            title: postTitle,
            ActivityTime: new Date(),
        };

        user.posts.push(post);

        try {
            const time = await updateLastActivity();
            resolve({ post, time });
        } catch (error) {
            reject(error);
        }
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        if (user.posts.length > 0) {
            const popped = user.posts.pop();
            resolve(popped);
        } else {
            reject("ERROR");
        }
    });
}

function updateLastActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastUserActivity = new Date();
            resolve(user.lastUserActivity);
        }, 1000);
    });
}

async function main() {
    try {
        const [result1, result2, lastActive] = await Promise.all([
            createPost("POST1"),
            createPost("POST2"),
            updateLastActivity(),
        ]);

        console.log(user.posts);
        console.log(user.lastUserActivity);

        const del = await deletePost();
        console.log(del);
        console.log(user.posts);
    } catch (error) {
        console.log(error);
    }
}

main();
