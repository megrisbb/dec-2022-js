fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        let wrap = document.createElement('div')
        wrap.classList.add('wrapper')
        let userPageBody = document.createElement('div')
        userPageBody.classList.add('user-page__body')

        for (const user of users) {


            let allUsers = document.createElement('div')
            allUsers.classList.add('users-body')

            let userNewPage = document.createElement('a')
            userNewPage.innerText = 'Go to user page'
            userNewPage.classList.add('user-details__link')
            userNewPage.href = `user-details.html?id=${user.id}`;

            let usersInfo = document.createElement('p')
            usersInfo.classList.add('users-info')
            usersInfo.innerText = `${user.id} ${user.name}`

            userPageBody.appendChild(allUsers)
            allUsers.append(usersInfo, userNewPage)
            wrap.append(userPageBody)
            document.body.appendChild(wrap)
        }
    });