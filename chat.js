function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        var input = document.getElementById('chat-input');
        var message = input.value;
        if (message.trim() !== '') {
            // Отправка сообщения в Telegram через API
            fetch(`https://api.telegram.org/bot<Ваш_Бот_Токен>/sendMessage?chat_id=<Ваш_Чат_ID>&text=${encodeURIComponent(message)}`)
                .then(response => {
                    if (response.ok) {
                        // Очистка поля ввода и добавление сообщения в чат
                        input.value = '';
                        var chatMessages = document.getElementById('chat-messages');
                        chatMessages.innerHTML += `<div class="chat-message">${message}</div>`;
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    } else {
                        alert('Не удалось отправить сообщение. Пожалуйста, попробуйте снова.');
                    }
                });
        }
    }
}
