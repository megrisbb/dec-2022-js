let url = new URL(location.href)
let id = url.searchParams.get("id")

let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(value => value.json())
    .then(post => {
        let allPost = document.createElement('div')
        allPost.classList.add('all-post')

        let allComments = document.createElement('div')
        allComments.classList.add('all-comments')


        for (const postKey in post) {
            let post1 = document.createElement('div')
            post1.append(`${postKey}: ${post[postKey]}`)
            allPost.appendChild(post1)
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value => value.json())
            .then(comments  => {
                for (const comment of comments) {

                    let commentBody = document.createElement('div')
                    commentBody.append(comment.body)
                    allComments.appendChild(commentBody)
                }
            });


        wrapper.append(allPost, allComments)
        document.body.appendChild(wrapper)
    });