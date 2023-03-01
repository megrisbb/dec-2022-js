// Add wrapper
const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper')

// Add main block
let mainBody = document.createElement('div')
mainBody.classList.add('main-body')

// Add title
let mainBodyTitle = document.createElement('h1')
mainBodyTitle.classList.add('main-body__title', 'lineUp', 'neonText')
mainBodyTitle.innerHTML = 'Okten Web Mini-Project'

// Add subtitle
let mainBodySubTitle = document.createElement('h2')
mainBodySubTitle.classList.add('main-body__subtitle' , 'lineUp', 'neonText')
mainBodySubTitle.innerHTML = 'Bohdan Baryliak'


// Add button
let mainBodyButton = document.createElement('button')
mainBodyButton.classList.add('main-button__animation', 'main-button')
mainBodyButton.innerHTML = 'Go to User Page'

//Add href
let nexUserPage = document.createElement('a')
nexUserPage.href = 'user-page.html'
nexUserPage.appendChild(mainBodyButton)

let mainBodyBtn = document.createElement('div')
mainBodyBtn.appendChild(nexUserPage)
mainBodyBtn.classList.add('button-body')
mainBodyBtn.append(nexUserPage)

mainBodyButton.onclick = () => {
    loader.style.display = 'block'
}

// Add loader
let loader = document.createElement('div')
loader.classList.add('loader')

mainBody.append(mainBodyTitle, mainBodySubTitle, mainBodyBtn, loader)
wrapperDiv.append(mainBody)

document.body.appendChild(wrapperDiv)
