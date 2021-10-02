let currentHTML= document.querySelector('.main-right-section')
const welcomeCreateChannelButton= document.querySelector('.welcome-create-channel')
const addChannelLeftButton= document.querySelector('.add-channel-left')




//Function that will take place if Create Channel Button is clicked on the home page
welcomeCreateChannelButton.addEventListener('click', () => {


    let doc= document.createElement('div')
    doc.classList.add('add-channel')
    doc.innerHTML=`
    
    <img src="./assets/images/5cb480cd5f1b6d3fbadece79.png" alt="" class="image" />
    <h2 class="text-heading">Add New Channel</h2>
    `

    currentHTML.innerHTML= doc

    let addChannelCreateChannelButton= document.createElement('Button')
    let addPrivacySelect= document.createElement('select')
    let channelNameInput= document.createElement('input')
    let errorMessage1= document.createElement('p')
    let errorMessage2= document.createElement('p')

    addChannelCreateChannelButton.classList.add('add-channel-create-channel')
    addChannelCreateChannelButton.innerText= 'Create Channel'

    addPrivacySelect.classList.add('select-privacy')
    addPrivacySelect.innerHTML= `
        <option value="privacy">Select Privacy</option>
        <option value="public">Public</option>     
        <option value="private">Private</option> 
    `

    channelNameInput.classList.add('channel-name-input')
    channelNameInput.placeholder="Channel Name"

    errorMessage1.classList.add('error')
    errorMessage1.innerText= ''
    errorMessage2.classList.add('error')
    errorMessage2.innerText= ''

    addChannelCreateChannelButton.addEventListener('click', () => {
        const privacy= document.querySelector('.select-privacy').selectedOptions[0].value
        const channelName= document.querySelector('.channel-name-input').value

        if(channelName === ''){
            errorMessage2.innerText= ''
            errorMessage1.innerText= 'Invalid Input'
            return
        }

        if(privacy === 'privacy'){
            errorMessage1.innerText= ''
            errorMessage2.innerHTML= 'Privacy must be Public or Private'
            return
        }

        currentHTML.innerHTML= `
        <div class="chat-section">
        <!-- Header -->
        <div class="header">
        <!-- Header-left -->
        <div class="header-left">
            <i class="fas fa-hashtag"></i>
            <i class="far fa-star"></i>
        </div>
        <!-- Header Right -->
        <div class="header-right">
            <i class="fas fa-user-plus"></i>
            <i class="fas fa-info-circle"></i>
        </div>
        </div>
        <!-- Bottom-Message-Section -->
        <div class="bottom-message-section">
            <input type="text" class="message-box" placeholder="Message Undefined">
        </div>
        </div>
        `
    })

    doc.append(channelNameInput)
    doc.appendChild(errorMessage1)
    doc.appendChild(addPrivacySelect)
    doc.appendChild(errorMessage2)
    doc.appendChild(addChannelCreateChannelButton)
    
    document.querySelector('.main-right-section').innerHTML = ''
    document.querySelector('.main-right-section').appendChild(doc)
})



//Function for Add Channel
addChannelLeftButton.addEventListener('click', () => {
    let doc= document.createElement('div')
    doc.classList.add('add-channel')
    doc.innerHTML=`
    
    <img src="./assets/images/5cb480cd5f1b6d3fbadece79.png" alt="" class="image" />
    <h2 class="text-heading">Add New Channel</h2>
    `

    currentHTML.innerHTML= doc

    let addChannelCreateChannelButton= document.createElement('Button')
    let addPrivacySelect= document.createElement('select')
    let channelNameInput= document.createElement('input')
    let errorMessage1= document.createElement('p')
    let errorMessage2= document.createElement('p')

    addChannelCreateChannelButton.classList.add('add-channel-create-channel')
    addChannelCreateChannelButton.innerText= 'Create Channel'

    addPrivacySelect.classList.add('select-privacy')
    addPrivacySelect.innerHTML= `
        <option value="privacy">Select Privacy</option>
        <option value="public">Public</option>     
        <option value="private">Private</option> 
    `

    channelNameInput.classList.add('channel-name-input')
    channelNameInput.placeholder="Channel Name"

    errorMessage1.classList.add('error')
    errorMessage1.innerText= ''
    errorMessage2.classList.add('error')
    errorMessage2.innerText= ''

    addChannelCreateChannelButton.addEventListener('click', () => {
        const privacy= document.querySelector('.select-privacy').selectedOptions[0].value
        const channelName= document.querySelector('.channel-name-input').value

        if(channelName === ''){
            errorMessage2.innerText= ''
            errorMessage1.innerText= 'Invalid Input'
            return
        }

        if(privacy === 'privacy'){
            errorMessage1.innerText= ''
            errorMessage2.innerHTML= 'Privacy must be Public or Private'
            return
        }

        currentHTML.innerHTML= `
        <div class="chat-section">
        <!-- Header -->
        <div class="header">
        <!-- Header-left -->
        <div class="header-left">
            <i class="fas fa-hashtag"></i>
            <i class="far fa-star"></i>
        </div>
        <!-- Header Right -->
        <div class="header-right">
            <i class="fas fa-user-plus"></i>
            <i class="fas fa-info-circle"></i>
        </div>
        </div>
        <!-- Bottom-Message-Section -->
        <div class="bottom-message-section">
            <input type="text" class="message-box" placeholder="Message Undefined">
        </div>
        </div>
        `
    })

    doc.append(channelNameInput)
    doc.appendChild(errorMessage1)
    doc.appendChild(addPrivacySelect)
    doc.appendChild(errorMessage2)
    doc.appendChild(addChannelCreateChannelButton)
    
    document.querySelector('.main-right-section').innerHTML = ''
    document.querySelector('.main-right-section').appendChild(doc)
})



