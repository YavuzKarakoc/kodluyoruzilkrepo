

const posts = [
    { name: "Post 1", description: "Post 1'in açıklaması " },
    { name: "Post 2", description: "Post 2'in açıklaması" },
    { name: "Post 3", description: "Post 3'in açıklaması" },
    { name: "Post 4", description: "Post 4'in açıklaması" },
];
const listPosts = () => {
    posts.map((item, i) => console.log(`item name ${i + 1} : ${item.name}   item description ${i + 1} : ${item.description}`));
};

const addNewPost = (newPost) => {
    return new Promise((res, rej) => {
        if (newPost) {
            posts.push(newPost);
            res(newPost);
        } else {
            rej("Hata oluştu eklenecek bir gönderi yoktur");
        }
    });
};

const newPostAndList = async () => {
    try {
        let addedPost = await addNewPost({
            name: "Yeni Post",
            description: "Yeni eklenen Postun çıklaması",
        });
        addedPost && listPosts();
    } catch (error) {
        console.log("ERROR:", error);
    }
};
newPostAndList();
