const chatContainer = document.querySelector('.chat-main');

const input = document.querySelector('.input-text');
const sendBtn = document.querySelector('.send')

function renderMessages() {
    try {
        const messages = JSON.parse(sessionStorage.getItem('messages')) || [];
        chatContainer.innerHTML = '';
        messages.forEach((message) => {
            const messageElement = document.createElement('div')
            messageElement.classList.add('message', message.sender === 'user' ? 'user' : 'auto')
            messageElement.innerHTML = 
                `<img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.1283928139.1720152730&semt=ais_hybrid" alt="user">
                <div class='message-text'>
                    <p>${message.text}</p>
                </div>`
            chatContainer.prepend(messageElement)
    })
    } catch (error) {
        console.error(error)
    }
    
}

function autoReply(){
    try {
        const messages = JSON.parse(sessionStorage.getItem('messages')) || [];
        const randomMessage = ['Hello', 'How are you?', 'Nice to Here you', 'I am fine', 'Thank you', 'Goodbye'];

        const randomIndex = Math.floor(Math.random() * randomMessage.length);
        messages.push({ text: randomMessage[randomIndex], sender: 'other' })
        sessionStorage.setItem('messages', JSON.stringify(messages))
        renderMessages()
    } catch (error) {
        console.error(error)
    }    
}

function sendMessage(message) {
    try {
        const messages = JSON.parse(sessionStorage.getItem('messages')) || [];
        messages.push({ text: message, sender: 'user' });
        sessionStorage.setItem('messages', JSON.stringify(messages));
        renderMessages();
        return
    } catch (error) {
        console.error(error)
    }
}

sendBtn.addEventListener('click', () => {
    const message = input.value.trim()
    if (message) {
        sendMessage(message)
        setTimeout(autoReply, 2000)
        input.value = ''
    } else {
        throw new Error('Please enter a message');
    }
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        const message = input.value.trim()
    if (message) {
        sendMessage(message)
        setTimeout(autoReply, 2000)
        input.value = ''
    } else {
        throw new Error('Please enter a message');
    }
    }
})

document.addEventListener('DOMContentLoaded', renderMessages)