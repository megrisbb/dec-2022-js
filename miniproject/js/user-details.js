let url = new URL(location.href);
let id = url.searchParams.get('id');

let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        let mainUser = document.createElement('div')
        mainUser.classList.add('user-info')
        function recursion(element) {
            for (const elementKey in element) {
                if (typeof element[elementKey] !== "object") {
                    let userInfo = document.createElement('div')
                    userInfo.innerText = `${elementKey}: ${element[elementKey]}`
                    mainUser.appendChild(userInfo)
                } else {
                    recursion(element[elementKey])
                }
            }
        }

        recursion(user)

        const lightButton = document.createElement('button');
        lightButton.classList.add('light-button', 'light-btn');
        lightButton.innerText = 'light';

        let click = true;
        lightButton.addEventListener('click', () => {
            wrapper.classList.toggle('light-theme');

            console.log(lightButton.length);
            if (!click) {
                lightButton.innerText = 'light';
            } else {
                lightButton.innerText = 'dark';
            }
            click = !click;
        });

        const btn = document.createElement('button')
        btn.innerText = 'post of current user'.toUpperCase()
        btn.classList.add('user-button')
        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('post-button')
        buttonDiv.appendChild(btn)
        const postTitle = document.createElement('div')
        postTitle.classList.add('main-post__title')
        btn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(data => {
                    for (const datum of data) {
                        let btnABlock = document.createElement('div')
                        btnABlock.classList.add('see-more__link')
                        let btnA = document.createElement('a')
                        btnA.innerText = 'See more'
                        btnA.href = `post-details.html?id=${id}`
                        btnABlock.appendChild(btnA)

                        let titleDiv = document.createElement('div')
                        titleDiv.append(datum.title, btnABlock)
                        titleDiv.classList.add('post-title')
                        postTitle.append(titleDiv)
                    }
                });
            btn.disabled = true;
        }

        wrapper.append(mainUser, lightButton, buttonDiv, postTitle)
        document.body.append(wrapper)
    });