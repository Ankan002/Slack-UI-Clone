const threadButton= document.querySelector('.thread')
const mentionsButton= document.querySelector('.mentions')
const channelsButton= document.querySelector('.channels')
const dmButton= document.querySelector('.dm')

const getChatScreen = () => {
    currentHTML.innerHTML = `
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
}

threadButton.addEventListener('click', getChatScreen)
mentionsButton.addEventListener('click', getChatScreen)
channelsButton.addEventListener('click', getChatScreen)
dmButton.addEventListener('click', getChatScreen)